import type { Metadata } from "next";
import { LegalPage, OwnerDetails } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo trata ${site.name} tus datos personales cuando nos contactas o haces un encargo, y cómo ejercer tus derechos.`,
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="Pedimos los mínimos datos posibles: solo los necesarios para responderte o preparar tu encargo."
    >
      <h2>1. Responsable del tratamiento</h2>
      <OwnerDetails />

      <h2>2. Qué datos tratamos y para qué</h2>
      <p>Esta web no tiene registro de usuarios ni guarda en nuestro servidor los datos de ningún formulario. Tratamos datos solo cuando tú nos los facilitas:</p>
      <ul>
        <li>
          <strong>Encargos por WhatsApp o teléfono:</strong> nombre, teléfono y detalle del pedido, para prepararlo y
          avisarte de cualquier incidencia.
        </li>
        <li>
          <strong>Consultas por email o desde la página de contacto:</strong> nombre, email y el contenido de tu mensaje,
          para responderte. El formulario de contacto abre tu propia aplicación de correo; el mensaje nos llega por email.
        </li>
        <li>
          <strong>Encargos para grupos y empresas:</strong> además, los datos de facturación necesarios para emitir la
          factura.
        </li>
      </ul>

      <h2>3. Base jurídica</h2>
      <ul>
        <li>Ejecución de un contrato o de medidas precontractuales a petición tuya (art. 6.1.b RGPD): encargos y presupuestos.</li>
        <li>Tu consentimiento (art. 6.1.a RGPD): consultas que nos envías por iniciativa propia.</li>
        <li>Cumplimiento de obligaciones legales (art. 6.1.c RGPD): conservación de facturas.</li>
      </ul>

      <h2>4. Cuánto tiempo los conservamos</h2>
      <p>
        Los mensajes y encargos, el tiempo necesario para atenderlos y, como máximo, un año. Los datos de facturación,
        durante los plazos que exige la normativa fiscal y mercantil (en general, 6 años).
      </p>

      <h2>5. Destinatarios</h2>
      <p>No cedemos tus datos a terceros salvo obligación legal. Sí intervienen estos proveedores:</p>
      <ul>
        <li>
          <strong>WhatsApp (Meta Platforms Ireland)</strong>, si eliges contactarnos por WhatsApp, conforme a su propia
          política de privacidad.
        </li>
        <li>
          <strong>Glovo</strong>, si pides a domicilio a través de su app: Glovo es responsable de los datos que le
          facilitas.
        </li>
        <li>
          <strong>Proveedor de alojamiento web</strong>, que solo procesa datos técnicos de conexión (como la dirección
          IP) para servir la web. Si se ubica fuera del Espacio Económico Europeo, la transferencia se ampara en las
          cláusulas contractuales tipo de la Comisión Europea o en el Marco de Privacidad de Datos UE-EE. UU.
        </li>
      </ul>

      <h2>6. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad, así como retirar tu consentimiento en cualquier momento, escribiendo a{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> e indicando qué derecho quieres ejercer.
      </p>
      <p>
        Si consideras que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de
        Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>7. Menores</h2>
      <p>No tratamos conscientemente datos de menores de 14 años sin el consentimiento de sus padres o tutores.</p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a pérdida, uso indebido o
        acceso no autorizado.
      </p>
    </LegalPage>
  );
}
