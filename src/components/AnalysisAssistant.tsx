"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  Circle,
  FileText,
  LockKeyhole,
  PlayCircle,
  Radar,
  ScrollText,
  ShieldCheck,
  TerminalSquare,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  assistantCockpitPanels,
  assistantFinalReport,
  assistantLogs,
  assistantStatus,
  workflowChecks,
} from "@/data/practiceData";

const assets = ["EUR/USD", "XAU/USD"];

const panelAccent = {
  cyan: "github-label-blue",
  violet: "github-label-purple",
  emerald: "github-label-green",
  amber: "github-label-yellow",
} as const;

const checkIcon = {
  success: <CheckCircle2 className="size-4 text-[var(--github-success)]" />,
  pending: <Circle className="size-4 text-[var(--github-muted)]" />,
  warning: <AlertTriangle className="size-4 text-[var(--github-attention)]" />,
  danger: <XCircle className="size-4 text-[var(--github-danger)]" />,
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
            <p className="section-kicker text-[var(--github-accent)]">GitHub Actions workflow</p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-white [overflow-wrap:anywhere] sm:text-3xl md:text-4xl">
              market-analysis.yml
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            Workflow simulado para evaluar estructura, liquidez, volumen, noticias y riesgo. No
            toma control de ninguna cuenta.
          </p>
        </div>

        <div className="github-card overflow-hidden border-emerald-300/25">
          <div className="border-b border-[var(--github-border)] p-5">
            <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex gap-3">
                <LockKeyhole className="mt-0.5 size-5 shrink-0 text-[var(--github-success)]" />
                <div>
                  <div className="font-semibold text-[var(--github-text)]">
                    Este asistente no ejecuta operaciones. Solo genera análisis educativo e
                    informativo.
                  </div>
                  <p className="mt-1 text-sm text-[#aff5b4]">
                    No abre compras, no abre ventas, no cierra operaciones y no se conecta a dinero
                    real.
                  </p>
                </div>
              </div>
              <span className="github-status-danger">
                <XCircle className="size-3.5" />
                Execution disabled
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {assistantStatus.map((status, index) => (
                <motion.div
                  key={status.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.24, delay: index * 0.03 }}
                  className="github-card-hover rounded-md border border-[var(--github-border)] bg-[var(--github-bg-subtle)] px-4 py-3"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--github-muted)]">
                    {status.label}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-bold text-[var(--github-text)]">
                    <CheckCircle2 className="size-4 text-[var(--github-success)]" />
                    {status.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 p-5 xl:grid-cols-[0.72fr_1.28fr]">
            <div className="space-y-5">
              <div className="github-card overflow-hidden">
                <div className="flex items-center justify-between border-b border-[var(--github-border)] px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--github-text)]">
                    <PlayCircle className="size-4 text-[var(--github-success)]" />
                    Workflow checks
                  </div>
                  <span className="github-label github-label-blue">simulated</span>
                </div>
                <div>
                  {workflowChecks.map((check, index) => (
                    <motion.div
                      key={check.label}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.24, delay: index * 0.035 }}
                      className="github-actions-check"
                    >
                      {checkIcon[check.state as keyof typeof checkIcon]}
                      <span className="text-sm">{check.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="github-card p-4">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--github-text)]">
                  <Radar className="size-4 text-[var(--github-accent)]" />
                  Selector visual de activo
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {assets.map((asset) => (
                    <Button
                      key={asset}
                      variant={activeAsset === asset ? "default" : "outline"}
                      onClick={() => setActiveAsset(asset)}
                      className="github-button-glow h-14 justify-start border-[var(--github-border)]"
                    >
                      <Radar className="size-4" />
                      {asset}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="github-card p-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="font-semibold text-[var(--github-text)]">Confidence</span>
                  <span className="font-bold text-[#aff5b4]">68%</span>
                </div>
                <Progress value={68} />
                <div className="mt-4 flex gap-3 rounded-md border border-[rgba(210,153,34,0.35)] bg-[var(--github-attention-muted)] p-3 text-sm leading-6 text-[#f8e3a1]">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                  <span className="min-w-0 [overflow-wrap:anywhere]">
                    Setup potencial. Falta confirmación en M5; evitar operar hasta tener contexto
                    más claro.
                  </span>
                </div>
              </div>

              <div className="github-terminal overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--github-border)] px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--github-text)]">
                    <TerminalSquare className="size-4 text-[var(--github-accent)]" />
                    job logs
                  </div>
                  <span className="github-label github-label-purple">market-analysis.yml</span>
                </div>
                <div className="github-terminal-scroll grid gap-1 p-4 text-xs leading-6">
                  {assistantLogs.map((log, index) => (
                    <motion.div
                      key={log}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="github-terminal-line rounded border border-transparent bg-[rgba(88,166,255,0.04)] px-2 py-1 text-[#c9d1d9]"
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
                  <motion.div
                    key={panel.title}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="github-card github-card-hover min-w-0 p-5"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className="flex size-10 items-center justify-center rounded-md border border-[var(--github-border)] bg-[var(--github-bg-subtle)] text-[var(--github-accent)]">
                        <BrainCircuit className="size-5" />
                      </span>
                      <span className={`github-label ${panelAccent[panel.accent as keyof typeof panelAccent]}`}>
                        workflow
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-[var(--github-text)]">{panel.title}</h3>
                    <div className="mt-4 grid gap-0 overflow-hidden rounded-md border border-[var(--github-border)]">
                      {panel.items.map(([label, value]) => (
                        <div
                          key={`${panel.title}-${label}`}
                          className="github-file-row items-start text-sm"
                        >
                          <span className="text-[var(--github-muted)]">{label}</span>
                          <span className="max-w-full text-left font-semibold text-[var(--github-text)] [overflow-wrap:anywhere] sm:max-w-[58%] sm:text-right">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                <div className="github-card github-card-hover border-[rgba(210,153,34,0.42)] p-5 shadow-[0_0_34px_rgba(210,153,34,0.07)]">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--github-text)]">
                      <ShieldCheck className="size-4 text-[var(--github-attention)]" />
                      risk-gate.yml
                    </div>
                    <span className="github-status-warning">risk gate active</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Riesgo medio", "Noticias en 2h", "Volumen cerca de HVN"].map((item) => (
                      <div key={item} className="rounded-md border border-[var(--github-border)] bg-[var(--github-bg-subtle)] p-3 text-sm text-[#c9d1d9]">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#c9d1d9]">
                    El sistema prioriza observar zona, esperar confirmación y evitar operar cuando
                    el contexto de riesgo no es limpio.
                  </p>
                </div>

                <div className="github-card github-card-hover border-[rgba(63,185,80,0.42)] p-5 shadow-[0_0_34px_rgba(63,185,80,0.08)]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--github-text)]">
                      <ScrollText className="size-4 text-[var(--github-success)]" />
                      Final Report
                    </div>
                    <span className="github-label github-label-green">{activeAsset}</span>
                  </div>
                  <div className="grid gap-3">
                    {assistantFinalReport.map((line) => (
                      <div key={line} className="flex gap-3 rounded-md border border-[rgba(63,185,80,0.2)] bg-[var(--github-bg-subtle)] p-3 text-sm leading-6 text-[#d6eadb]">
                        <FileText className="mt-0.5 size-4 shrink-0 text-[var(--github-success)]" />
                        <span className="min-w-0 [overflow-wrap:anywhere]">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
