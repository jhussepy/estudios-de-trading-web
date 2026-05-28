import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--github-border)] py-10">
      <div className="container-shell flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="text-sm font-bold text-[var(--github-text)]">
            Trading Intelligence System — Built for study, analysis and risk discipline.
          </div>
          <p className="mt-2 text-sm text-[var(--github-muted)]">
            Sistema educativo e informativo. No ejecuta operaciones automáticamente.
          </p>
        </div>
        <div className="github-status-info">
          <ShieldCheck className="size-4" />
          Read-only educational mode
        </div>
      </div>
    </footer>
  );
}
