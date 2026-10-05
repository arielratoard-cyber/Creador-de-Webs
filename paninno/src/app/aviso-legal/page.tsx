import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, OwnerDetails } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${site.name}: datos del titular, condiciones de uso de la web y propiedad intelectual.`,
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio
        Electrónico (LSSI-CE), te informamos de los datos del titular de este sitio web:
      </p>
      <OwnerDetails />

      <h2>2. Objeto</h2>
      <p>
        Esta web tiene como finalidad dar a conocer {site.name}, su carta, horarios y formas de pedido. El acceso es
        gratuito y no requiere registro. Navegar por ella implica aceptar este aviso legal.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        Te comprometes a usar la web de forma lícita y a no emplearla para actividades que puedan dañar a {site.name} o
        a terceros, ni para introducir virus o cualquier otro sistema que pueda causar daños.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, el diseño, el logotipo, la marca «{site.name}» y las fotografías propias de esta web pertenecen a{" "}
        {site.legal.owner} o se usan con licencia. Las fotografías de terceros indican su autor y licencia. No está
        permitida su reproducción con fines comerciales sin autorización.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        Procuramos que la información (carta, precios, horarios) esté siempre actualizada, pero puede contener errores u
        omisiones. En caso de discrepancia prevalecen los precios y la carta expuestos en el local. No nos hacemos
        responsables del contenido de las webs de terceros enlazadas (WhatsApp, Glovo, Instagram, Google Maps).
      </p>

      <h2>6. Protección de datos y cookies</h2>
      <p>
        El tratamiento de tus datos personales se explica en la <Link href="/privacidad">política de privacidad</Link>{" "}
        y el uso de cookies en la <Link href="/cookies">política de cookies</Link>.
      </p>

      <h2>7. Legislación aplicable y jurisdicción</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los
        juzgados y tribunales de {site.contact.city}, salvo que la normativa de consumidores establezca otro fuero.
      </p>
    </LegalPage>
  );
}
