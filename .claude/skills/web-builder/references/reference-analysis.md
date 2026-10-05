# Reference analysis

## Cómo acceder a la referencia
- **Captura / imagen**: léela con la herramienta de lectura de imágenes. Si hay varias, analiza cada una y anota qué aporta.
- **URL**: si hay navegador (Playwright), haz capturas a 375px y 1440px con `scripts/visual-check.mjs <url>` y analiza las imágenes; complementa con WebFetch para la estructura y el texto. Si solo hay WebFetch, analiza la estructura HTML/CSS que devuelva y dilo (sin captura, el análisis visual es parcial).
- **Logo**: extrae colores (si es SVG, lee los `fill`; si es imagen, estima los tonos) y el carácter tipográfico (serif/sans, peso, geométrico/humanista) para derivar la paleta y la fuente.
- **Paleta**: asigna cada color a un rol de token (fondo, superficie, texto, acento…) y verifica contraste; si la paleta no tiene neutros, créalos derivados (versiones casi blancas/casi negras del tono principal).

## Qué extraer (rellena mentalmente esta ficha)
| Aspecto | Preguntas |
|---|---|
| Layout | ¿Retícula de cuántas columnas? ¿Simétrico o asimétrico? ¿Ancho máximo del contenido? ¿Elementos a sangre? |
| Espaciado | ¿Denso o aireado? Padding vertical de sección aproximado; espacio entre título y contenido |
| Tipografía | ¿Serif/sans/display? Peso de titulares, tamaño relativo del H1 respecto al cuerpo, tracking, mayúsculas, interlineado |
| Tamaños | Proporción hero (altura), tamaño de botones, tamaño de imágenes respecto al texto |
| Color | Fondo dominante, número de colores, dónde aparece el acento, secciones oscuras |
| Jerarquía | ¿Qué se ve primero en cada sección? ¿Cómo se diferencia lo secundario? |
| Navegación | Posición del logo, nº de enlaces, CTA en nav, comportamiento sticky, menú móvil |
| Hero | Composición (centrado, split, imagen a sangre, vídeo), longitud del titular, nº de CTAs |
| CTA | Estilo, texto, repeticiones a lo largo de la página |
| Cards | ¿Existen? Radio, borde vs. sombra, densidad de contenido |
| Secciones | Lista ordenada de secciones y su patrón de composición |
| Footer | Estructura, contenido, tono |
| Animaciones | Si se pueden inferir: tipo, velocidad, intensidad |
| Estilo general | 3 adjetivos que lo resumen (lleva estos a `references/style-translation.md`) |

Anota el resultado en `DESIGN.md` → "Referencias usadas y qué se tomó de cada una".

## Recrear vs. inspirarse
- **"Quiero algo parecido a esto"**: replica el **sistema** (proporciones, ritmo, jerarquía, estilo de composición, tipo de paleta) con el contenido y la marca del usuario.
- **"Recrea esta web pero más premium / moderna"**: conserva estructura y contenido del usuario, rediseña el sistema visual aplicando el estilo pedido.
- **Si la web de referencia es del propio usuario** (la suya actual), puedes reutilizar sus textos, imágenes y logo libremente.

## Límites (siempre)
- No copies literalmente textos, fotografías, ilustraciones, logos, marcas ni código de webs de terceros.
- No reproduzcas la identidad de otra marca de forma que pueda confundirse con ella (mismo nombre, logo o combinación inconfundible de colores + tipografía + layout).
- Las fuentes de pago de la referencia se sustituyen por equivalentes de Google Fonts (p. ej. SF Pro → Inter; Canela → Fraunces / Cormorant; GT America → Inter Tight / Geist; Neue Haas → Inter; Tiempos → Source Serif / Newsreader).
- Si la referencia tiene problemas (contraste bajo, CTA escondido, texto ilegible en móvil), no los heredes: mejóralos y coméntalo.
