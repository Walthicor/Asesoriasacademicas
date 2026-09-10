import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Instagram, Clock } from "lucide-react";
import { CTABanda } from "../components/CTABanda";
import { FormularioCotizacion } from "../components/FormularioCotizacion";
import { pageHead, SITE_NAME, SITE_URL } from "../lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () =>
    pageHead(
      {
        path: "/contacto",
        title: "Contacto y Cotización | Asesorías Académicas",
        description:
          "Contáctanos por WhatsApp al +57 316 364 1646 o cotiza tu proyecto en línea. Respondemos en menos de 2 horas hábiles.",
      },
      [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contacto — ${SITE_NAME}`,
            url: `${SITE_URL}/contacto`,
          }),
        },
      ],
    ),
  component: ContactoPage,
});

const datos = [
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+57 316 364 1646",
    href: "https://wa.me/573163641646",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "contacto@asesoriasacademicas.co",
    href: "mailto:contacto@asesoriasacademicas.co",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@asesorias_academics",
    href: "https://instagram.com/asesorias_academics",
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lun a Vie 8:00 a. m. – 8:00 p. m. · Sáb 9:00 a. m. – 2:00 p. m.",
  },
];

function ContactoPage() {
  return (
    <>
      <section className="bg-[color:var(--surface)] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
            Contacto
          </p>
          <h1 className="reveal mt-4 font-display text-4xl font-medium leading-tight text-shine md:text-6xl">
            Hablemos de tu proyecto académico
          </h1>
          <p className="reveal mt-6 text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-lg">
            Cuéntanos qué necesitas y en menos de 2 horas hábiles un asesor te
            propone un plan realista para tu caso.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Datos */}
          <div className="reveal">
            <h2 className="font-display text-3xl font-medium text-[color:var(--primary)] md:text-4xl">
              Canales directos
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              Prefiere el canal que más te acomode. Todos los mensajes son
              atendidos por un asesor real, no por bots.
            </p>

            <ul className="mt-8 space-y-4">
              {datos.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 transition-all hover:border-[color:var(--accent)]/60 hover:bg-white hover:shadow-[var(--shadow-soft)]">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                        {label}
                      </p>
                      <p className="mt-1 font-display text-base font-semibold text-[color:var(--primary)]">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <p className="font-display text-sm font-semibold text-[color:var(--primary)]">
                Empresa colombiana legalmente constituida
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)]">
                Con certificado de Cámara de Comercio y RUT. Emitimos factura
                cuando la requieras.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div id="cotizar" className="reveal">
            <FormularioCotizacion />
          </div>
        </div>
      </section>

      <CTABanda
        title="¿Prefieres escribirnos directo por WhatsApp?"
        subtitle="Un asesor te responde el mismo día con un plan a tu medida."
      />
    </>
  );
}
