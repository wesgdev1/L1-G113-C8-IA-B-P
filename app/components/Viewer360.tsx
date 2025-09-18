"use client";

interface Viewer360Props {
  panoravenUrl?: string;
  title?: string;
  imageUrl?: string; // Para compatibilidad, pero usaremos Panoraven
}

export default function Viewer360({
  panoravenUrl = "https://panoraven.com/es/embed/W8Xz8NAA4B", // URL de ejemplo
  title = "Vista 360° del Salón",
  imageUrl, // Mantenemos para compatibilidad
}: Viewer360Props) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
      )}

      {/* Contenedor del iframe de Panoraven */}
      <div className="relative w-full">
        <iframe
          width="100%"
          height="500px"
          allowFullScreen={true}
          allow="accelerometer; magnetometer; gyroscope; xr-spatial-tracking"
          style={{
            display: "block",
            margin: "0 auto",
            border: "none",
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: `
              0 1px 1px rgba(0,0,0,0.11),
              0 2px 2px rgba(0,0,0,0.11),
              0 4px 4px rgba(0,0,0,0.11),
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11)
            `,
          }}
          src={panoravenUrl}
          title="Vista 360° del Salón G123"
          className="border border-tech-purple-500/30"
        />

        {/* Overlay con información */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <div className="bg-gradient-to-r from-tech-purple-600/90 to-tech-cyan-600/90 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white text-sm font-semibold flex items-center">
              <span className="w-2 h-2 bg-tech-cyan-400 rounded-full mr-2 animate-pulse"></span>
              360° LIVE
            </span>
          </div>
        </div>

        {/* Indicador de tecnología */}
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
            <p className="text-white text-xs font-medium flex items-center">
              <span className="mr-2">⚡</span>
              Powered by Panoraven
            </p>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-6 text-center">
        <p className="text-gray-300 text-base mb-2">
          🌐 <strong>Experiencia 360° Inmersiva</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>🖱️</span>
            <span>Arrastra para navegar</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>🔍</span>
            <span>Scroll para zoom</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>📱</span>
            <span>Compatible con móviles</span>
          </div>
        </div>
        <p className="text-tech-cyan-400 text-sm mt-3">
          ✅ Visor profesional optimizado - Navegación fluida y controles
          avanzados
        </p>
      </div>
    </div>
  );
}
