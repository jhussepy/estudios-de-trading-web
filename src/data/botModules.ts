export type BotModule = {
  name: string;
  layer: "Datos" | "Estructura" | "Confirmacion" | "Cuantitativo" | "Riesgo" | "Reporte";
  description: string;
};

export type PipelineStage = {
  title: string;
  description: string;
  modules: string[];
  accent: "cyan" | "violet" | "emerald" | "amber";
};

export const botModules: BotModule[] = [
  {
    name: "MT5 Connector",
    layer: "Datos",
    description: "Lectura simulada o historica de precios; sin permisos para ejecutar ordenes.",
  },
  {
    name: "Market Structure",
    layer: "Estructura",
    description: "Clasifica tendencia, swings, BOS y CHoCH por temporalidad.",
  },
  {
    name: "Liquidity",
    layer: "Estructura",
    description: "Mapea maximos, minimos, barridas y pools visibles.",
  },
  {
    name: "FVG Detector",
    layer: "Estructura",
    description: "Detecta ineficiencias y zonas pendientes de mitigacion.",
  },
  {
    name: "Sessions",
    layer: "Datos",
    description: "Etiqueta Asia, Londres y Nueva York para contexto horario.",
  },
  {
    name: "Volume Profile",
    layer: "Confirmacion",
    description: "Calcula POC, VAH, VAL, HVN y LVN para contexto de volumen.",
  },
  {
    name: "Order Flow",
    layer: "Confirmacion",
    description: "Resume delta, agresion, absorcion e imbalances.",
  },
  {
    name: "News Analyzer",
    layer: "Datos",
    description: "Marca eventos macro de alto impacto y ventanas de riesgo.",
  },
  {
    name: "Sentiment Analyzer",
    layer: "Datos",
    description: "Evalua tono macro y sesgo informativo sin recomendar ejecucion.",
  },
  {
    name: "Returns Analyzer",
    layer: "Cuantitativo",
    description: "Mide retornos, distribucion y comportamiento reciente.",
  },
  {
    name: "Volatility Analyzer",
    layer: "Cuantitativo",
    description: "Calcula volatilidad rolling y compresion o expansion.",
  },
  {
    name: "Anomaly Detector",
    layer: "Cuantitativo",
    description: "Detecta z-scores extremos y movimientos fuera de rango.",
  },
  {
    name: "Regime Detector",
    layer: "Cuantitativo",
    description: "Clasifica rango, tendencia, alta volatilidad o sesion neutral.",
  },
  {
    name: "Backtest Analyzer",
    layer: "Reporte",
    description: "Resume metricas historicas del setup simulado.",
  },
  {
    name: "Monte Carlo",
    layer: "Riesgo",
    description: "Simula escenarios de capital y drawdown posible.",
  },
  {
    name: "VaR Calculator",
    layer: "Riesgo",
    description: "Estima perdida potencial bajo niveles de confianza definidos.",
  },
  {
    name: "Risk Manager",
    layer: "Riesgo",
    description: "Evalua exposicion, riesgo relativo y disciplina operativa.",
  },
  {
    name: "Report Generator",
    layer: "Reporte",
    description: "Genera reportes educativos con conclusion y nivel de confianza.",
  },
];

export const architecturePipeline: PipelineStage[] = [
  {
    title: "Datos",
    description: "Entrada historica o simulada y contexto horario.",
    modules: ["MT5 Connector", "Sessions"],
    accent: "cyan",
  },
  {
    title: "Estructura",
    description: "Direccion, swings, liquidez y zonas de ineficiencia.",
    modules: ["Market Structure", "Liquidity", "FVG Detector"],
    accent: "violet",
  },
  {
    title: "Volumen/Order Flow",
    description: "Aceptacion, rechazo, delta, absorcion e imbalance.",
    modules: ["Volume Profile", "Order Flow"],
    accent: "emerald",
  },
  {
    title: "Macro/Noticias",
    description: "Eventos de alto impacto y sentimiento informativo.",
    modules: ["News Analyzer", "Sentiment Analyzer"],
    accent: "amber",
  },
  {
    title: "Cuantitativo",
    description: "Retornos, volatilidad, anomalias y regimen.",
    modules: ["Returns Analyzer", "Volatility Analyzer", "Anomaly Detector", "Regime Detector"],
    accent: "cyan",
  },
  {
    title: "Riesgo",
    description: "Filtro de exposicion y escenarios de perdida simulada.",
    modules: ["Risk Manager", "Monte Carlo", "VaR Calculator"],
    accent: "amber",
  },
  {
    title: "Reporte",
    description: "Salida educativa, journal y backtesting.",
    modules: ["Report Generator", "Journal", "Backtesting"],
    accent: "emerald",
  },
];
