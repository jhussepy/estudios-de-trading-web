"use client";

import { motion } from "framer-motion";
import { ArrowRight, DatabaseZap, FileText, Gauge, Network, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { architecturePipeline, type PipelineStage } from "@/data/botModules";

const stageAccent: Record<PipelineStage["accent"], string> = {
  cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  violet: "border-violet-300/25 bg-violet-400/10 text-violet-100",
  emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  amber: "border-amber-300/25 bg-amber-300/10 text-amber-100",
};

const stageLine: Record<PipelineStage["accent"], string> = {
  cyan: "from-cyan-300/70",
  violet: "from-violet-300/70",
  emerald: "from-emerald-300/70",
  amber: "from-amber-300/70",
};

const summaryCards = [
  {
    title: "Lectura",
    text: "El sistema ordena informacion de mercado antes de formular un reporte.",
    icon: Network,
  },
  {
    title: "Filtro",
    text: "La capa de riesgo evita convertir observaciones incompletas en accion.",
    icon: ShieldAlert,
  },
  {
    title: "Reporte",
    text: "La salida es educativa, simulada y trazable para journal y backtesting.",
    icon: FileText,
  },
];

export default function BotArchitecture() {
  return (
    <section id="arquitectura" className="container-shell py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-cyan-200">Arquitectura del bot informativo</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Pipeline de lectura y reporte
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            El asistente funciona como un pipeline de lectura y reporte. No posee capa de ejecucion.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="premium-border relative overflow-hidden">
            <CardHeader>
              <CardTitle>Institutional Analysis Core</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex min-h-72 flex-col justify-center">
                <div className="relative mb-7 w-fit">
                  <div className="absolute inset-0 animate-pulse-glow rounded-full bg-cyan-300/20 blur-xl" />
                  <span className="relative flex size-24 items-center justify-center rounded-full border border-cyan-300/35 bg-slate-950/80 shadow-glow">
                    <Gauge className="size-11 text-cyan-200" />
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">No execution layer</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Los modulos procesan contexto, estructura, volumen, macro, estadistica y riesgo
                  para producir un reporte informativo. No existe bloque de compra, venta, cierre ni
                  conexion a dinero real.
                </p>
                <div className="mt-6 grid gap-3">
                  {summaryCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.title} className="rounded-md border border-white/10 bg-white/[0.035] p-3">
                        <div className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                          <Icon className="size-4 text-cyan-200" />
                          {card.title}
                        </div>
                        <p className="text-sm leading-6 text-slate-400">{card.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {architecturePipeline.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.04 }}
                className="relative"
              >
                <div
                  className={`absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b ${stageLine[stage.accent]} to-transparent md:block`}
                />
                <div className="hover-lift relative rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4">
                      <span
                        className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-md border ${stageAccent[stage.accent]}`}
                      >
                        <DatabaseZap className="size-5" />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-black text-white">{stage.title}</h3>
                          <Badge variant="muted">Step {index + 1}</Badge>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{stage.description}</p>
                      </div>
                    </div>
                    {index < architecturePipeline.length - 1 ? (
                      <ArrowRight className="hidden size-5 shrink-0 text-slate-500 md:block" />
                    ) : null}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 pl-0 md:pl-16">
                    {stage.modules.map((module) => (
                      <Badge key={module} className={stageAccent[stage.accent]}>
                        {module}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
