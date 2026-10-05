import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { orderOptions, site, telHref, whatsappHref } from "@/lib/site";

const delivery = site.social.find((link) => link.label === "Glovo");

const actions = {
  whatsapp: { label: "Abrir WhatsApp", href: whatsappHref() },
  delivery: { label: "Pedir en Glovo", href: delivery?.href ?? "#" },
  email: {
    label: "Pedir presupuesto",
    href: `mailto:${site.contact.email}?subject=${encodeURIComponent("Encargo para grupo")}`,
  },
} as const;

export function Order() {
  return (
    <Section
      id="pedir"
      tone="surface"
      eyebrow="Cómo pedir"
      title="Para llevar, a casa o para toda la oficina."
    >
      <ul className="grid border-t border-foreground md:grid-cols-3 md:divide-x md:divide-line">
        {orderOptions.map((option, index) => {
          const action = actions[option.action];
          const external = action.href.startsWith("http");
          return (
            <li key={option.title} className="flex flex-col border-b border-line py-8 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="text-sm tabular-nums text-muted">0{index + 1}</span>
              <h3 className="mt-4 font-display text-2xl tracking-tight">{option.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-pretty text-muted">{option.text}</p>
              <a
                href={action.href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="mt-6 inline-flex min-h-11 items-center gap-1.5 self-start font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {action.label}
                <ArrowUpRight aria-hidden className="size-4" strokeWidth={2} />
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button href={whatsappHref()} size="lg" target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden className="size-5" strokeWidth={2} />
          Encargar por WhatsApp
        </Button>
        <p className="text-sm text-muted">
          ¿Prefieres llamar?{" "}
          <a href={telHref(site.contact.phone)} className="font-medium text-foreground underline underline-offset-4">
            {site.contact.phone}
          </a>
        </p>
      </div>
    </Section>
  );
}
