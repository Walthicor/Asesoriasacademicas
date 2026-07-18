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
  Scale,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
} from "lucide-react";
import { CTABanda } from "../components/CTABanda";
import { FormularioCotizacion } from "../components/FormularioCotizacion";

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


const WA_URL =
  "https://wa.me/573163641646?text=" +
  encodeURIComponent("Hola, quiero una cotización de asesoría académica");

import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: "Asesorías Académicas | Asesoría de Tesis y Acompañamiento en Colombia",
      description:
        "Asesoría metodológica de tesis, trabajos de grado, corrección de estilo, normas APA y análisis estadístico SPSS. Acompañamiento académico ético para pregrado y posgrado en Colombia.",
      ogType: "website",
    }),
  component: Home,
});

/* ---------------- Data ---------------- */

const servicios = [
  { icon: GraduationCap, title: "Asesoría de tesis", to: "/asesoria-de-tesis", text: "Acompañamiento metodológico capítulo a capítulo para tu tesis de maestría o doctorado." },
  { icon: BookOpen, title: "Trabajos de grado", to: "/asesoria-trabajos-de-grado", text: "Orientación integral para planear, estructurar y sustentar tu trabajo de grado de pregrado." },
  { icon: PenLine, title: "Ensayos académicos", to: "/asesoria-ensayos-academicos", text: "Tutorías de escritura argumentativa para que tus ensayos tengan estructura y voz propia." },
  { icon: FileText, title: "Monografías", to: "/asesoria-monografias", text: "Asesoría en diseño, fuentes y redacción académica para monografías sólidas." },
  { icon: Microscope, title: "Artículos científicos", to: "/asesoria-articulos-cientificos", text: "Mentoría para escribir, ajustar y postular tu artículo a revistas indexadas." },
  { icon: BarChart3, title: "Análisis estadístico SPSS", to: "/", text: "Capacitación y consultoría estadística para que entiendas y defiendas tus resultados." },
  { icon: Library, title: "Revisión bibliográfica", to: "/", text: "Te enseñamos a buscar, filtrar y organizar literatura con gestores de referencias." },
  { icon: BookMarked, title: "Normas APA", to: "/", text: "Formato profesional de tu documento y capacitación en citación APA 7." },
  { icon: SpellCheck, title: "Corrección de estilo", to: "/", text: "Pulimos redacción, coherencia y ortotipografía de tu texto, respetando tu autoría." },
];

const pasos = [
  { n: "01", title: "Diagnóstico gratuito", text: "Evaluamos tu proyecto y tu fecha límite." },
  { n: "02", title: "Plan de acompañamiento", text: "Definimos sesiones, entregas y asesor ideal." },
  { n: "03", title: "Sesiones y seguimiento", text: "Grupo de WhatsApp multidisciplinar y reuniones periódicas con tu asesor." },
  { n: "04", title: "Revisiones progresivas", text: "Retroalimentación detallada de cada avance que escribes." },
  { n: "05", title: "Preparación final", text: "Corrección de estilo, normas APA y ensayo de sustentación." },
];

const razones = [
  { icon: ShieldCheck, title: "Compromiso con la excelencia y la calidad" },
  { icon: MessagesSquare, title: "Comunicación abierta y continua" },
  { icon: Layers, title: "Flexibilidad y adaptabilidad a tu universidad" },
  { icon: UserCheck, title: "Seguimiento personalizado" },
  { icon: Lock, title: "Garantía de confidencialidad" },
  { icon: Scale, title: "Ética académica: tú eres siempre el autor de tu trabajo" },
];

const cifras = [
  { n: "+10.000", label: "estudiantes acompañados" },
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
        <span className="reveal mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/95 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--accent)]" />
          Asesoría académica en Colombia
        </span>

        <h1 className="reveal mx-auto mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.05] text-white md:text-7xl">
          Convertimos tu proceso académico en un{" "}
          <span className="italic text-[color:var(--accent)]">camino claro</span>.
        </h1>

        <p className="reveal mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
          Metodología, disciplina y mentoría profesional para que llegues al
          grado con dominio total de tu trabajo. Sin atajos ni trampas: solo
          acompañamiento humano, riguroso y ético.
        </p>

        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cotizar"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[color:var(--primary)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-[color:var(--accent)] hover:text-white hover:-translate-y-0.5"
          >
            Cotiza tu asesoría
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="pulse-gold inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-7 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-gold)] transition-all duration-300 hover:bg-[color:var(--brand-magenta)] hover:-translate-y-0.5"
          >
            Escríbenos por WhatsApp
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

    </section>
  );
}

function Servicios() {
  return (
    <section className="bg-[color:var(--surface)] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
            Servicios
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
            Un servicio para cada etapa de tu proceso académico
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[color:var(--muted-foreground)]">
            Un equipo multidisciplinar que te orienta desde la idea de
            investigación hasta la sustentación final.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, title, text, to }) => (
            <Link
              key={title}
              to={to}
              className="reveal card-elevate group rounded-2xl border border-[color:var(--border)] bg-white p-7 text-left"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)] transition-colors group-hover:bg-[color:var(--primary)] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[color:var(--primary)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)]">
                Ver asesoría
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
        <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Cómo trabajamos
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Un método claro, de la idea al grado
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-[color:var(--muted-foreground)] lg:justify-self-end lg:text-right">
            Cinco etapas, un asesor asignado y comunicación continua. Así
            traducimos tu proceso en un plan realista, ético y humano.
          </p>
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
                <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--primary)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Por qué elegirnos
          </p>
          <h2 className="text-shine-dark mt-4 font-display text-4xl font-medium md:text-5xl">
            La diferencia está en el acompañamiento
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
              <p className="pt-1.5 font-display text-lg font-medium leading-snug text-white">
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
            Nuestra comunidad
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
            Ideas que acompañan tu camino
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[color:var(--muted-foreground)]">
            Recordatorios visuales de la filosofía con la que trabajamos: enfoque, estructura y mejora continua.
          </p>
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
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
            Testimonios
          </p>
          <h2 className="reveal mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Blog
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Recursos para tu vida académica
            </h2>
          </div>
          <Link
            to="/"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)] hover:text-[color:var(--primary)]"
          >
            Ver todos los artículos →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="reveal card-elevate group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-magenta)]">
                  {p.cat}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-[color:var(--primary)]">
                  {p.title}
                </h3>
                <Link
                  to="/"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)] hover:text-[color:var(--brand-magenta)]"
                >
                  Leer artículo
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
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
      <ComoTrabajamos />
      <PorQue />
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
