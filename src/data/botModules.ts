export type BotModule = {
  name: string;
  layer: "Datos" | "Estructura" | "Confirmación" | "Cuantitativo" | "Riesgo" | "Reporte";
  description: string;
};

export type PipelineStage = {
  title: string;
  description: string;
  modules: string[];
  accent: "cyan" | "violet" | "emerald" | "amber";
};

export type FileTreeGroup = {
  root: string;
  files: Array<{ name: string; type: "file" | "folder"; label?: string }>;
};

export const botModules: BotModule[] = [
  {
    name: "MT5 Connector",
    layer: "Datos",
    description: "Lectura simulada o histórica de precios; sin permisos para ejecutar órdenes.",
  },
  {
    name: "Market Structure",
    layer: "Estructura",
    description: "Clasifica tendencia, swings, BOS y CHoCH por temporalidad.",
  },
  {
    name: "Liquidity",
    layer: "Estructura",
    description: "Mapea máximos, mínimos, barridas y pools visibles.",
  },
  {
    name: "FVG Detector",
    layer: "Estructura",
    description: "Detecta ineficiencias y zonas pendientes de mitigación.",
  },
  {
    name: "Sessions",
    layer: "Datos",
    description: "Etiqueta Asia, Londres y Nueva York para contexto horario.",
  },
  {
    name: "Volume Profile",
    layer: "Confirmación",
    description: "Calcula POC, VAH, VAL, HVN y LVN para contexto de volumen.",
  },
  {
    name: "Order Flow",
    layer: "Confirmación",
    description: "Resume delta, agresión, absorción e imbalances.",
  },
  {
    name: "News Analyzer",
    layer: "Datos",
    description: "Marca eventos macro de alto impacto y ventanas de riesgo.",
  },
  {
    name: "Sentiment Analyzer",
    layer: "Datos",
    description: "Evalúa tono macro y sesgo informativo sin recomendar ejecución.",
  },
  {
    name: "Returns Analyzer",
    layer: "Cuantitativo",
    description: "Mide retornos, distribución y comportamiento reciente.",
  },
  {
    name: "Volatility Analyzer",
    layer: "Cuantitativo",
    description: "Calcula volatilidad rolling y compresión o expansión.",
  },
  {
    name: "Anomaly Detector",
    layer: "Cuantitativo",
    description: "Detecta z-scores extremos y movimientos fuera de rango.",
  },
  {
    name: "Regime Detector",
    layer: "Cuantitativo",
    description: "Clasifica rango, tendencia, alta volatilidad o sesión neutral.",
  },
  {
    name: "Backtest Analyzer",
    layer: "Reporte",
    description: "Resume métricas históricas del setup simulado.",
  },
  {
    name: "Monte Carlo",
    layer: "Riesgo",
    description: "Simula escenarios de capital y drawdown posible.",
  },
  {
    name: "VaR Calculator",
    layer: "Riesgo",
    description: "Estima pérdida potencial bajo niveles de confianza definidos.",
  },
  {
    name: "Risk Manager",
    layer: "Riesgo",
    description: "Evalúa exposición, riesgo relativo y disciplina operativa.",
  },
  {
    name: "Report Generator",
    layer: "Reporte",
    description: "Genera reportes educativos con conclusión y nivel de confianza.",
  },
];

export const architecturePipeline: PipelineStage[] = [
  {
    title: "Datos",
    description: "Entrada histórica o simulada y contexto horario.",
    modules: ["MT5 Connector", "Sessions"],
    accent: "cyan",
  },
  {
    title: "Estructura",
    description: "Dirección, swings, liquidez y zonas de ineficiencia.",
    modules: ["Market Structure", "Liquidity", "FVG Detector"],
    accent: "violet",
  },
  {
    title: "Volumen/Order Flow",
    description: "Aceptación, rechazo, delta, absorción e imbalance.",
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
    description: "Retornos, volatilidad, anomalías y régimen.",
    modules: ["Returns Analyzer", "Volatility Analyzer", "Anomaly Detector", "Regime Detector"],
    accent: "cyan",
  },
  {
    title: "Riesgo",
    description: "Filtro de exposición y escenarios de pérdida simulada.",
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

export const repositoryTree: FileTreeGroup[] = [
  {
    root: "src/",
    files: [
      { name: "mt5_connector.py", type: "file", label: "analysis" },
      { name: "market_structure.py", type: "file", label: "analysis" },
      { name: "liquidity.py", type: "file", label: "analysis" },
      { name: "fvg_detector.py", type: "file", label: "analysis" },
      { name: "sessions.py", type: "file", label: "analysis" },
      { name: "volume_profile.py", type: "file", label: "analysis" },
      { name: "order_flow.py", type: "file", label: "analysis" },
      { name: "news_analyzer.py", type: "file", label: "analysis" },
      { name: "sentiment_analyzer.py", type: "file", label: "analysis" },
      { name: "returns_analyzer.py", type: "file", label: "analysis" },
      { name: "volatility_analyzer.py", type: "file", label: "analysis" },
      { name: "anomaly_detector.py", type: "file", label: "analysis" },
      { name: "regime_detector.py", type: "file", label: "analysis" },
      { name: "risk_manager.py", type: "file", label: "risk" },
      { name: "monte_carlo.py", type: "file", label: "risk" },
      { name: "var_calculator.py", type: "file", label: "risk" },
      { name: "report_generator.py", type: "file", label: "report" },
    ],
  },
  {
    root: "reports/",
    files: [
      { name: "daily/", type: "folder", label: "report" },
      { name: "weekly/", type: "folder", label: "report" },
      { name: "backtesting/", type: "folder", label: "report" },
      { name: "monte_carlo/", type: "folder", label: "risk" },
    ],
  },
  {
    root: "data/",
    files: [
      { name: "journal/", type: "folder", label: "report" },
      { name: "raw/", type: "folder", label: "analysis" },
      { name: "processed/", type: "folder", label: "analysis" },
    ],
  },
];
