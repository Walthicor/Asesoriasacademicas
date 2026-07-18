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
} from "lucide-react";
import { CTABanda } from "../components/CTABanda";
import { FormularioCotizacion } from "../components/FormularioCotizacion";
import heroPoster from "../assets/hero-poster.jpg";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

const WA_URL =
  "https://wa.me/573163641646?text=" +
  encodeURIComponent("Hola, quiero una cotización de asesoría académica");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Asesorías Académicas | Asesoría de Tesis y Acompañamiento Académico en Colombia",
      },
      {
        name: "description",
        content:
          "Asesoría metodológica de tesis, trabajos de grado, corrección de estilo, normas APA y análisis estadístico SPSS. Acompañamiento académico ético para pregrado y posgrado en Colombia.",
      },
      {
        property: "og:title",
        content:
          "Asesorías Académicas | Asesoría de Tesis y Acompañamiento Académico en Colombia",
      },
      {
        property: "og:description",
        content:
          "Asesoría metodológica, tutorías personalizadas y preparación de sustentaciones. Tú eres el autor; nosotros te acompañamos.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

/* ---------------- Data ---------------- */

const servicios = [
  {
    icon: GraduationCap,
    title: "Asesoría de tesis",
    text:
      "Acompañamiento metodológico capítulo a capítulo para tu tesis de maestría o doctorado.",
  },
  {
    icon: BookOpen,
    title: "Trabajos de grado",
    text:
      "Orientación integral para planear, estructurar y sustentar tu trabajo de grado de pregrado.",
  },
  {
    icon: PenLine,
    title: "Ensayos académicos",
    text:
      "Tutorías de escritura argumentativa para que tus ensayos tengan estructura y voz propia.",
  },
  {
    icon: FileText,
    title: "Monografías",
    text:
      "Asesoría en diseño, fuentes y redacción académica para monografías sólidas.",
  },
  {
    icon: Microscope,
    title: "Artículos científicos",
    text:
      "Mentoría para escribir, ajustar y postular tu artículo a revistas indexadas.",
  },
  {
    icon: BarChart3,
    title: "Análisis estadístico SPSS",
    text:
      "Capacitación y consultoría estadística para que entiendas y defiendas tus resultados.",
  },
  {
    icon: Library,
    title: "Revisión bibliográfica",
    text:
      "Te enseñamos a buscar, filtrar y organizar literatura con gestores de referencias.",
  },
  {
    icon: BookMarked,
    title: "Normas APA",
    text:
      "Formato profesional de tu documento y capacitación en citación APA 7.",
  },
  {
    icon: SpellCheck,
    title: "Corrección de estilo",
    text:
      "Pulimos redacción, coherencia y ortotipografía de tu texto, respetando tu autoría.",
  },
];

const pasos = [
  {
    n: "01",
    title: "Diagnóstico gratuito",
    text: "Evaluamos tu proyecto y tu fecha límite.",
  },
  {
    n: "02",
    title: "Plan de acompañamiento",
    text: "Definimos sesiones, entregas y asesor ideal.",
  },
  {
    n: "03",
    title: "Sesiones y seguimiento",
    text:
      "Grupo de WhatsApp multidisciplinar y reuniones periódicas con tu asesor.",
  },
  {
    n: "04",
    title: "Revisiones progresivas",
    text: "Retroalimentación detallada de cada avance que escribes.",
  },
  {
    n: "05",
    title: "Preparación final",
    text:
      "Corrección de estilo, normas APA y ensayo de sustentación.",
  },
];

const razones = [
  { icon: ShieldCheck, title: "Compromiso con la excelencia y la calidad" },
  { icon: MessagesSquare, title: "Comunicación abierta y continua" },
  { icon: Layers, title: "Flexibilidad y adaptabilidad a tu universidad" },
  { icon: UserCheck, title: "Seguimiento personalizado" },
  { icon: Lock, title: "Garantía de confidencialidad" },
  {
    icon: Scale,
    title: "Ética académica: tú eres siempre el autor de tu trabajo",
  },
];

const cifras = [
  { n: "+10.000", label: "estudiantes acompañados" },
  { n: "+100", label: "docentes asesores" },
  { n: "5/5", label: "satisfacción de nuestros estudiantes" },
];

const testimonios = [
  {
    text:
      "La asesoría metodológica me dio la claridad que no encontraba. Sustenté con seguridad y me gradué.",
    author: "Estudiante de Maestría en Educación",
  },
  {
    text:
      "El acompañamiento en normas APA y corrección de estilo elevó por completo la calidad de mi tesis.",
    author: "Estudiante de Pregrado en Psicología",
  },
  {
    text:
      "Su capacitación en SPSS me permitió entender mis propios resultados y defenderlos con solvencia.",
    author: "Estudiante de Doctorado en Administración",
  },
];

const posts = [
  {
    img: blog1,
    cat: "Metodología",
    title: "Cómo estructurar el capítulo metodológico de tu tesis",
  },
  {
    img: blog2,
    cat: "Escritura académica",
    title: "5 principios de redacción académica que marcan la diferencia",
  },
  {
    img: blog3,
    cat: "Sustentación",
    title: "Prepara tu sustentación: claves para llegar con seguridad",
  },
];

/* ---------------- Sections ---------------- */

function Hero() {
  return (
    <section className="relative -mt-[70px] flex min-h-screen items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-student-writing-in-a-notebook-4438/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,14,20,0.65) 0%, rgba(15,27,45,0.9) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 20%, rgba(201,162,39,0.18), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-32 pb-16 text-center lg:px-8 lg:pt-40">
        <p className="reveal text-[11px] uppercase tracking-[0.32em] text-[color:var(--accent)]">
          Asesoría Académica Profesional en Colombia
        </p>
        <h1 className="reveal text-shine mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
          Acompañamos tu camino académico hasta el grado
        </h1>
        <p className="reveal mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[color:var(--ivory)]/80 md:text-lg">
          Asesoría metodológica, tutorías personalizadas, corrección de estilo
          y preparación de sustentaciones para pregrado y posgrado. Tú escribes
          tu historia académica; nosotros te damos las herramientas para
          lograrla.
        </p>
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cotizar"
            className="pulse-gold inline-flex items-center justify-center rounded-sm bg-[color:var(--accent)] px-7 py-3.5 text-sm font-medium text-[color:var(--accent-foreground)] shadow-[var(--shadow-gold)] transition-all duration-300 hover:bg-[color:var(--accent-hover)] hover:-translate-y-0.5"
          >
            Cotiza tu asesoría
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-[color:var(--accent)]/60 bg-transparent px-7 py-3.5 text-sm font-medium text-[color:var(--ivory)] transition-all duration-300 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/10 hover:-translate-y-0.5"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-[color:var(--accent)]/20 bg-[color:var(--background)]/70 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 px-5 py-5 text-center text-xs uppercase tracking-[0.22em] text-[color:var(--ivory)]/75 md:grid-cols-3 md:text-sm lg:px-8">
          <span>+100 docentes asesores especializados</span>
          <span className="hidden md:block text-[color:var(--accent)]/70">·</span>
          <span>Todas las áreas curriculares</span>
          <span className="hidden md:block text-[color:var(--accent)]/70">·</span>
          <span>Empresa legalmente constituida en Colombia</span>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section
      className="px-5 py-24 lg:px-8 lg:py-32"
      style={{ backgroundColor: "#F7F5F0", color: "#0A0E14" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Servicios
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-[#0A0E14]">
            Servicios de asesoría y acompañamiento académico
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[#3a4553] leading-relaxed">
            Un equipo multidisciplinar que te orienta en cada etapa: desde la
            idea de investigación hasta la sustentación final.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="reveal card-elevate group rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-7 text-left shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-[color:var(--ivory)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {text}
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-hover)]"
              >
                Ver asesoría
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoTrabajamos() {
  return (
    <section
      className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32"
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
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Cómo trabajamos
          </p>
          <h2 className="text-shine mt-4 font-display text-3xl md:text-5xl">
            Un método claro, de la idea al grado
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/50 to-transparent lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {pasos.map((p) => (
              <li key={p.n} className="reveal relative text-center lg:text-left">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--accent)]/50 bg-[color:var(--background)] font-display text-2xl text-[color:var(--accent)] shadow-[var(--shadow-gold)] lg:mx-0">
                  {p.n}
                </div>
                <h3 className="mt-5 font-display text-lg text-[color:var(--ivory)]">
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
    <section
      className="px-5 py-24 lg:px-8 lg:py-32"
      style={{ backgroundColor: "#0A0E14" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Por qué elegirnos
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--ivory)]">
            La diferencia está en el acompañamiento
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {razones.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="reveal card-elevate flex items-start gap-4 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)]/60 p-6"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="pt-1.5 font-display text-lg leading-snug text-[color:var(--ivory)]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cifras() {
  return (
    <section
      className="px-5 py-20 lg:px-8"
      style={{ backgroundColor: "#F7F5F0" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3">
        {cifras.map((c) => (
          <div key={c.label} className="reveal">
            <div className="text-shine font-display text-5xl md:text-6xl">
              {c.n}
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#3a4553]">
              {c.label}
            </p>
          </div>
        ))}
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
  const prev = () =>
    setI((v) => (v - 1 + testimonios.length) % testimonios.length);
  const next = () => setI((v) => (v + 1) % testimonios.length);

  return (
    <section
      className="relative overflow-hidden px-5 py-24 lg:px-8"
      style={{ backgroundColor: "#0F1B2D" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="reveal text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
          Testimonios
        </p>
        <h2 className="reveal mt-4 font-display text-3xl md:text-5xl text-[color:var(--ivory)]">
          Historias de quienes se graduaron con nosotros
        </h2>

        <div className="reveal relative mt-14">
          <Quote
            aria-hidden
            className="mx-auto mb-6 h-10 w-10 text-[color:var(--accent)]/60"
          />
          <div className="min-h-[180px]">
            {testimonios.map((t, idx) => (
              <blockquote
                key={idx}
                className={`absolute inset-x-0 px-6 transition-all duration-700 ${
                  idx === i
                    ? "relative opacity-100 translate-y-0"
                    : "pointer-events-none opacity-0 translate-y-3"
                }`}
                style={{ position: idx === i ? "relative" : "absolute" }}
              >
                <p className="font-display text-xl italic leading-relaxed text-[color:var(--ivory)] md:text-2xl">
                  “{t.text}”
                </p>
                <footer className="mt-6 text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Anterior testimonio"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--accent)]/40 text-[color:var(--ivory)] transition-colors hover:bg-[color:var(--accent)]/10"
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
                      ? "w-8 bg-[color:var(--accent)]"
                      : "w-3 bg-[color:var(--ivory)]/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--accent)]/40 text-[color:var(--ivory)] transition-colors hover:bg-[color:var(--accent)]/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Blog
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-[color:var(--ivory)]">
              Recursos para tu vida académica
            </h2>
          </div>
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
          >
            Ver todos los artículos →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="reveal card-elevate group overflow-hidden rounded-md border border-[color:var(--border)] bg-[color:var(--card)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--accent)]">
                  {p.cat}
                </p>
                <h3 className="mt-3 font-display text-lg leading-snug text-[color:var(--ivory)]">
                  {p.title}
                </h3>
                <Link
                  to="/"
                  className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
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
      className="relative overflow-hidden px-5 py-24 lg:px-8"
      style={{ backgroundColor: "#0A0E14" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 0%, rgba(201,162,39,0.06) 100%), linear-gradient(90deg, transparent 49.9%, rgba(201,162,39,0.12) 50%, transparent 50.1%)",
          backgroundSize: "auto, 120px 100%",
        }}
      />
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
            Cotiza tu asesoría en minutos
          </h2>
        </div>

        <div className="reveal">
          <FormularioCotizacion />
        </div>

        <p className="reveal mt-6 text-center text-xs leading-relaxed text-[color:var(--muted-foreground)]">
          Respondemos en menos de 2 horas en horario hábil. Tu información es
          confidencial.
        </p>
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
      <Cifras />
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
