import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { CTABanda } from "../components/CTABanda";
import { pageHead } from "../lib/seo";

type QA = { q: string; a: string };

const grupos: { titulo: string; items: QA[] }[] = [
  {
    titulo: "Sobre el servicio",
    items: [
      {
        q: "¿Ustedes hacen la tesis o el trabajo por mí?",
        a: "No. Somos un servicio de asesoría y acompañamiento: tú escribes tu trabajo y nuestros docentes te orientan, revisan tus avances y te capacitan. Es la única vía académicamente ética y, además, la que te garantiza sustentar con dominio total ante tu jurado.",
      },
      {
        q: "¿Qué diferencia hay entre asesoría y que me lo hagan?",
        a: "La asesoría desarrolla tus capacidades y produce un trabajo genuinamente tuyo, defendible ante tu jurado. Comprar un trabajo hecho es fraude académico: puede costarte el título y no te enseña nada. Por eso no lo ofrecemos.",
      },
      {
        q: "¿En qué áreas asesoran?",
        a: "En todas las áreas curriculares: contamos con más de 100 docentes especializados.",
      },
      {
        q: "¿Atienden estudiantes fuera de Colombia?",
        a: "Sí, trabajamos de forma virtual con estudiantes de toda Hispanoamérica.",
      },
    ],
  },
  {
    titulo: "Sobre el proceso",
    items: [
      {
        q: "¿Cómo empieza el acompañamiento?",
        a: "Con un diagnóstico gratuito: nos cuentas tu proyecto, tu universidad y tu fecha límite, y te proponemos un plan con tu asesor ideal.",
      },
      {
        q: "¿Cómo me comunico con mi asesor?",
        a: "Tendrás un grupo de WhatsApp multidisciplinar y reuniones periódicas por videollamada.",
      },
      {
        q: "¿Qué pasa si mi jurado pide cambios?",
        a: "Los ajustes derivados de la retroalimentación de tu universidad hacen parte del acompañamiento acordado.",
      },
    ],
  },
  {
    titulo: "Sobre pagos",
    items: [
      {
        q: "¿Cómo son los pagos?",
        a: "Ofrecemos pago diferido por etapas: por ejemplo 50/50 o 30/40/30 según la duración del plan. Aceptamos transferencia (Nequi, Daviplata) y PayPal para el exterior. Los datos exactos se comparten al confirmar tu cotización.",
      },
      {
        q: "¿Emiten factura?",
        a: "Sí, somos una empresa legalmente constituida con Cámara de Comercio y RUT.",
      },
    ],
  },
];

const allFaqs = grupos.flatMap((g) => g.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () =>
    pageHead(
      {
        path: "/preguntas-frecuentes",
        title: "Preguntas Frecuentes | Asesorías Académicas",
        description:
          "Resolvemos las dudas más comunes sobre asesoría de tesis, proceso de acompañamiento, pagos y ética académica.",
        ogType: "article",
      },
      [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd),
        },
      ],
    ),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <section className="bg-[color:var(--surface)] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
            Centro de ayuda
          </p>
          <h1 className="reveal mt-4 font-display text-4xl font-medium leading-tight text-shine md:text-6xl">
            Preguntas frecuentes
          </h1>
          <p className="reveal mt-6 text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-lg">
            Aquí resolvemos lo esencial. Si tu duda no está, escríbenos por
            WhatsApp y un asesor te responde el mismo día.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-16">
          {grupos.map((g) => (
            <div key={g.titulo}>
              <div className="reveal mb-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-[color:var(--border)]" />
                <h2 className="font-display text-2xl font-semibold text-[color:var(--primary)] md:text-3xl">
                  {g.titulo}
                </h2>
                <span className="h-px flex-1 bg-[color:var(--border)]" />
              </div>
              <div className="space-y-3">
                {g.items.map((f, i) => (
                  <FAQItem
                    key={f.q}
                    q={f.q}
                    a={f.a}
                    defaultOpen={i === 0 && g.titulo === "Sobre el servicio"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanda
        title="¿Tu duda no está resuelta?"
        subtitle="Escríbenos y te respondemos en menos de dos horas hábiles."
      />
    </>
  );
}

function FAQItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="reveal overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-[color:var(--primary)] md:text-lg">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[color:var(--brand-magenta)] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="px-6 pb-5 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
