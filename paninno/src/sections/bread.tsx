import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { breadPoints, photos } from "@/lib/site";

export function Bread() {
  return (
    <Section id="pan" tone="inverted">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-crust">Nuestro pan</p>
          <h2 id="pan-title" className="font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
            Todo empieza en el horno, <em className="text-crust">a las siete</em>.
          </h2>
          <Photo
            photo={photos.focaccia}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="mt-12"
          />
        </div>

        <ol className="divide-y divide-foreground/15 border-y border-foreground/15 lg:col-span-6 lg:col-start-7 lg:self-end">
          {breadPoints.map((point, index) => (
            <li key={point.title}>
              <Reveal delay={index * 80} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr] md:py-10">
                <span className="font-display text-lg tabular-nums text-crust">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">{point.title}</h3>
                  <p className="mt-3 max-w-[48ch] leading-relaxed text-pretty text-muted">{point.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
