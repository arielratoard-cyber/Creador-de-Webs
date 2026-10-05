#!/usr/bin/env node
/**
 * Visual + structural check for a running website.
 *
 * Usage (from the web project root, with the site running):
 *   npm i --no-save playwright
 *   node <skill-dir>/scripts/visual-check.mjs http://localhost:3100 [/other-path ...]
 *
 * Env:
 *   OUT_DIR=.visual-check   where screenshots + report.json are written
 *   WIDTHS=375,768,1024,1440,1920
 *   CHROMIUM_PATH=/path/to/chromium   use a system Chromium instead of Playwright's
 *
 * Exits with code 1 when blocking issues are found (overflow, runtime errors,
 * broken images, missing alt, h1 count != 1).
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const [baseArg, ...extraPaths] = process.argv.slice(2);
if (!baseArg) {
  console.error("Usage: node visual-check.mjs <base-url> [/path ...]");
  process.exit(2);
}

const base = new URL(baseArg);
const targets = [base.pathname || "/", ...extraPaths].map((p) => new URL(p, base).toString());
const widths = (process.env.WIDTHS ?? "375,768,1024,1440,1920").split(",").map(Number);
const outDir = path.resolve(process.env.OUT_DIR ?? ".visual-check");
mkdirSync(outDir, { recursive: true });

function loadPlaywright() {
  const require = createRequire(path.join(process.cwd(), "package.json"));
  for (const name of ["playwright", "@playwright/test", "playwright-core"]) {
    try {
      return require(name);
    } catch {
      // try next
    }
  }
  console.error("Playwright not found in this project. Run: npm i --no-save playwright");
  process.exit(2);
}

function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const candidates = ["/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome"];
  const pwDir = process.env.PLAYWRIGHT_BROWSERS_PATH ?? "/opt/pw-browsers";
  if (existsSync(path.join(pwDir, "chromium"))) candidates.unshift(path.join(pwDir, "chromium"));
  if (existsSync(pwDir)) {
    for (const dir of readdirSync(pwDir).filter((d) => d.startsWith("chromium-")).sort().reverse()) {
      candidates.push(
        path.join(pwDir, dir, "chrome-linux", "chrome"),
        path.join(pwDir, dir, "chrome-linux64", "chrome"),
      );
    }
  }
  return candidates.find((c) => existsSync(c));
}

async function launch(chromium) {
  try {
    return await chromium.launch();
  } catch (error) {
    const executablePath = findChromium();
    if (!executablePath) throw error;
    return chromium.launch({ executablePath });
  }
}

/** Runs in the page: collects layout + a11y/SEO structure problems. */
function inspectPage() {
  const vw = document.documentElement.clientWidth;
  const overflow = document.documentElement.scrollWidth > vw + 1;
  const offenders = [];
  if (overflow) {
    for (const el of document.body.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || (r.right <= vw + 1 && r.left >= -1)) continue;
      // Ignore elements whose ancestors clip horizontal overflow.
      let clipped = false;
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
        const ox = getComputedStyle(p).overflowX;
        if (ox !== "visible") { clipped = true; break; }
      }
      if (clipped) continue;
      const cls = typeof el.className === "string" ? el.className.slice(0, 80) : "";
      offenders.push(`${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""} .${cls} (left ${Math.round(r.left)}, right ${Math.round(r.right)})`);
      if (offenders.length >= 8) break;
    }
  }

  const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => ({
    level: Number(h.tagName[1]),
    text: h.textContent.trim().slice(0, 60),
  }));
  const headingSkips = [];
  headings.forEach((h, i) => {
    const prev = headings[i - 1];
    if (prev && h.level > prev.level + 1) headingSkips.push(`h${prev.level} "${prev.text}" → h${h.level} "${h.text}"`);
  });

  const imgs = [...document.images];
  const missingAlt = imgs.filter((img) => !img.hasAttribute("alt")).map((img) => img.currentSrc || img.src);
  const broken = imgs.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.currentSrc || img.src);

  const unnamed = [...document.querySelectorAll("a[href], button")]
    .filter((el) => {
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden" || el.closest("[hidden]")) return false;
      const name = (el.getAttribute("aria-label") || el.textContent || el.getAttribute("title") || "").trim();
      const imgAlt = [...el.querySelectorAll("img[alt]")].some((i) => i.alt.trim());
      return !name && !imgAlt;
    })
    .map((el) => el.outerHTML.slice(0, 100));

  return {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content ?? null,
    lang: document.documentElement.lang || null,
    h1Count: headings.filter((h) => h.level === 1).length,
    headingSkips,
    overflow,
    overflowOffenders: offenders,
    missingAlt,
    brokenImages: broken,
    unnamedInteractive: unnamed,
  };
}

const { chromium } = loadPlaywright();
const browser = await launch(chromium);
const report = [];
let blocking = 0;

for (const url of targets) {
  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: width < 768 ? 812 : 900 },
      deviceScaleFactor: 1,
      // Screenshots review layout; reduced motion shows scroll-revealed content.
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const runtimeErrors = [];
    const failedRequests = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") runtimeErrors.push(`${msg.text()} (${msg.location().url || "?"})`);
    });
    page.on("pageerror", (err) => runtimeErrors.push(err.message));
    page.on("response", (res) => res.status() >= 400 && failedRequests.push(`${res.status()} ${res.url()}`));
    page.on("requestfailed", (req) => failedRequests.push(`failed ${req.url()}`));

    await page.goto(url, { waitUntil: "networkidle" });
    // Scroll through the page so lazy images and observers fire.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.8) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(300);

    const slug = new URL(url).pathname.replace(/\/$/, "").replace(/\//g, "_") || "home";
    const file = path.join(outDir, `${slug}-${width}.png`);
    await page.screenshot({ path: file, fullPage: true });
    const result = await page.evaluate(inspectPage);
    await context.close();

    const entry = { url, width, screenshot: file, runtimeErrors, failedRequests, ...result };
    report.push(entry);

    const problems = [];
    if (result.overflow) problems.push(`horizontal overflow: ${result.overflowOffenders.join("; ") || "(source not found)"}`);
    if (runtimeErrors.length) problems.push(`runtime errors: ${runtimeErrors.join(" | ")}`);
    if (failedRequests.length) problems.push(`failed requests: ${failedRequests.join(" | ")}`);
    if (result.brokenImages.length) problems.push(`broken images: ${result.brokenImages.join(", ")}`);
    if (result.missingAlt.length) problems.push(`images without alt: ${result.missingAlt.join(", ")}`);
    if (result.h1Count !== 1) problems.push(`h1 count = ${result.h1Count} (expected 1)`);
    if (result.unnamedInteractive.length) problems.push(`links/buttons without accessible name: ${result.unnamedInteractive.join(" | ")}`);
    const warnings = [];
    if (result.headingSkips.length) warnings.push(`heading level skips: ${result.headingSkips.join("; ")}`);
    if (!result.description) warnings.push("missing meta description");
    if (!result.lang) warnings.push("missing <html lang>");

    blocking += problems.length;
    const status = problems.length ? "✗" : "✓";
    console.log(`${status} ${url} @ ${width}px → ${path.relative(process.cwd(), file)}`);
    for (const p of problems) console.log(`    ✗ ${p}`);
    for (const w of warnings) console.log(`    ! ${w}`);
  }
}

await browser.close();
writeFileSync(path.join(outDir, "report.json"), JSON.stringify(report, null, 2));
console.log(`\nReport: ${path.relative(process.cwd(), path.join(outDir, "report.json"))}`);
console.log(blocking ? `${blocking} blocking issue(s) found.` : "No blocking issues. Now LOOK at the screenshots.");
process.exit(blocking ? 1 : 0);
