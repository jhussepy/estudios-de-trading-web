import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
        secondary: "border-violet-300/25 bg-violet-400/10 text-violet-100",
        emerald: "border-emerald-300/25 bg-emerald-400/10 text-emerald-100",
        muted: "border-slate-500/20 bg-slate-500/10 text-slate-300",
        warning: "border-amber-300/25 bg-amber-400/10 text-amber-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
