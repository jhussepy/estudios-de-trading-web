export const progressStats = {
  totalProgress: 18,
  currentWeek: 1,
  completedModules: 4,
  registeredBacktests: 12,
  studentLevel: "Foundations Pro",
};

export const progressCurve = [
  { name: "S1", progreso: 8, backtests: 2 },
  { name: "S2", progreso: 18, backtests: 12 },
  { name: "S3", progreso: 26, backtests: 18 },
  { name: "S4", progreso: 34, backtests: 26 },
  { name: "S5", progreso: 42, backtests: 38 },
  { name: "S6", progreso: 52, backtests: 51 },
  { name: "S7", progreso: 63, backtests: 66 },
  { name: "S8", progreso: 72, backtests: 78 },
  { name: "S9", progreso: 82, backtests: 91 },
  { name: "S10", progreso: 90, backtests: 104 },
  { name: "S11", progreso: 96, backtests: 118 },
  { name: "S12", progreso: 100, backtests: 132 },
];

export const assistantStatus = [
  { label: "status", value: "simulated" },
  { label: "execution", value: "disabled" },
  { label: "risk gate", value: "active" },
  { label: "data mode", value: "educational" },
];

export const workflowChecks = [
  { state: "success", label: "Load market context" },
  { state: "success", label: "Detect H4/H1 bias" },
  { state: "success", label: "Scan liquidity" },
  { state: "success", label: "Validate M15 structure" },
  { state: "pending", label: "Wait for M5 confirmation" },
  { state: "warning", label: "Check macro risk" },
  { state: "danger", label: "Execution layer disabled" },
];

export const assistantCockpitPanels = [
  {
    title: "Market Bias",
    items: [
      ["H4", "Bajista"],
      ["H1", "Bajista"],
      ["Estado", "Alineado"],
    ],
    accent: "cyan",
  },
  {
    title: "Structure",
    items: [
      ["M15", "Barrida + CHoCH"],
      ["M5", "Confirmación pendiente"],
      ["Contexto", "Setup potencial"],
    ],
    accent: "violet",
  },
  {
    title: "Liquidity",
    items: [
      ["Asian low", "Barrido"],
      ["Siguiente pool", "Liquidez vendedora"],
      ["Equal highs/lows", "Observar zona"],
    ],
    accent: "emerald",
  },
  {
    title: "Volume Profile",
    items: [
      ["HVN", "Price near HVN"],
      ["POC distance", "Moderada"],
      ["Clean space", "Parcial hacia objetivo"],
    ],
    accent: "cyan",
  },
  {
    title: "Order Flow",
    items: [
      ["Absorption", "Pending"],
      ["Imbalance", "Not confirmed"],
      ["Aggression", "Neutral"],
    ],
    accent: "violet",
  },
  {
    title: "Macro/Risk",
    items: [
      ["News", "USD high impact in 2h"],
      ["Volatility", "Medium"],
      ["Risk", "Medium"],
    ],
    accent: "amber",
  },
];

export const assistantLogs = [
  "[09:30:02] core.start()",
  "[09:30:04] bias.h4 = bearish",
  "[09:30:05] bias.h1 = bearish",
  "[09:30:08] liquidity.event = asian_low_sweep",
  "[09:30:11] structure.m15 = bearish_choch",
  "[09:30:13] volume.context = near_hvn",
  "[09:30:15] orderflow.status = pending",
  "[09:30:17] risk.level = medium",
  "[09:30:19] execution.enabled = false",
  "[09:30:21] recommendation = wait_for_m5_confirmation",
];

export const assistantFinalReport = [
  "Setup potencial bajista.",
  "No ejecutar todavía.",
  "Esperar confirmación en M5.",
  "Riesgo medio por noticias y contexto de volumen.",
];

export const backtestingCards = [
  {
    title: "Visual Replay",
    value: "Evidence collected",
    detail: "Contexto antes/después, hipótesis y reacción del precio.",
  },
  {
    title: "Setup Review",
    value: "Review required",
    detail: "Cada setup debe pasar contexto, estructura, volumen y riesgo.",
  },
  {
    title: "Session Metrics",
    value: "Metrics pending",
    detail: "Separación por Asia, Londres y Nueva York para detectar ventaja real.",
  },
  {
    title: "Risk Metrics",
    value: "Risk first",
    detail: "Validación de exposición, volatilidad y noticias antes de confiar.",
  },
  {
    title: "Drawdown Review",
    value: "Needs more data",
    detail: "Revisión de rachas adversas y profundidad de pérdida simulada.",
  },
  {
    title: "Expectancy Check",
    value: "Approved setup",
    detail: "Resultado esperado por operación simulada cuando la muestra es suficiente.",
  },
];

export const backtestingPrinciples = [
  "Cada setup se valida antes de confiar en él.",
  "Cada operación se convierte en dato.",
  "Cada error se convierte en regla.",
];

export const journalSections = [
  {
    title: "Contexto",
    status: "Behavior pattern",
    fields: [
      ["Activo", "EUR/USD"],
      ["Fecha", "2026-05-26"],
      ["Sesión", "Londres"],
      ["Dirección H4/H1", "Bajista / Bajista"],
    ],
  },
  {
    title: "Setup",
    status: "Error detected",
    fields: [
      ["Liquidez tomada", "Mínimo asiático"],
      ["BOS/CHoCH", "CHoCH bajista M15"],
      ["FVG", "Bajista pendiente de mitigación"],
      ["POC/HVN/LVN", "Precio cerca de HVN intradía"],
    ],
  },
  {
    title: "Gestión",
    status: "Rule updated",
    fields: [
      ["Entrada simulada", "Solo si M5 confirma imbalance"],
      ["SL", "Sobre swing de mitigación"],
      ["TP", "Siguiente pool de liquidez"],
    ],
  },
  {
    title: "Resultado",
    status: "Weekly review",
    fields: [
      ["Resultado", "Pendiente"],
      ["Calidad del setup", "Incompleto"],
      ["Riesgo", "Medio"],
    ],
  },
  {
    title: "Lección",
    status: "Lesson created",
    fields: [
      ["Lección aprendida", "Esperar confirmación evita entradas prematuras"],
      ["Regla nueva", "Evitar operar cerca de noticias de alto impacto"],
    ],
  },
];
