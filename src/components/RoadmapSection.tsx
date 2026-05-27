"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Layers3 } from "lucide-react";
import RoadmapCard from "@/components/RoadmapCard";
import { Badge } from "@/components/ui/badge";
import { roadmapData, roadmapPhases, type RoadmapAccent } from "@/data/roadmapData";

const phaseAccent: Record<RoadmapAccent, string> = {
  cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  violet: "border-violet-300/25 bg-violet-400/10 text-violet-100",
  emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  amber: "border-amber-300/25 bg-amber-300/10 text-amber-100",
  rose: "border-rose-300/25 bg-rose-300/10 text-rose-100",
};

const dividerAccent: Record<RoadmapAccent, string> = {
  cyan: "from-cyan-300/70",
  violet: "from-violet-300/70",
  emerald: "from-emerald-300/70",
  amber: "from-amber-300/70",
  rose: "from-rose-300/70",
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="container-shell py-14 md:py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="section-kicker text-violet-200">Roadmap de aprendizaje</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            12 semanas de trading institucional
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 muted-readable">
          Cada fase agrupa teoria, practica y entregables para convertir lectura de mercado en un
          sistema auditable.
        </p>
      </div>

      <div className="space-y-8">
        {roadmapPhases.map((phase, phaseIndex) => {
          const weeks = roadmapData.filter((week) => phase.weeks.includes(week.week));
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: phaseIndex * 0.04 }}
              className="relative"
            >
              <div
                className={`mb-4 h-px bg-gradient-to-r ${dividerAccent[phase.accent]} via-white/10 to-transparent`}
              />
              <div className="mb-5 grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 md:grid-cols-[1fr_auto] md:items-center">
                <div className="flex gap-4">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-md border ${phaseAccent[phase.accent]}`}
                  >
                    <Layers3 className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">{phase.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                      {phase.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <Badge variant="muted">{phase.weeks.length} semanas</Badge>
                  <Badge variant={phase.difficulty === "Profesional" ? "warning" : "secondary"}>
                    {phase.difficulty}
                  </Badge>
                  <Badge className={phaseAccent[phase.accent]}>
                    <ArrowDownRight className="mr-1 size-3" />
                    Fase {phaseIndex + 1}
                  </Badge>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {weeks.map((week) => (
                  <RoadmapCard key={week.week} week={week} accent={phase.accent} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
