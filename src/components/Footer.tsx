import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-shell flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="text-sm font-bold text-white">
            Trading Intelligence System — Built for study, analysis and risk discipline.
          </div>
          <p className="mt-2 text-sm text-slate-400">
            Sistema educativo e informativo. No ejecuta operaciones automáticamente.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-100">
          <ShieldCheck className="size-4" />
          Educational mode
        </div>
      </div>
    </footer>
  );
}
