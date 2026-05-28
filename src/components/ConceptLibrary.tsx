"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, FileText, FolderOpen, Route, Target } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { conceptData } from "@/data/conceptData";

export default function ConceptLibrary() {
  return (
    <section id="conceptos" className="container-shell py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-[var(--github-success)]">docs/</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Documentación técnica del sistema
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            Cada concepto funciona como un archivo markdown: definición, uso estratégico, error
            común y módulo relacionado.
          </p>
        </div>

        <div className="github-readme overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-[var(--github-border)] px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <FolderOpen className="size-5 text-[var(--github-accent)]" />
              <div>
                <div className="text-sm font-semibold text-[var(--github-muted)]">docs/</div>
                <div className="text-base font-bold text-[var(--github-text)]">
                  Concept Library
                </div>
              </div>
            </div>
            <span className="github-label github-label-blue">{conceptData.length} markdown files</span>
          </div>

          <div className="p-3 md:p-5">
            <Accordion type="multiple" className="grid gap-x-5 md:grid-cols-2">
              {conceptData.map((concept) => (
                <AccordionItem
                  key={concept.name}
                  value={concept.name}
                  className="mb-3 rounded-lg border border-[var(--github-border)] bg-[var(--github-canvas)] px-4"
                >
                  <AccordionTrigger>
                    <span className="flex min-w-0 items-center gap-3">
                      <FileText className="size-4 shrink-0 text-[var(--github-accent)]" />
                      <span className="truncate text-[var(--github-accent)]">{concept.docPath}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="github-label github-label-blue">{concept.category}</span>
                      <span className="github-label github-label-purple">{concept.name}</span>
                    </div>
                    <div className="grid gap-3">
                      <DocBlock
                        icon={<BookOpen className="size-4" />}
                        label="Definición simple"
                        text={concept.definition}
                      />
                      <DocBlock
                        icon={<Target className="size-4" />}
                        label="Uso en mi estrategia"
                        text={concept.strategyUse}
                      />
                      <DocBlock
                        icon={<AlertTriangle className="size-4" />}
                        label="Error común"
                        text={concept.commonMistake}
                      />
                      <DocBlock
                        icon={<Route className="size-4" />}
                        label="Módulo relacionado"
                        text={concept.module}
                        terminal
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function DocBlock({
  icon,
  label,
  text,
  terminal,
}: {
  icon: ReactNode;
  label: string;
  text: string;
  terminal?: boolean;
}) {
  return (
    <div className="rounded-md border border-[var(--github-border-muted)] bg-[var(--github-bg-subtle)] p-3">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--github-muted)]">
        <span className="text-[var(--github-accent)]">{icon}</span>
        {label}
      </div>
      <p className={`${terminal ? "terminal-text text-[#cae8ff]" : "text-[#c9d1d9]"} text-sm leading-6`}>
        {text}
      </p>
    </div>
  );
}
