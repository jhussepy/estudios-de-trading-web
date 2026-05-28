"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  FileCode2,
  GitBranch,
  LockKeyhole,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "12 semanas", detail: "Roadmap guiado", icon: Activity },
  { label: "24 módulos", detail: "Aprendizaje modular", icon: Cpu },
  { label: "100+ backtests", detail: "Evidencia práctica", icon: BarChart3 },
  { label: "0 ejecución automática", detail: "Solo análisis educativo", icon: ShieldCheck },
];

const repoStatus = [
  ["Study roadmap", "active", "github-status-success"],
  ["Analysis assistant", "simulated", "github-status-info"],
  ["Execution layer", "disabled", "github-status-danger"],
  ["Risk workflow", "active", "github-status-success"],
];

const terminalLogs = [
  "[CORE] H4 bias: bearish",
  "[LIQUIDITY] Asian low detected",
  "[STRUCTURE] M15 CHoCH confirmed",
  "[VOLUME] Price near HVN",
  "[RISK] Execution disabled",
];

export default function HeroSection() {
  return (
    <section id="inicio" className="container-shell relative overflow-hidden pb-20 pt-16 md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[var(--github-accent-muted)] blur-3xl" />
      <div className="pointer-events-none absolute left-[30%] top-20 h-96 w-96 rounded-full bg-[var(--github-done-muted)] blur-3xl" />

      <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.03fr_0.97fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative min-w-0"
        >
          <div className="mb-5 flex flex-wrap gap-2">
            {["educational", "no-execution", "risk-first", "simulated-reports", "read-only"].map(
              (label, index) => (
                <span
                  key={label}
                  className={[
                    "github-label",
                    ["github-label-blue", "github-label-red", "github-label-green", "github-label-purple", "github-label-yellow"][index],
                  ].join(" ")}
                >
                  {label}
                </span>
              ),
            )}
          </div>

          <h1 className="max-w-full text-balance text-3xl font-black leading-tight tracking-normal text-[var(--github-text)] [overflow-wrap:anywhere] sm:text-4xl md:text-6xl">
            Construye criterio institucional con ICT, Order Flow y{" "}
            <span className="gradient-text">análisis cuantitativo</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 muted-readable">
            Una plataforma de estudio diseñada para convertir estructura, liquidez, volumen,
            noticias y riesgo en un proceso de decisión disciplinado.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="github-button-glow group h-12 bg-[var(--github-accent)] text-[#0d1117] hover:bg-[#79c0ff]"
            >
              <a href="#readme">
                Abrir README <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="github-button-glow h-12 border-[var(--github-border)] bg-[var(--github-canvas)] hover:border-[var(--github-accent)] hover:bg-[var(--github-accent-muted)]"
            >
              <a href="#asistente">
                <BrainCircuit /> Ver workflow
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18 }}
                  className="github-card github-card-hover p-4"
                >
                  <Icon className="mb-3 size-5 text-[var(--github-accent)]" />
                  <div className="text-lg font-bold text-[var(--github-text)]">{metric.label}</div>
                  <div className="mt-1 text-xs text-[var(--github-muted)]">{metric.detail}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative min-w-0"
        >
          <div className="absolute -inset-8 rounded-full bg-[var(--github-accent-muted)] blur-3xl" />
          <div className="github-repo-header relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--github-border)] px-5 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <BookOpen className="size-5 shrink-0 text-[var(--github-accent)]" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-[var(--github-muted)]">README.md</div>
                  <div className="truncate text-base font-bold text-[var(--github-text)]">
                    ESTUDIOS DE TRADING — Institutional Trading OS
                  </div>
                </div>
              </div>
              <span className="github-status-info hidden sm:inline-flex">
                <LockKeyhole className="size-3.5" />
                Read-only mode
              </span>
            </div>

            <div className="grid gap-5 p-5">
              <div className="github-readme p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="github-label github-label-blue">educational</span>
                  <span className="github-label github-label-red">no-execution</span>
                  <span className="github-label github-label-green">risk-first</span>
                  <span className="github-label github-label-purple">simulated-reports</span>
                  <span className="github-label github-label-yellow">read-only</span>
                </div>
                <p className="text-sm leading-7 text-[#c9d1d9]">
                  Sistema educativo para estudiar estructura de mercado, liquidez, volumen, noticias
                  macro, análisis cuantitativo y gestión de riesgo.
                </p>
              </div>

              <div className="github-card">
                <div className="flex items-center gap-2 border-b border-[var(--github-border)] px-4 py-3 text-sm font-semibold text-[var(--github-text)]">
                  <GitBranch className="size-4 text-[var(--github-accent)]" />
                  Repository status
                </div>
                <div className="grid gap-0">
                  {repoStatus.map(([label, value, className]) => (
                    <div key={label} className="github-file-row">
                      <span className="text-sm text-[#c9d1d9]">{label}</span>
                      <span className={className}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="github-terminal overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--github-border)] px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--github-text)]">
                    <Terminal className="size-4 text-[var(--github-accent)]" />
                    analysis-core.yml
                  </div>
                  <span className="github-label github-label-purple">Read-only mode</span>
                </div>
                <div className="github-terminal-scroll grid gap-1 p-4 text-xs leading-6">
                  {terminalLogs.map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.32, delay: 0.35 + index * 0.08 }}
                      className="github-terminal-line flex items-center gap-2 rounded px-2 py-1 text-[#c9d1d9]"
                    >
                      <CheckCircle2 className="size-3.5 text-[var(--github-success)]" />
                      {line}
                    </motion.div>
                  ))}
                  <div className="github-terminal-line mt-2 flex items-center gap-2 rounded-md border border-[var(--github-border)] bg-[var(--github-success-muted)] px-3 py-2 text-[#aff5b4]">
                    <FileCode2 className="size-4" />
                    execution.enabled = false
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
