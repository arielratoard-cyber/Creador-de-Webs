# QA checklist

No entregues hasta que los pasos 1–3 pasen sin errores. Si algo no se puede ejecutar en el entorno (sin red, sin navegador), dilo explícitamente en la entrega.

## 1. Comprobaciones automáticas
```bash
npx tsc --noEmit       # TypeScript
npm run lint           # ESLint (eslint-config-next: core-web-vitals + typescript)
npm run build          # build de producción (también detecta errores de prerender)
```
- Corrige la causa, no silencies: nada de `// @ts-ignore`, `any` injustificado, `eslint-disable` o `typescript.ignoreBuildErrors`.
- Los warnings también se corrigen salvo que sean de terceros y estén justificados.
- Si el build falla por Google Fonts sin red, indícalo y verifica el resto (no cambies a fuentes del sistema sin decírselo al usuario).

## 2. Runtime
Arranca en producción para detectar errores reales:
```bash
npm run build && (npm run start -- -p 3100 > /tmp/next-start.log 2>&1 &)
# espera a que responda:
until curl -sf http://localhost:3100 > /dev/null; do sleep 1; done
```
(En entornos donde `sleep` en primer plano no está permitido, ejecuta el servidor en segundo plano con la herramienta correspondiente y comprueba con `curl` de forma repetida.)

Tras cada `npm run build` **reinicia** el servidor: uno antiguo sirve chunks que ya no existen (errores 500 en `/_next/static/…`).

Comprueba que cada ruta devuelve 200 (`curl -s -o /dev/null -w "%{http_code}" http://localhost:3100/<ruta>`) y que `/sitemap.xml` y `/robots.txt` existen.

## 3. Revisión visual automatizada
Requiere Playwright. Instálalo solo para la verificación, sin tocar `package.json`:
```bash
npm i --no-save playwright
node <skill-dir>/scripts/visual-check.mjs http://localhost:3100 [/ruta-extra ...]
```
- Si el navegador de Playwright no está descargado y hay un Chromium en el sistema, el script lo detecta (`CHROMIUM_PATH`, `/opt/pw-browsers`, rutas típicas). Si no, `npx playwright install chromium` (solo si el entorno lo permite).
- Genera capturas de página completa en `.visual-check/` (375, 768, 1024, 1440, 1920) y un informe: overflow horizontal (con los elementos culpables), errores de consola y de página, peticiones fallidas, imágenes sin `alt` o rotas, número de `h1` y saltos de headings, botones/enlaces sin nombre accesible.
- **Abre y mira las capturas** (al menos 375 y 1440 de cada página). Evalúa con ojo de diseñador:
  - ¿Jerarquía clara? ¿El CTA destaca? ¿Hero completo en el primer pantallazo móvil?
  - ¿Espaciado consistente entre secciones? ¿Alineaciones limpias?
  - ¿Textos cortados, viudas feas en titulares, líneas demasiado largas?
  - ¿Imágenes bien recortadas, sin pixelar, contraste del texto sobre imágenes?
  - ¿Se parece a una plantilla de IA? (revisa `design-principles.md` §7)
- Corrige y repite hasta que esté al nivel. Borra `.visual-check/` al terminar o asegúrate de que está en `.gitignore`.
- Detén el servidor al terminar.

## 4. Checklist manual final
- [ ] Datos del negocio centralizados en `src/lib/site.ts`; sin lorem ipsum; TODOs listados
- [ ] Un `h1` por página; headings en orden; landmarks; skip link
- [ ] Metadata, OG image, favicon, sitemap, robots, `lang`
- [ ] Todos los enlaces funcionan (anclas con `id` existentes; `tel:`, `mailto:`, WhatsApp con formato correcto); externos con `rel="noopener noreferrer"` si `target="_blank"`
- [ ] Menú móvil: abre, cierra con Escape/enlace, bloquea scroll, accesible por teclado
- [ ] Navegación por teclado completa con foco visible
- [ ] `prefers-reduced-motion` respetado
- [ ] Sin overflow horizontal en 320–1920
- [ ] Imagen LCP con `preload`; resto lazy; `sizes` definidos
- [ ] Sin dependencias sin usar en `package.json`; sin archivos de demo del scaffold
- [ ] `DESIGN.md` actualizado
