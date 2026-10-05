"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Google Maps sets third-party cookies, so the iframe only loads after the
 * visitor asks for it (see /cookies). Until then, a static facade.
 */
export function MapEmbed({
  src,
  title,
  size = "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[28rem]",
}: {
  src: string;
  title: string;
  /** Sizing classes; the default fills the parent's height on desktop. */
  size?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const frame = `w-full border border-line bg-surface ${size}`;

  if (loaded) {
    return <iframe title={title} src={src} referrerPolicy="no-referrer-when-downgrade" className={frame} />;
  }

  return (
    <div className={`${frame} flex flex-col items-center justify-center gap-5 p-8 text-center`}>
      <MapPin aria-hidden className="size-8 text-accent" strokeWidth={1.5} />
      <p className="max-w-[36ch] text-sm leading-relaxed text-muted">
        El mapa lo sirve Google, que puede instalar cookies propias.{" "}
        <Link href="/cookies" className="underline underline-offset-4 hover:text-foreground">
          Más información
        </Link>
      </p>
      <Button variant="secondary" onClick={() => setLoaded(true)}>
        Cargar mapa
      </Button>
    </div>
  );
}
