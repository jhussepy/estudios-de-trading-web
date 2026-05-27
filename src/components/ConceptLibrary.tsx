"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, Layers3, Route, Target } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            <p className="section-kicker text-emerald-200">Biblioteca de conceptos</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Glosario operativo del sistema
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            Cada concepto se conecta con uso estrategico, error comun y modulo relacionado para que
            no sea teoria suelta.
          </p>
        </div>

        <Card className="premium-border">
          <CardHeader className="border-b border-white/10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-emerald-300/10 text-emerald-200">
                  <BookOpen className="size-5" />
                </span>
                <div>
                  <CardTitle>Conceptos institucionales</CardTitle>
                  <p className="mt-1 text-sm text-slate-300">
                    ICT, volumen, order flow, macro, cuantitativo y riesgo.
                  </p>
                </div>
              </div>
              <Badge variant="emerald">{conceptData.length} conceptos</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <Accordion type="multiple" className="grid gap-x-8 md:grid-cols-2">
              {conceptData.map((concept) => (
                <AccordionItem key={concept.name} value={concept.name}>
                  <AccordionTrigger>
                    <span className="flex items-center gap-3">
                      <Layers3 className="size-4 text-cyan-200" />
                      {concept.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <Badge variant="muted">{concept.category}</Badge>
                      <Badge>{concept.module}</Badge>
                    </div>
                    <div className="grid gap-3">
                      <ConceptBlock
                        icon={<BookOpen className="size-4" />}
                        label="Definicion simple"
                        text={concept.definition}
                      />
                      <ConceptBlock
                        icon={<Target className="size-4" />}
                        label="Como se usa en mi estrategia"
                        text={concept.strategyUse}
                      />
                      <ConceptBlock
                        icon={<AlertTriangle className="size-4" />}
                        label="Error comun"
                        text={concept.commonMistake}
                      />
                      <ConceptBlock
                        icon={<Route className="size-4" />}
                        label="Modulo relacionado"
                        text={concept.module}
                        terminal
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

function ConceptBlock({
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
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        <span className="text-cyan-200">{icon}</span>
        {label}
      </div>
      <p className={`${terminal ? "terminal-text text-cyan-100" : "text-slate-300"} text-sm leading-6`}>
        {text}
      </p>
    </div>
  );
}
