import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

/** Shared layout for legal texts: title, last update and readable long-form typography. */
export function LegalPage({ title, intro, children }: { title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <article className="py-16 md:py-24">
      <Container width="prose">
        <header className="border-b border-line pb-10">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted">Información legal</p>
          <h1 className="font-display text-4xl leading-tight tracking-tight text-balance md:text-6xl">{title}</h1>
          {intro && <p className="mt-6 text-lg leading-relaxed text-pretty text-muted">{intro}</p>}
          <p className="mt-6 text-sm text-muted">Última actualización: {site.legal.lastUpdated}</p>
        </header>
        <div
          className={[
            "mt-10 leading-relaxed text-pretty text-foreground/90",
            "[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-foreground md:[&_h2]:text-3xl",
            "[&_h3]:mt-8 [&_h3]:font-medium [&_h3]:text-foreground",
            "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-accent",
            "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-medium [&_strong]:text-foreground",
            "[&_dl]:mt-4 [&_dl]:divide-y [&_dl]:divide-line [&_dl]:border-y [&_dl]:border-line",
          ].join(" ")}
        >
          {children}
        </div>
      </Container>
    </article>
  );
}

/** Owner identification block reused by the legal texts (LSSI-CE art. 10). */
export function OwnerDetails() {
  const rows = [
    ["Titular", site.legal.owner],
    ["NIF", site.legal.taxId],
    ["Domicilio", `${site.contact.street}, ${site.contact.postalCode} ${site.contact.city}`],
    ["Email", site.contact.email],
    ["Teléfono", site.contact.phone],
    ["Datos registrales", site.legal.registry],
  ];
  return (
    <dl>
      {rows.map(([term, value]) => (
        <div key={term} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6">
          <dt className="text-sm text-muted">{term}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
