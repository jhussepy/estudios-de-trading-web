import * as React from "react";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value = 0, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative h-2.5 w-full overflow-hidden rounded-full bg-slate-800", className)}
    {...props}
  >
    <div
      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 shadow-glow transition-all"
      style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
    />
  </div>
));
Progress.displayName = "Progress";

export { Progress };
