"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, FileText, GraduationCap, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { journalSections } from "@/data/practiceData";

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
            <p className="section-kicker text-emerald-200">Journal de aprendizaje</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Registro profesional de comportamiento
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            El objetivo del journal no es justificar operaciones; es detectar patrones de
            comportamiento.
          </p>
        </div>

        <Card className="premium-border">
          <CardHeader className="border-b border-white/10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-md bg-emerald-300/10 text-emerald-200">
                  <ClipboardCheck className="size-5" />
                </span>
                <div>
                  <CardTitle>Setup Review Template</CardTitle>
                  <p className="mt-1 text-sm text-slate-300">
                    Registro simulado o documentado para estudio, no ejecucion automatica.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="emerald">Educativo</Badge>
                <Badge variant="muted">No ejecucion</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-5">
            <div className="grid gap-4 lg:grid-cols-5">
              {journalSections.map((section) => (
                <div
                  key={section.title}
                  className="hover-lift rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="mb-4 flex items-center gap-2 text-sm font-black text-white">
                    <FileText className="size-4 text-cyan-200" />
                    {section.title}
                  </div>
                  <div className="grid gap-3">
                    {section.fields.map(([label, value]) => (
                      <div key={`${section.title}-${label}`} className="border-t border-white/10 pt-3">
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          {label}
                        </div>
                        <div className="mt-1 text-sm font-semibold leading-6 text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex gap-3 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
                <GraduationCap className="mt-0.5 size-5 shrink-0 text-cyan-200" />
                <p className="text-sm leading-6 text-cyan-50/85">
                  La entrada es simulada o documentada, no ejecutada por el sistema. El journal
                  existe para mejorar lectura, paciencia y control de riesgo.
                </p>
              </div>
              <div className="flex gap-3 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-200" />
                <p className="text-sm leading-6 text-emerald-50/85">
                  Cada revision debe cerrar con una regla practica: que observar, que evitar y que
                  medir en el siguiente replay.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
