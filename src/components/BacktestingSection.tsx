"use client";

import { motion } from "framer-motion";
import {
  BarChart4,
  CheckCircle2,
  LineChart,
  NotebookTabs,
  Percent,
  TrendingDown,
  WalletCards,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { backtestingCards, backtestingPrinciples } from "@/data/practiceData";

const icons = [
  BarChart4,
  LineChart,
  NotebookTabs,
  WalletCards,
  Percent,
  BarChart4,
  TrendingDown,
  LineChart,
];

export default function BacktestingSection() {
  return (
    <section id="backtesting" className="container-shell py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-violet-200">Backtesting</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Evidencia antes que intuicion
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            El sistema separa replay, journal y metricas para que cada setup tenga contexto,
            resultado y aprendizaje.
          </p>
        </div>

        <div className="mb-5 grid gap-3 md:grid-cols-3">
          {backtestingPrinciples.map((principle) => (
            <div
              key={principle}
              className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm font-semibold leading-6 text-emerald-50/90"
            >
              <CheckCircle2 className="mb-3 size-5 text-emerald-200" />
              {principle}
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {backtestingCards.map((card, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={card.title}
                className="hover-lift border-violet-300/20 hover:border-violet-300/40 hover:shadow-violet"
              >
                <CardHeader>
                  <span className="mb-3 flex size-11 items-center justify-center rounded-md border border-violet-300/20 bg-violet-400/10 text-violet-200">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-base">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-white">{card.value}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{card.detail}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
