import Link from "next/link";
import { Container } from "@/components/ui/container";
import { fullAddress, legalLinks, site, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-deep text-foreground border-t border-line">
      <Container className="py-16 md:py-20">
        <p className="font-display text-[clamp(3.5rem,14vw,10rem)] font-semibold italic leading-none tracking-[-0.04em]">
          {site.name}
          <span className="text-accent">.</span>
        </p>

        <div className="mt-12 grid gap-10 border-t border-foreground/15 pt-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/60">Visítanos</h2>
            <p className="mt-3 leading-relaxed">{fullAddress}</p>
          </div>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/60">Contacto</h2>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href={telHref(site.contact.phone)} className="hover:underline underline-offset-4">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline underline-offset-4">
                  Formulario de contacto
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:underline underline-offset-4">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/60">Horario</h2>
            <ul className="mt-3 space-y-1.5">
              {site.hours.map((slot) => (
                <li key={slot.days}>
                  <span className="text-foreground/60">{slot.days}:</span> {slot.time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/60">Síguenos</h2>
            <ul className="mt-3 space-y-1.5">
              {site.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 text-xs text-foreground/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Fatto a mano in {site.contact.city}.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
