import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damian Larocca | Editor de reels y video vertical",
  description: "Portfolio de Damian Larocca. Edición de reels, videos cortos y contenido vertical para marcas, creadores y campañas digitales.",
  openGraph: {
    title: "Damian Larocca | Video Editor",
    description: "Edición de reels y videos cortos en formato vertical.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
