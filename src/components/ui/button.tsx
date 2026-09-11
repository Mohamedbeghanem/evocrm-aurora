import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-aurora focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)] disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-97",
  {
    variants: {
      variant: {
        primary: "bg-voltage text-on-voltage hover:bg-voltage-deep",
        inverse: "bg-canvas text-ink hover:bg-canvas-soft",
        dark: "bg-ink-button text-inverse hover:bg-ink",
        outline: "bg-transparent text-ink shadow-[0_0_0_1px_var(--color-hairline-strong)] hover:bg-canvas-soft",
        ghost: "bg-transparent text-ink hover:bg-canvas-soft",
        inverseGhost: "bg-transparent text-inverse hover:bg-inverse-faint",
        inverseOutline: "bg-transparent text-inverse shadow-[0_0_0_1px_rgba(255,255,255,0.22)] hover:bg-inverse-faint",
      },
      size: {
        sm: "h-9 rounded-full px-3.5 text-sm",
        md: "h-11 rounded-full px-5 text-sm",
        lg: "h-12 rounded-full px-6 text-button",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
