# Motion

La animación sirve para **orientar** (qué ha cambiado, de dónde viene algo), **dar feedback** (hover, press, carga) y **marcar ritmo** (revelado progresivo). Si no hace ninguna de las tres cosas, sobra.

## Presupuesto por página
- Revelado al hacer scroll: en bloques de sección (cabecera de sección, grupo de tarjetas), no en cada párrafo o icono. Escalonado (stagger) de 60–100ms en grupos de máx. 4–6 elementos.
- Hero: como mucho una entrada coordinada (titular → subtítulo → CTA) en < 1s total. La imagen LCP **no** debe empezar invisible (perjudica LCP): anima solo un ligero `scale` o nada.
- Hovers: en todo lo interactivo (botones, enlaces, tarjetas clicables, imágenes de galería).
- Menú móvil, acordeones, modales: transición de apertura/cierre.
- Nada de: contadores animados, parallax en múltiples capas, texto que se escribe solo, cursores personalizados, animaciones en loop (salvo marquesina en estilo "agresivo"), scroll-jacking.

## Valores
| Tipo | Duración | Easing |
|---|---|---|
| Hover/press/focus | 150–200ms | `ease-out` |
| Menús, acordeones | 200–300ms | `cubic-bezier(0.2, 0, 0, 1)` |
| Revelado al scroll | 500–700ms (premium: hasta 900ms) | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Recorrido de fade/slide | 12–24px | — |

Anima solo `opacity` y `transform` (GPU); nunca `width`, `height`, `top`, `margin`.

## Implementación (sin dependencias)
- `templates/src/components/ui/reveal.tsx`: componente cliente con `IntersectionObserver`; anima una vez al entrar en el viewport; sin JS o con reduced motion el contenido es visible directamente.
- Hovers con utilidades Tailwind: `transition-colors duration-200`, `transition-transform hover:-translate-y-0.5`, `group-hover:scale-[1.03]` sobre imágenes dentro de `overflow-hidden`.
- Acordeones: `<details>/<summary>` nativo (accesible, sin JS) + rotación del icono con `group-open:rotate-45`. Para animar la altura usa `grid-template-rows: 0fr → 1fr`.
- Marquesina: keyframes en `globals.css` con `motion-reduce:animate-none`.

Usa la librería `motion` solo para: animaciones de layout compartido, gestos/drag, secuencias complejas coordinadas o transiciones entre rutas. Si la añades, importa desde `motion/react` y usa `useReducedMotion`.

## `prefers-reduced-motion` (obligatorio)
- La plantilla `globals.css` incluye un bloque global que reduce transiciones y animaciones a casi 0 con `prefers-reduced-motion: reduce`.
- `Reveal` comprueba la preferencia y muestra el contenido sin animar.
- Usa `motion-safe:` / `motion-reduce:` de Tailwind para casos puntuales.
- Nunca ocultes contenido (`opacity-0`) que dependa de una animación para aparecer sin una vía alternativa.
