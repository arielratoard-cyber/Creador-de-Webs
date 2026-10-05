"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type LinkItem = { label: string; href: string };

/** Full-screen menu for < lg. Locks scroll, closes on Escape or link click. */
export function MobileMenu({ items, cta }: { items: readonly LinkItem[]; cta: LinkItem }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 inline-flex size-11 items-center justify-center rounded-ui focus-visible:outline-2 focus-visible:outline-accent"
      >
        {open ? <X aria-hidden className="size-6" strokeWidth={1.5} /> : <Menu aria-hidden className="size-6" strokeWidth={1.5} />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-background md:top-20"
      >
        <nav aria-label="Móvil" className="flex min-h-full flex-col px-5 pb-10 pt-6 sm:px-8">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className="block py-5 font-display text-2xl tracking-tight">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={cta.href} onClick={close} size="lg" className="mt-auto w-full">
            {cta.label}
          </Button>
        </nav>
      </div>
    </div>
  );
}
