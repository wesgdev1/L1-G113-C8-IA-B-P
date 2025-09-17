import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Users,
  BookOpen,
  Award,
  ChevronRight,
  Sparkles,
  Target,
  Clock,
} from "lucide-react";
import Viewer360 from "./components/Viewer360";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>

        {/* Efectos de fondo */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-tech-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech-cyan-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Logo y título principal */}
            <div className="space-y-6">
              <div className="flex justify-center pt-10">
                <div className="w-48 h-32  pt-4">
                  <Image
                    src="https://res.cloudinary.com/djrdozcdw/image/upload/v1755995891/logo_q33kuh.png"
                    alt="Talento Tech Logo"
                    width={228}
                    height={228}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  G113
                </span>
                <br />
                <span className="bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
                  INTELIGENCIA
                </span>
                <br />
                <span className="bg-gradient-to-r from-tech-cyan-400 to-tech-purple-400 bg-clip-text text-transparent">
                  ARTIFICIAL
                </span>
              </h1>

              <div className="inline-block px-6 py-3 bg-gradient-to-r from-tech-purple-600/20 to-tech-cyan-600/20 rounded-full border border-tech-purple-500/30">
                <span className="text-xl font-semibold text-tech-purple-300">
                  BÁSICO
                </span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explorando el futuro de la tecnología con
              <span className="text-tech-cyan-400 font-semibold">
                {" "}
                Talento Tech Oriente
              </span>
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/quiz" className="tech-button">
                Comenzar Aprendizaje
                <ChevronRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link href="/proyectos" className="tech-button-outline">
                Ver Proyectos
              </Link>
            </div>

            {/* Estadísticas del curso */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <div className="tech-card text-center">
                <Clock className="w-8 h-8 text-tech-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">159</div>
                <div className="text-sm text-gray-400">Horas de Formación</div>
              </div>
              <div className="tech-card text-center">
                <Users className="w-8 h-8 text-tech-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-400">Estudiantes</div>
              </div>
              <div className="tech-card text-center">
                <BookOpen className="w-8 h-8 text-tech-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-gray-400">Módulos</div>
              </div>
              <div className="tech-card text-center">
                <Award className="w-8 h-8 text-tech-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Proyectos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de fotos del salón */}
      <section className="py-20 bg-tech-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
                Nuestro Salón de Clases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Donde la magia de la IA cobra vida. Conoce a nuestros estudiantes
              y el ambiente de aprendizaje.
            </p>
          </div>

          {/* Grid de fotos reales del salón */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Introducción a Python para IA",
                description: "Primeros pasos en programación con Python",
                image:
                  "https://res.cloudinary.com/djrdozcdw/image/upload/v1755996310/20250806_162735_uzaw6b.jpg",
              },
              {
                title: "Sesión con ChatBase",
                description: "Explorando herramientas de IA conversacional",
                image:
                  "https://res.cloudinary.com/djrdozcdw/image/upload/v1755996307/20250811_152827_x1wjrp.jpg",
              },
              {
                title: "Explicación de Cursor IDE",
                description: "Trabajando con editores potenciados por IA",
                image:
                  "https://res.cloudinary.com/djrdozcdw/image/upload/v1755996305/20250808_163254_rgoia3.jpg",
              },
              {
                title: "Despliegues ",
                description: "Llevando nuestros proyectos de IA a producción",
                image:
                  "https://res.cloudinary.com/djrdozcdw/image/upload/v1755996301/20250811_152849_rtpp37.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="tech-card group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de vista 360° */}
      <section className="py-20 bg-gradient-to-b from-tech-dark/30 to-tech-dark/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
                Recorrido Virtual 360°
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sumérgete en nuestro espacio de aprendizaje. Explora cada rincón
              de nuestro salón de clases con esta experiencia inmersiva de 360
              grados.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Viewer360
              panoravenUrl="https://panoraven.com/es/embed/6Pif2811rO"
              title="Vista Completa del Salón G113"
            />
          </div>

          {/* Características del tour virtual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="tech-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-tech-purple-600 to-tech-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">360°</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Vista Completa
              </h3>
              <p className="text-gray-400 text-sm">
                Explora todo el salón girando en cualquier dirección
              </p>
            </div>

            <div className="tech-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-tech-cyan-600 to-tech-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Zoom Interactivo
              </h3>
              <p className="text-gray-400 text-sm">
                Acércate para ver los detalles de nuestro equipamiento
              </p>
            </div>

            <div className="tech-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-tech-purple-600 to-tech-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🖱️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Controles Fáciles
              </h3>
              <p className="text-gray-400 text-sm">
                Navega intuitivamente con el mouse o controles táctiles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de objetivos del curso */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
                Objetivos del Curso
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Formando profesionales preparados para el futuro digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-tech-purple-600 to-tech-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Fundamentos Sólidos
              </h3>
              <p className="text-gray-400">
                Establecer bases sólidas en conceptos fundamentales de
                Inteligencia Artificial y Machine Learning
              </p>
            </div>

            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-tech-cyan-600 to-tech-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Aplicación Práctica
              </h3>
              <p className="text-gray-400">
                Desarrollar proyectos reales que resuelvan problemas cotidianos
                usando IA
              </p>
            </div>

            <div className="tech-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-tech-purple-600 to-tech-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Pensamiento Crítico
              </h3>
              <p className="text-gray-400">
                Desarrollar capacidad de análisis y resolución de problemas
                complejos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-tech">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para explorar el mundo de la IA?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Únete a nosotros en esta emocionante aventura hacia el futuro de la
            tecnología
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/recursos"
              className="bg-white text-tech-purple-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explorar Recursos
            </Link>
            <Link
              href="/glosario"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-tech-purple-600 transition-colors"
            >
              Ver Glosario
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
