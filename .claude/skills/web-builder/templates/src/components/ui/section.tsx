import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./container";

const tones = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  inverted: "bg-foreground text-background",
} as const;

type SectionProps = Omit<ComponentProps<"section">, "title"> & {
  tone?: keyof typeof tones;
  width?: ComponentProps<typeof Container>["width"];
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
};

/**
 * Page section with consistent vertical rhythm. When `title` is given, renders
 * an h2 linked to the section via aria-labelledby (requires `id`).
 */
export function Section({
  tone = "default",
  width,
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  children,
  id,
  ...props
}: SectionProps) {
  const headingId = title && id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-20 md:py-32", tones[tone], className)}
      {...props}
    >
      <Container width={width}>
        {title && (
          <header
            className={cn(
              "mb-12 max-w-2xl md:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] opacity-70">
                {eyebrow}
              </p>
            )}
            <h2
              id={headingId}
              className="font-display text-3xl leading-tight tracking-tight text-balance md:text-5xl"
            >
              {title}
            </h2>
            {intro && <p className="mt-5 text-lg leading-relaxed text-pretty opacity-80">{intro}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
