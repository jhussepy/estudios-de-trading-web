"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  DatabaseZap,
  FileCode2,
  FileText,
  Folder,
  Gauge,
  Network,
  ShieldAlert,
} from "lucide-react";
import { architecturePipeline, repositoryTree, type PipelineStage } from "@/data/botModules";

const stageAccent: Record<PipelineStage["accent"], string> = {
  cyan: "github-label-blue",
  violet: "github-label-purple",
  emerald: "github-label-green",
  amber: "github-label-yellow",
};

const fileLabel = {
  analysis: "github-label-blue",
  risk: "github-label-yellow",
  report: "github-label-green",
  "no-execution": "github-label-red",
} as const;

const summaryCards = [
  {
    title: "Lectura",
    text: "El sistema ordena información de mercado antes de formular un reporte.",
    icon: Network,
  },
  {
    title: "Filtro",
    text: "La capa de riesgo evita convertir observaciones incompletas en acción.",
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
            <p className="section-kicker text-[var(--github-accent)]">Repository structure</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Pipeline técnico y árbol de archivos
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            El asistente funciona como un pipeline de lectura y reporte. No posee capa de ejecución.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            <div className="github-card overflow-hidden">
              <div className="flex flex-col gap-3 border-b border-[var(--github-border)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Gauge className="size-5 text-[var(--github-accent)]" />
                  <div>
                    <h3 className="font-bold text-[var(--github-text)]">
                      No execution layer / Sin capa de ejecución
                    </h3>
                    <p className="text-sm text-[var(--github-muted)]">
                      Pipeline de análisis sin módulo operativo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="github-label github-label-blue">analysis</span>
                  <span className="github-label github-label-yellow">risk</span>
                  <span className="github-label github-label-green">report</span>
                  <span className="github-label github-label-red">no-execution</span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-7 text-[#c9d1d9]">
                  Los módulos procesan contexto, estructura, volumen, macro, estadística y riesgo
                  para producir un reporte informativo. No existe bloque de compra, venta, cierre ni
                  conexión a dinero real.
                </p>
                <div className="mt-5 grid gap-3">
                  {summaryCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.title} className="rounded-md border border-[var(--github-border)] bg-[var(--github-bg-subtle)] p-3">
                        <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[var(--github-text)]">
                          <Icon className="size-4 text-[var(--github-accent)]" />
                          {card.title}
                        </div>
                        <p className="text-sm leading-6 text-[var(--github-muted)]">{card.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="github-card overflow-hidden">
              <div className="flex items-center gap-3 border-b border-[var(--github-border)] px-5 py-4">
                <Folder className="size-5 text-[var(--github-accent)]" />
                <div>
                  <h3 className="font-bold text-[var(--github-text)]">Repository file tree</h3>
                  <p className="text-sm text-[var(--github-muted)]">Trading analysis modules</p>
                </div>
              </div>
              <div className="github-file-tree-scroll">
                {repositoryTree.map((group) => (
                  <div key={group.root}>
                    <div className="github-file-row github-file-row-nowrap bg-[var(--github-canvas-subtle)]">
                      <span className="flex min-w-0 items-center gap-2 font-semibold text-[var(--github-text)]">
                        <Folder className="size-4 text-[var(--github-accent)]" />
                        {group.root}
                      </span>
                      <span className="text-xs text-[var(--github-muted)]">{group.files.length} items</span>
                    </div>
                    {group.files.map((file) => {
                      const Icon = file.type === "folder" ? Folder : FileCode2;
                      return (
                        <div
                          key={`${group.root}-${file.name}`}
                          className="github-file-row github-file-row-nowrap pl-4 sm:pl-8"
                        >
                          <span className="flex min-w-0 flex-1 items-center gap-2 text-sm">
                            <Icon className="size-4 shrink-0 text-[var(--github-muted)]" />
                            <span className="truncate terminal-text">{file.name}</span>
                          </span>
                          {file.label ? (
                            <span className={`github-label ${fileLabel[file.label as keyof typeof fileLabel]}`}>
                              {file.label}
                            </span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="github-card overflow-hidden">
            <div className="flex items-center gap-3 border-b border-[var(--github-border)] px-5 py-4">
              <DatabaseZap className="size-5 text-[var(--github-accent)]" />
              <div>
                <h3 className="font-bold text-[var(--github-text)]">analysis-pipeline.yml</h3>
                <p className="text-sm text-[var(--github-muted)]">Lectura → riesgo → reporte</p>
              </div>
            </div>

            <div className="grid gap-4 p-5">
              {architecturePipeline.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.42, delay: index * 0.04 }}
                  className="github-card-hover rounded-lg border border-[var(--github-border)] bg-[var(--github-bg-subtle)] p-4"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-black text-[var(--github-text)]">{stage.title}</h3>
                        <span className={`github-label ${stageAccent[stage.accent]}`}>job-{index + 1}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#c9d1d9]">{stage.description}</p>
                    </div>
                    {index < architecturePipeline.length - 1 ? (
                      <ArrowRight className="hidden size-5 shrink-0 text-[var(--github-muted)] md:block" />
                    ) : null}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stage.modules.map((module) => (
                      <span key={module} className={`github-label ${stageAccent[stage.accent]}`}>
                        {module}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
