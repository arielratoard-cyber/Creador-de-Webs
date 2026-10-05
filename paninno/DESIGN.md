# Paninno — Design brief

## Objetivo
- Negocio / tipo de web: paninoteca y focacceria italiana (solo panini y focaccia), landing de una página.
- Público objetivo: gente que come cerca (trabajadores, estudiantes, vecinos) y turistas que buscan "bocata italiano" en Barcelona.
- Conversión principal (CTA): **Pedir para llevar** (encargo por WhatsApp / teléfono).
- Conversión secundaria: ver la carta, cómo llegar, delivery (Glovo), encargos para grupos.

## Dirección visual
- Palabras clave: cálido, artesanal, directo, con un punto descarado.
- Paleta: fondo #F7F1E6 (crema de harina), superficie #EEE3CF, texto #1F1A15 (espresso), atenuado #5E5347, borde #DCCDB3, acento #B3311C (rojo pomodoro, solo CTAs y énfasis), `crust` #C98A3C (corteza, solo sobre fondo oscuro).
- Tipografía: Fraunces (display, cursiva para palabras clave y nombres de sección) + DM Sans (texto). Hero con `clamp(3rem, 8.5vw, 6.75rem)`.
- Spacing: secciones `py-20 md:py-32`; contenedor `max-w-6xl`.
- Forma: radio 4px, divisores de 1px, sin sombras ni tarjetas. Carta con líneas de puntos entre plato y precio, como una carta impresa.
- Motion: revelado suave de grupos (`Reveal`), hovers en enlaces y botones. Nada más.
- Imágenes: fotografía real del producto, luz natural, cálida. Ahora mismo son **placeholders** (la red del entorno de desarrollo no permitía descargar stock).

## Preferencias del usuario (acumulativas)
- 2026-10-05: "restaurante italiano Paninno, solo bocatas y focaccias italianas".

## Contenido provisional (TODO)
- Dirección, teléfono, WhatsApp, email, horarios, URL de producción (`src/lib/site.ts`).
- Carta y precios (ejemplos plausibles), plataforma de delivery (Glovo supuesto).
- Fotos: hero, focaccia, galería (3).
- Sin opiniones: añadir reseñas reales de Google cuando existan.
- Páginas legales (aviso legal, privacidad).
