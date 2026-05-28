"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, CircleDot, FileText, ShieldCheck } from "lucide-react";
import { journalSections } from "@/data/practiceData";

const issueLabel = {
  "Error detected": "github-label-red",
  "Lesson created": "github-label-green",
  "Rule updated": "github-label-purple",
  "Behavior pattern": "github-label-blue",
  "Weekly review": "github-label-yellow",
} as const;

export default function JournalSection() {
  return (
    <section id="journal" className="container-shell py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-[var(--github-success)]">Issue tracker</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Journal como sistema de issues
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            El journal no busca justificar operaciones; convierte errores repetidos en reglas
            operativas.
          </p>
        </div>

        <div className="github-card overflow-hidden">
          <div className="flex flex-col justify-between gap-4 border-b border-[var(--github-border)] px-5 py-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <AlertCircle className="size-5 text-[var(--github-success)]" />
              <div>
                <h3 className="font-bold text-[var(--github-text)]">journal-issues</h3>
                <p className="text-sm text-[var(--github-muted)]">
                  Cada error se registra como issue. Cada mejora se convierte en regla.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="github-label github-label-red">Error detected</span>
              <span className="github-label github-label-green">Lesson created</span>
              <span className="github-label github-label-purple">Rule updated</span>
            </div>
          </div>

          <div className="grid gap-4 p-5 lg:grid-cols-5">
            {journalSections.map((section, index) => (
              <article key={section.title} className="github-card github-card-hover overflow-hidden">
                <div className="border-b border-[var(--github-border)] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-sm font-bold text-[var(--github-text)]">
                      <CircleDot className="size-4 text-[var(--github-accent)]" />
                      #{index + 1} {section.title}
                    </span>
                  </div>
                  <span className={`github-label ${issueLabel[section.status as keyof typeof issueLabel]}`}>
                    {section.status}
                  </span>
                </div>
                <div>
                  {section.fields.map(([label, value]) => (
                    <div key={`${section.title}-${label}`} className="github-file-row items-start">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--github-muted)]">
                        {label}
                      </span>
                      <span className="max-w-full text-left text-sm font-semibold text-[var(--github-text)] [overflow-wrap:anywhere] sm:max-w-[58%] sm:text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4 border-t border-[var(--github-border)] p-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="github-code-block flex gap-3 p-4">
              <FileText className="mt-0.5 size-5 shrink-0 text-[var(--github-accent)]" />
              <p className="text-sm leading-6 text-[#c9d1d9]">
                La entrada es simulada o documentada, no ejecutada por el sistema. El journal existe
                para mejorar lectura, paciencia y control de riesgo.
              </p>
            </div>
            <div className="github-code-block flex gap-3 p-4">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[var(--github-success)]" />
              <p className="text-sm leading-6 text-[#c9d1d9]">
                Cada revisión debe cerrar con una regla práctica: qué observar, qué evitar y qué
                medir en el siguiente replay.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
