/**
 * Single source of truth for business data and editable content.
 * Everything the owner may want to change (texts, contact, hours, links)
 * lives here. Mark invented or provisional content with TODO.
 */
export const site = {
  name: "Nombre del negocio", // TODO: replace
  tagline: "Propuesta de valor en pocas palabras", // TODO: replace
  description:
    "Descripción de 140–160 caracteres con la keyword principal y la ubicación, pensada para Google y para compartir en redes.", // TODO: replace
  url: "https://example.com", // TODO: production URL
  locale: "es_ES",

  primaryCta: { label: "Reservar mesa", href: "#reservar" },
  secondaryCta: { label: "Ver la carta", href: "#carta" },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Contacto", href: "#contacto" },
  ],

  contact: {
    phone: "+34 600 000 000", // TODO: replace
    email: "hola@example.com", // TODO: replace
    whatsapp: "34600000000", // digits only, for https://wa.me/<number>
    address: "Calle Ejemplo 1, 08001 Barcelona", // TODO: replace
    mapsUrl: "https://maps.google.com/?q=Barcelona",
  },

  hours: [
    { days: "Lunes – Viernes", time: "9:00 – 20:00" },
    { days: "Sábado", time: "10:00 – 14:00" },
  ],

  social: [{ label: "Instagram", href: "https://instagram.com/" }],
} as const;

export type NavItem = (typeof site.nav)[number];

/** `tel:` href from a human-formatted phone number. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
