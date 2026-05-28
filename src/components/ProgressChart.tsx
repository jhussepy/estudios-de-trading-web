"use client";

import { progressCurve } from "@/data/practiceData";

const chartWidth = 720;
const chartHeight = 288;
const padding = { top: 24, right: 22, bottom: 38, left: 42 };
const maxValue = 140;

function pointsFor(key: "progreso" | "backtests") {
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;

  return progressCurve.map((item, index) => {
    const x = padding.left + (index / (progressCurve.length - 1)) * plotWidth;
    const y = padding.top + plotHeight - (item[key] / maxValue) * plotHeight;
    return [x, y] as const;
  });
}

function linePath(points: ReadonlyArray<readonly [number, number]>) {
  return points.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
}

function areaPath(points: ReadonlyArray<readonly [number, number]>) {
  const baseline = chartHeight - padding.bottom;
  return `${linePath(points)} L ${points[points.length - 1][0]} ${baseline} L ${points[0][0]} ${baseline} Z`;
}

export default function ProgressChart() {
  const progressPoints = pointsFor("progreso");
  const backtestPoints = pointsFor("backtests");
  const gridLines = [0, 35, 70, 105, 140];
  const baseline = chartHeight - padding.bottom;

  return (
    <svg
      aria-label="Curva esperada de progreso y backtests"
      className="h-full w-full overflow-visible"
      role="img"
      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="svgProgressGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#58a6ff" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#58a6ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="svgBacktestGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#a371f7" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#a371f7" stopOpacity="0" />
        </linearGradient>
      </defs>

      {gridLines.map((value) => {
        const y = padding.top + (1 - value / maxValue) * (baseline - padding.top);
        return (
          <g key={value}>
            <line
              x1={padding.left}
              x2={chartWidth - padding.right}
              y1={y}
              y2={y}
              stroke="rgba(139, 148, 158, 0.16)"
            />
            <text x={10} y={y + 4} fill="#8b949e" fontSize="11">
              {value}
            </text>
          </g>
        );
      })}

      <path d={areaPath(backtestPoints)} fill="url(#svgBacktestGradient)" />
      <path d={areaPath(progressPoints)} fill="url(#svgProgressGradient)" />
      <path d={linePath(backtestPoints)} fill="none" stroke="#a371f7" strokeWidth="2.5" />
      <path d={linePath(progressPoints)} fill="none" stroke="#58a6ff" strokeWidth="2.5" />

      {progressCurve.map((item, index) => {
        const x = progressPoints[index][0];
        return (
          <text key={item.name} x={x} y={chartHeight - 12} fill="#8b949e" fontSize="11" textAnchor="middle">
            {item.name}
          </text>
        );
      })}
    </svg>
  );
}
