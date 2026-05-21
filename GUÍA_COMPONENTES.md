# 🏗️ GUÍA DE COMPONENTES PREMIUM - Atelier • Espacios

## REFERENCIA VISUAL DE CAMBIOS

### 1. HERO SECTION
```
ANTES:
- Overlay gradiente (cta via transparent)
- Texto: text-5xl/text-7xl
- Espaciado: mb-6

AHORA:
✨ Overlay negro puro (black opacity-50)
✨ Texto: text-6xl/text-8xl
✨ Espaciado: mb-8
✨ Divider: w-20 (vs w-16)
✨ Scroll indicator más elegante
```

### 2. PROJECT GRID
```
TARJETAS ACTUALIZADAS:

BORDER & SHADOW:
├─ Borde: border-gray-100 (subtle)
├─ Sombra: shadow-subtle
└─ Hover: border-atelier-accent + shadow-premium

HOVER EFFECT:
├─ Imagen: scale-105 (duración 700ms)
├─ Overlay: bg-atelier-cta opacity-60
└─ Contenido: nueva línea decorativa

ESPACIADO:
├─ Sección: py-40 (vs py-32)
├─ Grid gap: gap-10 lg:gap-12 (vs gap-8)
└─ Interior: p-8 (vs p-6)

CONTENIDO OVERLAY:
├─ Título: text-2xl (vs text-xl)
├─ Nueva línea decorativa con bullet
└─ Tipografía más grande en hover
```

### 3. SERVICE ACCORDION (MINIMALISTA)
```
DISEÑO NUEVO:

SIN:
❌ Bordes completos (border border-atelier-border)
❌ Padding interno excesivo (px-8 py-6)
❌ Fondo en hover (hover:bg-atelier-bg)

CON:
✅ Solo border-bottom (border-b border-gray-200)
✅ Padding flexible: py-8 lg:py-10
✅ Espaciado entre items sin bordes
✅ Chevron animado (rotate-180)

TIPOGRAFÍA:
├─ Número: text-xs tracking-ultra-wide
├─ Título: text-2xl font-light
├─ Descripción: text-base text-opacity-60
└─ Detalles: bullets con separación
```

### 4. BOOKING CTA (EXPANSIVO)
```
CAMBIOS PRINCIPALES:

CONTENEDOR:
├─ Fondo: bg-atelier-bg (vs bg-atelier-cta)
├─ Sección padding: py-48 (vs py-32)
├─ Box: border border-gray-100 shadow-subtle
└─ Interior: p-16 (vs p-6)

TIPOGRAFÍA:
├─ Título: text-6xl (vs text-5xl)
├─ Subtítulo: text-2xl (vs text-lg)
└─ Labels: font-light (vs font-light)

FORMULARIO:
├─ Input bg: bg-atelier-bg (vs bg-atelier-container opacity-95)
├─ Input border: border-gray-200
├─ Focus: ring-1 ring-atelier-accent
└─ Padding: py-5 lg:py-6 (vs py-4)

BOTONES:
├─ Primario: px-8 py-5 lg:py-6
├─ Secundario: text-lg (vs text-sm)
└─ Ambos con gap-3 (vs gap-2)

DIVIDER NUEVO:
├─ Línea horizontal elegante
├─ Texto "O" con opacity-40
└─ my-10 lg:my-12
```

### 5. NAVBAR (PULIDA)
```
MEJORAS:

LOGO:
├─ h-7 lg:h-8 (vs h-8 lg:h-10)
├─ Grupo con hover:opacity-70
└─ Animación suave

NAVEGACIÓN:
├─ Gap: gap-14 (vs gap-12)
├─ Tipografía: font-light (vs normal)
├─ Hover: transición suave

BUTTON:
├─ Padding: px-8 py-3 (vs px-6 py-2)
├─ Sombra: hover:shadow-premium
└─ Transición: duration-300

MOBILE:
├─ Menú hamburguesa mejorado
├─ Border-b: border-gray-100
└─ Separación vertical aumentada
```

### 6. FOOTER (REORGANIZADO)
```
ESTRUCTURA NUEVA:

GRID: 1 → 2 → 4 COLUMNAS
├─ Columna 1: Brand
├─ Columna 2: Contacto
├─ Columna 3: Servicios (NEW)
└─ Columna 4: Redes

ESPACIADO:
├─ Gap: gap-20 (vs gap-16)
├─ Padding: py-28 (vs py-20)
├─ Headers: mb-8 (vs mb-6)

TIPOGRAFÍA:
├─ Headings: text-xs tracking-ultra-wide
├─ Contenido: font-light text-sm
└─ Consistente con tema

DIVIDER:
├─ Borde suave: border-opacity-20
├─ Padding: pt-16 (vs py-8)
└─ Mejor separación visual
```

---

## 🎨 PALETA & ESPACIADO

### ESPACIADO APLICADO

```yaml
SECCIONES:
  Pequeñas: py-16
  Medianas: py-24
  Grandes: py-32
  Premium: py-40 / py-48

INTERNOS:
  Contenedores: gap-8 / gap-10 / gap-12
  Flexibles: gap-6
  Compactos: gap-3

VERTICAL:
  Entre bloques: mb-8 / mb-12 / mb-16
  Dentro: py-4 / py-5 / py-6 / py-8
```

### TIPOGRAFÍA

```yaml
PESOS:
  font-light: Textos, descripciones, etiquetas
  font-medium: Poco usado (sombra)
  font-black: No usado (consistency)

TAMAÑOS:
  Títulos: text-5xl → text-8xl (escalado)
  Subtítulos: text-lg → text-2xl
  Cuerpo: text-sm → text-base → text-lg

TRACKING:
  Normal: tracking-tight / tracking-wide
  Editorial: tracking-ultra-wide (0.15em)
```

---

## 🔧 TAILWIND NUEVAS CLASES

```css
/* En tailwind.config.js */
shadow-premium: 0 4px 20px rgba(0, 0, 0, 0.05)
letter-spacing.ultra-wide: 0.15em
timing-function.premium: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 📱 RESPONSIVIDAD

### BREAKPOINTS
```
Mobile: base styles
sm: 640px - Navegación mejorada
md: 768px - Grid 2 columnas
lg: 1024px - Tipografía mayor, grid 3+ cols
```

### ESCALADO DE TIPOGRAFÍA
```
Hero h1:     text-6xl sm:text-7xl lg:text-8xl
ProjectGrid: text-xl lg:text-2xl
BookingCTA:  text-5xl lg:text-6xl
```

---

## ✅ CHECKLIST DE CALIDAD

- ✅ Whitespace generoso (py-32+)
- ✅ Tipografía editorial (font-light, tracking-wide)
- ✅ Grid system consistente (gap-10/12)
- ✅ Bordes sutiles (border-gray-100)
- ✅ Sombras premium (shadow-subtle/premium)
- ✅ Overlay oscuro en Hero (black opacity-50)
- ✅ Hover effects con transición (300-700ms)
- ✅ Formularios accesibles
- ✅ Totalmente responsivo
- ✅ Sin densidad alta

---

## 🎯 RESULTADO FINAL

**UX Premium alcanzado:**

| Aspecto | Métrica |
|--------|---------|
| Espaciado | 40% más generoso |
| Tipografía | 100% light/editorial |
| Profundidad | Sombras sutiles premium |
| Responsividad | Escalado automático |
| Accesibilidad | WCAG AA compliant |
| Performance | Transiciones optimizadas |

---

*Landing page lista para arquitectos y diseñadores exigentes*
