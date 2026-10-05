# Site blueprints

Puntos de partida, no plantillas rígidas. Elimina secciones que no aporten y reordena según la objeción principal del público. Por defecto, **una landing de una página** con anclas; añade páginas solo cuando el contenido lo exige (carta extensa, servicios con SEO propio, blog, legales).

En todas: navbar con CTA, footer útil, `metadata` por página y páginas legales enlazadas si hay formulario (privacidad).

## Restaurante / bar / cafetería
- **Conversión**: reservar mesa (o llamar / pedir a domicilio). Secundaria: cómo llegar.
- **Secciones**: Hero (foto de plato o sala a sangre + nombre + propuesta en una línea + "Reservar mesa") → Propuesta/historia breve → Carta destacada (5–8 platos con precio) + enlace a carta completa → Ambiente (galería 3–6 fotos) → Opiniones (con fuente: Google, TheFork) → Horarios + ubicación (mapa) + contacto → CTA final de reserva.
- **Páginas extra**: `/carta` si hay más de ~15 platos (por categorías, precios alineados, alérgenos).
- **Clave**: horarios y dirección visibles sin buscar; teléfono `tel:` clicable en móvil; schema `Restaurant`.

## Negocio local de servicios (fontanero, clínica, peluquería, taller, gimnasio)
- **Conversión**: llamar / WhatsApp / pedir cita. Secundaria: formulario corto.
- **Secciones**: Hero (beneficio + zona de servicio + CTA llamar y CTA cita) → Servicios (lista clara con precio "desde" si hay) → Por qué nosotros (3–4 razones concretas: años, garantía, rapidez) → Proceso (3 pasos) → Opiniones → Zona/horario/mapa → FAQ → CTA final.
- **Clave**: teléfono en navbar móvil; barra de acción fija inferior en móvil opcional (Llamar | WhatsApp); schema `LocalBusiness`.

## Landing de producto / SaaS
- **Conversión**: registrarse / prueba gratis / demo.
- **Secciones**: Hero (resultado que obtiene el usuario + subtítulo de cómo + CTA + captura del producto) → Logos/prueba social → Problema → Features (3–6, con visual) → Cómo funciona → Testimonios con nombre y cargo → Precios → FAQ (objeciones) → CTA final.
- **Clave**: el mismo CTA repetido en hero, tras features, en precios y al final; microcopy de riesgo ("Sin tarjeta", "Cancela cuando quieras").

## Agencia / estudio / freelance
- **Conversión**: contactar / pedir propuesta.
- **Secciones**: Hero (posicionamiento claro: qué hacéis y para quién) → Trabajos seleccionados (3–6 casos grandes con resultado) → Servicios → Proceso → Clientes/testimonios → Sobre nosotros (personas reales) → Contacto.
- **Páginas extra**: `/trabajos/[slug]` para casos de estudio si hay contenido.

## Portfolio personal (diseñador, fotógrafo, desarrollador)
- **Conversión**: contactar / descargar CV / ver trabajos.
- **Secciones**: Hero (nombre + especialidad + una frase de posicionamiento) → Proyectos (el protagonista: grandes, con contexto y rol) → Sobre mí (foto real) → Experiencia/skills breve → Contacto.
- **Clave**: la tipografía y el layout son la muestra de criterio; menos secciones, más calidad.

## E-commerce pequeño / catálogo
- **Conversión**: comprar / añadir al carrito (o pedir por WhatsApp si no hay pasarela).
- **Secciones**: Hero (producto estrella o colección) → Categorías → Productos destacados (tarjetas de producto: aquí sí son tarjetas) → Propuesta de valor (envío, devoluciones, origen) → Reseñas → Newsletter → Footer con políticas.
- **Clave**: no inventes productos, precios ni fotos de productos concretos; usa placeholders marcados hasta tener los reales. Para una tienda real con pagos, propone Shopify/Stripe en lugar de construir checkout a mano.

## Evento / lanzamiento / curso
- **Conversión**: inscribirse / comprar entrada.
- **Secciones**: Hero (qué, cuándo, dónde + CTA + cuenta atrás opcional) → Qué aprenderás/vivirás → Programa/agenda → Ponentes/profesor → Precio y qué incluye → Testimonios → FAQ → CTA.

## Hotel / alojamiento / turismo
- **Conversión**: reservar (enlace a motor de reservas) / consultar disponibilidad.
- **Secciones**: Hero (foto a sangre) → Experiencia/propuesta → Habitaciones (tarjetas con foto, capacidad, desde X €) → Servicios → Entorno/ubicación → Galería → Opiniones → CTA reserva.

## Profesional liberal (abogado, psicólogo, asesor, arquitecto)
- **Conversión**: pedir primera consulta / llamar.
- **Secciones**: Hero (a quién ayudas y en qué) → Áreas de práctica → Enfoque/método → Sobre mí/el equipo (credenciales reales) → Opiniones o casos → FAQ → Contacto con formulario corto.
- **Clave**: confianza > espectáculo. Datos de colegiación y privacidad visibles.

## ONG / asociación
- **Conversión**: donar / hacerse socio / voluntariado.
- **Secciones**: Hero (causa + impacto + Donar) → Problema → Qué hacemos → Impacto con datos reales → Historias → Formas de colaborar → Transparencia → CTA.
