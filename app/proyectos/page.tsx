import {
  Award,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Star,
  Code,
  Eye,
} from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos Misión 1 | G113 - IA Básico",
  description:
    "5 proyectos increíbles de análisis de datos con Python y Pandas, frontends con IA desarrollados por campistas. Dashboard interactivos, e-commerce, tutelas y más.",
  openGraph: {
    title: "🎯 Proyectos Misión 1 - Bootcamp IA G113",
    description:
      "Descubre 5 proyectos increíbles: análisis educativo, e-commerce gaming, tutelas en salud, universidad virtual y asesor de autos. ¡Demos en vivo!",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Proyectos de IA - Misión 1 G113",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🎯 Proyectos Misión 1 - Bootcamp IA G113",
    description:
      "5 proyectos increíbles con Python, Pandas y IA. Demos en vivo disponibles.",
    images: ["/logo.png"],
  },
};

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Análisis de Rendimiento de Estudiantes",
      descripcion:
        "Dashboard interactivo con análisis estadístico avanzado y visualizaciones dinámicas para el rendimiento académico. Incluye correlaciones, histogramas y métricas de desempeño educativo.",
      grupo: "Grupo 1",
      destacados: [
        "Dashboard Interactivo",
        "Análisis Estadístico",
        "Visualizaciones Dinámicas",
      ],
      estado: "Completado",
      calificacion: 9.3,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054199/DIAPOS/project1_bhbjyk.png",
      demoUrl: "https://danianclasesia-sys.github.io/analisis_datos/",
      categoria: "Análisis de Datos",
    },
    {
      id: 2,
      titulo: "CompuGamers - Venta de Videojuegos",
      descripcion:
        "Plataforma de e-commerce especializada en gaming con chat en vivo, catálogo completo de productos gaming, combos especiales y sistema de contacto integrado.",
      grupo: "Grupo 2",
      destacados: ["E-commerce Gaming", "Chat en Vivo", "Combos Especiales"],
      estado: "Completado",
      calificacion: 9.1,
      imagen: "../",
      demoUrl: "https://carlosch30.github.io/paginaweb/",
      categoria: "E-commerce",
    },
    {
      id: 3,
      titulo: "Analítica de Tutelas y Derechos de Petición",
      descripcion:
        "Sistema completo de análisis de tutelas en salud con dashboard avanzado, filtros dinámicos, visualizaciones por departamento y seguimiento de evolución temporal.",
      grupo: "Grupo 3",
      destacados: [
        "Dashboard Avanzado",
        "Filtros Dinámicos",
        "Análisis Temporal",
      ],
      estado: "Completado",
      calificacion: 9.5,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054193/DIAPOS/project2_gx3o6u.png",
      demoUrl: "https://alanalisisia.github.io/tutela3/",
      categoria: "Análisis de Datos",
    },
    {
      id: 4,
      titulo: "UniClass - Universidad Virtual",
      descripcion:
        "Plataforma educativa moderna con sistema de cursos, profesores, recursos digitales, biblioteca virtual y asistente virtual integrado para estudiantes universitarios.",
      grupo: "Grupo 4",
      destacados: [
        "Plataforma Educativa",
        "Asistente Virtual",
        "Biblioteca Digital",
      ],
      estado: "Completado",
      calificacion: 9.7,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054195/DIAPOS/Project_4_s8x5uh.png",
      demoUrl:
        "https://alvaros1705-cloud.github.io/sistemasoperativosconalvarito/",
      categoria: "Educación",
    },
    {
      id: 5,
      titulo: "Luis Arturo - Asesor Virtual de Autos",
      descripcion:
        "Plataforma personalizada de venta de autos con inventario dinámico, sistema de contacto WhatsApp, testimonios de clientes y servicios de financiamiento.",
      grupo: "Grupo 5",
      destacados: [
        "Inventario Dinámico",
        "WhatsApp Integration",
        "Sistema de Testimonios",
      ],
      estado: "Completado",
      calificacion: 9.4,
      imagen:
        "https://res.cloudinary.com/djrdozcdw/image/upload/v1756054198/DIAPOS/project_3_r676zi.png",
      demoUrl:
        "https://becerraflorezluisarturo-art.github.io/VENTADECARROSLUISARTURO/",
      categoria: "Comercio",
    },
  ];

  const estadisticas = {
    totalProyectos: proyectos.length,
    completados: proyectos.filter((p) => p.estado === "Completado").length,
    enDesarrollo: proyectos.filter((p) => p.estado === "En desarrollo").length,
    promedioCalificacion:
      proyectos
        .filter((p) => p.calificacion !== null)
        .reduce((acc, p) => acc + (p.calificacion || 0), 0) /
      proyectos.filter((p) => p.calificacion !== null).length,
  };

  const categorias = Array.from(new Set(proyectos.map((p) => p.categoria)));

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-purple-900 to-tech-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-tech-purple-600 to-tech-pink-500 rounded-2xl mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-tech-purple-400 to-tech-pink-400 bg-clip-text text-transparent">
                Proyectos Misión 1
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proyectos de análisis de datos con Python, Pandas y frontends con
              IA desarrollados por nuestros campistas
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-12 bg-tech-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="tech-card text-center">
              <Award className="w-8 h-8 text-tech-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {estadisticas.totalProyectos}
              </div>
              <div className="text-sm text-gray-400">Total Proyectos</div>
            </div>
            <div className="tech-card text-center">
              <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {estadisticas.completados}
              </div>
              <div className="text-sm text-gray-400">Completados</div>
            </div>
            <div className="tech-card text-center">
              <Code className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {estadisticas.enDesarrollo}
              </div>
              <div className="text-sm text-gray-400">En Desarrollo</div>
            </div>
            <div className="tech-card text-center">
              <Star className="w-8 h-8 text-tech-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {estadisticas.promedioCalificacion.toFixed(1)}
              </div>
              <div className="text-sm text-gray-400">Promedio General</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen de la misión */}
      <section className="py-12 bg-tech-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-tech-purple-400 to-tech-pink-400 bg-clip-text text-transparent">
              Misión 1: Análisis de Datos y Frontend con IA
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Los campistas desarrollaron proyectos utilizando Python y Pandas
            para análisis de datos, creando frontends interactivos con
            herramientas de IA para consultar información de manera inteligente.
          </p>
        </div>
      </section>

      {/* Grid de proyectos */}

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-tech-purple-600 to-tech-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Tienes una idea para tu proyecto?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            ¡Es tu turno de crear algo increíble! Revisa los recursos y comienza
            tu propio proyecto de IA
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/recursos"
              className="bg-white text-tech-purple-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver Recursos
            </a>
            <a
              href="/quiz"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-tech-purple-600 transition-colors"
            >
              Practicar con Quiz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
