/**
 * Single source of truth for business data and editable content.
 * Everything the owner may want to change (texts, menu, prices, contact, hours)
 * lives here. Invented or provisional content is marked with TODO.
 */
export const site = {
  name: "Paninno",
  tagline: "Panini y focaccia italiana",
  description:
    "Paninno es una paninoteca italiana en Barcelona: panini y focaccia de masa madre horneada cada mañana, con embutidos y quesos italianos. Para comer aquí o llevar.", // TODO: revisar ciudad/barrio
  url: "https://paninno.es", // TODO: production URL
  locale: "es_ES",

  primaryCta: { label: "Pedir para llevar", href: "#pedir" },
  secondaryCta: { label: "Ver la carta", href: "#carta" },

  nav: [
    { label: "Carta", href: "#carta" },
    { label: "Nuestro pan", href: "#pan" },
    { label: "Cómo pedir", href: "#pedir" },
    { label: "Dónde estamos", href: "#visitanos" },
  ],

  contact: {
    phone: "+34 932 000 000", // TODO: replace
    email: "ciao@paninno.es", // TODO: replace
    whatsapp: "34600000000", // TODO: digits only, for https://wa.me/<number>
    street: "Carrer de Verdi 00", // TODO: replace
    postalCode: "08012",
    city: "Barcelona",
    mapsQuery: "Carrer de Verdi, Barcelona", // TODO: exact address
  },

  // TODO: confirm real opening hours
  hours: [
    { days: "Lunes", time: "Cerrado" },
    { days: "Martes – Viernes", time: "12:00 – 16:30 · 19:30 – 22:30" },
    { days: "Sábado – Domingo", time: "12:30 – 23:00" },
  ],

  social: [
    { label: "Instagram", href: "https://instagram.com/" }, // TODO: real profile
    { label: "Glovo", href: "https://glovoapp.com/" }, // TODO: real store link or remove
  ],
} as const;

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  /** Short dietary note shown as text, e.g. "Vegetariano". */
  note?: string;
  signature?: boolean;
};

export type MenuGroup = {
  id: string;
  title: string;
  intro: string;
  items: MenuItem[];
};

// TODO: replace with the real menu and prices
export const menu: MenuGroup[] = [
  {
    id: "panini",
    title: "Panini",
    intro: "En pan de focaccia o ciabatta de masa madre, abierto y relleno al momento.",
    items: [
      {
        name: "Il Paninno",
        description: "Mortadela IGP con pistacho, stracciatella, crema de pistacho de Bronte y rúcula.",
        price: "11,50",
        signature: true,
      },
      {
        name: "Parma",
        description: "Prosciutto di Parma 24 meses, mozzarella fior di latte, tomate seco y albahaca.",
        price: "11,00",
      },
      {
        name: "Porchetta",
        description: "Porchetta asada en casa, provola ahumada, cebolla caramelizada y salsa verde.",
        price: "11,50",
      },
      {
        name: "Diavola",
        description: "Salame piccante, ’nduja de Calabria, scamorza y pimientos asados.",
        price: "10,50",
        note: "Picante",
      },
      {
        name: "Ortolano",
        description: "Berenjena y calabacín a la brasa, burrata, pesto genovés y piñones tostados.",
        price: "10,00",
        note: "Vegetariano",
      },
    ],
  },
  {
    id: "focacce",
    title: "Focacce",
    intro: "Nuestra focaccia genovesa, alta y crujiente, por porción o entera para compartir.",
    items: [
      {
        name: "Classica",
        description: "Aceite de oliva virgen extra, sal en escamas y romero fresco.",
        price: "3,50",
        note: "Vegana",
      },
      {
        name: "Pomodorini",
        description: "Tomates cherry confitados, orégano y aceitunas taggiasche.",
        price: "4,50",
        note: "Vegana",
      },
      {
        name: "Patate e rosmarino",
        description: "Patata en láminas finas, romero y pecorino romano.",
        price: "4,50",
        note: "Vegetariano",
      },
      {
        name: "Focaccia entera",
        description: "Bandeja de 30 × 40 cm, cualquier variedad. Encárgala con 24 h de antelación.",
        price: "22,00",
      },
    ],
  },
];

// TODO: confirm prices
export const extras = [
  { name: "Chinotto, aranciata San Pellegrino", price: "3,00" },
  { name: "Cerveza Peroni / Moretti", price: "3,50" },
  { name: "Copa de vino tinto o blanco", price: "4,00" },
  { name: "Tiramisú de la casa", price: "5,00" },
];

export const breadPoints = [
  {
    title: "48 horas de fermentación",
    text: "Masa madre, harina italiana tipo 0 y mucho tiempo. Así el pan queda ligero por dentro y crujiente por fuera.",
  },
  {
    title: "Horneado cada mañana",
    text: "Encendemos el horno a las 7:00. Cuando se acaba la focaccia del día, se acaba.",
  },
  {
    title: "Producto italiano de verdad",
    text: "Mortadela de Bolonia, prosciutto di Parma, pistacho de Bronte, burrata de Puglia. Sin atajos.",
  },
];

export const orderOptions = [
  {
    title: "Encarga por WhatsApp",
    text: "Escríbenos qué quieres y a qué hora pasas. Te lo tenemos listo, sin colas.",
    action: "whatsapp",
  },
  {
    title: "A domicilio",
    text: "Disponible en Glovo dentro de la zona de reparto.", // TODO: confirm delivery platform
    action: "delivery",
  },
  {
    title: "Grupos y oficinas",
    text: "Bandejas de mini panini y focaccia para reuniones y eventos. Pídelo con 24 h.",
    action: "email",
  },
] as const;

export type NavItem = (typeof site.nav)[number];

/** `tel:` href from a human-formatted phone number. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(message = "¡Ciao! Quería encargar para llevar:") {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const fullAddress = `${site.contact.street}, ${site.contact.postalCode} ${site.contact.city}`;
