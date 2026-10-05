import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-ui font-medium transition-[background-color,color,border-color,translate] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  secondary: "border border-foreground/20 text-foreground hover:border-foreground/60",
  ghost: "text-foreground underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-base",
};

type StyleProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

type ButtonAsLink = StyleProps & Omit<ComponentProps<typeof Link>, keyof StyleProps>;
type ButtonAsButton = StyleProps &
  Omit<ComponentProps<"button">, keyof StyleProps> & { href?: undefined };

/**
 * Renders a Next.js <Link> when `href` is given, otherwise a <button>.
 * `className` is appended, not merged: to hide it responsively use variants that
 * don't clash with the base `inline-flex` (e.g. `max-sm:hidden`), not `hidden sm:inline-flex`.
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    return <Link className={classes} {...(rest as Omit<ButtonAsLink, keyof StyleProps>)} />;
  }

  const { type = "button", ...buttonProps } = rest as Omit<ButtonAsButton, keyof StyleProps>;
  return <button type={type} className={classes} {...buttonProps} />;
}
