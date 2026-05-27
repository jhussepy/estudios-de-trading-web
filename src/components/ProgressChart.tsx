"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { progressCurve } from "@/data/practiceData";

export default function ProgressChart() {
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
      <AreaChart data={progressCurve} margin={{ left: 0, right: 8, top: 12, bottom: 0 }}>
        <defs>
          <linearGradient id="progressGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.45} />
            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="backtestGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8" }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: "#94a3b8" }} width={34} />
        <Tooltip
          cursor={{ stroke: "rgba(34,211,238,0.35)" }}
          contentStyle={{
            background: "rgba(2, 6, 23, 0.94)",
            border: "1px solid rgba(125, 211, 252, 0.22)",
            borderRadius: "8px",
            color: "#e2e8f0",
          }}
        />
        <Area
          type="monotone"
          dataKey="progreso"
          stroke="#22d3ee"
          strokeWidth={2}
          fill="url(#progressGradient)"
        />
        <Area
          type="monotone"
          dataKey="backtests"
          stroke="#a78bfa"
          strokeWidth={2}
          fill="url(#backtestGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
