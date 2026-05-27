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
  { label: "Estado", value: "Informativo" },
  { label: "Trading", value: "Disabled" },
  { label: "Data mode", value: "Simulated" },
  { label: "Risk first", value: "Active" },
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
      ["M5", "Confirmacion pendiente"],
      ["Contexto", "Setup potencial"],
    ],
    accent: "violet",
  },
  {
    title: "Liquidity",
    items: [
      ["Asian low", "Swept"],
      ["Next pool", "Sell-side liquidity"],
      ["Equal highs/lows", "Observando zona"],
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
  "[09:30] H4/H1 bias aligned: bearish",
  "[09:32] Liquidity event detected: Asian low sweep",
  "[09:34] M15 structure shift: CHoCH bearish",
  "[09:36] Volume context: near HVN",
  "[09:38] M5 confirmation: pending",
  "[09:39] Risk gate: medium",
  "[09:40] Recommendation: wait for confirmation",
];

export const assistantFinalReport = [
  "Setup potencial bajista.",
  "No ejecutar todavia.",
  "Esperar confirmacion en M5.",
  "Riesgo medio por noticias y contexto de volumen.",
];

export const backtestingCards = [
  {
    title: "Backtesting visual",
    value: "100+ casos",
    detail: "Capturas antes/despues, hipotesis y reglas aplicadas.",
  },
  {
    title: "Replay con Volume Profile",
    value: "Sesion a sesion",
    detail: "Lectura de aceptacion, rechazo y desplazamiento.",
  },
  {
    title: "Journal de setups",
    value: "Checklist",
    detail: "Registro estructurado para repetir solo setups validos.",
  },
  {
    title: "Metricas por sesion",
    value: "Asia/Londres/NY",
    detail: "Separacion por horario para detectar ventaja real.",
  },
  {
    title: "Win rate",
    value: "Medible",
    detail: "Por setup, activo, sesion y condicion de volatilidad.",
  },
  {
    title: "Profit factor",
    value: "Calidad",
    detail: "Relacion entre ganancia bruta y perdida bruta simulada.",
  },
  {
    title: "Drawdown",
    value: "Control",
    detail: "Profundidad de perdida para proteger disciplina.",
  },
  {
    title: "Expectancy",
    value: "Decision",
    detail: "Resultado esperado por operacion simulada.",
  },
];

export const backtestingPrinciples = [
  "Cada operacion se convierte en dato.",
  "Cada setup se valida antes de confiar en el.",
  "Cada error se convierte en regla.",
];

export const journalSections = [
  {
    title: "Contexto",
    fields: [
      ["Activo", "EUR/USD"],
      ["Fecha", "2026-05-26"],
      ["Sesion", "Londres"],
      ["Direccion H4/H1", "Bajista / Bajista"],
    ],
  },
  {
    title: "Setup",
    fields: [
      ["Liquidez tomada", "Minimo asiatico"],
      ["BOS/CHoCH", "CHoCH bajista M15"],
      ["FVG", "Bajista pendiente de mitigacion"],
      ["POC/HVN/LVN", "Precio cerca de HVN intradia"],
    ],
  },
  {
    title: "Gestion",
    fields: [
      ["Entrada simulada", "Solo si M5 confirma imbalance"],
      ["SL", "Sobre swing de mitigacion"],
      ["TP", "Siguiente pool de liquidez"],
    ],
  },
  {
    title: "Resultado",
    fields: [
      ["Resultado", "Pendiente"],
      ["Calidad del setup", "Incompleto"],
      ["Riesgo", "Medio"],
    ],
  },
  {
    title: "Leccion",
    fields: [
      ["Leccion aprendida", "Esperar confirmacion evita entradas prematuras"],
      ["Regla nueva", "Evitar operar cerca de noticias de alto impacto"],
    ],
  },
];
