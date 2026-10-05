# Project setup

## 1. Scaffold

Proyecto nuevo en la carpeta actual (vacía) o en `./<slug>`:

```bash
npx -y create-next-app@latest <slug|.> --ts --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --use-npm --yes
# Añade --disable-git si la carpeta ya está dentro de otro repositorio git.
cd <slug>
npm install lucide-react
```

Esto genera Next.js 16+ (App Router, Turbopack), React 19, Tailwind CSS v4 (configurado vía CSS, **sin** `tailwind.config.js`) y ESLint flat config (`npm run lint` ejecuta `eslint`; `next lint` ya no existe).

Después del scaffold:
1. Borra el contenido de demo: `public/*.svg`, `src/app/favicon.ico` (la plantilla trae `icon.svg`, sustitúyelo por el logo/monograma del negocio) y el contenido de `src/app/page.tsx`.
2. Copia los componentes base de la skill (rutas relativas a la carpeta de la skill):
   ```bash
   cp -r <skill-dir>/templates/src/. ./src/
   ```
   `<skill-dir>` es `.claude/skills/web-builder` (proyecto) o `~/.claude/skills/web-builder` (global).
   Incluye: `app/layout.tsx` (fuentes, metadata, skip link, navbar), `app/globals.css` (tokens + reduced motion), `app/icon.svg`, `app/sitemap.ts`, `app/robots.ts`, `lib/site.ts`, `lib/cn.ts`, `components/ui/*` (Button, Container, Section, Reveal, ImagePlaceholder) y `components/layout/*` (Navbar, MobileMenu). Sobrescriben los archivos del scaffold a propósito.
3. Ajusta `src/app/globals.css` (tokens), `src/lib/site.ts` (datos del negocio), `src/app/layout.tsx` (fuentes + `lang`) y el estilo de los componentes a la dirección de arte. Son un punto de partida probado, no un diseño final: el Footer y todas las secciones se diseñan para cada proyecto.

> Next.js cambia rápido. El scaffold incluye `AGENTS.md` y la documentación de la versión instalada en `node_modules/next/dist/docs/`. Ante cualquier duda de API (imágenes, metadata, fuentes, caching), consúltala en lugar de confiar en la memoria. Cambios de la v16 que afectan a esta skill:
> - `next/image`: `priority` está deprecado → usa `preload` (o `loading="eager"` / `fetchPriority="high"`) solo en la imagen LCP del hero. `images.qualities` por defecto es `[75]`. `images.domains` está deprecado → `images.remotePatterns`.
> - `params`, `searchParams`, `cookies()`, `headers()` son asíncronos (`await`).
> - `middleware.ts` → `proxy.ts`.

## 2. Estructura de carpetas

```
src/
  app/
    layout.tsx          # fuentes, metadata global, <Navbar/>, <Footer/>
    page.tsx            # compone secciones; sin lógica ni estilos sueltos
    globals.css         # tokens de diseño (@theme) y estilos base
    sitemap.ts, robots.ts
    icon.svg|png        # favicon (convención de archivo de Next)
    opengraph-image.png # 1200×630 (o .tsx con ImageResponse)
    <ruta>/page.tsx     # páginas adicionales (carta, servicios, contacto…)
  components/
    ui/                 # primitivas: Button, Container, Section, Reveal, ImagePlaceholder
    layout/             # Navbar, MobileMenu, Footer
    <dominio>/          # piezas reutilizadas en varias secciones: PricingCard, TestimonialCard…
  sections/             # bloques de página: Hero, Services, Gallery, Faq, FinalCta…
  lib/
    site.ts             # ÚNICA fuente de datos del negocio y contenido editable
    cn.ts               # utilidad para unir clases
  hooks/                # solo si hay hooks reales (useScrolled, useMediaQuery…)
  types/                # solo si hay tipos compartidos entre muchos archivos
public/
  images/               # imágenes del proyecto, nombres descriptivos (hero-terraza.jpg)
DESIGN.md               # memoria de diseño del proyecto
```

Reglas:
- No crees carpetas vacías "por si acaso" (`hooks/`, `types/`, `styles/` solo cuando haya contenido). Con Tailwind v4 los estilos globales viven en `src/app/globals.css`; `styles/` no hace falta.
- Componentes **Server** por defecto. `"use client"` solo en hojas interactivas (menú móvil, acordeón, formulario, `Reveal`). Nunca en `page.tsx` ni en secciones enteras si solo una parte es interactiva.
- Un componente se abstrae cuando se usa 2+ veces o cuando aísla interactividad. Una sección usada una vez es simplemente un archivo en `sections/`, sin props genéricas innecesarias.
- Contenido repetido (servicios, platos, planes, FAQs, testimonios) → arrays tipados en `src/lib/site.ts` y `.map()`; nunca JSX copiado y pegado.
- Nombres: componentes en PascalCase, archivos en kebab-case (`pricing-card.tsx`), exports con nombre (excepto `page`/`layout`).

## 3. Tokens (Tailwind v4)

Los tokens se definen en `globals.css` con `@theme`. La plantilla `templates/src/app/globals.css` ya trae la estructura; cambia solo los valores. Usa siempre las utilidades derivadas (`bg-surface`, `text-muted`, `border-line`, `bg-accent`, `font-display`) en lugar de colores arbitrarios (`bg-[#3a3a3a]`) o de la paleta por defecto de Tailwind (`bg-blue-500`), salvo para casos puntuales justificados.

Modo oscuro: solo si aporta (SaaS, producto tech, portfolio creativo). Para negocios locales, una única paleta bien hecha es mejor que dos mediocres.

## 4. Fuentes

```tsx
import { Fraunces, Inter } from "next/font/google";
const display = Fraunces({ subsets: ["latin"], variable: "--font-display-family", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans-family", display: "swap" });
// <html lang="es" className={`${display.variable} ${sans.variable}`}>
```
En `globals.css`, `@theme inline { --font-display: var(--font-display); ... }` ya está preparado en la plantilla (las variables de `next/font` se llaman `--font-display-family` y `--font-sans-family` para evitar referencias circulares). Elige familias con `references/design-principles.md` §2.

## 5. Dependencias permitidas (y cuándo)

| Necesidad | Opción | Condición |
|---|---|---|
| Iconos | `lucide-react` | Siempre que haya iconos |
| Animación compleja (layout, gestos, secuencias) | `motion` | Solo si CSS + `Reveal` no basta |
| Formularios con validación compleja | ninguno → validación nativa + `useActionState` | Añadir librería solo con 6+ campos y reglas cruzadas |
| Carrusel | ninguno → `overflow-x-auto snap-x` | Librería solo si se piden controles avanzados |
| Mapa | `<iframe>` de Google Maps con `loading="lazy"` | — |
| Clases condicionales | `src/lib/cn.ts` | `cn` une clases pero **no** resuelve conflictos (`hidden` + `inline-flex`): evita pasar clases que choquen con las base, o usa variantes (`max-sm:hidden`). Instala `tailwind-merge` solo si los overrides se vuelven frecuentes |

## 6. Formularios de contacto
Sin backend configurado: Server Action que valida y devuelve estado, con un `// TODO` claro para conectar el envío (Resend, Formspree, email…). Alternativa honesta: `mailto:`/WhatsApp (`https://wa.me/<número>`) cuando el negocio es local y pequeño. Nunca simules un "¡Enviado!" que no envía nada sin indicarlo en la entrega.

## 7. Plantilla de `DESIGN.md`

```markdown
# <Nombre> — Design brief

## Objetivo
- Negocio / tipo de web:
- Público objetivo:
- Conversión principal (CTA): 
- Conversión secundaria:

## Dirección visual
- Palabras clave: (p. ej. cálido, artesanal, sobrio)
- Referencias usadas y qué se tomó de cada una:
- Paleta: fondo #…, superficie #…, texto #…, atenuado #…, borde #…, acento #… (por qué)
- Tipografía: display … / texto … (por qué); escala …
- Spacing: secciones py-…; contenedor max-w-…
- Forma: radio …, bordes …, sombras …
- Motion: …
- Imágenes: estilo, fuentes, tratamiento

## Preferencias del usuario (acumulativas)
- YYYY-MM-DD: "quiero más espacio en blanco" → secciones py-32, hero a 90vh

## Contenido provisional (TODO)
- Testimonios de ejemplo, precios estimados…
```
