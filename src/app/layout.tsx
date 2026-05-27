import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESTUDIOS DE TRADING — Institutional Trading OS",
  description:
    "Plataforma educativa premium para estudiar trading institucional, order flow, backtesting, riesgo y análisis informativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  );
}
