# Paninno — Design brief

## Objetivo
- Negocio / tipo de web: paninoteca y focacceria italiana (solo panini y focaccia), landing de una página.
- Público objetivo: gente que come cerca (trabajadores, estudiantes, vecinos) y turistas que buscan "bocata italiano" en Barcelona.
- Conversión principal (CTA): **Pedir para llevar** (encargo por WhatsApp / teléfono).
- Conversión secundaria: ver la carta, cómo llegar, delivery (Glovo), encargos para grupos.

## Dirección visual
- Palabras clave: cálido, artesanal, directo, con un punto descarado.
- Paleta (modo oscuro, única): fondo #15110D (horno de leña), superficie #1E1914, `deep` #0D0B09 (sección del pan y footer), texto #F3EADB (crema de harina, 15.7:1), atenuado #B5A790 (8:1), borde #342C24, acento #E8573B (rojo pomodoro, 5.2:1; solo CTAs y énfasis, botones con texto oscuro), `crust` #E3A656 (corteza, eyebrows de la sección oscura).
- Tipografía: Fraunces (display, cursiva para palabras clave y nombres de sección) + DM Sans (texto). Hero con `clamp(3rem, 8.5vw, 6.75rem)`.
- Spacing: secciones `py-20 md:py-32`; contenedor `max-w-6xl`.
- Forma: radio 4px, divisores de 1px, sin sombras ni tarjetas. Carta con líneas de puntos entre plato y precio, como una carta impresa.
- Motion: revelado suave de grupos (`Reveal`), hovers en enlaces y botones. Nada más.
- Imágenes: fotografía real del producto, luz cálida. Se configuran en `photos` (`src/lib/site.ts`); con `src` vacío se muestra un placeholder con la misma proporción. Admite archivos en `public/images/` o URLs de upload.wikimedia.org, images.unsplash.com e images.pexels.com. Las fotos CC BY necesitan `credit`.
- Mapa: solo se carga al pulsar «Cargar mapa» (cookies de Google) → la web no necesita banner de cookies.

## Preferencias del usuario (acumulativas)
- 2026-10-05: "restaurante italiano Paninno, solo bocatas y focaccias italianas".
- 2026-10-05: "cambia los colores a modo oscuro" → paleta oscura completa (sin toggle).
- 2026-10-05: páginas legales (aviso legal, privacidad, cookies, términos) y página «Contáctanos».

## Contenido provisional (TODO)
- Dirección, teléfono, WhatsApp, email, horarios, URL de producción (`src/lib/site.ts`).
- Carta y precios (ejemplos plausibles), plataforma de delivery (Glovo supuesto).
- Fotos: hero, focaccia, galería (3).
- Sin opiniones: añadir reseñas reales de Google cuando existan.
- Datos legales en `site.legal` (razón social, NIF, registro). Los textos legales son una base razonable para un negocio en España; que los revise un asesor.
- Fotos de dominio público: la red del entorno bloqueaba Wikimedia/Unsplash/Pexels.
