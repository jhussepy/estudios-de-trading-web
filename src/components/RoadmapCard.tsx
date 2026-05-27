import { CheckCircle2, FileCode2, Layers3, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { RoadmapAccent, RoadmapWeek } from "@/data/roadmapData";

const difficultyVariant = {
  Base: "emerald",
  Media: "default",
  Alta: "secondary",
  Profesional: "warning",
} as const;

const accentClasses: Record<RoadmapAccent, string> = {
  cyan: "border-cyan-300/25 hover:border-cyan-300/45",
  violet: "border-violet-300/25 hover:border-violet-300/45",
  emerald: "border-emerald-300/25 hover:border-emerald-300/45",
  amber: "border-amber-300/25 hover:border-amber-300/45",
  rose: "border-rose-300/25 hover:border-rose-300/45",
};

const numberClasses: Record<RoadmapAccent, string> = {
  cyan: "from-cyan-300/20 to-cyan-300/5 text-cyan-100",
  violet: "from-violet-400/20 to-violet-400/5 text-violet-100",
  emerald: "from-emerald-300/20 to-emerald-300/5 text-emerald-100",
  amber: "from-amber-300/20 to-amber-300/5 text-amber-100",
  rose: "from-rose-300/20 to-rose-300/5 text-rose-100",
};

export default function RoadmapCard({
  week,
  accent,
}: {
  week: RoadmapWeek;
  accent: RoadmapAccent;
}) {
  return (
    <Card className={`hover-lift h-full ${accentClasses[accent]}`}>
      <CardContent className="p-5">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className={`flex size-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br text-xl font-black ${numberClasses[accent]}`}
          >
            {String(week.week).padStart(2, "0")}
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            <Badge variant={difficultyVariant[week.difficulty]}>{week.difficulty}</Badge>
            <Badge variant="muted">{week.status}</Badge>
          </div>
        </div>

        <h3 className="text-lg font-black leading-7 text-white">{week.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{week.objective}</p>

        <div className="mt-5">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
            <Zap className="size-4" /> Conceptos
          </div>
          <div className="flex flex-wrap gap-2">
            {week.concepts.map((concept) => (
              <Badge key={concept} variant="secondary">
                {concept}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 border-t border-white/10 pt-4">
          <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
            <p className="text-sm leading-6 text-slate-400">{week.practice}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                <FileCode2 className="size-3.5 text-cyan-200" />
                Entregable
              </div>
              <p className="terminal-text text-xs leading-5 text-slate-300">{week.deliverable}</p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                <Layers3 className="size-3.5 text-emerald-200" />
                Modulo
              </div>
              <p className="terminal-text text-xs leading-5 text-slate-300">{week.module}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Target className="size-3.5 text-cyan-200" />
            Objetivo claro, practica medible y salida auditable.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
