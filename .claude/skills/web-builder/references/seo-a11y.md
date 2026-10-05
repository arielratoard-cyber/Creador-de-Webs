# SEO & accessibility

## Metadata (App Router)
En `src/app/layout.tsx`, a partir de `src/lib/site.ts`:
```ts
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description, // 140–160 caracteres, con la keyword principal y la ubicación si es local
  openGraph: { type: "website", locale: site.locale, siteName: site.name, url: "/" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};
```
Cada página adicional exporta su propio `metadata` (`title` corto + `description` específica + `alternates.canonical`).

- **OG image**: `src/app/opengraph-image.(png|jpg)` 1200×630, o `opengraph-image.tsx` con `ImageResponse` de `next/og` (nombre + tagline con la tipografía/colores de la marca).
- **Favicon**: `src/app/icon.svg` (o `.png`) y opcional `apple-icon.png` (180×180). Reemplaza el `favicon.ico` del scaffold.
- **Sitemap/robots**: `src/app/sitemap.ts` y `src/app/robots.ts` (plantillas incluidas) usando `site.url`.
- **Datos estructurados**: JSON-LD en la página principal para negocios (`Restaurant`, `LocalBusiness`, `Organization`, `Product`, `Event`, `FAQPage`). Solo con datos reales.
  ```tsx
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  ```
- **URLs limpias**: rutas en minúsculas, kebab-case, en el idioma del público (`/carta`, `/servicios/fontaneria-urgente`).
- `lang` correcto en `<html>`.

## HTML semántico
- Un único `<h1>` por página (normalmente el titular del hero). Luego `h2` por sección y `h3` dentro. No saltes niveles; no elijas el heading por su tamaño visual (el estilo va con clases).
- Landmarks: `<header>` (navbar), `<nav aria-label="Principal">`, `<main id="main">`, `<section aria-labelledby="…">`, `<footer>`.
- Enlaces (`<a>`/`<Link>`) para navegar, `<button>` para acciones. Nunca `div` con `onClick`.
- Listas como `<ul>/<ol>`; direcciones en `<address>`; horarios en `<dl>` o tabla; fechas en `<time>`.

## Accesibilidad (WCAG 2.2 AA)
- Contraste: 4.5:1 texto, 3:1 texto grande y bordes de inputs/iconos significativos.
- Foco visible y bonito en todo lo interactivo: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent` (incluido en `Button`). Nunca `outline-none` sin alternativa.
- Enlace "Saltar al contenido" al inicio del `body` (incluido en la plantilla de layout descrita abajo).
- Imágenes con `alt`; iconos decorativos con `aria-hidden`; botones solo-icono con `aria-label`.
- Formularios: `<label htmlFor>` en cada campo, `aria-invalid` + `aria-describedby` para errores, mensajes de estado con `role="status"`/`aria-live="polite"`.
- Menú móvil: `aria-expanded`, `aria-controls`, foco gestionado, cierre con Escape.
- Objetivos táctiles ≥ 44×44px.
- No transmitir información solo por color.
- Respeta `prefers-reduced-motion` (ver `motion.md`).
- Vídeos con autoplay: `muted`, `playsInline`, sin sonido y con opción de pausa si duran > 5s.

Skip link en `layout.tsx`:
```tsx
<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
  Saltar al contenido
</a>
```

## Rendimiento (también es SEO y conversión)
- Server Components por defecto; JS de cliente solo donde haya interactividad.
- `next/font` (sin `<link>` a Google Fonts); como máximo ~4 archivos de fuente (familias × pesos).
- `next/image` con `sizes`; solo la imagen LCP con `preload`.
- Iframes (mapas, vídeos) con `loading="lazy"`; considera una fachada clicable para YouTube.
- Sin librerías pesadas para cosas que CSS resuelve.
