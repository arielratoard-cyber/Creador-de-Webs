# Style translation: de adjetivos a decisiones

El usuario habla en adjetivos; tú decides en tokens. Cada estilo afecta a **tipografía, color, spacing, layout, imágenes, componentes y motion** — nunca solo al color de fondo.

Cuando el usuario combine estilos ("moderno pero no muy tecnológico", "premium pero cercano"), toma la base del primero y modula con el segundo; registra la interpretación en `DESIGN.md` y explícala en una frase en la entrega.

## Minimalista
"Minimalista" = **reducción con intención**, no "fondo blanco".
- **Tipografía**: una sola familia (Inter Tight, Geist, Manrope) o serif fina para titulares; pocos tamaños pero con mucho contraste entre ellos; pesos 400–500 (el énfasis viene del tamaño, no del bold).
- **Color**: neutros + 1 acento usado casi solo en el CTA; o monocromo total con el CTA en negro. Fondos blanco roto o gris muy claro.
- **Spacing**: aireado (`py-28 md:py-40`), márgenes amplios, mucho espacio negativo alrededor del titular.
- **Layout**: pocos elementos por pantalla; retícula estricta; alineación izquierda; secciones de una idea.
- **Imágenes**: pocas, grandes, con mucho aire; producto aislado o fotografía muy limpia.
- **Componentes**: sin tarjetas ni sombras; divisores 1px; botones planos; radio 0–6px.
- **Motion**: fades lentos y cortos de recorrido (8–12px); nada de rebotes.

## Premium / lujo
- **Tipografía**: serif display de alto contraste (Fraunces, Cormorant, Bodoni Moda, Instrument Serif) a tamaños grandes + sans discreta; tracking amplio en labels en mayúsculas; mucho interlineado en cuerpo.
- **Color**: paleta restringida y profunda (negro cálido, crema, piedra, verde botella, burdeos) + acento metálico apagado (latón #B08D57) usado con extrema moderación. Nunca colores saturados.
- **Spacing**: generoso; ritmo pausado; secciones a pantalla completa para momentos clave.
- **Layout**: composiciones editoriales asimétricas, imagen a sangre, texto corto.
- **Imágenes**: fotografía de alta calidad, iluminación cuidada, tonos coherentes; gran formato.
- **Componentes**: radio 0; botones con borde fino o texto subrayado; CTA sobrio ("Reservar", "Solicitar cita").
- **Motion**: lento (600–900ms), easing suave, revelados de imagen sutiles. Sin microinteracciones juguetonas.
- **Copy**: frases cortas, sin exclamaciones ni superlativos baratos.

## "Como Apple"
- **Tipografía**: sans neutra y precisa (Inter/Inter Tight o Geist), titulares enormes con tracking negativo, peso 600; subtítulos en gris; frases muy cortas.
- **Color**: blanco/gris muy claro (#F5F5F7) alternando con secciones negras; acento azul solo en enlaces/CTA.
- **Spacing**: muy aireado, una idea por pantalla.
- **Layout**: centrado y simétrico; producto protagonista; grids de "bento" solo para características, con tarjetas de radio grande (18–24px) en superficie gris — es una de las pocas situaciones donde las tarjetas son el estilo.
- **Imágenes**: producto recortado sobre fondo limpio, render o foto de estudio.
- **Motion**: aparición suave al hacer scroll, escalado ligero de imagen; nunca efectos llamativos.
- **CTA**: pareja "Comprar" (pill sólido) + "Más información >" (enlace).

## Moderno (pero no demasiado tecnológico)
- Sans geométrica amable (Manrope, DM Sans, Outfit) + quizá serif para un detalle.
- Neutros cálidos + un acento con personalidad pero no neón (verde salvia, azul petróleo, coral apagado).
- Radio medio (8–12px), sin glows, sin fondos oscuros con grids/patrones tech.
- Fotografía de personas y espacios reales en vez de ilustraciones 3D o capturas de dashboard.

## Tecnológico / SaaS
- Sans técnica (Geist, Inter, Space Grotesk) + mono para detalles (Geist Mono, JetBrains Mono).
- Modo oscuro opcional; neutros fríos; un acento vivo (azul eléctrico, verde lima) usado con disciplina.
- Capturas del producto reales (o placeholders marcados) dentro de un marco limpio; diagramas sencillos.
- Secciones: problema → producto → features (bento o lista) → integraciones → precios → FAQ → CTA.
- Motion: transiciones rápidas (150–250ms), microinteracciones en hover.

## Agresivo / llamativo / alto impacto
- **Tipografía**: display muy pesada o condensada (Archivo Black/ExtraBold, Anton, Bebas Neue) a tamaños enormes, mayúsculas, tracking ajustado; textos que tocan los bordes.
- **Color**: alto contraste — negro + un color saturado (amarillo #FFD600, rojo #FF3B1F, lima #C6FF00) en bloques grandes; bloques de color plano en vez de degradados.
- **Spacing**: denso y con ritmo; rompe la retícula con elementos superpuestos o rotados con intención.
- **Componentes**: radio 0, bordes gruesos (2–3px), botones grandes; marquesina de texto (respetando reduced motion).
- **Motion**: más rápido y directo (200–300ms), hovers con desplazamiento o inversión de color.
- **Copy**: imperativo, corto, con números concretos.

## Cálido / cercano / artesanal
- Serif suave (DM Serif Display, Fraunces con `SOFT`, Libre Caslon) + sans humanista (DM Sans, Work Sans).
- Tonos tierra: crema, terracota, oliva, marrón tostado; texturas sutiles en fotografía, no en CSS.
- Fotografías de personas, manos, proceso, local; tono de copy en segunda persona y cercano.
- Radio pequeño-medio; ilustraciones o detalles dibujados solo si la marca los tiene.

## Corporativo / confianza (despachos, clínicas, consultoras)
- Sans sobria (Inter, IBM Plex Sans, Source Sans 3) o serif clásica en titulares para tradición (Libre Caslon, Source Serif).
- Azules profundos, verdes oscuros o grises con un acento contenido; mucho blanco.
- Prueba social visible: colegiación, certificaciones, años, casos, logos de clientes (reales).
- Radio 4–8px, estructura clara, formularios cortos, teléfono visible.

## Juvenil / divertido
- Sans redondeada o con carácter (Outfit, Sora, Bricolage Grotesque), pesos altos.
- Paleta de 2–3 colores vivos con un neutro fuerte; bloques de color.
- Radio grande, pequeñas rotaciones, stickers/badges con intención; motion con un leve "spring" (aún respetando reduced motion).

## Peticiones de ajuste frecuentes
| El usuario dice | Cambio concreto |
|---|---|
| "Más espacio en blanco" | Sube un escalón el padding de sección, aumenta gap entre bloques, reduce elementos por fila, acorta textos |
| "Más premium" | Serif display, paleta más oscura/restringida, menos colores, radio 0, más aire, fotos más grandes, motion más lento, eliminar badges/iconos sobrantes |
| "Más moderno" | Tipografía sans actual, retícula asimétrica, quitar sombras/gradientes anticuados, imágenes más grandes |
| "Más llamativo" | Titular más grande y pesado, acento más saturado en bloques, contraste de secciones oscuras, CTA más visible |
| "Más serio/profesional" | Reduce colores y pesos, alinea a la izquierda, elimina motion decorativo, añade prueba social |
| "Está muy vacío" | Añade contenido útil (prueba social, detalles, imágenes), no decoración |
| "Está muy recargado" | Elimina tarjetas/iconos/bordes, agrupa por espacio, reduce a un foco por sección |
