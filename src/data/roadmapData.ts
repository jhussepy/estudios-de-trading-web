export type RoadmapDifficulty = "Base" | "Media" | "Alta" | "Profesional";
export type RoadmapStatus = "En curso" | "Planificado" | "Bloque clave" | "Integración";
export type RoadmapAccent = "cyan" | "violet" | "emerald" | "amber" | "rose";

export type RoadmapWeek = {
  week: number;
  title: string;
  repoName: string;
  repoDescription: string;
  objective: string;
  concepts: string[];
  practice: string;
  deliverable: string;
  difficulty: RoadmapDifficulty;
  status: RoadmapStatus;
  module: string;
};

export type RoadmapPhase = {
  id: string;
  title: string;
  description: string;
  weeks: number[];
  difficulty: RoadmapDifficulty;
  accent: RoadmapAccent;
};

export const roadmapData: RoadmapWeek[] = [
  {
    week: 1,
    title: "Estructura de mercado",
    repoName: "week-01-market-structure",
    repoDescription: "Define tendencia, swings, BOS y CHoCH para construir dirección institucional.",
    objective: "Construir lectura direccional con swings, ruptura y cambio de carácter.",
    concepts: ["structure", "BOS", "CHoCH", "foundation"],
    practice: "Marcar estructura H4, H1 y M15 en 20 sesiones históricas.",
    deliverable: "strategy_rules.md",
    difficulty: "Base",
    status: "En curso",
    module: "src/market_structure.py",
  },
  {
    week: 2,
    title: "Liquidez y sesiones",
    repoName: "week-02-liquidity-sessions",
    repoDescription: "Mapea máximos, mínimos, barridas y sesiones ICT para ordenar contexto.",
    objective: "Detectar barridas y zonas de liquidez por horario institucional.",
    concepts: ["liquidity", "sessions", "ICT", "foundation"],
    practice: "Mapear rangos Asia, Londres y Nueva York con capturas comentadas.",
    deliverable: "sessions.py, liquidity.py",
    difficulty: "Base",
    status: "Planificado",
    module: "src/liquidity.py",
  },
  {
    week: 3,
    title: "Volume Profile básico",
    repoName: "week-03-volume-profile",
    repoDescription: "Aprende POC, VAH, VAL, HVN y LVN para identificar aceptación y rechazo.",
    objective: "Leer distribución de volumen para ubicar zonas de aceptación y rechazo.",
    concepts: ["volume", "profile", "POC", "intermediate"],
    practice: "Comparar perfiles diarios y semanales en EUR/USD y XAU/USD.",
    deliverable: "volume_profile.py",
    difficulty: "Media",
    status: "Planificado",
    module: "src/volume_profile.py",
  },
  {
    week: 4,
    title: "Replay con Volume Profile",
    repoName: "week-04-replay-volume-profile",
    repoDescription: "Valida aceptación, rechazo y reacción del precio usando replay estructurado.",
    objective: "Validar reacción del precio ante zonas de alto y bajo volumen.",
    concepts: ["replay", "volume", "journal", "review"],
    practice: "Crear bitácora de replay con hipótesis antes y después del movimiento.",
    deliverable: "volume_profile_replay_journal.md",
    difficulty: "Media",
    status: "Planificado",
    module: "reports/backtesting/replay_journal.md",
  },
  {
    week: 5,
    title: "ICT + Volume Profile",
    repoName: "week-05-ict-volume-confluence",
    repoDescription: "Combina FVG, liquidez y nodos de volumen para escenarios de confluencia.",
    objective: "Combinar liquidez, FVG y nodos de volumen para escenarios de confluencia.",
    concepts: ["FVG", "liquidity", "HVN/LVN", "confluence"],
    practice: "Diseñar checklist de confluencias con filtros de contexto.",
    deliverable: "confluence_engine.py",
    difficulty: "Alta",
    status: "Bloque clave",
    module: "src/confluence_engine.py",
  },
  {
    week: 6,
    title: "Order Flow básico",
    repoName: "week-06-order-flow-basic",
    repoDescription: "Interpreta delta, Cumulative Delta y agresión sin anticipar ejecución.",
    objective: "Interpretar agresión compradora y vendedora sin anticipar ejecución.",
    concepts: ["order-flow", "delta", "aggression", "advanced"],
    practice: "Contrastar delta con estructura y zonas de reacción.",
    deliverable: "order_flow.py",
    difficulty: "Alta",
    status: "Planificado",
    module: "src/order_flow.py",
  },
  {
    week: 7,
    title: "Absorción e imbalances",
    repoName: "week-07-absorption-imbalances",
    repoDescription: "Clasifica absorción, traders atrapados e imbalances como filtros de confirmación.",
    objective: "Identificar traders atrapados, absorción y desequilibrios operativos.",
    concepts: ["absorption", "imbalance", "alerts", "advanced"],
    practice: "Clasificar 30 eventos por tipo de absorción o ruptura fallida.",
    deliverable: "order_flow_alerts.py",
    difficulty: "Alta",
    status: "Bloque clave",
    module: "src/order_flow_alerts.py",
  },
  {
    week: 8,
    title: "Noticias y sentimiento macro",
    repoName: "week-08-macro-sentiment",
    repoDescription: "Filtra DXY, USD, FOMC, NFP e inflación antes de confiar en un setup.",
    objective: "Filtrar contextos de alto impacto para reducir decisiones impulsivas.",
    concepts: ["macro", "DXY", "news", "sentiment"],
    practice: "Crear agenda macro semanal con sesgo esperado y ventana de riesgo.",
    deliverable: "news_analyzer.py, sentiment_analyzer.py",
    difficulty: "Media",
    status: "Planificado",
    module: "src/news_analyzer.py",
  },
  {
    week: 9,
    title: "Retornos, volatilidad y anomalías",
    repoName: "week-09-quant-volatility",
    repoDescription: "Mide retornos logarítmicos, z-score y volatilidad rolling para detectar anomalías.",
    objective: "Medir comportamiento estadístico y detectar condiciones fuera de rango.",
    concepts: ["quant", "volatility", "z-score", "anomaly"],
    practice: "Generar reportes de volatilidad y anomalías por sesión.",
    deliverable: "returns_analyzer.py, volatility_analyzer.py, anomaly_detector.py",
    difficulty: "Alta",
    status: "Planificado",
    module: "src/volatility_analyzer.py",
  },
  {
    week: 10,
    title: "Backtesting y métricas",
    repoName: "week-10-backtesting-metrics",
    repoDescription: "Convierte setups en evidencia con win rate, profit factor, expectancy y drawdown.",
    objective: "Convertir setups en evidencia medible con resultados auditables.",
    concepts: ["backtesting", "metrics", "expectancy", "review"],
    practice: "Registrar 100 backtests con capturas, reglas y métricas.",
    deliverable: "backtest_analyzer.py, performance_tracker.py",
    difficulty: "Profesional",
    status: "Bloque clave",
    module: "src/backtest_analyzer.py",
  },
  {
    week: 11,
    title: "VaR, Monte Carlo y riesgo profesional",
    repoName: "week-11-monte-carlo-risk",
    repoDescription: "Simula pérdida potencial, dispersión, drawdown y riesgo de ruina.",
    objective: "Estimar pérdida potencial, dispersión y riesgo de ruina del sistema.",
    concepts: ["risk", "VaR", "Monte Carlo", "professional"],
    practice: "Simular curvas de capital con diferentes límites de riesgo.",
    deliverable: "var_calculator.py, monte_carlo.py, risk_simulator.py",
    difficulty: "Profesional",
    status: "Planificado",
    module: "src/risk_simulator.py",
  },
  {
    week: 12,
    title: "Integración completa del sistema",
    repoName: "week-12-system-integration",
    repoDescription: "Integra módulos, reportes, README y pruebas para cerrar el sistema educativo.",
    objective: "Conectar módulos de análisis, validación, riesgo y reportes educativos.",
    concepts: ["integration", "reports", "tests", "readme"],
    practice: "Producir un informe completo con checklist, métricas y revisión final.",
    deliverable: "report_generator.py, README.md, tests",
    difficulty: "Profesional",
    status: "Integración",
    module: "src/report_generator.py",
  },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "fundamentos-ict",
    title: "Fase 1: Fundamentos ICT",
    description: "Base estructural para leer dirección, swings, liquidez y sesiones.",
    weeks: [1, 2],
    difficulty: "Base",
    accent: "cyan",
  },
  {
    id: "volumen-replay",
    title: "Fase 2: Volumen y Replay",
    description: "Lectura de aceptación, rechazo y confluencia con zonas de volumen.",
    weeks: [3, 4, 5],
    difficulty: "Media",
    accent: "violet",
  },
  {
    id: "order-flow",
    title: "Fase 3: Order Flow",
    description: "Confirmación por delta, absorción, imbalances y agresión.",
    weeks: [6, 7],
    difficulty: "Alta",
    accent: "emerald",
  },
  {
    id: "macro-quant",
    title: "Fase 4: Macro y Cuantitativo",
    description: "Filtro macro y medición estadística para evitar contextos débiles.",
    weeks: [8, 9],
    difficulty: "Alta",
    accent: "amber",
  },
  {
    id: "riesgo-integracion",
    title: "Fase 5: Backtesting, Riesgo e Integración",
    description: "Validación, simulación de riesgo y reporte final del sistema.",
    weeks: [10, 11, 12],
    difficulty: "Profesional",
    accent: "rose",
  },
];
