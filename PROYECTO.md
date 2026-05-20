# Atelier • Espacios - Estructura del Proyecto

## Descripción General
Landing page profesional de arquitectura/diseño para "Atelier • Espacios". Enfoque minimalista, técnico y de alta calidad con diseño responsivo.

## Paleta de Colores
- **Fondo:** #F4F4F4 (`atelier-bg`)
- **Texto:** #0A0A0A (`atelier-text`)
- **Acento:** #C99C70 (`atelier-accent`)
- **CTA:** #1D1D1D (`atelier-cta`)
- **Contenedores:** #FFFFFF (`atelier-container`)
- **Bordes:** #E5E5E5 (`atelier-border`)

## Estructura de Carpetas

```
src/
├── components/           # Componentes reutilizables
│   ├── Navbar.tsx       # Navegación fija superior
│   ├── Hero.tsx         # Sección hero con imagen de fondo
│   ├── ProjectGrid.tsx  # Grid técnica de proyectos
│   ├── ServiceAccordion.tsx  # Acordeón de servicios interactivo
│   ├── BookingCTA.tsx   # Sección CTA con formulario
│   ├── Footer.tsx       # Pie de página minimalista
│   └── index.ts         # Exportaciones centralizadas
├── App.tsx              # Componente principal
├── App.css              # Estilos adicionales
├── index.css            # Estilos globales + Tailwind directives
└── main.tsx             # Punto de entrada
```

## Componentes

### Navbar
- Logo a la izquierda
- Enlaces de navegación en desktop
- Botón "Agendar Sesión"
- Menú hamburguesa en mobile
- Fija en la parte superior con z-index

### Hero
- Imagen de fondo grande
- Superposición oscura con gradiente
- Tipografía de alto peso (font-light)
- Línea divisoria fina (accent color)
- Indicador de scroll al pie

### ProjectGrid
- Grid responsiva (1/2/3 columnas)
- Efecto hover con overlay
- Información del proyecto (nombre, ubicación, categoría)
- Shadow sutil en contenedores

### ServiceAccordion
- 3 servicios principales (Consultoría, Diseño, Ejecución)
- Acordeón interactivo con animaciones suaves
- Detalles expandibles con bullets

### BookingCTA
- Contraste alto (fondo dark, texto light)
- Formulario de email integrado
- Link alternativo a Calendly
- Indicadores de confianza (años, proyectos, clientes)

### Footer
- Layout ultra minimalista
- Contacto, ubicación, legal
- Logo invertido
- Social links

## Tipografía
- Font family: system-ui, 'Segoe UI', Roboto, sans-serif
- Weights: font-light (300), font-medium (500), font-normal (400)
- Letter-spacing: tracking-wide, tracking-widest para cabezales

## Configuración de Tailwind

El archivo `tailwind.config.js` incluye:
- Colores personalizados de Atelier
- Espacios adicionales
- Sombras sutiles (`subtle`, `sm-accent`)
- Plugin @tailwindcss/typography

## Requisitos Técnicos
- React 19+
- TypeScript 6.0+
- Tailwind CSS 3+
- Vite como bundler
- ESLint para linting

## Comandos Principales
- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Build para producción
- `npm run lint` - Ejecutar ESLint
- `npm run preview` - Preview de la build

## Notas de Diseño
- Espacios negativos amplios entre secciones
- Grid layout técnico para proyectos
- Transiciones fluidas pero sobrias (no animadas excesivamente)
- Enfoque en legibilidad y profesionalismo
- Responsivo desde mobile hasta desktop
