import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G123 - Inteligencia Artificial Básico",
  description:
    "Bootcamp de IA con proyectos de análisis de datos, machine learning y frontends con IA. Misiones prácticas desarrolladas por campistas de Talento Tech Cucuta.",
  keywords: [
    "IA",
    "Inteligencia Artificial",
    "Talento Tech",
    "Bootcamp",
    "Machine Learning",
    "Python",
    "Pandas",
    "Análisis de Datos",
    "Proyectos IA",
  ],
  authors: [{ name: "G123 Talento Tech Cucuta" }],
  creator: "G123 - Inteligencia Artificial Básico",
  publisher: "Talento Tech Cucuta",

  // Open Graph para WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://G123-inteligencia-artificial.vercel.app/",
    siteName: "G123 - IA Básico",
    title: "🚀 G123 - Bootcamp de Inteligencia Artificial",
    description:
      "Proyectos increíbles de IA: análisis de datos, machine learning y frontends inteligentes. Misión 1 y 2 completadas por campistas de Talento Tech.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "G123 - Bootcamp de Inteligencia Artificial",
        type: "image/png",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "🚀 G123 - Bootcamp de Inteligencia Artificial",
    description:
      "Proyectos increíbles de IA: análisis de datos, machine learning y frontends inteligentes desarrollados por campistas.",
    images: ["/logo.png"],
    creator: "@G123IA",
  },

  // Robots y SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Verificación
  verification: {
    google: "tu-codigo-google-aqui",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
      <Analytics />
    </html>
  );
}
