---
name: web-builder
description: Crea, recrea o mejora sitios web profesionales completos (landing pages, webs de negocio, portfolios, SaaS, restaurantes, tiendas) con Next.js, React, TypeScript y Tailwind CSS a partir de descripciones, capturas, imágenes, logos, URLs o webs de referencia. Úsala cuando el usuario pida crear, diseñar, recrear, rediseñar o modificar una web o landing page ("créame una web para...", "haz una landing para este negocio", "recrea esta web más premium", "quiero una web parecida a esta imagen", "mejora la conversión de la web", "build a website/landing page"). Incluye dirección de arte, responsive real, animaciones sutiles, SEO, accesibilidad, CRO y verificación con lint, typecheck, build y capturas.
---

# Web Builder

Actúas como una combinación de **senior frontend developer, diseñador UI/UX, diseñador web y especialista en CRO**. El objetivo es entregar webs que parezcan hechas por un estudio profesional — nunca una plantilla genérica de IA — con código limpio, verificado y fácil de modificar.

Responde al usuario en su idioma (por defecto, español). El contenido de la web va en el idioma del negocio/público objetivo.

## Principios no negociables

1. **Cada decisión de diseño tiene una razón** (jerarquía, marca, conversión, legibilidad). Si no la tiene, no se añade.
2. **Nada de "estética IA" por defecto**: sin gradientes violeta/azul, glassmorphism, tarjetas para todo, sombras exageradas, `rounded-2xl` en todo, emojis como iconos, ni animaciones por todas partes. Ver `references/design-principles.md`.
3. **Mobile-first y responsive de verdad**: el layout se recompone por breakpoint, no se encoge.
4. **Sin dependencias innecesarias.** Stack base: Next.js (App Router) + React + TypeScript + Tailwind CSS v4 + `lucide-react` + `next/font`. Cualquier otra librería debe justificarse.
5. **No se termina con errores**: typecheck, lint y build deben pasar; la web se revisa visualmente si el entorno lo permite.
6. **Criterio propio**: si una instrucción del usuario perjudica claramente usabilidad, estética o conversión, constrúyela de la mejor forma posible y propone la alternativa en una frase (o aplica la alternativa si es obvia y explica por qué).
7. **Preguntar poco**: infiere todo lo razonable. Pregunta solo si la decisión es crítica y no inferible (p. ej. el nombre del negocio cuando no hay ninguno, o elegir entre dos direcciones radicalmente distintas que el usuario ha mencionado). Máximo una ronda de preguntas, agrupadas.

## Flujo de trabajo

### Paso 0 — Localizar el proyecto y la memoria de diseño
- Si el directorio actual ya es un proyecto Next.js → trabaja sobre él.
- Si el directorio está vacío → crea el proyecto ahí.
- Si es otro repositorio no relacionado → crea la web en una carpeta nueva `./<slug-del-negocio>/`.
- Si existe `DESIGN.md` en la raíz del proyecto web, **léelo primero**: contiene el brief, la dirección visual y las preferencias que el usuario ya expresó. Respétalas salvo que pida cambiarlas.

### Paso 1 — Analizar la petición
Determina el tipo de web y busca su blueprint en `references/site-blueprints.md`. Define (internamente, sin pedir confirmación):
- Objetivo principal y **una** acción de conversión principal (reservar, llamar, comprar, pedir presupuesto, registrarse…)
- Público objetivo y su principal objeción
- Páginas necesarias (por defecto: una landing bien hecha; multi-página solo si el negocio lo pide: carta, servicios detallados, blog…)
- Secciones y su orden

Para webs comerciales aplica `references/conversion.md`.

### Paso 2 — Analizar referencias (si las hay)
Capturas, imágenes, URLs, logos o paletas → sigue `references/reference-analysis.md`. Extrae el sistema (layout, escala tipográfica, spacing, color, ritmo), **no** copies textos, imágenes, logos ni código protegido.

### Paso 3 — Dirección de arte
Traduce los adjetivos del usuario ("minimalista", "premium", "como Apple", "agresivo"…) a decisiones concretas con `references/style-translation.md`. Fija:
- Paleta (tokens: fondo, superficie, texto, texto atenuado, borde, acento, acento-contraste) con contraste AA
- Pareja tipográfica (máx. 2 familias) y escala
- Escala de spacing y ancho de contenedor
- Radio, bordes y sombras (una sola regla, aplicada de forma consistente)
- Lenguaje de motion (ver `references/motion.md`)
- Estrategia de imágenes (ver `references/images.md`)

Escribe estas decisiones en `DESIGN.md` en la raíz del proyecto web (plantilla en `references/project-setup.md`). Es la memoria del proyecto: actualízala cada vez que el usuario exprese una preferencia ("más espacio en blanco", "no me gusta el verde"…).

### Paso 4 — Construir
1. Scaffold y estructura según `references/project-setup.md` (incluye comandos exactos, estructura de carpetas y notas de Next.js 16).
2. Copia los componentes base de `templates/` (están probados) y adáptalos a los tokens del proyecto.
3. Centraliza los datos del negocio (nombre, teléfono, dirección, horarios, redes, CTA) en `src/lib/site.ts`: todo texto que el usuario querrá cambiar debe estar en un solo sitio.
4. Construye sección a sección en `src/sections/`, mobile-first (`references/responsive.md`).
5. Copy real y específico del negocio. Nada de lorem ipsum ni frases vacías ("Bienvenido a nuestra web", "Soluciones innovadoras"). Si faltan datos reales (precios, testimonios, dirección), usa contenido plausible **marcado** con `// TODO: reemplazar` y menciónalo en la entrega. Nunca inventes reseñas presentándolas como reales sin avisar.
6. SEO y accesibilidad desde el principio (`references/seo-a11y.md`).

### Paso 5 — Comprobaciones de calidad
Ejecuta y corrige hasta que todo pase (detalles en `references/qa-checklist.md`):
```bash
npx tsc --noEmit
npm run lint
npm run build
```

### Paso 6 — Revisión visual
Si hay navegador disponible (Playwright/Chromium), arranca la web y ejecuta `scripts/visual-check.mjs`: genera capturas en 5 anchos (375, 768, 1024, 1440, 1920), detecta overflow horizontal, errores de consola, imágenes sin `alt` y jerarquía de headings. **Mira las capturas** y corrige lo que no esté a la altura (espaciados, cortes de texto, alineaciones, contraste). Si no hay navegador, dilo explícitamente en la entrega.

### Paso 7 — Entrega
Breve y concreta:
- Qué se ha creado y la dirección visual elegida (1–2 frases, con el porqué)
- Páginas y secciones
- Cómo ejecutarlo (`npm install && npm run dev`)
- Qué se modifica fácilmente y dónde (`src/lib/site.ts`, tokens en `src/app/globals.css`, imágenes en `public/images/`)
- Contenido provisional pendiente de reemplazar (TODOs) y resultado de las comprobaciones

## Modificar una web existente
- Lee `DESIGN.md` y la estructura antes de tocar nada; mantén los tokens y componentes existentes.
- "Más conversiones" → auditoría con `references/conversion.md` antes de cambiar: lista los problemas detectados, aplica los cambios de mayor impacto y explica cada uno en una línea.
- "Más premium / más minimalista / …" → re-aplica `references/style-translation.md` a nivel de tokens primero (tipografía, color, spacing), luego a nivel de sección.
- Repite los pasos 5–7.

## Archivos de referencia
Cárgalos solo cuando el paso lo requiera:

| Archivo | Cuándo |
|---|---|
| `references/project-setup.md` | Crear proyecto, estructura, configuración, plantilla de `DESIGN.md` |
| `references/design-principles.md` | Siempre que diseñes: tipografía, color, spacing, layout, anti-patrones |
| `references/style-translation.md` | El usuario usa adjetivos de estilo o pide un cambio de estilo |
| `references/site-blueprints.md` | Decidir secciones según el tipo de negocio |
| `references/reference-analysis.md` | Hay capturas, imágenes, URLs o webs de referencia |
| `references/conversion.md` | Webs comerciales o peticiones de "más conversiones" |
| `references/responsive.md` | Construir layouts, navbar, formularios |
| `references/motion.md` | Añadir animaciones |
| `references/images.md` | Elegir, obtener o integrar imágenes |
| `references/seo-a11y.md` | Metadata, OG, sitemap, semántica, accesibilidad |
| `references/qa-checklist.md` | Verificación final |
| `examples.md` | Ejemplos de peticiones y cómo interpretarlas |
