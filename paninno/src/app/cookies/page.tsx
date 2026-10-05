import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `${site.name} no usa cookies propias, analíticas ni publicitarias. Te explicamos qué ocurre con el mapa de Google y los enlaces externos.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      intro="Resumen: esta web no instala cookies propias, ni analíticas ni publicitarias. Por eso no verás un banner de cookies."
    >
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que una web guarda en tu navegador para recordar información sobre tu visita.
        Pueden ser propias (de esta web) o de terceros (de otros servicios integrados en ella).
      </p>

      <h2>2. Cookies que usa esta web</h2>
      <p>
        <strong>Ninguna.</strong> No usamos herramientas de analítica, publicidad ni seguimiento. Las tipografías se
        sirven desde nuestro propio servidor, sin conectar con Google Fonts.
      </p>

      <h2>3. Cookies de terceros, solo si tú lo eliges</h2>
      <ul>
        <li>
          <strong>Google Maps:</strong> el mapa de la sección «Dónde estamos» y de la página de contacto no se carga hasta
          que pulsas «Cargar mapa». A partir de ese momento Google puede instalar sus cookies, según su{" "}
          <a href="https://policies.google.com/technologies/cookies?hl=es" target="_blank" rel="noopener noreferrer">
            política de cookies
          </a>
          . Si no pulsas el botón, no se establece ninguna conexión con Google Maps.
        </li>
        <li>
          <strong>Enlaces externos</strong> (WhatsApp, Glovo, Instagram, Google Maps en una pestaña nueva): al seguirlos
          sales de esta web y se aplican las políticas de cookies de cada servicio.
        </li>
      </ul>

      <h2>4. Cómo gestionar o borrar cookies</h2>
      <p>
        Puedes ver, bloquear o eliminar las cookies desde la configuración de tu navegador: Chrome, Firefox, Safari y
        Edge lo permiten en sus apartados de privacidad. Para las cookies de Google, también puedes revisar tu
        configuración en{" "}
        <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer">
          myadcenter.google.com
        </a>
        .
      </p>

      <h2>5. Cambios</h2>
      <p>
        Si en el futuro añadimos analítica u otros servicios que usen cookies, actualizaremos esta política y te pediremos
        el consentimiento antes de instalarlas.
      </p>
    </LegalPage>
  );
}
