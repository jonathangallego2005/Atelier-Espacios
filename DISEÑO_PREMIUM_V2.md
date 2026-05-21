# 🎨 ATELIER • ESPACIOS - LANDING PAGE PREMIUM v2.0

## Diseño UI/UX Senior - Especificaciones Implementadas

---

## 📐 REGLAS DE DISEÑO UI/UX (Aplicadas)

### Espaciado: Whitespace Generoso ✓
```
Secciones principales:
- Hero: py-40 lg:py-48 (vertical) | pb-32 lg:pb-40
- ProjectGrid: py-24 lg:py-32
- ServiceAccordion: py-24 lg:py-32
- BookingCTA: py-32 lg:py-40 xl:py-48 ← MÁS GENEROSO
- StudioIntro: py-24 lg:py-32 xl:py-40
- Footer: py-32 lg:py-40 xl:py-48

Gaps internos: gap-8/md:gap-10/lg:gap-12
```

### Tipografía: Editorial Premium ✓
```
Títulos:        font-black tracking-tighter (leading-[0.88])
Labels:         font-light tracking-widest uppercase
Descriptivos:   font-light tracking-normal
Acentos:        text-[#C99C70]

Tipografía fluida (responsive):
- h1: clamp(2.5rem, 14vw, 8rem) ← Escala completa
- h2: clamp(2rem, 6vw, 4rem)
- h3: clamp(1.5rem, 4vw, 2.5rem)
```

### Grid System: Estructurado ✓
```
ProjectGrid:  3 columns (lg) con gap-12
ServiceAccordion: Accordion con numeración 01-03
StudioIntro:  12-col grid: col-span-5 + col-span-7
BookingCTA:   Contenedor centralizado con form
```

### Profundidad: Sombras Sutiles ✓
```
Contenedores:
- bg-white + border border-gray-100 + shadow-subtle
- Hover: shadow-premium

Sombras CSS:
--shadow-subtle:  0 2px 8px rgba(0,0,0,0.04)
--shadow-premium: 0 8px 24px rgba(0,0,0,0.08)
--shadow-hover:   0 12px 32px rgba(0,0,0,0.12)
```

---

## 🎯 ESPECIFICACIONES TÉCNICAS

### Paleta de Colores
```
Fondo:        #F4F4F4     (bg-[#F4F4F4])
Contenedor:   #FFFFFF     (bg-white)
Texto:        #0A0A0A     (text-[#0A0A0A])
Acento:       #C99C70     (text-[#C99C70]) ← Luxury editorial
CTA:          #1D1D1D     (bg-[#1D1D1D]) → Hover: #C99C70
Bordess:      #E5E5E5     (border-gray-100)
```

### CSS Variables (index.css + App.css)
```css
--color-accent: #C99C70;
--shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.04);
--shadow-premium: 0 8px 24px rgba(0, 0, 0, 0.08);
--transition-fast: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth: 500ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 700ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Tailwind Config Extendido
```js
colors.atelier: { bg, text, accent, cta, container, border }
boxShadow: { subtle, premium, hover, sm-accent, lg-accent }
transitionDuration: { 400, 500, 600, 700 }
letterSpacing: { tighter, tight, wide, wider, widest, ultra-wide }
animation: { fade-in, slide-in-up, slide-in-down, scale-in }
```

---

## 🧩 INSTRUCCIONES POR COMPONENTE

### 1. HERO COMPONENT ⭐
```tsx
// Tipografía:
- Título: clamp(2.5rem, 14vw, 8rem) tracking-tighter
- Pre-label: ✨ Diseño Arquitectónico (acento, tracking-widest)
- Subtitle: font-light text-lg sm:text-xl lg:text-2xl

// Overlay:
- Gradiente: from-black/60 via-black/50 to-black/40 (elegante)

// Espaciado:
- py-40 lg:py-48 principal
- space-y-10 lg:space-y-16 entre elementos
- pb-32 lg:pb-40 (whitespace bottom)

// Animación:
- animate-fade-in 0.8s
- Chevron: group-hover:translate-y-1 duration-500
```

### 2. PROJECT GRID COMPONENT ⭐
```tsx
// Grid:
- 3 columns (lg:grid-cols-3)
- gap-8 md:gap-10 lg:gap-12

// Tarjetas (hover premium):
- border border-gray-100 → hover: border-[#C99C70]
- shadow-subtle → hover: shadow-premium (duration-500)
- Imagen: scale-[1.04] on hover (duration-700)
- Transform: hover:-translate-y-2 (elegant lift)

// Overlay:
- Gradiente: from-black/70 via-black/30 to-transparent
- Contenido slide-up: translate-y-3 → translate-y-0

// Icon CTA:
- bg-white → hover: bg-[#C99C70] + text-white
```

### 3. SERVICE ACCORDION COMPONENT ⭐
```tsx
// Ultra-minimalista:
- Solo: border-b border-gray-150 (sin bordes laterales)
- py-10 lg:py-12 espaciado vertical

// Numeración editorial:
- "01", "02", "03" en acento (text-[#C99C70])
- text-xl font-light tracking-wide

// Detalles:
- Dash "—" (em-dash)
- 2-column grid en mobile → 1 column en lg

// Títulos hover:
- font-medium tracking-tight
- group-hover:text-[#C99C70] duration-300
```

### 4. BOOKING CTA COMPONENT ⭐
```tsx
// Sección:
- py-32 lg:py-40 xl:py-48 ← GENEROSA

// Form contenedor:
- bg-white + border border-gray-100 + shadow-subtle
- p-8 lg:p-12 xl:p-16

// Input:
- bg-[#F4F4F4] text-[#0A0A0A]
- focus: bg-white border-[#C99C70]
- Transición: duration-300

// Botón:
- px-8 lg:px-10 py-5 lg:py-6
- bg-[#1D1D1D] → hover: bg-[#C99C70]
- Uppercase: tracking-widest

// Stats:
- text-4xl lg:text-5xl xl:text-6xl (números)
- text-[#C99C70] font-black
```

### 5. NAVBAR COMPONENT ⭐
```tsx
// Padding:
- py-5 lg:py-6 (premium vertical)

// Logo:
- h-7 sm:h-8 lg:h-9 (responsive)

// Links:
- text-xs tracking-widest font-light uppercase
- hover:text-[#C99C70] duration-300

// Botón CTA:
- px-8 py-3.5 lg:py-4
- Con border: border border-[#1D1D1D]
- Hover: bg-[#C99C70] border-[#C99C70]

// Backdrop:
- bg-white/95 backdrop-blur-sm
```

### 6. STUDIO INTRO COMPONENT ⭐
```tsx
// Grid:
- 12-col layout
- lg:col-span-5 (título)
- lg:col-span-7 (descripción)

// Espaciado:
- py-24 lg:py-32 xl:py-40
- gap-12 lg:gap-16

// Tipografía:
- Título: font-black text-5xl xl:text-6xl
- Pre-label: ✨ El Estudio (emoji editorial)
- Descripción: font-light text-xl xl:text-2xl
```

### 7. FOOTER COMPONENT ⭐
```tsx
// Estructura:
- bg-[#0A0A0A] text-white
- py-32 lg:py-40 xl:py-48

// Grid:
- 4 columns (lg) con gap-16 lg:gap-24

// Listas:
- space-y-5 (aumentado para whitespace)
- Links: hover:text-[#C99C70]
```

---

## 🎨 ANIMACIONES Y TRANSICIONES

### Keyframes CSS
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### Duraciones Premium
```
fast:    300ms ← UI interactions
smooth:  500ms ← Hover effects
slow:    700ms ← Image zoom
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [x] Espaciado generoso (py-24/32/40/48)
- [x] Tipografía editorial (font-black, font-light, tracking-widest)
- [x] Grid system responsivo (md:, lg: breakpoints)
- [x] Sombras premium (shadow-subtle, shadow-premium)
- [x] Bordes sutiles (border-gray-100)
- [x] Paleta de colores correcta (#F4F4F4, #0A0A0A, #C99C70, #1D1D1D)
- [x] Transiciones suaves (duration-300/500/700)
- [x] Overlays y gradientes elegantes
- [x] Editorial touches (emojis, numeración, dashes)
- [x] Componentes modulares con TypeScript
- [x] Responsive design (mobile-first)
- [x] Logo ajustado a 24px-32px altura
- [x] Build optimizado (0.24 MB bundle)

---

## 📊 RESULTADOS BUILD

```
✅ TypeScript: Compilación exitosa
✅ Vite build: 1.20s
✅ Bundle size: 0.24 MB total
   - CSS: 17.10 kB (gzip: 4.25 kB)
   - JavaScript: 214.35 kB (gzip: 66.80 kB)
✅ Módulos: 1748 transformados
✅ Archivos: index.html optimizado
```

---

## 🚀 PRÓXIMOS PASOS (Opcionales)

1. **Performance:** Lazy loading de imágenes
2. **Analytics:** Tracking de eventos
3. **SEO:** Meta tags y Open Graph
4. **A/B Testing:** Variaciones de CTA
5. **Internacionalización:** i18n setup
6. **Accesibilidad:** Audit WCAG

---

**Creado por:** Diseñador UI/UX Senior  
**Fecha:** 21 de mayo de 2026  
**Status:** ✅ Production-Ready  
**Framework:** React 19 + Vite + TypeScript 6 + Tailwind CSS
