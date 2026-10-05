import type { Metadata } from "next";
import { Mail, MessageCircle, Navigation, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { Container } from "@/components/ui/container";
import { fullAddress, mapsEmbed, mapsSearch, site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contáctanos",
  description: `Contacta con ${site.name}: WhatsApp para encargos, teléfono, email y dirección en ${site.contact.city}. Pedidos para grupos y empresas.`,
  alternates: { canonical: "/contacto" },
};

const channels = [
  { icon: MessageCircle, label: "WhatsApp", detail: "Encargos para llevar, la vía más rápida", href: whatsappHref(), external: true },
  { icon: Phone, label: "Teléfono", detail: site.contact.phone, href: telHref(site.contact.phone), external: false },
  { icon: Mail, label: "Email", detail: site.contact.email, href: `mailto:${site.contact.email}`, external: false },
  { icon: Navigation, label: "Dirección", detail: fullAddress, href: mapsSearch, external: true },
];

export default function ContactoPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted">Contacto</p>
          <h1 className="max-w-3xl font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-balance">
            Contáct<em className="font-normal text-accent">anos</em>.
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-pretty text-muted">
            ¿Un encargo, una duda sobre alérgenos o una bandeja para la oficina? Para pedir hoy, WhatsApp es lo más
            rápido. Para todo lo demás, el formulario.
          </p>

          <ul className="mt-14 grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ icon: Icon, label, detail, href, external }) => (
              <li key={label} className="border-b border-line lg:border-b-0 lg:border-r lg:last:border-r-0">
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex h-full flex-col gap-3 py-6 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent sm:pr-6 lg:px-6 lg:first:pl-0"
                >
                  <Icon aria-hidden className="size-5 text-accent" strokeWidth={1.5} />
                  <span className="font-display text-xl tracking-tight">{label}</span>
                  <span className="text-sm text-muted break-words">{detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="form-title" className="bg-surface py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="form-title" className="font-display text-3xl tracking-tight md:text-4xl">Escríbenos</h2>
            <p className="mt-3 text-muted">Respondemos en menos de 24 h, de martes a domingo.</p>
            <div className="mt-10">
              <ContactForm email={site.contact.email} />
            </div>
          </div>
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-muted">Horario</h2>
              <dl className="mt-3 divide-y divide-line border-y border-line">
                {site.hours.map((slot) => (
                  <div key={slot.days} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6">
                    <dt className="font-medium">{slot.days}</dt>
                    <dd className="tabular-nums text-muted">{slot.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <MapEmbed title={`Mapa: ${site.name}, ${fullAddress}`} src={mapsEmbed} size="aspect-[4/3]" />
          </div>
        </Container>
      </section>
    </>
  );
}
