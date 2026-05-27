export type ReportLine = {
  label: string;
  value: string;
  tone?: "cyan" | "violet" | "emerald" | "amber";
};

export const reportExample: ReportLine[] = [
  { label: "ACTIVO", value: "EUR/USD", tone: "cyan" },
  { label: "SESIÓN", value: "Londres" },
  { label: "DIRECCIÓN H4", value: "Bajista", tone: "violet" },
  { label: "DIRECCIÓN H1", value: "Bajista", tone: "violet" },
  { label: "ESTRUCTURA M15", value: "Barrida de liquidez + CHoCH bajista", tone: "cyan" },
  { label: "FVG", value: "FVG bajista pendiente de mitigación" },
  { label: "VOLUME PROFILE", value: "Precio cerca de HVN", tone: "emerald" },
  { label: "ORDER FLOW", value: "Esperar absorción o imbalance vendedor" },
  { label: "NOTICIAS", value: "USD alto impacto en 2 horas", tone: "amber" },
  { label: "CUANTITATIVO", value: "Volatilidad media, retorno normal" },
  { label: "RIESGO", value: "Medio", tone: "amber" },
  { label: "CONFIANZA DEL SETUP", value: "68%", tone: "emerald" },
  {
    label: "RECOMENDACIÓN",
    value: "No ejecutar todavía. Esperar confirmación en M5.",
    tone: "amber",
  },
];
