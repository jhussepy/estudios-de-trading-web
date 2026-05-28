"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, FileCode2, ShieldAlert, XCircle } from "lucide-react";

const does = [
  "Organiza un roadmap de estudio de 12 semanas.",
  "Simula un asistente informativo de análisis.",
  "Presenta un pipeline de lectura y reporte.",
  "Refuerza backtesting, journal y disciplina.",
  "Ayuda a evaluar contexto, riesgo y confirmación.",
];

const doesNot = [
  "No abre operaciones.",
  "No cierra operaciones.",
  "No ejecuta compras ni ventas.",
  "No reemplaza el criterio del trader.",
  "No opera con dinero real.",
];

const principles = [
  "Evidencia antes que intuición.",
  "Riesgo antes que entrada.",
  "Confirmación antes que ejecución.",
  "Journal antes que confianza.",
  "Revisión antes que repetición.",
];

export default function READMESection() {
  return (
    <section id="readme" className="container-shell py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="github-readme overflow-hidden"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[var(--github-border)] px-5 py-4">
          <div className="flex items-center gap-3">
            <BookOpen className="size-5 text-[var(--github-accent)]" />
            <div>
              <div className="text-sm font-semibold text-[var(--github-muted)]">README.md</div>
              <div className="text-base font-bold text-[var(--github-text)]">
                Repository overview
              </div>
            </div>
          </div>
          <span className="github-label github-label-green">read-only</span>
        </div>

        <div className="grid gap-6 p-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-black text-[var(--github-text)]">
              ESTUDIOS DE TRADING — Institutional Trading OS
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#c9d1d9]">
              Sistema educativo para estudiar estructura de mercado, liquidez, volumen, noticias
              macro, análisis cuantitativo y gestión de riesgo.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="github-label github-label-blue">repository-dashboard</span>
              <span className="github-label github-label-purple">workflow-analysis</span>
              <span className="github-label github-label-green">risk-discipline</span>
              <span className="github-label github-label-red">no-execution</span>
            </div>

            <div className="github-code-block mt-6 p-4 text-xs leading-6">
              <div className="text-[var(--github-muted)]"># security policy</div>
              <div>execution.enabled = false</div>
              <div>{'mode = "educational"'}</div>
              <div>{'reports = "simulated"'}</div>
              <div>{'risk_gate = "active"'}</div>
            </div>
          </div>

          <div className="grid gap-4">
            <ReadmeList title="Qué hace" icon="check" items={does} />
            <ReadmeList title="Qué no hace" icon="x" items={doesNot} />
            <ReadmeList title="Principios" icon="shield" items={principles} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ReadmeList({
  title,
  icon,
  items,
}: {
  title: string;
  icon: "check" | "x" | "shield";
  items: string[];
}) {
  const Icon = icon === "check" ? CheckCircle2 : icon === "x" ? XCircle : ShieldAlert;
  const iconClass =
    icon === "check"
      ? "text-[var(--github-success)]"
      : icon === "x"
        ? "text-[var(--github-danger)]"
        : "text-[var(--github-attention)]";

  return (
    <div className="github-card p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[var(--github-text)]">
        <FileCode2 className="size-4 text-[var(--github-accent)]" />
        ## {title}
      </div>
      <div className="grid gap-2">
        {items.map((item) => (
          <div key={item} className="flex gap-2 text-sm leading-6 text-[#c9d1d9]">
            <Icon className={`mt-1 size-4 shrink-0 ${iconClass}`} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
