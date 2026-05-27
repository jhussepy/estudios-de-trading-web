"use client";

import { useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Plan", href: "#plan" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Conceptos", href: "#conceptos" },
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Asistente", href: "#asistente" },
  { label: "Backtesting", href: "#backtesting" },
  { label: "Journal", href: "#journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-slate-950/78 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
      <nav className="container-shell flex min-h-16 items-center justify-between gap-4">
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 shadow-glow">
            <ShieldCheck className="size-5 text-cyan-200" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">ESTUDIOS DE TRADING</span>
            <span className="block text-xs text-slate-400 group-hover:text-cyan-200">
              Institutional Trading OS
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-cyan-300/10 hover:text-cyan-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant="outline">
              <a href="#asistente">Abrir asistente</a>
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
          <div className="grid gap-1 rounded-lg border border-cyan-300/10 bg-slate-950/90 p-2 shadow-glow">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-cyan-300/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
