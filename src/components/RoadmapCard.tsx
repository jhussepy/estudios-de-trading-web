import { BookOpen, CircleDot, FileCode2, GitBranch, RadioTower } from "lucide-react";
import type { RoadmapAccent, RoadmapWeek } from "@/data/roadmapData";

const difficultyLabel = {
  Base: "github-label-green",
  Media: "github-label-blue",
  Alta: "github-label-purple",
  Profesional: "github-label-yellow",
} as const;

const statusLabel = {
  "En curso": "github-label-green",
  Planificado: "github-label-blue",
  "Bloque clave": "github-label-yellow",
  Integración: "github-label-purple",
} as const;

const accentText: Record<RoadmapAccent, string> = {
  cyan: "text-[var(--github-accent)]",
  violet: "text-[var(--github-done)]",
  emerald: "text-[var(--github-success)]",
  amber: "text-[var(--github-attention)]",
  rose: "text-[var(--github-danger)]",
};

export default function RoadmapCard({
  week,
  accent,
}: {
  week: RoadmapWeek;
  accent: RoadmapAccent;
}) {
  return (
    <article className="github-card github-card-hover h-full overflow-hidden">
      <div className="border-b border-[var(--github-border)] p-5">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[var(--github-border)] bg-[var(--github-canvas-subtle)]">
              <GitBranch className={`size-5 ${accentText[accent]}`} />
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-bold leading-6 text-[var(--github-accent)] [overflow-wrap:anywhere]">
                {week.repoName}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-xs text-[var(--github-muted)]">
                <CircleDot className="size-3" />
                Semana {week.week}
              </div>
            </div>
          </div>
          <span className={`github-label ${statusLabel[week.status]}`}>{week.status}</span>
        </div>

        <p className="text-sm leading-6 text-[#c9d1d9]">{week.repoDescription}</p>
      </div>

      <div className="grid gap-4 p-5">
        <div className="flex flex-wrap gap-2">
          {week.concepts.map((concept, index) => (
            <span
              key={concept}
              className={`github-label ${
                index % 3 === 0
                  ? "github-label-blue"
                  : index % 3 === 1
                    ? "github-label-purple"
                    : "github-label-green"
              }`}
            >
              {concept}
            </span>
          ))}
          <span className={`github-label ${difficultyLabel[week.difficulty]}`}>
            {week.difficulty}
          </span>
        </div>

        <div className="github-code-block p-3 text-xs leading-6">
          <div className="flex items-center gap-2 text-[var(--github-muted)]">
            <BookOpen className="size-3.5" />
            objective
          </div>
          <div className="mt-1 text-[#c9d1d9]">{week.objective}</div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-md border border-[var(--github-border)] bg-[var(--github-bg-subtle)] p-3">
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--github-muted)]">
              <FileCode2 className="size-3.5 text-[var(--github-accent)]" />
              Entregable
            </div>
            <p className="terminal-text text-xs leading-5 text-[#c9d1d9] [overflow-wrap:anywhere]">
              {week.deliverable}
            </p>
          </div>
          <div className="rounded-md border border-[var(--github-border)] bg-[var(--github-bg-subtle)] p-3">
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--github-muted)]">
              <RadioTower className="size-3.5 text-[var(--github-success)]" />
              Módulo
            </div>
            <p className="terminal-text text-xs leading-5 text-[#c9d1d9] [overflow-wrap:anywhere]">
              {week.module}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
