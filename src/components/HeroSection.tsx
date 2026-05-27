"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  LockKeyhole,
  Radio,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "12 semanas", detail: "Roadmap guiado", icon: Activity },
  { label: "24 modulos", detail: "Aprendizaje modular", icon: Cpu },
  { label: "100+ backtests", detail: "Evidencia practica", icon: BarChart3 },
  { label: "0 ejecucion automatica", detail: "Solo analisis educativo", icon: ShieldCheck },
];

const terminalLogs = [
  { tag: "CORE", text: "H4 bias: bearish", tone: "text-cyan-200" },
  { tag: "LIQUIDITY", text: "Asian low detected", tone: "text-emerald-200" },
  { tag: "STRUCTURE", text: "M15 CHoCH confirmed", tone: "text-violet-200" },
  { tag: "VOLUME", text: "Price near HVN", tone: "text-cyan-200" },
  { tag: "RISK", text: "Execution disabled", tone: "text-amber-200" },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="container-shell relative overflow-hidden pb-20 pt-16 md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-cyan-300/18 blur-3xl" />
      <div className="pointer-events-none absolute left-[24%] top-24 h-96 w-96 rounded-full bg-violet-400/12 blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge variant="emerald" className="mb-5 border-emerald-300/30 bg-emerald-300/10">
              Institutional Trading OS - Study-first system
            </Badge>
          </motion.div>

          <h1 className="text-balance text-4xl font-black leading-tight tracking-normal text-white md:text-6xl">
            Construye criterio institucional con ICT, Order Flow y{" "}
            <span className="gradient-text">analisis cuantitativo</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 muted-readable">
            Una plataforma de estudio disenada para convertir estructura, liquidez, volumen,
            noticias y riesgo en un proceso de decision disciplinado.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group h-12 shadow-[0_0_46px_rgba(34,211,238,0.2)]">
              <a href="#plan">
                Comenzar plan <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-violet-300/30 hover:border-violet-200/60 hover:bg-violet-400/10"
            >
              <a href="#asistente">
                <BrainCircuit /> Ver Asistente de Analisis
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="hover-lift rounded-lg border border-white/10 bg-white/[0.045] p-4"
                >
                  <Icon className="mb-3 size-5 text-cyan-200" />
                  <div className="text-lg font-bold text-white">{metric.label}</div>
                  <div className="mt-1 text-xs text-slate-300">{metric.detail}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="premium-border terminal-panel relative overflow-hidden rounded-lg border border-cyan-300/20 shadow-glow backdrop-blur-xl">
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Terminal className="size-4 text-cyan-200" />
                Analysis Core
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-100">
                  <span className="size-1.5 rounded-full bg-emerald-300" />
                  Live sim
                </span>
                <div className="hidden gap-1.5 sm:flex">
                  <span className="size-2.5 rounded-full bg-rose-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-300/80" />
                  <span className="size-2.5 rounded-full bg-emerald-300/80" />
                </div>
              </div>
            </div>

            <div className="relative z-10 grid gap-4 p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {["H4", "M15", "M5"].map((frame, index) => (
                  <motion.div
                    key={frame}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                    className="rounded-md border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>FRAME</span>
                      <Radio className="size-3.5 text-cyan-200" />
                    </div>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <div className="text-xl font-black text-white">{frame}</div>
                      <div className="text-xs font-semibold text-cyan-100">
                        {["Bias", "Shift", "Wait"][index]}
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${82 - index * 14}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-semibold text-emerald-100">
                    <LockKeyhole className="size-4" />
                    Safety Layer
                  </span>
                  <Badge variant="emerald">Execution OFF</Badge>
                </div>
                <p className="text-sm leading-6 text-emerald-50/85">
                  El sistema presenta analisis informativo, reportes simulados y disciplina de
                  riesgo. No abre, cierra ni modifica operaciones.
                </p>
              </div>

              <div className="terminal-text rounded-md border border-white/10 bg-black/45 p-4 text-xs leading-6">
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">session.scan</span>
                  <span className="text-emerald-300">read-only</span>
                </div>
                {terminalLogs.map((line, index) => (
                  <motion.div
                    key={line.tag}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.38, delay: 0.52 + index * 0.08 }}
                    className="flex items-start justify-between gap-4 rounded px-1 py-0.5"
                  >
                    <span className="text-slate-500">[{line.tag}]</span>
                    <span className={line.tone}>{line.text}</span>
                  </motion.div>
                ))}
                <div className="mt-3 flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-emerald-100">
                  <CheckCircle2 className="size-4" />
                  <span>Informative mode locked</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
