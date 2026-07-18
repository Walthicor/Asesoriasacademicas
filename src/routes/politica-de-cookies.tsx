import { createFileRoute } from "@tanstack/react-router";
import { LegalTemplate, legalHead, LegalH2 } from "../components/LegalTemplate";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () =>
    legalHead({
      path: "/politica-de-cookies",
      title: "Política de cookies | Asesorías Académicas",
      description:
        "Conoce cómo Asesorías Académicas utiliza cookies: tipos, finalidades y cómo gestionar tus preferencias desde el navegador.",
    }),
  component: PoliticaCookiesPage,
});

function PoliticaCookiesPage() {
  return (
    <LegalTemplate h1="Política de cookies" updatedAt="18 de julio de 2026">
      <LegalH2>1. ¿Qué son las cookies?</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Las cookies son pequeños archivos de texto que se almacenan en tu
        dispositivo cuando visitas un sitio web. Sirven para recordar
        preferencias, mejorar la navegación y, en algunos casos, ofrecer
        contenidos relevantes.
      </p>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        En Asesorías Académicas utilizamos cookies de manera responsable, con el
        objetivo de que el sitio funcione correctamente y de comprender cómo
        mejoramos la experiencia de nuestros visitantes.
      </p>

      <LegalH2>2. Tipos de cookies que utilizamos</LegalH2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[color:var(--surface)] text-left text-[color:var(--primary)]">
              <th className="px-5 py-3 font-semibold">Categoría</th>
              <th className="px-5 py-3 font-semibold">Finalidad</th>
              <th className="px-5 py-3 font-semibold">Requiere consentimiento</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[color:var(--border)] text-[color:var(--muted-foreground)]">
            <tr>
              <td className="px-5 py-3 font-medium text-[color:var(--ink)]">Esenciales</td>
              <td className="px-5 py-3">Funcionamiento básico del sitio, seguridad y preferencias de navegación.</td>
              <td className="px-5 py-3">No, siempre activas.</td>
            </tr>
            <tr>
              <td className="px-5 py-3 font-medium text-[color:var(--ink)]">Analíticas</td>
              <td className="px-5 py-3">Medición de visitas y comportamiento del usuario (por ejemplo, Google Analytics).</td>
              <td className="px-5 py-3">Sí, requieren consentimiento.</td>
            </tr>
            <tr>
              <td className="px-5 py-3 font-medium text-[color:var(--ink)]">Marketing</td>
              <td className="px-5 py-3">Publicidad personalizada y remarketing en futuras campañas.</td>
              <td className="px-5 py-3">Sí, requieren consentimiento.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <LegalH2>3. ¿Cómo aceptar, rechazar o borrar cookies?</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Al ingresar al sitio puedes configurar tus preferencias desde el banner
        de cookies. En cualquier momento puedes cambiar tu decisión:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-[color:var(--muted-foreground)] marker:text-[color:var(--accent)]">
        <li>Aceptar todas las cookies.</li>
        <li>Rechazar las cookies opcionales y permitir solo las esenciales.</li>
        <li>Gestionar las cookies de forma detallada por categoría.</li>
      </ul>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        También puedes borrar las cookies almacenadas desde la configuración de
        tu navegador. A continuación, te dejamos enlaces de ayuda para los
        navegadores más comunes:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-[color:var(--muted-foreground)] marker:text-[color:var(--accent)]">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/Borrar+cookies"
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <LegalH2>4. Contacto</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Si tienes dudas sobre nuestra política de cookies, escríbenos a{": "}
        <a
          href="mailto:contacto@asesoriasacademicas.co"
          className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
        >
          contacto@asesoriasacademicas.co
        </a>
        .
      </p>
    </LegalTemplate>
  );
}
