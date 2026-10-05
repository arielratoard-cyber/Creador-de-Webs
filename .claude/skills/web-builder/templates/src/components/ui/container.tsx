import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const widths = {
  prose: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

type ContainerProps = ComponentProps<"div"> & { width?: keyof typeof widths };

export function Container({ width = "default", className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8", widths[width], className)} {...props} />;
}
