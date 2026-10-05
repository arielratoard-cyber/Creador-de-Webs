# Design principles

El objetivo es que la web parezca diseñada por alguien con criterio. El criterio se nota en la **contención** y la **consistencia**, no en la cantidad de efectos.

## 1. Jerarquía
- Cada sección tiene **un** foco. Pregunta: ¿qué debe leer/hacer el usuario aquí primero? Eso es lo más grande o lo de más contraste; todo lo demás retrocede.
- Tres niveles de texto por sección como máximo: título, apoyo, detalle.
- Contraste de tamaño real entre niveles (ratio ≥ 1.5 entre título y cuerpo, normalmente mucho más en el hero). Jerarquías planas (todo a 18–24px) son la marca de una web amateur.
- Usa peso, color (texto vs. atenuado) y espacio antes que cajas y bordes para agrupar.

## 2. Tipografía
- Máximo 2 familias: una display (títulos) y una de texto. A veces una sola familia con buenos pesos es mejor (minimalismo, tech).
- Tamaño base del cuerpo: 16–18px; `leading-relaxed` (1.6–1.7) en párrafos; longitud de línea 55–75 caracteres (`max-w-prose` o `max-w-[60ch]`).
- Títulos grandes: `leading-[1.05]`–`leading-tight` y `tracking-tight` (o tracking negativo leve). Nunca `leading-relaxed` en titulares.
- Escala fluida con `clamp()` para el hero: p. ej. `text-[clamp(2.5rem,6vw,5.5rem)]`.
- Eyebrows/labels en mayúsculas: pequeños (12–13px), `tracking-[0.15em]`, color atenuado o acento. Úsalos con moderación (no en todas las secciones).
- `text-balance` en titulares, `text-pretty` en párrafos.
- Emparejamientos probados (Google Fonts vía `next/font`):
  - Editorial / premium: **Fraunces**, **Cormorant Garamond**, **Playfair Display** o **Instrument Serif** + **Inter** / **Manrope**
  - Moderno neutro / tech sobrio: **Inter Tight** o **Geist** sola; **Manrope** sola
  - Con carácter / geométrico: **Space Grotesk**, **Sora**, **Outfit** + **Inter**
  - Cálido / artesanal: **DM Serif Display** o **Libre Caslon** + **DM Sans** / **Work Sans**
  - Agresivo / impacto: **Archivo** (pesos 800–900, también en ancho expandido), **Anton** o **Bebas Neue** (solo titulares) + **Inter**
  - Lujo / moda: **Bodoni Moda** o **Italiana** + **Jost**
- Evita: más de 3 pesos por familia, cursivas decorativas en párrafos, fuentes "script" salvo en logotipos.

## 3. Color
- Paleta de tokens, no colores sueltos: `background`, `surface` (bloques alternos), `foreground`, `muted` (texto secundario), `line` (bordes/divisores), `accent`, `accent-foreground`.
- Regla 60-30-10: dominante neutro, secundario de marca/superficie, **acento solo para acciones y énfasis**. Si el acento aparece en todas partes deja de guiar al CTA.
- Neutros con temperatura: blancos rotos (#FAF8F5 cálido, #F7F8FA frío) y negros profundos no puros (#111, #1A1714) quedan más cuidados que #FFF/#000 puros… salvo en estilos minimal/tech que buscan precisamente ese contraste.
- El acento deriva de la marca (logo, producto, ubicación, sector). Si no hay marca, elige uno con razón (verde oliva para cocina mediterránea, terracota para cerámica, azul profundo para despacho legal) — nunca "violeta IA" por defecto.
- Contraste mínimo WCAG AA: 4.5:1 texto normal, 3:1 texto grande y componentes UI. Comprueba sobre todo el texto atenuado y el texto sobre imágenes (usa overlay o degradado sutil detrás del texto).
- Fondos de sección: alterna `background`/`surface` para ritmo; una sección oscura de contraste (testimonio destacado o CTA final) puede anclar la página.

## 4. Espaciado y layout
- Escala de 4/8px. Elige un espaciado vertical de sección y mantenlo: compacto `py-16 md:py-24`, estándar `py-20 md:py-32`, aireado `py-24 md:py-40`.
- Contenedor: `max-w-6xl` (contenido) o `max-w-7xl` (layouts amplios), gutter `px-5 sm:px-8`. Texto largo: `max-w-prose`. Navbar, secciones y footer usan el **mismo** ancho de contenedor para que los bordes izquierdos se alineen (`Container` por defecto).
- Más espacio entre grupos que dentro de los grupos (proximidad). Título→párrafo: 16–24px; bloque de cabecera→contenido: 48–64px.
- Usa la cuadrícula de 12 columnas para composiciones asimétricas (texto 5 col + imagen 7 col) — las asimetrías bien hechas son lo que separa un diseño de una plantilla.
- Alinea a pocos ejes. Texto alineado a la izquierda por defecto; centrado solo en bloques cortos (hero centrado, CTA final, cabeceras de sección breves).
- Varía la composición entre secciones (imagen-texto, grid, lista, bloque a sangre, cita grande). Tres secciones seguidas con "título centrado + 3 tarjetas" = plantilla.

## 5. Forma: radios, bordes, sombras
- Elige **una** regla de radio para todo el proyecto: 0 (editorial, lujo, brutalista), 4–8px (sobrio, corporativo), 12–16px (amigable, producto), pill solo en botones/badges si encaja.
- Bordes de 1px en color `line` para separar; prefiere divisores y espacio a tarjetas.
- Sombras: casi nunca. Si se usan, suaves y difusas (`shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_rgb(0_0_0/0.06)]`) y solo en elementos que "flotan" (dropdown, navbar al hacer scroll, modal).
- Tarjetas solo cuando el contenido es realmente un objeto independiente y clicable (producto, plan, artículo). Listas de características → lista con iconos o grid sin cajas.

## 6. Componentes
- **Botones**: un estilo primario (acento, sólido) y uno secundario (borde o texto). Altura ≥ 44px, padding horizontal generoso, verbo + objeto ("Reservar mesa", "Pedir presupuesto"). Nunca "Click aquí", "Enviar" a secas o "Saber más" en el CTA principal.
- **Navbar**: logo izquierda, 3–6 enlaces, CTA principal a la derecha. Sticky con fondo sólido/semi-opaco al hacer scroll (sin blur exagerado). En móvil: logo + CTA compacto o botón de menú.
- **Iconos**: `lucide-react`, mismo tamaño y `strokeWidth` (1.5 o 2) en todo el proyecto, color heredado. Nada de emojis como iconos. No pongas icono a cada línea de texto.
- **Footer**: información útil (contacto, horarios, dirección, enlaces legales, redes), no un muro de enlaces vacíos.

## 7. Anti-patrones "web hecha por IA" (prohibidos por defecto)
- Gradiente violeta→azul/rosa en hero, textos con gradiente, "blobs" difuminados de fondo.
- Glassmorphism (`backdrop-blur` + bordes blancos translúcidos) sin motivo.
- Todo dentro de tarjetas con `rounded-2xl shadow-xl`.
- Grids de 3 tarjetas idénticas con icono en círculo de color, repetidos sección tras sección.
- Badges tipo "✨ Nuevo" sobre el título del hero; emojis en titulares.
- Copy genérico: "Desbloquea tu potencial", "Soluciones innovadoras", "Llevamos tu negocio al siguiente nivel".
- Métricas inventadas ("10.000+ clientes satisfechos") sin datos del usuario.
- Animaciones en cada elemento, contadores animados, parallax en todo, cursores personalizados.
- Colores aleatorios distintos por tarjeta.

Cualquiera de estos puede usarse **si el usuario lo pide o la marca lo justifica** — entonces se ejecuta con cuidado.

## 8. Señales de calidad (busca incluir 2–3 por web)
- Un titular con personalidad tipográfica (tamaño muy grande, serif display, una palabra en cursiva o en color de acento).
- Una composición asimétrica o a sangre que rompa la retícula de forma intencional.
- Fotografía grande y bien recortada (`object-cover` con `object-position` pensado) en lugar de muchas imágenes pequeñas.
- Detalles finos: divisores de 1px, numeración de secciones (01, 02…), pies de foto, microcopy útil bajo el CTA ("Respuesta en menos de 24 h").
- Estados hover/focus cuidados y consistentes.
