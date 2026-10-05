import type { Metadata } from "next";
// Pick the pairing from DESIGN.md (see references/design-principles.md §2).
import { Fraunces, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display-family", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans-family", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", locale: site.locale, siteName: site.name, url: "/" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-ui focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main">{children}</main>
        {/* <Footer /> — build per project in src/components/layout/footer.tsx */}
      </body>
    </html>
  );
}
