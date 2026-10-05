import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { fullAddress, site } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="overflow-hidden">
      <Container className="grid gap-12 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Paninoteca &amp; focacceria · {site.contact.city}
          </p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(3rem,8.5vw,6.75rem)] font-medium leading-[0.95] tracking-[-0.03em] text-balance"
          >
            Pan de verdad, <em className="font-normal text-accent">relleno</em> sin miedo.
          </h1>
          <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-pretty text-muted md:text-xl">
            En {site.name} solo hacemos dos cosas: panini y focaccia italiana. Masa madre horneada cada
            mañana y producto traído de Italia, montado al momento delante de ti.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={site.primaryCta.href} size="lg">
              {site.primaryCta.label}
              <ArrowRight aria-hidden className="size-4" strokeWidth={2} />
            </Button>
            <Button href={site.secondaryCta.href} size="lg" variant="secondary">
              {site.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">Encarga por WhatsApp y recógelo listo en 10 minutos.</p>
        </div>

        <div className="relative lg:col-span-5">
          {/* Solid crust-coloured block offset behind the photo: gives the hero depth without effects. */}
          <div aria-hidden className="absolute -right-5 top-8 -bottom-8 left-10 bg-accent sm:-right-8 lg:-right-16" />
          <ImagePlaceholder
            label="Panino estrella abierto, mortadela y pistacho, luz natural, vertical 4:5"
            aspect="aspect-[4/5]"
            className="relative bg-background"
          />
        </div>
      </Container>

      <div className="border-y border-line">
        <Container>
          <ul className="grid divide-y divide-line text-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <li className="flex items-center gap-3 py-4 sm:pr-6">
              <Clock aria-hidden className="size-4 shrink-0 text-accent" strokeWidth={2} />
              <span>
                <span className="font-medium">Martes a domingo</span>
                <span className="text-muted"> · mediodía y noche</span>
              </span>
            </li>
            <li className="flex items-center gap-3 py-4 sm:pl-6">
              <MapPin aria-hidden className="size-4 shrink-0 text-accent" strokeWidth={2} />
              <a href="#visitanos" className="underline-offset-4 hover:underline">
                {fullAddress}
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
}
