# Creador de Webs

Claude Code Skill **`web-builder`**: crea, recrea y mejora webs profesionales (Next.js + React + TypeScript + Tailwind CSS) a partir de descripciones, capturas, imágenes, logos o URLs de referencia.

## Estructura

```
.claude/skills/web-builder/
├── SKILL.md                      # Punto de entrada: principios + flujo de trabajo en 7 pasos
├── examples.md                   # Cómo interpretar peticiones típicas
├── references/                   # Se cargan solo cuando hacen falta
│   ├── project-setup.md          # Scaffold, estructura de carpetas, tokens, fuentes, DESIGN.md
│   ├── design-principles.md      # Jerarquía, tipografía, color, spacing, anti-patrones "IA"
│   ├── style-translation.md      # "minimalista", "premium", "como Apple"… → decisiones concretas
│   ├── site-blueprints.md        # Secciones y CTA por tipo de negocio
│   ├── reference-analysis.md     # Cómo analizar capturas/URLs sin copiar
│   ├── conversion.md             # CRO y auditoría "más conversiones"
│   ├── responsive.md             # Mobile-first, por componente, overflow
│   ├── motion.md                 # Animaciones sutiles + prefers-reduced-motion
│   ├── images.md                 # Fuentes de imágenes, placeholders, next/image
│   ├── seo-a11y.md               # Metadata, OG, sitemap, JSON-LD, accesibilidad
│   └── qa-checklist.md           # tsc, lint, build, runtime, revisión visual
├── templates/src/                # Componentes base probados que se copian a cada proyecto
└── scripts/visual-check.mjs      # Capturas en 5 anchos + detección de overflow, errores, alt, h1
```

## Uso

Abre Claude Code en este repositorio y pide lo que quieras; la skill se activa sola:

- "Créame una web para un restaurante italiano llamado Nonna Lucia"
- "Haz una landing page para este negocio" (+ captura)
- "Recrea esta web pero con un estilo más premium" (+ URL)
- "Modifica la web para que tenga más conversiones"

También puedes invocarla explícitamente con `/web-builder <petición>`.

Cada web se crea en su propia carpeta (`./<nombre-del-negocio>/`) con un `DESIGN.md` que guarda el brief, la dirección visual y tus preferencias, para que los cambios posteriores sean coherentes.

### Usarla en cualquier proyecto (instalación global)

```bash
mkdir -p ~/.claude/skills
cp -r .claude/skills/web-builder ~/.claude/skills/
```
