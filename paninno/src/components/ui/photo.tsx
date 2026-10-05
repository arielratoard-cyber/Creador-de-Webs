import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./image-placeholder";

type PhotoProps = {
  photo: PhotoData;
  /** Tailwind aspect class shared by the photo and its placeholder, e.g. "aspect-[4/5]". */
  aspect: string;
  sizes: string;
  /** Only for the hero (LCP) image. */
  preload?: boolean;
  className?: string;
};

/**
 * Shows the photo configured in `site.photos`, or a clearly marked placeholder
 * with the same aspect ratio while `src` is still empty.
 */
export function Photo({ photo, aspect, sizes, preload, className }: PhotoProps) {
  if (!photo.src) return <ImagePlaceholder label={photo.brief} aspect={aspect} className={className} />;

  return (
    <figure className={cn("relative overflow-hidden bg-surface", aspect, className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
      {photo.credit && (
        <figcaption className="absolute bottom-0 right-0 bg-deep/80 px-2 py-1 text-[10px] text-muted">
          {photo.credit}
        </figcaption>
      )}
    </figure>
  );
}
