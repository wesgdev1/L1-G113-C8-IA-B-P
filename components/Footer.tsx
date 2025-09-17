import { Brain, Mail, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-tech-dark border-t border-tech-purple-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12">
                <Image
                  src="https://res.cloudinary.com/djrdozcdw/image/upload/v1755995891/logo_q33kuh.png"
                  alt="Talento Tech Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
                  G113 - IA Básico
                </h3>
                <p className="text-sm text-gray-400">Talento Tech Cucuta</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Formando el futuro digital de Colombia a través de la educación en
              Inteligencia Artificial
            </p>
          </div>

          {/* Información del curso */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tech-purple-400">
              Información del Curso
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Bootcamp 159 horas</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Cucuta, Norte de Santander</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Inteligencia Artificial Básico</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tech-purple-400">
              Enlaces Rápidos
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="/quiz"
                className="text-gray-400 hover:text-tech-cyan-400 transition-colors text-sm"
              >
                Temas & Quiz
              </a>
              <a
                href="/recursos"
                className="text-gray-400 hover:text-tech-cyan-400 transition-colors text-sm"
              >
                Recursos
              </a>
              <a
                href="/proyectos"
                className="text-gray-400 hover:text-tech-cyan-400 transition-colors text-sm"
              >
                Proyectos
              </a>
              <a
                href="/glosario"
                className="text-gray-400 hover:text-tech-cyan-400 transition-colors text-sm"
              >
                Glosario
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-tech-purple-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 G113 Inteligencia Artificial Básico. Talento Tech Cucuta
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Desarrollado con ❤️ para nuestros estudiantes G113 - IA Básico
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
