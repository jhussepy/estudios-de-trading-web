"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  GitPullRequest,
  LineChart,
  NotebookTabs,
  Percent,
  ShieldCheck,
  TrendingDown,
  WalletCards,
} from "lucide-react";
import { backtestingCards, backtestingPrinciples } from "@/data/practiceData";

const icons = [LineChart, GitPullRequest, NotebookTabs, ShieldCheck, TrendingDown, Percent];

const statusClass = {
  "Evidence collected": "github-label-green",
  "Review required": "github-label-yellow",
  "Metrics pending": "github-label-blue",
  "Risk first": "github-label-purple",
  "Needs more data": "github-label-red",
  "Approved setup": "github-label-green",
} as const;

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
            <p className="section-kicker text-[var(--github-done)]">Pull request review</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Evidencia antes que intuición
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 muted-readable">
            Cada setup debe pasar revisión: contexto, proceso documentado, resultado y métrica.
          </p>
        </div>

        <div className="mb-5 grid gap-3 md:grid-cols-3">
          {backtestingPrinciples.map((principle) => (
            <div key={principle} className="github-card p-4 text-sm font-semibold leading-6 text-[#c9d1d9]">
              <CheckCircle2 className="mb-3 size-5 text-[var(--github-success)]" />
              {principle}
            </div>
          ))}
        </div>

        <div className="github-card overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-[var(--github-border)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <GitPullRequest className="size-5 text-[var(--github-done)]" />
              <div>
                <h3 className="font-bold text-[var(--github-text)]">setup-review.pr</h3>
                <p className="text-sm text-[var(--github-muted)]">
                  Cada setup debe pasar revisión antes de confiar en él.
                </p>
              </div>
            </div>
            <span className="github-label github-label-yellow">Review required</span>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {backtestingCards.map((card, index) => {
              const Icon = icons[index] ?? WalletCards;
              return (
                <article key={card.title} className="github-card github-card-hover p-4">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-md border border-[var(--github-border)] bg-[var(--github-bg-subtle)] text-[var(--github-done)]">
                      <Icon className="size-5" />
                    </span>
                    <span className={`github-label ${statusClass[card.value as keyof typeof statusClass]}`}>
                      {card.value}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--github-text)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#c9d1d9]">{card.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
