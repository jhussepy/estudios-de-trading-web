"use client";

import { useState } from "react";
import { BookOpen, GitBranch, Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "README", href: "#readme" },
  { label: "Plan", href: "#plan" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Docs", href: "#conceptos" },
  { label: "Pipeline", href: "#arquitectura" },
  { label: "Actions", href: "#asistente" },
  { label: "Reviews", href: "#backtesting" },
  { label: "Issues", href: "#journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--github-border)] bg-[rgba(13,17,23,0.82)] shadow-[0_10px_40px_rgba(1,4,9,0.38)] backdrop-blur-2xl">
      <nav className="container-shell flex min-h-16 items-center justify-between gap-4">
        <a href="#inicio" className="group flex min-w-0 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[var(--github-border)] bg-[var(--github-canvas)]">
            <GitBranch className="size-5 text-[var(--github-accent)]" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold text-[var(--github-text)]">
              ESTUDIOS DE TRADING
            </span>
            <span className="block truncate text-xs text-[var(--github-muted)] group-hover:text-[var(--github-accent)]">
              Institutional Trading OS
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="github-tab rounded-md px-3 py-2 text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <span className="github-status-info">
            <ShieldCheck className="size-3.5" />
            Read-only system
          </span>
          <Button asChild size="sm" variant="outline">
            <a href="#readme">
              <BookOpen /> README
            </a>
          </Button>
        </div>

        <Button
          aria-label="Abrir menú"
          className="lg:hidden"
          size="icon"
          variant="ghost"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      <div
        className={cn(
          "container-shell grid overflow-hidden transition-all lg:hidden",
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="github-card grid gap-1 p-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-[var(--github-muted)] hover:bg-[var(--github-accent-muted)] hover:text-[var(--github-text)]"
              >
                {link.label}
              </a>
            ))}
            <span className="github-status-info mt-2">
              <ShieldCheck className="size-3.5" />
              Read-only system
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
