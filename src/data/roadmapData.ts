export type RoadmapDifficulty = "Base" | "Media" | "Alta" | "Profesional";
export type RoadmapStatus = "En curso" | "Planificado" | "Bloque clave" | "Integracion";
export type RoadmapAccent = "cyan" | "violet" | "emerald" | "amber" | "rose";

export type RoadmapWeek = {
  week: number;
  title: string;
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
    objective: "Construir lectura direccional con swings, ruptura y cambio de caracter.",
    concepts: ["tendencia", "swings", "BOS", "CHoCH"],
    practice: "Marcar estructura H4, H1 y M15 en 20 sesiones historicas.",
    deliverable: "strategy_rules.md",
    difficulty: "Base",
    status: "En curso",
    module: "market_structure.py",
  },
  {
    week: 2,
    title: "Liquidez y sesiones",
    objective: "Detectar barridas y zonas de liquidez por horario institucional.",
    concepts: ["maximo/minimo asiatico", "barridas", "sesiones ICT"],
    practice: "Mapear rangos Asia, Londres y Nueva York con capturas comentadas.",
    deliverable: "sessions.py, liquidity.py",
    difficulty: "Base",
    status: "Planificado",
    module: "liquidity.py",
  },
  {
    week: 3,
    title: "Volume Profile basico",
    objective: "Leer distribucion de volumen para ubicar zonas de aceptacion y rechazo.",
    concepts: ["POC", "VAH", "VAL", "HVN", "LVN"],
    practice: "Comparar perfiles diarios y semanales en EUR/USD y XAU/USD.",
    deliverable: "volume_profile.py",
    difficulty: "Media",
    status: "Planificado",
    module: "volume_profile.py",
  },
  {
    week: 4,
    title: "Replay con Volume Profile",
    objective: "Validar reaccion del precio ante zonas de alto y bajo volumen.",
    concepts: ["aceptacion", "rechazo", "zonas de reaccion"],
    practice: "Crear bitacora de replay con hipotesis antes y despues del movimiento.",
    deliverable: "volume_profile_replay_journal.md",
    difficulty: "Media",
    status: "Planificado",
    module: "replay_journal.md",
  },
  {
    week: 5,
    title: "ICT + Volume Profile",
    objective: "Combinar liquidez, FVG y nodos de volumen para escenarios de confluencia.",
    concepts: ["FVG", "liquidez", "POC/HVN/LVN"],
    practice: "Disenar checklist de confluencias con filtros de contexto.",
    deliverable: "confluence_engine.py",
    difficulty: "Alta",
    status: "Bloque clave",
    module: "confluence_engine.py",
  },
  {
    week: 6,
    title: "Order Flow basico",
    objective: "Interpretar agresion compradora y vendedora sin anticipar ejecucion.",
    concepts: ["Delta", "Cumulative Delta", "agresion"],
    practice: "Contrastar delta con estructura y zonas de reaccion.",
    deliverable: "order_flow.py",
    difficulty: "Alta",
    status: "Planificado",
    module: "order_flow.py",
  },
  {
    week: 7,
    title: "Absorcion e imbalances",
    objective: "Identificar traders atrapados, absorcion y desequilibrios operativos.",
    concepts: ["trapped traders", "absorcion", "imbalance"],
    practice: "Clasificar 30 eventos por tipo de absorcion o ruptura fallida.",
    deliverable: "order_flow_alerts.py",
    difficulty: "Alta",
    status: "Bloque clave",
    module: "order_flow_alerts.py",
  },
  {
    week: 8,
    title: "Noticias y sentimiento macro",
    objective: "Filtrar contextos de alto impacto para reducir decisiones impulsivas.",
    concepts: ["DXY", "USD", "FOMC", "NFP", "inflacion"],
    practice: "Crear agenda macro semanal con sesgo esperado y ventana de riesgo.",
    deliverable: "news_analyzer.py, sentiment_analyzer.py",
    difficulty: "Media",
    status: "Planificado",
    module: "news_analyzer.py",
  },
  {
    week: 9,
    title: "Retornos, volatilidad y anomalias",
    objective: "Medir comportamiento estadistico y detectar condiciones fuera de rango.",
    concepts: ["retornos logaritmicos", "z-score", "volatilidad rolling"],
    practice: "Generar reportes de volatilidad y anomalias por sesion.",
    deliverable: "returns_analyzer.py, volatility_analyzer.py, anomaly_detector.py",
    difficulty: "Alta",
    status: "Planificado",
    module: "volatility_analyzer.py",
  },
  {
    week: 10,
    title: "Backtesting y metricas",
    objective: "Convertir setups en evidencia medible con resultados auditables.",
    concepts: ["win rate", "profit factor", "expectancy", "drawdown"],
    practice: "Registrar 100 backtests con capturas, reglas y metricas.",
    deliverable: "backtest_analyzer.py, performance_tracker.py",
    difficulty: "Profesional",
    status: "Bloque clave",
    module: "backtest_analyzer.py",
  },
  {
    week: 11,
    title: "VaR, Monte Carlo y riesgo profesional",
    objective: "Estimar perdida potencial, dispersion y riesgo de ruina del sistema.",
    concepts: ["Value at Risk", "simulacion Monte Carlo", "riesgo de ruina"],
    practice: "Simular curvas de capital con diferentes limites de riesgo.",
    deliverable: "var_calculator.py, monte_carlo.py, risk_simulator.py",
    difficulty: "Profesional",
    status: "Planificado",
    module: "risk_simulator.py",
  },
  {
    week: 12,
    title: "Integracion completa del sistema",
    objective: "Conectar modulos de analisis, validacion, riesgo y reportes educativos.",
    concepts: ["reporte final", "arquitectura modular", "validacion"],
    practice: "Producir un informe completo con checklist, metricas y revision final.",
    deliverable: "report_generator.py, README.md, tests",
    difficulty: "Profesional",
    status: "Integracion",
    module: "report_generator.py",
  },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "fundamentos-ict",
    title: "Fase 1: Fundamentos ICT",
    description: "Base estructural para leer direccion, swings, liquidez y sesiones.",
    weeks: [1, 2],
    difficulty: "Base",
    accent: "cyan",
  },
  {
    id: "volumen-replay",
    title: "Fase 2: Volumen y Replay",
    description: "Lectura de aceptacion, rechazo y confluencia con zonas de volumen.",
    weeks: [3, 4, 5],
    difficulty: "Media",
    accent: "violet",
  },
  {
    id: "order-flow",
    title: "Fase 3: Order Flow",
    description: "Confirmacion por delta, absorcion, imbalances y agresion.",
    weeks: [6, 7],
    difficulty: "Alta",
    accent: "emerald",
  },
  {
    id: "macro-quant",
    title: "Fase 4: Macro y Cuantitativo",
    description: "Filtro macro y medicion estadistica para evitar contextos debiles.",
    weeks: [8, 9],
    difficulty: "Alta",
    accent: "amber",
  },
  {
    id: "riesgo-integracion",
    title: "Fase 5: Backtesting, Riesgo e Integracion",
    description: "Validacion, simulacion de riesgo y reporte final del sistema.",
    weeks: [10, 11, 12],
    difficulty: "Profesional",
    accent: "rose",
  },
];
