"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms, for staggering siblings (keep steps of 60–100ms). */
  delay?: number;
};

/**
 * Fades and slides content in once when it enters the viewport.
 * Content is visible without JS, when the user prefers reduced motion,
 * and when it is already on screen at load (no flash above the fold).
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting ? "shown" : (current) => (current === "shown" ? current : "hidden"));
        if (entry.isIntersecting) observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={state === "shown" && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out-expo",
        state === "hidden" && "translate-y-5 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
