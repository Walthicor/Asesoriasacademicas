import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  GraduationCap,
  PenLine,
  FileText,
  Microscope,
  BarChart3,
  Library,
  BookMarked,
  SpellCheck,
  ShieldCheck,
  MessagesSquare,
  Layers,
  UserCheck,
  Lock,
  Award,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CTABanda } from "../components/CTABanda";
import { WhatsAppCTA } from "../components/WhatsAppCTA";
import { FormularioCotizacion } from "../components/FormularioCotizacion";
import { articles } from "../data/blog";

import aprendeDestaca from "../assets/posters/aprende-destaca.jpg.asset.json";
import enfoqueTotal from "../assets/posters/enfoque-total.jpg.asset.json";
import silencioPensar from "../assets/posters/silencio-pensar.jpg.asset.json";
import organizarIdeas from "../assets/posters/organizar-ideas.jpg.asset.json";
import mejoraContinua from "../assets/posters/mejora-continua.jpg.asset.json";
import comprenderAvanzar from "../assets/posters/comprender-avanzar.jpg.asset.json";
import cadaPaso from "../assets/posters/cada-paso.jpg.asset.json";
import cadaDetalle from "../assets/posters/cada-detalle.jpg.asset.json";
import nivelSuperior from "../assets/posters/nivel-superior.jpg.asset.json";
import todoEstructura from "../assets/posters/todo-estructura.jpg.asset.json";
import heroVideo from "../assets/hero-estudiantes.mp4.asset.json";


import { waUrl } from "../lib/whatsapp";

const WA_URL = waUrl();

import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: "Asesorías Académicas | Asesoría de Tesis en Colombia",
      description:
        "Asesoría y tutoría académica ética: tesis, trabajos de grado, normas APA, corrección de estilo y análisis estadístico. Pregrado y posgrado en Colombia y Latinoamérica.",
      ogType: "website",
    }),
  component: Home,
});

/* ---------------- Data ---------------- */

const servicios = [
  { icon: GraduationCap, title: "Asesoría de tesis", to: "/asesoria-de-tesis" },
  { icon: BookOpen, title: "Trabajos de grado", to: "/asesoria-trabajos-de-grado" },
  { icon: PenLine, title: "Ensayos académicos", to: "/asesoria-ensayos-academicos" },
  { icon: FileText, title: "Monografías", to: "/asesoria-monografias" },
  { icon: Microscope, title: "Artículos científicos", to: "/asesoria-articulos-cientificos" },
  { icon: BarChart3, title: "Análisis estadístico SPSS", to: "/analisis-estadistico-spss" },
  { icon: Library, title: "Revisión bibliográfica", to: "/revision-bibliografica" },
  { icon: BookMarked, title: "Normas APA", to: "/normas-apa" },
  { icon: SpellCheck, title: "Corrección de estilo", to: "/correccion-de-estilo" },
];

const pasos = [
  { n: "01", title: "Cotización gratuita", text: "Necesidades · tiempos · presupuesto" },
  { n: "02", title: "Plan de acompañamiento", text: "Organización · asesor asignado · entregas" },
  { n: "03", title: "Sesiones de seguimiento", text: "Comunicación · orientación · avances" },
  { n: "04", title: "Revisiones progresivas", text: "Retroalimentación · ajustes · mejoras" },
  { n: "05", title: "Sustentación", text: "Preparación · simulacro · defensa" },
];

const razones = [
  { icon: ShieldCheck, title: "Compromiso con la calidad" },
  { icon: Lock, title: "Protección de tus datos" },
  { icon: MessagesSquare, title: "Comunicación continua" },
  { icon: UserCheck, title: "Seguimiento personalizado" },
  { icon: Layers, title: "Flexibilidad y adaptabilidad" },
  { icon: Award, title: "Tú eres el autor de tu trabajo" },
];

const cifras = [
  { n: "+60.000", label: "estudiantes acompañados" },
  { n: "+100", label: "docentes asesores" },
  { n: "5/5", label: "satisfacción de estudiantes" },
];

const testimonios = [
  { text: "La asesoría metodológica me dio la claridad que no encontraba. Sustenté con seguridad y me gradué.", author: "Estudiante de Maestría en Educación" },
  { text: "El acompañamiento en normas APA y corrección de estilo elevó por completo la calidad de mi tesis.", author: "Estudiante de Pregrado en Psicología" },
  { text: "Su capacitación en SPSS me permitió entender mis propios resultados y defenderlos con solvencia.", author: "Estudiante de Doctorado en Administración" },
];

const posts = [
  { img: silencioPensar.url, cat: "Enfoque", title: "Cuando el silencio ayuda a pensar: rutinas para escribir mejor" },
  { img: comprenderAvanzar.url, cat: "Metodología", title: "Comprender es avanzar: cómo estructurar tu capítulo teórico" },
  { img: todoEstructura.url, cat: "Investigación", title: "Todo tiene una estructura: fundamentos para tu diseño metodológico" },
];

const galeria = [
  { url: enfoqueTotal.url, alt: "Enfoque total — el progreso académico nace de la disciplina" },
  { url: silencioPensar.url, alt: "Cuando el silencio ayuda a pensar" },
  { url: organizarIdeas.url, alt: "Organizar ideas y entender conceptos" },
  { url: mejoraContinua.url, alt: "Mejora continua — pequeños avances, grandes resultados" },
  { url: cadaDetalle.url, alt: "Cada detalle importa — revisar antes de entregar" },
  { url: nivelSuperior.url, alt: "Nivel académico superior — te apoyamos en cada paso" },
  { url: todoEstructura.url, alt: "Todo tiene una estructura" },
  { url: cadaPaso.url, alt: "Cada paso cuenta" },
];

/* ---------------- Sections ---------------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--primary)]">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Overlay oscuro para legibilidad */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,14,25,0.75) 0%, rgba(10,14,25,0.60) 45%, rgba(10,14,25,0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 20%, rgba(201,162,39,0.18), transparent 65%), radial-gradient(50% 70% at 90% 90%, rgba(142,29,69,0.22), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 pt-24 pb-20 text-center text-white lg:px-8 lg:pt-32 lg:pb-28">
        <h1 className="reveal mx-auto max-w-4xl font-display text-5xl font-medium leading-[1.05] text-white md:text-7xl">
          Tu proceso académico, con el{" "}
          <span className="italic text-[color:var(--accent)]">respaldo</span> que
          necesitas.
        </h1>

        <p className="reveal mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
          Te acompañamos en cada etapa con asesoría personalizada, claridad y
          compromiso para que avances con confianza. Tú escribes tu trabajo:
          nosotros te orientamos y te capacitamos.
        </p>

        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cotizar"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[color:var(--primary)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-[color:var(--accent)] hover:text-white hover:-translate-y-0.5"
          >
            Cotiza hoy
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="pulse-gold inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-7 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-gold)] transition-all duration-300 hover:bg-[color:var(--brand-magenta)] hover:-translate-y-0.5"
          >
            Contáctanos por WhatsApp
          </a>
        </div>

        {/* Trust row */}
        <dl className="reveal mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
          {cifras.map((c) => (
            <div key={c.label}>
              <dt className="font-display text-3xl font-semibold text-white md:text-4xl">
                {c.n}
              </dt>
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                {c.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}



function Servicios() {
  return (
    <section className="bg-[color:var(--surface)] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-display text-4xl font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-magenta)] md:text-5xl">
            Servicios
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-[color:var(--primary)] md:text-4xl">
            Todo lo que necesitas para avanzar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[color:var(--muted-foreground)]">
            Acompañamiento académico personalizado según tus necesidades.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, title, to }) => (
            <Link
              key={title}
              to={to}
              className="reveal card-elevate group flex items-center gap-4 rounded-xl border border-[color:var(--border)] bg-white px-5 py-5 text-left"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)] transition-colors group-hover:bg-[color:var(--primary)] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xl font-semibold leading-snug text-[color:var(--primary)] md:text-2xl">
                  {title}
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-magenta)]">
                  Ver asesoría
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoTrabajamos() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-display text-4xl font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-magenta)] md:text-5xl">
            Cómo trabajamos
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-[color:var(--primary)] md:text-4xl">
            De la idea a la graduación
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/50 to-transparent lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {pasos.map((p) => (
              <li key={p.n} className="reveal relative">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white ring-2 ring-[color:var(--accent)] font-display text-2xl font-semibold text-[color:var(--accent)] shadow-[var(--shadow-soft)]">
                  {p.n}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-[color:var(--primary)] md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[color:var(--muted-foreground)]">
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--primary)] px-5 py-16 lg:px-8 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 60% at 100% 0%, rgba(201,162,39,0.20), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(142,29,69,0.20), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-display text-4xl font-semibold text-[color:var(--accent)] md:text-5xl">
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-shine-dark mt-4 font-display text-3xl font-medium md:text-4xl">
            Acompañamiento ético y profesional
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {razones.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="reveal flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-all hover:border-[color:var(--accent)]/50 hover:bg-white/[0.10]"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="pt-1 font-display text-xl font-medium leading-snug text-white md:text-2xl">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  // Duplicate for seamless loop
  const items = [...galeria, ...galeria];
  return (
    <section className="overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-display text-4xl font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-magenta)] md:text-5xl">
            Nuestra comunidad
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-[color:var(--primary)] md:text-4xl">
            Ideas que acompañan tu camino
          </h2>
        </div>
      </div>

      <div className="reveal relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max marquee-track gap-6">
          {items.map((g, i) => (
            <figure
              key={i}
              className="relative w-[260px] shrink-0 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[var(--shadow-soft)] md:w-[300px]"
            >
              <img
                src={g.url}
                alt={g.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonios() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonios.length), 6000);
    return () => clearInterval(t);
  }, []);
  const prev = () => setI((v) => (v - 1 + testimonios.length) % testimonios.length);
  const next = () => setI((v) => (v + 1) % testimonios.length);

  return (
    <section className="relative overflow-hidden bg-[color:var(--surface)] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        {/* Poster */}
        <div className="reveal relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[color:var(--accent)]/25 to-[color:var(--brand-magenta)]/15 blur-2xl" />
          <img
            src={cadaPaso.url}
            alt="Cada paso cuenta — Asesorías Académicas"
            className="aspect-[4/5] w-full max-w-md rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>

        <div>
          <p className="reveal font-display text-4xl font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-magenta)] md:text-5xl">
            Testimonios
          </p>
          <h2 className="reveal mt-4 font-display text-3xl font-medium text-[color:var(--primary)] md:text-4xl">
            Historias de quienes se graduaron con nosotros
          </h2>

          <div className="reveal relative mt-10">
            <Quote aria-hidden className="mb-4 h-10 w-10 text-[color:var(--accent)]/70" />
            <div className="relative min-h-[180px]">
              {testimonios.map((t, idx) => (
                <blockquote
                  key={idx}
                  className={`transition-all duration-700 ${
                    idx === i
                      ? "relative opacity-100 translate-y-0"
                      : "pointer-events-none absolute inset-0 opacity-0 translate-y-3"
                  }`}
                >
                  <p className="font-display text-2xl italic leading-relaxed text-[color:var(--primary)] md:text-3xl">
                    “{t.text}”
                  </p>
                  <footer className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)]">
                    — {t.author}
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Anterior testimonio"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--primary)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--brand-magenta)]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonios.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Testimonio ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === i
                        ? "w-8 bg-[color:var(--brand-magenta)]"
                        : "w-3 bg-[color:var(--border)]"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Siguiente testimonio"
                className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--primary)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--brand-magenta)]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-5xl font-semibold text-[color:var(--brand-magenta)] md:text-6xl">
              Blog
            </p>
            <h2 className="mt-2 font-display text-xl font-medium text-[color:var(--primary)] md:text-2xl">
              Recursos para tu vida académica
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)] hover:text-[color:var(--primary)]"
          >
            Ver todos los artículos →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="reveal card-elevate group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-magenta)]">
                  {p.category}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-[color:var(--primary)] transition-colors group-hover:text-[color:var(--brand-magenta)]">
                  {p.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-ink)] group-hover:text-[color:var(--brand-magenta)]">
                  Leer artículo
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cotizar() {
  return (
    <section
      id="cotizar"
      className="relative overflow-hidden bg-[color:var(--surface)] px-5 py-16 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="reveal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
            Cotización
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
            Cotiza tu asesoría en minutos
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-[color:var(--muted-foreground)]">
            Cuéntanos sobre tu proyecto y armamos un plan a tu medida.
            Respondemos en menos de 2 horas en horario hábil.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Diagnóstico gratuito sin compromiso",
              "Asesor especializado en tu área",
              "Pagos diferidos por etapas",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-[color:var(--primary)]">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>

          <img
            src={nivelSuperior.url}
            alt="Nivel académico superior"
            className="mt-10 hidden aspect-[4/5] max-w-xs rounded-2xl object-cover shadow-[var(--shadow-soft)] lg:block"
          />
        </div>

        <div className="reveal">
          <FormularioCotizacion />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <WhatsAppCTA label="¿No sabes qué servicio necesitas? Te orientamos." />
      <ComoTrabajamos />
      <PorQue />
      <WhatsAppCTA label="Empieza hoy tu acompañamiento académico." />
      <Galeria />
      <Testimonios />
      <Blog />
      <Cotizar />
      <CTABanda
        title="¿Tienes una fecha límite cerca?"
        subtitle="Cuéntanos tu caso hoy y arma tu plan de acompañamiento esta misma semana."
      />
    </>
  );
}
