"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BrainCircuit,
  CandlestickChart,
  CheckCircle2,
  FileText,
  LockKeyhole,
  Radar,
  ScrollText,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  assistantCockpitPanels,
  assistantFinalReport,
  assistantLogs,
  assistantStatus,
} from "@/data/practiceData";

const assets = ["EUR/USD", "XAU/USD"];

const panelAccent = {
  cyan: "border-cyan-300/25 hover:border-cyan-300/45",
  violet: "border-violet-300/25 hover:border-violet-300/45",
  emerald: "border-emerald-300/25 hover:border-emerald-300/45",
  amber: "border-amber-300/25 hover:border-amber-300/45",
} as const;

const iconAccent = {
  cyan: "bg-cyan-300/10 text-cyan-200",
  violet: "bg-violet-400/10 text-violet-200",
  emerald: "bg-emerald-300/10 text-emerald-200",
  amber: "bg-amber-300/10 text-amber-200",
} as const;

export default function AnalysisAssistant() {
  const [activeAsset, setActiveAsset] = useState(assets[0]);

  return (
    <section id="asistente" className="container-shell py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-cyan-200">Asistente de Analisis</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Cabina profesional de analisis de mercado
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            Evalua estructura, liquidez, volumen, noticias y riesgo en formato de reporte. No toma
            control de ninguna cuenta.
          </p>
        </div>

        <Card className="premium-border border-emerald-300/25 bg-slate-950/70">
          <CardContent className="p-4 md:p-5">
            <div className="mb-5 rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-4">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex gap-3">
                  <LockKeyhole className="mt-0.5 size-5 shrink-0 text-emerald-200" />
                  <div>
                    <div className="font-semibold text-emerald-50">
                      Este asistente no ejecuta operaciones. Solo genera análisis educativo e
                      informativo.
                    </div>
                    <p className="mt-1 text-sm text-emerald-100/75">
                      No abre compras, no abre ventas, no cierra operaciones y no se conecta a dinero
                      real.
                    </p>
                  </div>
                </div>
                <Badge variant="emerald">Trading disabled</Badge>
              </div>
            </div>

            <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {assistantStatus.map((status) => (
                <div
                  key={status.label}
                  className="rounded-md border border-white/10 bg-white/[0.045] px-4 py-3"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {status.label}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-bold text-white">
                    <CheckCircle2 className="size-4 text-emerald-300" />
                    {status.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.7fr_1.3fr]">
              <div className="space-y-5">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                    <CandlestickChart className="size-4 text-cyan-200" />
                    Selector visual de activo
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {assets.map((asset) => (
                      <Button
                        key={asset}
                        variant={activeAsset === asset ? "default" : "outline"}
                        onClick={() => setActiveAsset(asset)}
                        className="h-14 justify-start"
                      >
                        <Radar className="size-4" />
                        {asset}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="font-semibold text-white">Confianza de lectura</span>
                    <span className="font-bold text-emerald-200">68%</span>
                  </div>
                  <Progress value={68} />
                  <div className="mt-4 flex gap-3 rounded-md border border-amber-300/25 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">
                    <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                    Setup potencial. Falta confirmacion en M5; evitar operar hasta tener contexto
                    mas claro.
                  </div>
                </div>

                <div className="terminal-text overflow-hidden rounded-lg border border-cyan-300/20 bg-black/45">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <TerminalSquare className="size-4 text-cyan-200" />
                      Terminal Logs
                    </div>
                    <Badge variant="muted">Simulated</Badge>
                  </div>
                  <div className="grid gap-1 p-4 text-xs leading-6">
                    {assistantLogs.map((log, index) => (
                      <motion.div
                        key={log}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className="rounded px-2 py-1 text-slate-300"
                      >
                        {log}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {assistantCockpitPanels.map((panel) => (
                    <div
                      key={panel.title}
                      className={`hover-lift rounded-lg border bg-white/[0.045] p-5 ${panelAccent[panel.accent as keyof typeof panelAccent]}`}
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <span
                          className={`flex size-10 items-center justify-center rounded-md ${iconAccent[panel.accent as keyof typeof iconAccent]}`}
                        >
                          <BrainCircuit className="size-5" />
                        </span>
                        <Badge variant="muted">Panel</Badge>
                      </div>
                      <h3 className="text-lg font-black text-white">{panel.title}</h3>
                      <div className="mt-4 grid gap-3">
                        {panel.items.map(([label, value]) => (
                          <div
                            key={`${panel.title}-${label}`}
                            className="flex items-start justify-between gap-3 border-t border-white/10 pt-3 text-sm"
                          >
                            <span className="text-slate-400">{label}</span>
                            <span className="max-w-[58%] text-right font-semibold text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-cyan-50">
                      <ShieldCheck className="size-4 text-cyan-200" />
                      Risk Gate
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {["Riesgo medio", "Noticias en 2h", "Volumen cerca de HVN"].map((item) => (
                        <div key={item} className="rounded-md border border-white/10 bg-black/20 p-3 text-sm text-cyan-50/85">
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-cyan-50/80">
                      El sistema prioriza observar zona, esperar confirmacion y evitar operar cuando
                      el contexto de riesgo no es limpio.
                    </p>
                  </div>

                  <div className="rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-50">
                        <ScrollText className="size-4 text-emerald-200" />
                        Final Report
                      </div>
                      <Badge variant="emerald">{activeAsset}</Badge>
                    </div>
                    <div className="grid gap-3">
                      {assistantFinalReport.map((line) => (
                        <div key={line} className="flex gap-3 rounded-md border border-white/10 bg-black/20 p-3 text-sm leading-6 text-emerald-50/85">
                          <FileText className="mt-0.5 size-4 shrink-0 text-emerald-200" />
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
