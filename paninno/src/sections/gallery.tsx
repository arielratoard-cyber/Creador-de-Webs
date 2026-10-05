import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { photos } from "@/lib/site";

export function Gallery() {
  return (
    <Section id="local" aria-label="El local" className="pt-0 md:pt-0">
      <Reveal className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-12">
        <Photo
          photo={photos.counter}
          aspect="aspect-[4/3] lg:aspect-auto"
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="sm:col-span-2 lg:col-span-7 lg:row-span-2"
        />
        <Photo
          photo={photos.deli}
          aspect="aspect-[4/3]"
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
          className="lg:col-span-5"
        />
        <Photo
          photo={photos.interior}
          aspect="aspect-[4/3]"
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
          className="lg:col-span-5"
        />
      </Reveal>
      <p className="mt-6 text-sm text-muted">Sin pretensiones: una barra, un horno y la radio en italiano.</p>
    </Section>
  );
}
