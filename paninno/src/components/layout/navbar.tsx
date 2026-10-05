import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";

/** Sticky header: logo, desktop links, primary CTA; mobile menu below `lg`. */
export function Navbar() {
  return (
    // No backdrop-filter here: it would turn the header into the containing block of the
    // fixed mobile menu panel and clip it.
    <header className="sticky top-0 z-40 border-b border-line bg-background">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          aria-label={`${site.name}, inicio`}
          className="min-w-0 truncate font-display text-2xl font-semibold italic tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {site.name}
          <span aria-hidden className="text-accent">.</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Primary CTA stays visible on mobile too: it is the page's main goal. */}
          <Button href={site.primaryCta.href}>
            <span className="sm:hidden">Pedir</span>
            <span className="max-sm:hidden">{site.primaryCta.label}</span>
          </Button>
          <MobileMenu items={site.nav} cta={site.primaryCta} />
        </div>
      </Container>
    </header>
  );
}
