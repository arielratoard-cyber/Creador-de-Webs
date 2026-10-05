import { fullAddress, site, telHref } from "@/lib/site";
import { Bread } from "@/sections/bread";
import { Gallery } from "@/sections/gallery";
import { Hero } from "@/sections/hero";
import { Menu } from "@/sections/menu";
import { Order } from "@/sections/order";
import { Visit } from "@/sections/visit";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: telHref(site.contact.phone).replace("tel:", ""),
  servesCuisine: ["Italiana", "Panini", "Focaccia"],
  priceRange: "€",
  acceptsReservations: false,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.street,
    postalCode: site.contact.postalCode,
    addressLocality: site.contact.city,
    addressCountry: "ES",
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Menu />
      <Bread />
      <Order />
      <Visit />
      <Gallery />
    </>
  );
}
