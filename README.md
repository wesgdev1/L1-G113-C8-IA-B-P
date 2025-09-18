# G123 - Inteligencia Artificial Básico

Sitio web del grupo G123 de Inteligencia Artificial Básico - Talento Tech cucuta.

## 🚀 Características

- **Next.js 14** con App Router
- **Tailwind CSS** para estilos modernos
- **TypeScript** para desarrollo seguro
- **Responsive Design** adaptable a todos los dispositivos
- **Animaciones suaves** y efectos visuales atractivos
- **Optimizado para rendimiento**

## 📋 Páginas Incluidas

1. **Inicio** - Presentación del curso y estadísticas
2. **Temas & Quiz** - Módulos de aprendizaje y evaluaciones
3. **Recursos** - Materiales de estudio y herramientas
4. **Proyectos** - Proyectos desarrollados por estudiantes
5. **Glosario** - Diccionario de términos de IA

## 🎨 Diseño

El sitio utiliza la paleta de colores de Talento Tech Cucuta:
- Azules profundos (#1e40af, #1e3a8a)
- Morados/violetas (#7c3aed, #a855f7)
- Cian/turquesa (#0891b2, #22d3ee)
- Efectos de neón y gradientes

## 🛠️ Instalación

1. **Clona el repositorio**
```bash
git clone <url-del-repositorio>
cd G123-inteligencia-artificial
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar código con ESLint

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio con Vercel
2. El despliegue será automático en cada push

### Netlify
1. Ejecuta `npm run build`
2. Sube la carpeta `out` a Netlify

### Otras plataformas
El sitio es compatible con cualquier hosting que soporte sitios estáticos.

## 📝 Personalización

### Cambiar colores
Edita `tailwind.config.js` para modificar la paleta de colores:

```javascript
colors: {
  'tech-blue': { /* tus colores */ },
  'tech-purple': { /* tus colores */ },
  // ...
}
```

### Agregar contenido
- **Proyectos**: Edita `app/proyectos/page.tsx`
- **Recursos**: Edita `app/recursos/page.tsx`
- **Glosario**: Edita `app/glosario/page.tsx`
- **Quiz**: Edita `app/quiz/page.tsx`

### Cambiar imágenes
Las imágenes están configuradas para usar Cloudinary. Actualiza las URLs en:
- `next.config.js` para dominios permitidos
- Componentes individuales para URLs específicas

## 🔧 Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript
- **Iconos**: Lucide React
- **Imágenes**: Next.js Image con Cloudinary
- **Animaciones**: CSS personalizado + Tailwind

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1280px+)

## 🎯 Próximas Funcionalidades

- [ ] Sistema de autenticación
- [ ] Quiz interactivos funcionales
- [ ] Panel de administración
- [ ] Base de datos para contenido dinámico
- [ ] Sistema de comentarios
- [ ] Integración con APIs de IA

## 👥 Contribuciones

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**G123 - Inteligencia Artificial Básico**  
Talento Tech Cucuta 
Atlántico, César, La Guajira, Magdalena

---

Desarrollado con ❤️ para nuestros estudiantes de IA
