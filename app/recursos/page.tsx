import {
  FileText,
  Video,
  Link as LinkIcon,
  Download,
  ExternalLink,
  BookOpen,
  Code,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos de Aprendizaje | G123 - IA Básico",
  description:
    "Materiales de la Misión 1: diapositivas de fundamentos de IA, documentos para diligenciar, herramientas de IA y recursos para aprender fundamentos de IA.",
  openGraph: {
    title:
      "📚 Recursos de IA - Misión 1 Fundamentos de Inteligencia Artificial",
    description:
      "Accede a materiales de machine learning, diapositivas de regresión, documentos de proyecto y herramientas esenciales para IA.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Recursos de Machine Learning - G123",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "📚 Recursos de IA - Misión 2 Machine Learning",
    description:
      "Materiales de machine learning, herramientas y recursos para aprender IA.",
    images: ["/logo.png"],
  },
};

export default function Recursos() {
  const categorias = [
    {
      id: "documentos",
      titulo: "Documentos y PDFs",
      icono: FileText,
      color: "from-blue-500 to-indigo-600",
      recursos: [
        {
          titulo: "Guía Completa de Machine Learning",
          descripcion: "Documento comprehensive sobre algoritmos de ML",
          tipo: "PDF",
          tamaño: "2.5 MB",
          url: "#",
        },
        {
          titulo: "Introducción a Redes Neuronales",
          descripcion: "Conceptos básicos y arquitecturas fundamentales",
          tipo: "PDF",
          tamaño: "1.8 MB",
          url: "#",
        },
        {
          titulo: "Ética en Inteligencia Artificial",
          descripcion: "Marco ético y consideraciones importantes",
          tipo: "PDF",
          tamaño: "950 KB",
          url: "#",
        },
      ],
    },
    {
      id: "videos",
      titulo: "Videos y Tutoriales",
      icono: Video,
      color: "from-red-500 to-pink-600",
      recursos: [
        {
          titulo: "Fundamentos de IA - Clase 1",
          descripcion: "Introducción teórica a la Inteligencia Artificial",
          tipo: "Video",
          duracion: "45 min",
          url: "#",
        },
        {
          titulo: "Python para IA - Tutorial Práctico",
          descripcion: "Configuración del entorno y primeros pasos",
          tipo: "Video",
          duracion: "1h 20min",
          url: "#",
        },
        {
          titulo: "Implementando tu primera Red Neuronal",
          descripcion: "Ejercicio práctico paso a paso",
          tipo: "Video",
          duracion: "55 min",
          url: "#",
        },
      ],
    },
    {
      id: "codigo",
      titulo: "Código y Ejercicios",
      icono: Code,
      color: "from-green-500 to-emerald-600",
      recursos: [
        {
          titulo: "Repositorio de Ejercicios - GitHub",
          descripcion: "Colección completa de ejercicios prácticos",
          tipo: "Repositorio",
          lenguaje: "Python",
          url: "https://github.com/G123-ia-basico/ejercicios",
        },
        {
          titulo: "Plantillas de Proyectos",
          descripcion: "Templates para iniciar proyectos de IA",
          tipo: "Código",
          lenguaje: "Jupyter",
          url: "#",
        },
        {
          titulo: "Datasets de Práctica",
          descripcion: "Conjuntos de datos para experimentar",
          tipo: "Datos",
          formato: "CSV/JSON",
          url: "#",
        },
      ],
    },
    {
      id: "enlaces",
      titulo: "Enlaces Externos",
      icono: Globe,
      color: "from-purple-500 to-pink-600",
      recursos: [
        {
          titulo: "Coursera - Machine Learning Course",
          descripcion: "Curso de Andrew Ng (Stanford)",
          tipo: "Curso Online",
          plataforma: "Coursera",
          url: "https://coursera.org/learn/machine-learning",
        },
        {
          titulo: "Kaggle Learn",
          descripcion: "Micro-cursos gratuitos de ciencia de datos",
          tipo: "Plataforma",
          plataforma: "Kaggle",
          url: "https://kaggle.com/learn",
        },
        {
          titulo: "TensorFlow Documentation",
          descripcion: "Documentación oficial de TensorFlow",
          tipo: "Documentación",
          plataforma: "Google",
          url: "https://tensorflow.org",
        },
      ],
    },
  ];

  const herramientas = [
    {
      nombre: "Python",
      descripcion: "Lenguaje principal para IA",
      logo: "🐍",
      url: "https://python.org",
    },
    {
      nombre: "Jupyter Notebook",
      descripcion: "Entorno interactivo de desarrollo",
      logo: "📓",
      url: "https://jupyter.org",
    },
    {
      nombre: "TensorFlow",
      descripcion: "Framework de deep learning",
      logo: "🧠",
      url: "https://tensorflow.org",
    },
    {
      nombre: "Scikit-learn",
      descripcion: "Biblioteca de machine learning",
      logo: "🤖",
      url: "https://scikit-learn.org",
    },
    {
      nombre: "Pandas",
      descripcion: "Manipulación de datos",
      logo: "🐼",
      url: "https://pandas.pydata.org",
    },
    {
      nombre: "Google Colab",
      descripcion: "Notebooks en la nube",
      logo: "☁️",
      url: "https://colab.research.google.com",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-green-900 to-tech-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-cyan-500 rounded-2xl mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Recursos de Aprendizaje
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Materiales, herramientas y enlaces útiles para potenciar tu
              aprendizaje en Inteligencia Artificial
            </p>
          </div>
        </div>
      </section>

      {/* Herramientas esenciales */}
      <section className="py-16 bg-tech-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Herramientas Esenciales
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Software y plataformas que utilizamos en el curso
            </p>
          </div>

          {/* Material y documentos entregables de misión 2*/}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Misión 1: Fundamentos de Inteligencia Artificial
                </span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Materiales para aprender fundamentos de IA y herramientas para
                creacion de aplicaciones web y chatbots
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Diapositivas */}
              <div className="tech-card group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Recursos Misión 1
                        </h4>
                        <span className="text-sm text-orange-400">
                          Acceso a google drive
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Materiales para aprender fundamentos de IA
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1KKovXhlPRvKOmvNMwEfwSP1zmtl_GhgS?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Acceso a google drive
                  </a>
                </div>
              </div>

              {/* Documento a diligenciar */}
              <div className="tech-card group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Base para Proyecto IA
                        </h4>
                        <span className="text-sm text-blue-400">
                          Documento DOCX
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Plantilla de proyecto para diligenciar tu proyecto de IA
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1cumkV2MLEEWGElzY6fkNs7rLZ76mj29y?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Acceso al Drive
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">
                  Misión 2: Aplicacion de Machine Learning con Teachable Machine
                </span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Materiales para aprender a usar Teachable Machine y crear
                aplicaciones de IA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Diapositivas */}
              <div className="tech-card group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Recursos Misión 2
                        </h4>
                        <span className="text-sm text-orange-400">
                          Acceso a google drive
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Materiales para aprender a usar Teachable Machine
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1UdFQR7XVXwD9ZRedY7iQTjALEqHIUywv?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Acceso a google drive
                  </a>
                </div>
              </div>

              {/* Documento a diligenciar */}
              <div className="tech-card group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Base para Proyecto IA
                        </h4>
                        <span className="text-sm text-blue-400">
                          Documento DOCX
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Plantilla de proyecto para diligenciar tu proyecto de IA
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1PetgorKqeAh0itoDTNiYd7bPI8-c9tGR?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Acceso al Drive
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-400 to-red-400 bg-clip-text text-transparent">
                  Misión 3: Automatizacion basica con n8n
                </span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Materiales para aprender a usar n8n y automatizar tareas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Diapositivas */}
              <div className="tech-card group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Recursos Misión 3
                        </h4>
                        <span className="text-sm text-orange-400">
                          Acceso a google drive
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Materiales para aprender a usar n8n
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1gQFH3a5BVA33rvlixL0Hj-ofEp2ZYY-U?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Acceso a google drive
                  </a>
                </div>
              </div>

              {/* Documento a diligenciar */}
              <div className="tech-card group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Base para Proyecto IA
                        </h4>
                        <span className="text-sm text-blue-400">
                          Documento DOCX
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Plantilla de proyecto para diligenciar tu proyecto de IA
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1OOonfSCfiiGz11uok2LZRRkXve6mVNaA?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Acceso al Drive
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {herramientas.map((herramienta, index) => (
              <a
                key={index}
                href={herramienta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{herramienta.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                      {herramienta.nombre}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {herramienta.descripcion}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías de recursos */}

      {/* Sección de apoyo */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Necesitas más recursos?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Si no encuentras lo que buscas, no dudes en contactarnos o revisar
            nuestro glosario
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/glosario"
              className="bg-white text-green-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver Glosario
            </Link>
            <Link
              href="/quiz"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Practicar con Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
