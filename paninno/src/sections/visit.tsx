import { Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { fullAddress, site, telHref } from "@/lib/site";

const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.mapsQuery)}`;
const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(site.contact.mapsQuery)}&z=16&output=embed`;

export function Visit() {
  return (
    <Section id="visitanos" eyebrow="Dónde estamos" title="Pasa a por tu panino.">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-10 lg:col-span-5">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted">Dirección</h3>
            <address className="mt-3 font-display text-2xl not-italic leading-snug tracking-tight">
              {site.contact.street}
              <br />
              {site.contact.postalCode} {site.contact.city}
            </address>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted">Horario</h3>
            <dl className="mt-3 divide-y divide-line border-y border-line">
              {site.hours.map((slot) => (
                <div key={slot.days} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6">
                  <dt className="font-medium">{slot.days}</dt>
                  <dd className="tabular-nums text-muted">{slot.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button href={mapsSearch} target="_blank" rel="noopener noreferrer">
              <Navigation aria-hidden className="size-4" strokeWidth={2} />
              Cómo llegar
            </Button>
            <Button href={telHref(site.contact.phone)} variant="secondary">
              <Phone aria-hidden className="size-4" strokeWidth={2} />
              {site.contact.phone}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <iframe
            title={`Mapa: ${site.name}, ${fullAddress}`}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full border border-line bg-surface grayscale-[0.3] lg:aspect-auto lg:h-full lg:min-h-[28rem]"
          />
        </div>
      </div>
    </Section>
  );
}
