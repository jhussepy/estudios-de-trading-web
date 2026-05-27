import { TerminalSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ReportLine } from "@/data/reportExample";

const toneClass = {
  cyan: "text-cyan-200",
  violet: "text-violet-200",
  emerald: "text-emerald-200",
  amber: "text-amber-200",
};

export default function TerminalReport({
  report,
  activeAsset,
}: {
  report: ReportLine[];
  activeAsset: string;
}) {
  const reportLines = report.map((line) =>
    line.label === "ACTIVO" ? { ...line, value: activeAsset } : line,
  );

  return (
    <div className="overflow-hidden rounded-lg border border-cyan-300/20 bg-black/45">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <TerminalSquare className="size-4 text-cyan-200" />
          Reporte final
        </div>
        <Badge variant="emerald">Informativo</Badge>
      </div>
      <div className="terminal-text grid gap-1 p-4 text-xs leading-6">
        {reportLines.map((line) => (
          <div key={line.label} className="grid gap-1 rounded-md px-2 py-1 sm:grid-cols-[180px_1fr]">
            <span className="text-slate-500">{line.label}:</span>
            <span className={line.tone ? toneClass[line.tone] : "text-slate-200"}>{line.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
