# Images

## Prioridad de fuentes
1. **Imágenes del usuario** (fotos, logo, producto): siempre primero. Cópialas a `public/images/` con nombres descriptivos en kebab-case (`sala-principal.jpg`, no `IMG_2034.jpg`).
2. **Fotografía de stock con licencia libre y relevante** (Unsplash, Pexels) para ambientes genéricos: un restaurante italiano puede usar una foto genérica de pasta o de una sala; una clínica, una consulta luminosa. Requisitos:
   - Coherente con el negocio, la ubicación y el público (no una playa tropical para una gestoría de Madrid).
   - Mismo tratamiento en todas (temperatura, luz, saturación).
   - Comprueba que la URL existe antes de usarla (descárgala o haz una petición) — no inventes IDs de fotos. Si no hay red o no puedes verificar, usa placeholders.
   - Preferible descargar a `public/images/`; si se usan remotas, configura `images.remotePatterns` en `next.config.ts` (p. ej. `{ protocol: "https", hostname: "images.unsplash.com" }`).
   - Anota en `DESIGN.md` qué imágenes son de stock para que el usuario las sustituya.
3. **Placeholders claramente identificados** (`ImagePlaceholder` de la plantilla): cuando se trata de algo **específico** que no se puede representar con stock sin engañar — productos concretos, el local real, el equipo, platos de la carta, trabajos del portfolio, capturas de un SaaS. El placeholder muestra qué foto va ahí ("Foto: fachada del local, horizontal 16:10") y mantiene la proporción final para que el diseño no cambie al sustituirla.

Nunca: presentar una foto de stock como "nuestro equipo" o "nuestro producto", generar imágenes de productos concretos que el cliente no tiene, usar imágenes con marcas/personas reconocibles de terceros, o hotlinking a webs ajenas.

## Integración con el diseño
- Siempre `next/image`. Locales: `src="/images/hero.jpg"` con `width`/`height` reales, o `fill` dentro de un contenedor con proporción (`relative aspect-[4/3]`). Para obtener `placeholder="blur"` automático, guarda la imagen en `src/assets/` e impórtala estáticamente (`import hero from "@/assets/hero.jpg"`).
- `sizes` correcto siempre que uses `fill` o imágenes responsive.
- La imagen LCP (hero) con `preload` (Next 16; `priority` está deprecado). El resto, lazy por defecto.
- `alt` descriptivo y útil ("Sala del restaurante con mesas de madera junto a la ventana"); `alt=""` en imágenes puramente decorativas.
- Recorte deliberado: `object-cover` + `object-[center_30%]` etc. para no cortar caras o el plato.
- Texto sobre imagen: overlay (`bg-black/40`) o degradado inferior (`bg-gradient-to-t from-black/60`) para asegurar contraste AA; comprueba en la captura.
- Proporciones consistentes dentro de una misma sección (todas 4:5 o todas 3:2), y pocas proporciones en toda la web.
- Peso: fotos originales ≤ ~2500px de ancho; Next genera AVIF/WebP. Si añades `quality` distinta de 75, configura `images.qualities`.
- Logos: SVG preferentemente; si es PNG, con fondo transparente y tamaño adecuado. Favicon en `src/app/icon.(svg|png)`.

## Iconos e ilustraciones
- Iconos: `lucide-react`, consistentes. No uses iconos como relleno decorativo de cada bloque.
- Ilustraciones solo si encajan con la marca; nunca mezclar estilos de ilustración.
