import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-300 text-slate-950 shadow-glow hover:bg-cyan-200 hover:shadow-[0_0_42px_rgba(34,211,238,0.28)]",
        secondary:
          "bg-violet-500 text-white shadow-violet hover:bg-violet-400 hover:shadow-[0_0_42px_rgba(139,92,246,0.24)]",
        outline:
          "border border-cyan-300/30 bg-slate-950/30 text-cyan-100 hover:border-cyan-200/60 hover:bg-cyan-300/10",
        ghost:
          "text-slate-300 hover:bg-white/10 hover:text-white",
        emerald:
          "bg-emerald-400 text-emerald-950 shadow-emerald hover:bg-emerald-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
