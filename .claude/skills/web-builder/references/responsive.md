# Responsive

Diseña **mobile-first**: las clases sin prefijo son para móvil; `sm:` (640), `md:` (768), `lg:` (1024), `xl:` (1280), `2xl:` (1536) añaden cambios hacia arriba. Cada breakpoint es una **recomposición**, no un escalado.

## Anchos objetivo
| Dispositivo | Ancho de prueba | Qué cambia típicamente |
|---|---|---|
| Móvil | 375 (y 320 como mínimo sin romperse) | Una columna, navbar compacta, CTA a ancho completo, imágenes 4:5 o 1:1 |
| Tablet | 768 | 2 columnas en grids, hero aún apilado o split 50/50 |
| Laptop | 1024–1280 | Composiciones asimétricas, navegación completa |
| Desktop | 1440 | Layout final de referencia |
| Pantallas grandes | 1920+ | El contenido no se estira: `max-w-*` centrado; los fondos e imágenes a sangre sí ocupan todo el ancho |

## Por componente
- **Navbar**: desktop = enlaces + CTA. `< lg` = logo + botón de menú (≥ 44×44px, `aria-expanded`, `aria-controls`) con panel a pantalla completa o desplegable; bloquea el scroll del body mientras está abierto, cierra con Escape y al pulsar un enlace. Si la acción principal es llamar/reservar, mantén un CTA compacto visible fuera del menú.
- **Hero**: en móvil, titular + subtítulo + CTA dentro del primer pantallazo (≈ 375×667); la imagen puede ir debajo o como fondo con overlay. Usa `min-h-[100svh]` (no `100vh`, que salta en móvil) solo si el diseño lo pide. Titular con `clamp()`.
- **Imágenes**: `next/image` con `sizes` real (p. ej. `sizes="(min-width: 1024px) 50vw, 100vw"`); cambia el `aspect-*` por breakpoint si conviene (`aspect-[4/5] md:aspect-[16/10]`); ajusta `object-position` para que el sujeto no se corte.
- **Tipografía**: titulares fluidos con `clamp()`; cuerpo ≥ 16px en móvil; `break-words`/`hyphens-auto` para palabras largas (sobre todo en alemán/neerlandés o URLs).
- **Botones**: `w-full sm:w-auto` en móvil cuando son el CTA principal; área táctil ≥ 44px; separación ≥ 8px entre objetivos táctiles.
- **Grids/Cards**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`; en móvil considera un carrusel con `snap-x snap-mandatory overflow-x-auto` para listas horizontales (con padding lateral y sin barra de scroll fea) en lugar de una columna interminable.
- **Formularios**: una columna en móvil; inputs ≥ 16px de fuente (evita el zoom de iOS); `inputMode`/`type` correctos.
- **Tablas** (precios, horarios): en móvil, conviértelas en listas o tarjetas apiladas, o envuélvelas en `overflow-x-auto` con indicación.
- **Footer**: columnas → apilado en móvil, con los datos de contacto primero.
- **Espaciado**: reduce el padding de sección en móvil (`py-16 md:py-28`) pero mantén el ritmo; gutter lateral 20px en móvil.

## Overflow horizontal (comprobar siempre)
Causas típicas: elementos con ancho fijo (`w-[600px]`), imágenes sin `max-w-full`, textos largos sin romper, `100vw` (incluye la barra de scroll), elementos decorativos posicionados fuera del viewport, `translate-x` de animaciones iniciales. 
Solución: corrige la causa; usa `overflow-x-clip` en el contenedor de la sección afectada solo como último recurso (nunca `overflow-x-hidden` en `body` para tapar el problema, porque rompe `position: sticky`).

`scripts/visual-check.mjs` detecta el overflow e indica qué elementos sobresalen.
