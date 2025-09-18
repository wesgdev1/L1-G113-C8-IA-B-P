"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
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
  // Estados del carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    {
      src: "https://res.cloudinary.com/djrdozcdw/image/upload/v1758206315/20250917_182210_adkatq.jpg",
      title: "Salon de clases - IA Básico",
      description: "Innovación en inteligencia artificial",
    },
    {
      src: "https://res.cloudinary.com/djrdozcdw/image/upload/v1758206311/20250917_182152_g3hugs.jpg",
      title: "Salon de clases - IA Básico",
      description: "Innovación en inteligencia artificial",
    },
    {
      src: "https://res.cloudinary.com/djrdozcdw/image/upload/v1758206311/20250917_182200_knpyb0.jpg",
      title: "Salon de clases - IA Básico",
      description: "Innovación en inteligencia artificial",
    },
    {
      src: "https://res.cloudinary.com/djrdozcdw/image/upload/v1758206310/20250917_182205_sh3aep.jpg",
      title: "Salon de clases - IA Básico",
      description: "Innovación en inteligencia artificial",
    },
  ];

  // Funciones de navegación del carrusel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay del carrusel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  // Pausar autoplay en hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  // Soporte para gestos táctiles
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

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

      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Galería de Imagenes
          </h2>

          {/* Carrusel de Imágenes */}
          <div className="relative max-w-4xl mx-auto">
            <div
              className="carousel-container relative overflow-hidden rounded-2xl shadow-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="carousel-track flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="carousel-slide min-w-full relative"
                  >
                    <Image
                      src={image.src}
                      alt={`Proyecto ${index + 1}`}
                      width={1200}
                      height={400}
                      className="w-full h-96 object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">{image.title}</h3>
                      <p className="text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles de navegación */}
            <button
              onClick={prevSlide}
              className="carousel-btn carousel-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Imagen anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="carousel-btn carousel-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Imagen siguiente"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="carousel-indicators flex justify-center space-x-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`carousel-indicator w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    currentSlide === index
                      ? "bg-white shadow-lg"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de fotos del salón */}

      {/* Sección de vista 360° */}

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
