import { createFileRoute } from "@tanstack/react-router";
import { LegalTemplate, legalHead, LegalH2 } from "../components/LegalTemplate";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () =>
    legalHead({
      path: "/politica-de-privacidad",
      title: "Política de privacidad y tratamiento de datos | Asesorías Académicas",
      description:
        "Política de privacidad de Asesorías Académicas conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013. Conoce cómo tratamos tus datos personales.",
    }),
  component: PoliticaPrivacidadPage,
});

function PoliticaPrivacidadPage() {
  return (
    <LegalTemplate
      h1="Política de privacidad y tratamiento de datos personales"
      updatedAt="18 de julio de 2026"
    >
      <p className="leading-relaxed text-[color:var(--muted-foreground)]">
        La presente política se redacta conforme a la{" "}
        <strong className="text-[color:var(--ink)]">Ley 1581 de 2012</strong>, el{" "}
        <strong className="text-[color:var(--ink)]">Decreto 1377 de 2013</strong>{" "}
        y las demás disposiciones que regulan la protección de datos personales
        en Colombia.
      </p>

      <LegalH2>1. Responsable del tratamiento</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        El responsable del tratamiento de datos personales es{" "}
        <strong className="text-[color:var(--ink)]">[RAZÓN SOCIAL]</strong>, NIT{" "}
        <strong className="text-[color:var(--ink)]">[NIT]</strong>, con domicilio
        en Colombia y correo de contacto{": "}
        <a
          href="mailto:contacto@asesoriasacademicas.co"
          className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
        >
          contacto@asesoriasacademicas.co
        </a>
        .
      </p>

      <LegalH2>2. Datos que recolectamos</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Para responder tus cotizaciones y prestar nuestros servicios, podemos
        recolectar los siguientes datos:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-[color:var(--muted-foreground)] marker:text-[color:var(--accent)]">
        <li>Nombre completo.</li>
        <li>Número de WhatsApp.</li>
        <li>Correo electrónico.</li>
        <li>Nivel académico y programa de estudios.</li>
        <li>Información del proyecto o trabajo académico que compartas en el formulario.</li>
      </ul>

      <LegalH2>3. Finalidades del tratamiento</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Tratamos tus datos para:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-[color:var(--muted-foreground)] marker:text-[color:var(--accent)]">
        <li>Responder solicitudes de cotización.</li>
        <li>Prestar los servicios contratados y coordinar sesiones.</li>
        <li>Enviar contenidos educativos o promocionales, solo si nos autorizas previamente.</li>
        <li>Realizar seguimiento interno de calidad y servicio al cliente.</li>
      </ul>

      <LegalH2>4. Confidencialidad de tu proyecto</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        La información de tu proyecto académico se maneja con{" "}
        <strong className="text-[color:var(--ink)]">estricta confidencialidad</strong>.
        Solo el asesor o equipo asignado tiene acceso a los detalles que nos
        compartes. No compartimos, vendemos ni publicamos tus documentos ni tus
        datos personales.
      </p>

      <LegalH2>5. Cookies y tecnologías de medición</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Usamos cookies y scripts de terceros solo con tu consentimiento, salvo
        las estrictamente necesarias para el funcionamiento del sitio:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-[color:var(--muted-foreground)] marker:text-[color:var(--accent)]">
        <li>
          <strong className="text-[color:var(--ink)]">Esenciales:</strong>{" "}
          necesarias para la navegación y el funcionamiento básico.
        </li>
        <li>
          <strong className="text-[color:var(--ink)]">Analíticas:</strong>{" "}
          nos permiten medir visitas y mejorar la experiencia.
        </li>
        <li>
          <strong className="text-[color:var(--ink)]">Marketing:</strong>{" "}
          utilizadas para medir el resultado de las campañas publicitarias.
        </li>
      </ul>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Si aceptas analíticas o marketing, cargamos el tag de conversión de{" "}
        <strong className="text-[color:var(--ink)]">Google Ads</strong>{" "}
        (ID AW-16459873319) para medir cuándo un visitante hace clic en un
        enlace de WhatsApp. Esto nos ayuda a optimizar campañas sin identificarte
        personalmente. Puedes cambiar tus preferencias en cualquier momento desde
        el banner de cookies o el enlace "Preferencias de cookies" en el pie de
        página.
      </p>

      <LegalH2>6. Derechos del titular de los datos</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Como titular de tus datos personales tienes derecho a:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-[color:var(--muted-foreground)] marker:text-[color:var(--accent)]">
        <li>Conocer, actualizar y rectificar tus datos personales.</li>
        <li>Solicitar la supresión de tus datos cuando ya no sean necesarios.</li>
        <li>Revocar la autorización para el tratamiento de datos.</li>
        <li>Consultar de forma gratuita cómo hemos tratado tu información.</li>
      </ul>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Para ejercer estos derechos, escríbenos a{" "}
        <a
          href="mailto:contacto@asesoriasacademicas.co"
          className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
        >
          contacto@asesoriasacademicas.co
        </a>
        .
      </p>

      <LegalH2>6. Autoridad de control</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        La autoridad de control en materia de protección de datos personales en
        Colombia es la{" "}
        <strong className="text-[color:var(--ink)]">Superintendencia de Industria y Comercio</strong>.
        Puedes consultar más información en su sitio web oficial.
      </p>

      <LegalH2>7. Vigencia y cambios</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Esta política está vigente desde la fecha de última actualización. Cualquier
        cambio será publicado en esta misma sección. Te recomendamos revisarla
        periódicamente para mantenerte informado sobre cómo protegemos tus datos.
      </p>
    </LegalTemplate>
  );
}
