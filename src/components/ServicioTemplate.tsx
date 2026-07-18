import { useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { CTABanda } from "./CTABanda";
import { FormularioCotizacion } from "./FormularioCotizacion";

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
      {/* HERO */}
      <section className="relative -mt-[70px] flex min-h-[60vh] items-center overflow-hidden pt-[70px]">
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,14,20,0.7) 0%, rgba(15,27,45,0.92) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 20%, rgba(201,162,39,0.16), transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-20 text-center lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="reveal text-[11px] uppercase tracking-[0.24em] text-[color:var(--ivory)]/60"
          >
            <Link to="/" className="hover:text-[color:var(--accent)]">
              Inicio
            </Link>
            <span className="mx-2 text-[color:var(--accent)]/50">/</span>
            <Link to="/" className="hover:text-[color:var(--accent)]">
              Servicios
            </Link>
            <span className="mx-2 text-[color:var(--accent)]/50">/</span>
            <span className="text-[color:var(--accent)]">{nombre}</span>
          </nav>

          <h1 className="reveal text-shine mt-6 font-display text-4xl leading-[1.08] md:text-6xl">
            {h1}
          </h1>
          <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--ivory)]/80 md:text-lg">
            {subtitulo}
          </p>
          <div className="reveal mt-9">
            <a
              href="#cotizar"
              className="pulse-gold inline-flex items-center justify-center rounded-sm bg-[color:var(--accent)] px-8 py-3.5 text-sm font-medium text-[color:var(--accent-foreground)] shadow-[var(--shadow-gold)] transition-all duration-300 hover:bg-[color:var(--accent-hover)] hover:-translate-y-0.5"
            >
              Cotizar esta asesoría
            </a>
          </div>
        </div>
      </section>

      {/* ¿QUÉ INCLUYE? */}
      <section
        className="px-5 py-24 lg:px-8 lg:py-28"
        style={{ backgroundColor: "#F7F5F0", color: "#0A0E14" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
              El acompañamiento
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[#0A0E14]">
              ¿Qué incluye?
            </h2>
          </div>

          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {incluye.map((item) => (
              <li
                key={item}
                className="reveal flex items-start gap-4 rounded-md border border-[#0A0E14]/10 bg-white/60 p-5"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent)]/50 bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="pt-0.5 text-sm leading-relaxed text-[#0A0E14]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CÓMO TE ACOMPAÑAMOS */}
      <section
        className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-28"
        style={{ backgroundColor: "#0F1B2D" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(201,162,39,0.14), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Metodología
            </p>
            <h2 className="text-shine mt-4 font-display text-3xl md:text-5xl">
              Cómo te acompañamos
            </h2>
          </div>

          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p, i) => (
              <li
                key={p.titulo}
                className="reveal relative rounded-md border border-[color:var(--border)] bg-[color:var(--surface)]/60 p-7"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--accent)]/50 bg-[color:var(--background)] font-display text-xl text-[color:var(--accent)] shadow-[var(--shadow-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-lg text-[color:var(--ivory)]">
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
      <section
        className="px-5 py-24 lg:px-8 lg:py-28"
        style={{ backgroundColor: "#0A0E14" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Perfiles
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--ivory)]">
              Para quién es
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {perfiles.map((p, i) => (
              <div
                key={p.titulo}
                className="reveal card-elevate rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-7"
              >
                <div className="font-display text-4xl text-[color:var(--accent)]/70">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-[color:var(--ivory)]">
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
      <section
        className="px-5 py-24 lg:px-8 lg:py-28"
        style={{ backgroundColor: "#F7F5F0", color: "#0A0E14" }}
      >
        <div className="mx-auto max-w-3xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Preguntas frecuentes
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[#0A0E14]">
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
      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
              También te puede interesar
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--ivory)]">
              Servicios relacionados
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {relacionados.map(({ to, titulo, texto, icon: Icon }) => (
              <Link
                key={titulo}
                to={to}
                className="reveal card-elevate group block rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-7"
              >
                {Icon && (
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <h3 className="font-display text-lg text-[color:var(--ivory)]">
                  {titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {texto}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  Conocer más
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section
        id="cotizar"
        className="relative overflow-hidden px-5 py-24 lg:px-8"
        style={{ backgroundColor: "#0A0E14" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/60 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/60 to-transparent"
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="reveal mb-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Cotización
            </p>
            <h2 className="text-shine mt-4 font-display text-3xl md:text-5xl">
              Cotiza tu {nombre.toLowerCase()}
            </h2>
          </div>
          <div className="reveal">
            <FormularioCotizacion servicioPreseleccionado={nombre} />
          </div>
          <p className="reveal mt-6 text-center text-xs leading-relaxed text-[color:var(--muted-foreground)]">
            Respondemos en menos de 2 horas en horario hábil. Tu información es
            confidencial.
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
    <div className="reveal overflow-hidden rounded-md border border-[#0A0E14]/10 bg-white/70">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base text-[#0A0E14] md:text-lg">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[color:var(--accent)] transition-transform duration-300 ${
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
          <p className="px-5 pb-5 text-sm leading-relaxed text-[#3a4553]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
