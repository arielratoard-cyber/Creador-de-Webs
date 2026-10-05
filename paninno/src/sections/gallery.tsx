import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

// TODO: replace placeholders with real photos in public/images/ (next/image)
export function Gallery() {
  return (
    <Section id="local" aria-label="El local" className="pt-0 md:pt-0">
      <Reveal className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-12">
        <ImagePlaceholder
          label="Mostrador con focacce y embutidos colgados, horizontal"
          aspect="aspect-[4/3] lg:aspect-auto"
          className="sm:col-span-2 lg:col-span-7 lg:row-span-2"
        />
        <ImagePlaceholder label="Manos cortando mortadela, horizontal 4:3" aspect="aspect-[4/3]" className="lg:col-span-5" />
        <ImagePlaceholder label="Clientes en la barra o terraza, horizontal 4:3" aspect="aspect-[4/3]" className="lg:col-span-5" />
      </Reveal>
      <p className="mt-6 text-sm text-muted">
        Sin pretensiones: una barra, un horno y la radio en italiano.
      </p>
    </Section>
  );
}
