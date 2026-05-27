"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Award, BarChart3, BookOpenCheck, CalendarDays, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { progressStats } from "@/data/practiceData";

const ProgressChart = dynamic(() => import("@/components/ProgressChart"), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});

const stats = [
  {
    label: "Progreso total",
    value: `${progressStats.totalProgress}%`,
    detail: "Consistencia acumulada",
    icon: Gauge,
    accent: "text-cyan-200",
  },
  {
    label: "Semana actual",
    value: `Semana ${progressStats.currentWeek}`,
    detail: "Fundamentos ICT",
    icon: CalendarDays,
    accent: "text-violet-200",
  },
  {
    label: "Modulos completados",
    value: `${progressStats.completedModules}/24`,
    detail: "Lectura y practica",
    icon: BookOpenCheck,
    accent: "text-emerald-200",
  },
  {
    label: "Backtests registrados",
    value: `${progressStats.registeredBacktests}`,
    detail: "Casos documentados",
    icon: BarChart3,
    accent: "text-amber-200",
  },
  {
    label: "Nivel actual",
    value: progressStats.studentLevel,
    detail: "Base profesional",
    icon: Award,
    accent: "text-cyan-200",
  },
];

export default function ProgressDashboard() {
  return (
    <section id="plan" className="container-shell py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-cyan-200">Plan de estudio</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Progreso del estudiante
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            Un panel compacto para ver avance, practica registrada y madurez del proceso antes de
            pasar a modulos mas exigentes.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <Card className="premium-border">
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle>Estado general</CardTitle>
                  <CardDescription>Seguimiento modular del roadmap institucional.</CardDescription>
                </div>
                <Badge variant="emerald">Study mode</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="font-semibold text-white">Progreso total</span>
                  <span className="font-bold text-cyan-100">{progressStats.totalProgress}%</span>
                </div>
                <Progress value={progressStats.totalProgress} />
                <p className="mt-3 text-sm leading-6 text-cyan-50/80">
                  El progreso no mide velocidad; mide consistencia.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -3 }}
                      className="hover-lift rounded-md border border-white/10 bg-white/[0.045] p-4"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <Icon className={`size-5 ${stat.accent}`} />
                        <span className="rounded-md border border-white/10 bg-slate-950/50 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-400">
                          status
                        </span>
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-base font-bold text-white">{stat.value}</div>
                      <div className="mt-2 text-xs text-slate-400">{stat.detail}</div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="premium-border">
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle>Curva esperada</CardTitle>
                  <CardDescription>Progreso y volumen de backtests por semana.</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge>Progreso</Badge>
                  <Badge variant="secondary">Backtests</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-72 min-w-0 rounded-lg border border-white/10 bg-black/20 p-2">
                <ProgressChart />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Reglas claras", "Practica constante", "Riesgo primero"].map((label) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300">
                    {label}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

function ChartSkeleton() {
  return (
    <div className="h-full rounded-lg border border-white/10 bg-gradient-to-br from-cyan-300/10 via-violet-400/10 to-emerald-300/10" />
  );
}
