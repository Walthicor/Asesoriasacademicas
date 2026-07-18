import { useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, ArrowRight, BookOpen } from "lucide-react";
import { CTABanda } from "./CTABanda";
import { FormularioCotizacion } from "./FormularioCotizacion";
import { articles as blogArticles } from "../data/blog";
import { waUrl } from "../lib/whatsapp";


export type ServicioTemplateProps = {
  nombre: string;
  h1: string;
  subtitulo: string;
  heroImage: string;
  incluye: string[];
  pasos: { titulo: string; texto?: string }[];
  perfiles: { titulo: string; texto?: string }[];
  faq: { q: string; a: string }[];
  relacionados: {
    to: string;
    titulo: string;
    texto: string;
    icon?: ComponentType<{ className?: string }>;
  }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
};

export function ServicioTemplate({
  nombre,
  h1,
  subtitulo,
  heroImage,
  incluye,
  pasos,
  perfiles,
  faq,
  relacionados,
  ctaTitle,
  ctaSubtitle,
}: ServicioTemplateProps) {
  return (
    <>
      {/* HERO — split layout */}
      <section className="relative overflow-hidden bg-[color:var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <nav
              aria-label="Breadcrumb"
              className="reveal text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]"
            >
              <Link to="/" className="hover:text-[color:var(--brand-magenta)]">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-[color:var(--brand-magenta)]">{nombre}</span>
            </nav>

            <h1 className="reveal mt-6 font-display text-4xl font-medium leading-[1.05] text-[color:var(--primary)] md:text-6xl">
              {h1}
            </h1>
            <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-lg">
              {subtitulo}
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-4">
              <a
                href="#cotizar"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-7 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-[color:var(--brand-magenta)] hover:-translate-y-0.5"
              >
                Cotizar esta asesoría
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white px-7 py-3.5 text-sm font-medium text-[color:var(--primary)] transition-all duration-300 hover:border-[color:var(--primary)]"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[color:var(--accent)]/20 via-transparent to-[color:var(--brand-magenta)]/15 blur-2xl" />
            <img
              src={heroImage}
              alt={nombre}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* ¿QUÉ INCLUYE? */}
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              El acompañamiento
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              ¿Qué incluye?
            </h2>
          </div>

          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {incluye.map((item) => (
              <li
                key={item}
                className="reveal flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 transition-all hover:border-[color:var(--accent)]/50 hover:bg-white hover:shadow-[var(--shadow-soft)]"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="pt-0.5 text-sm leading-relaxed text-[color:var(--primary)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CÓMO TE ACOMPAÑAMOS */}
      <section className="bg-[color:var(--surface)] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Metodología
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Cómo te acompañamos
            </h2>
          </div>

          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p, i) => (
              <li
                key={p.titulo}
                className="reveal card-elevate rounded-2xl border border-[color:var(--border)] bg-white p-7"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent)]/15 font-display text-xl font-semibold text-[color:var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--primary)]">
                  {p.titulo}
                </h3>
                {p.texto && (
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                    {p.texto}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Perfiles
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Para quién es
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {perfiles.map((p, i) => (
              <div
                key={p.titulo}
                className="reveal card-elevate rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7"
              >
                <div className="font-display text-4xl font-semibold text-[color:var(--brand-magenta)]/80">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-[color:var(--primary)]">
                  {p.titulo}
                </h3>
                {p.texto && (
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                    {p.texto}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[color:var(--surface)] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Preguntas frecuentes
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Resolvemos tus dudas
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faq.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* RELACIONADOS */}
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              También te puede interesar
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Servicios relacionados
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {relacionados.map(({ to, titulo, texto, icon: Icon }) => (
              <Link
                key={titulo}
                to={to}
                className="reveal card-elevate group block rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7"
              >
                {Icon && (
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold text-[color:var(--primary)]">
                  {titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {texto}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)]">
                  Conocer más
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section id="cotizar" className="bg-[color:var(--surface)] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-10 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Cotización
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Cotiza tu {nombre.toLowerCase()}
            </h2>
          </div>
          <div className="reveal">
            <FormularioCotizacion servicioPreseleccionado={nombre} />
          </div>
          <p className="reveal mt-6 text-center text-xs leading-relaxed text-[color:var(--muted-foreground)]">
            Respondemos en menos de 2 horas en horario hábil. Tu información es confidencial.
          </p>
        </div>
      </section>

      <CTABanda title={ctaTitle} subtitle={ctaSubtitle} />
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
    <div className="reveal overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
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
