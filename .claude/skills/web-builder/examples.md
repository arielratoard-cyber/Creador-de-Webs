# Examples

Cómo interpretar peticiones típicas. No son guiones: muestran el nivel de inferencia esperado.

## "Créame una web para un restaurante italiano llamado Nonna Lucia en Gràcia"
- **Inferencias** (sin preguntar): landing de una página + `/carta`; conversión = reservar mesa (secundaria: llamar); público = vecinos y parejas 25–55; estilo cálido-artesanal.
- **Dirección**: crema #F6F1E9, tinta #221C17, acento rojo tomate apagado #A63A24, verde albahaca para detalles; Fraunces (titulares, con cursiva en una palabra) + DM Sans; radio 0–4px; fotos grandes de pasta fresca y sala (stock verificado hasta tener las propias, anotado en `DESIGN.md`).
- **Secciones**: Hero split (titular "Pasta fresca hecha cada mañana en Gràcia" + Reservar mesa + Ver carta) → Historia de la nonna (texto corto + foto) → Platos destacados (lista con precios, sin tarjetas) → Ambiente (galería asimétrica) → Opiniones (TODO: reales) → Horarios/mapa/teléfono → CTA final oscuro.
- **Datos marcados como TODO**: dirección exacta, teléfono, precios, reseñas.

## "Haz una landing page para este negocio" + captura de su web actual
- Lee la captura: extrae marca (logo, colores), servicios y textos reales — son del usuario, se pueden reutilizar.
- Diagnostica problemas (CTA escondido, texto ilegible…) y diséñala de nuevo con su identidad, mejorando la conversión.
- En la entrega: 3–5 mejoras clave respecto a la versión anterior.

## "Recrea esta web pero con un estilo más premium" + URL de un tercero
- Captura la URL (375 y 1440), rellena la ficha de `reference-analysis.md`.
- Mantén estructura y tipo de contenido; aplica "Premium" de `style-translation.md`.
- Contenido, imágenes y marca propios del usuario (o placeholders), nunca los del tercero.

## "Quiero una web parecida a esta imagen" (sin más contexto)
- Si la imagen no deja claro el negocio y no hay nombre: pregunta **solo** eso (una pregunta, con 2–3 opciones si se puede inferir algo). Todo lo demás (estructura, estilo) se deduce de la imagen.

## "Modifica la web para que tenga más conversiones"
- Lee `DESIGN.md` + código; audita con `conversion.md` §Auditoría.
- Entrega típica: "He movido las opiniones justo debajo del hero, he unificado el CTA a 'Pedir presupuesto' en toda la página, he reducido el formulario de 7 a 3 campos y he añadido el teléfono clicable en la navbar móvil."

## "Quiero algo minimalista, mucho espacio en blanco, tipo Apple"
- Combina "Minimalista" + "Como Apple" de `style-translation.md`: Inter Tight, gris #F5F5F7 alternando con blanco y una sección negra, titulares de 64–96px con tracking negativo, `py-32 md:py-48`, una idea por pantalla, producto protagonista.
- Registra en `DESIGN.md` → Preferencias del usuario.

## "Algo moderno pero no demasiado tecnológico"
- "Moderno (pero no demasiado tecnológico)": Manrope, neutros cálidos, acento verde salvia, radio 8px, fotografía de personas reales, sin fondos oscuros ni grids tech. Explica la interpretación en una frase.

## "Ponle un gradiente morado al hero" (petición que choca con los principios)
- Hazlo bien (gradiente sutil, coherente con la paleta, buen contraste) y, si perjudica la legibilidad o la marca, sugiere en una frase una alternativa (p. ej. foto con overlay de color de marca). El usuario decide.
