import type { ComponentProps } from "react";
import { cn } from "../lib/cn";

type Variant = "default" | "secondary" | "outline" | "success" | "info" | "warn";

const variants: Record<Variant, string> = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  outline: "border-border text-foreground",
  success: "border-transparent bg-brand-green/15 text-brand-green",
  info: "border-transparent bg-brand-cyan/15 text-brand-cyan",
  warn: "border-transparent bg-brand-orange/15 text-brand-orange",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: ComponentProps<"span"> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border px-2 py-0.5 font-mono text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
