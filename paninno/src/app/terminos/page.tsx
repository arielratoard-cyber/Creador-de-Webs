import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Condiciones de los encargos para llevar, pedidos de grupo y a domicilio de ${site.name}: precios, recogida, cancelaciones y alérgenos.`,
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      intro={`Las reglas de la casa para los encargos en ${site.name}: claras y cortas.`}
    >
      <h2>1. Ámbito</h2>
      <p>
        Estas condiciones se aplican a los encargos para llevar que haces por WhatsApp o teléfono, a los pedidos para
        grupos y empresas y, en lo que corresponda, al uso de esta web. Los datos del titular figuran en el{" "}
        <Link href="/aviso-legal">aviso legal</Link>.
      </p>

      <h2>2. Precios</h2>
      <p>
        Los precios de la carta están en euros e incluyen el IVA. Pueden cambiar sin previo aviso; en caso de
        discrepancia entre la web y el local, prevalece el precio del local en el momento del pedido.
      </p>

      <h2>3. Encargos para llevar</h2>
      <ul>
        <li>El encargo queda confirmado cuando te respondemos con la hora de recogida.</li>
        <li>El pago se realiza en el local al recoger, en efectivo o con tarjeta.</li>
        <li>
          Guardamos el encargo 30 minutos desde la hora acordada. Si no puedes venir, avísanos: el pan del día es
          limitado y otra persona lo aprovechará.
        </li>
        <li>La focaccia se hornea cada mañana y está disponible hasta agotar existencias.</li>
      </ul>

      <h2>4. Pedidos para grupos y empresas</h2>
      <ul>
        <li>Se solicitan con al menos 24 horas de antelación y se confirman con un presupuesto por escrito.</li>
        <li>Pueden requerir un pago anticipado, que se indicará en el presupuesto.</li>
        <li>
          Las cancelaciones con más de 24 horas de antelación son gratuitas. Con menos tiempo, podremos cobrar el coste
          del producto ya preparado.
        </li>
      </ul>

      <h2>5. Pedidos a domicilio</h2>
      <p>
        Los pedidos a domicilio se gestionan a través de plataformas de terceros (como Glovo). La entrega, el pago y las
        incidencias se rigen por las condiciones de esa plataforma.
      </p>

      <h2>6. Alérgenos</h2>
      <p>
        Conforme al Reglamento (UE) 1169/2011, tienes a tu disposición en el local la información de los 14 alérgenos
        de cada producto. Pregúntanos antes de pedir. Trabajamos con gluten, lácteos, frutos de cáscara (pistacho,
        piñones) y otros alérgenos en el mismo obrador, por lo que no podemos garantizar la ausencia de trazas.
      </p>

      <h2>7. Desistimiento</h2>
      <p>
        Al tratarse de alimentos perecederos preparados al momento, no se aplica el derecho de desistimiento (art. 103.d
        del Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios). Si algo no está bien,
        dínoslo en el momento y lo solucionamos.
      </p>

      <h2>8. Reclamaciones</h2>
      <p>
        Puedes escribirnos a <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. También tienes a tu
        disposición hojas oficiales de reclamación en el local.
      </p>

      <h2>9. Legislación aplicable</h2>
      <p>
        Estas condiciones se rigen por la legislación española. Si eres consumidor, podrás acudir a los juzgados de tu
        domicilio.
      </p>
    </LegalPage>
  );
}
