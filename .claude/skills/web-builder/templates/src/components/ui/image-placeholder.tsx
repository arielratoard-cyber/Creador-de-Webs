import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  /** What photo belongs here, e.g. "Fachada del local, horizontal". */
  label: string;
  /** Tailwind aspect class matching the final image, e.g. "aspect-[4/5]". */
  aspect?: string;
  className?: string;
};

/**
 * Clearly marked stand-in for a specific image the owner must provide.
 * Keeps the final aspect ratio so swapping in the real photo doesn't shift the layout.
 */
export function ImagePlaceholder({ label, aspect = "aspect-[4/3]", className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Imagen pendiente: ${label}`}
      className={cn(
        "flex flex-col items-center justify-center gap-3 border border-dashed border-line bg-surface p-6 text-center text-muted",
        aspect,
        className,
      )}
    >
      <ImageIcon aria-hidden className="size-6" strokeWidth={1.5} />
      <span className="text-xs font-medium uppercase tracking-[0.15em]">Imagen pendiente</span>
      <span className="max-w-[28ch] text-sm">{label}</span>
    </div>
  );
}
