import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Lock, GraduationCap, MessagesSquare } from "lucide-react";
import { CTABanda } from "../components/CTABanda";
import { FormularioCotizacion } from "../components/FormularioCotizacion";
import heroImg from "../assets/quienes-somos-hero.jpg";
import historiaImg from "../assets/quienes-somos-historia.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      {
        title:
          "Quiénes Somos | Asesorías Académicas — Acompañamiento Académico Ético en Colombia",
      },
      {
        name: "description",
        content:
          "Empresa colombiana legalmente constituida con más de 100 docentes asesores. Hemos acompañado a más de 10.000 estudiantes en Colombia y Latinoamérica.",
      },
      { property: "og:title", content: "Quiénes Somos | Asesorías Académicas" },
      {
        property: "og:description",
        content:
          "Un equipo académico comprometido con tu éxito y con la ética en cada asesoría.",
      },
      { property: "og:url", content: "/quienes-somos" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/quienes-somos" }],
  }),
  component: QuienesSomosPage,
});

const principios = [
  {
    icon: ShieldCheck,
    titulo: "Ética académica",
    texto:
      "El estudiante es siempre el autor. Asesoramos, revisamos y capacitamos; no producimos trabajos por terceros.",
  },
  {
    icon: Lock,
    titulo: "Confidencialidad absoluta",
    texto:
      "Tu proyecto, tus datos y tus documentos se manejan bajo estricta reserva profesional.",
  },
  {
    icon: GraduationCap,
    titulo: "Docentes con experiencia real",
    texto:
      "Investigadores en ejercicio, con posgrado y publicaciones en su campo de especialidad.",
  },
  {
    icon: MessagesSquare,
    titulo: "Comunicación abierta",
    texto:
      "Grupo de WhatsApp, reuniones periódicas y respuestas ágiles a lo largo de todo tu proceso.",
  },
];

const metodo = [
  {
    titulo: "Grupo de WhatsApp multidisciplinar",
    texto:
      "Coordinación, asesor y equipo administrativo en un solo canal para resolver dudas rápido.",
  },
  {
    titulo: "Reuniones periódicas con tu docente",
    texto:
      "Videollamadas planificadas para revisar avances y proyectar los siguientes pasos.",
  },
  {
    titulo: "Seguimiento progresivo",
    texto:
      "Registro claro del avance por capítulo o entregable, con hitos y fechas acordadas.",
  },
  {
    titulo: "Garantía por sesión y entrega",
    texto:
      "Cada asesoría incluye retroalimentación escrita para que aproveches al máximo el trabajo.",
  },
  {
    titulo: "Preparación de tu presentación final",
    texto:
      "Simulacros y ajustes para que tu sustentación sea el reflejo de todo tu proceso.",
  },
];

function QuienesSomosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[color:var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="reveal text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-magenta)]">
              Quiénes somos
            </p>
            <h1 className="reveal mt-6 font-display text-4xl font-medium leading-[1.05] text-shine md:text-6xl">
              Un equipo académico comprometido con tu éxito
            </h1>
            <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-lg">
              Docentes, metodólogos y correctores unidos por una convicción: el
              progreso académico se construye con acompañamiento honesto y con
              tu propio esfuerzo.
            </p>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[color:var(--accent)]/20 via-transparent to-[color:var(--brand-magenta)]/15 blur-2xl" />
            <img
              src={heroImg}
              alt="Graduados celebrando su título académico"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
              width={1024}
              height={1280}
            />
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Nuestra historia
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Trayectoria y respaldo institucional
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--muted-foreground)]">
              <p>
                <strong className="text-[color:var(--primary)]">
                  Asesorías Académicas
                </strong>{" "}
                es una empresa colombiana legalmente constituida, con
                certificado de Cámara de Comercio y RUT, dedicada al
                acompañamiento académico ético.
              </p>
              <p>
                Contamos con más de{" "}
                <strong className="text-[color:var(--primary)]">
                  100 docentes asesores
                </strong>{" "}
                especializados que cubren todas las áreas curriculares, desde
                ciencias sociales y educación hasta ingenierías y ciencias de la
                salud.
              </p>
              <p>
                Hemos acompañado a más de{" "}
                <strong className="text-[color:var(--primary)]">
                  10.000 estudiantes
                </strong>{" "}
                de pregrado y posgrado en Colombia y Latinoamérica.
              </p>
            </div>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[color:var(--accent)]/15 via-transparent to-[color:var(--brand-magenta)]/10 blur-2xl" />
            <img
              src={historiaImg}
              alt="Equipo de Asesorías Académicas trabajando en la oficina"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-[color:var(--surface)] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="reveal card-elevate rounded-3xl border border-[color:var(--border)] bg-white p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Misión
            </p>
            <p className="mt-4 font-display text-2xl leading-snug text-[color:var(--primary)]">
              Facilitar el camino académico de nuestros estudiantes con asesoría
              experta, honesta y personalizada, fortaleciendo sus propias
              capacidades de investigación y escritura.
            </p>
          </div>
          <div className="reveal card-elevate rounded-3xl border border-[color:var(--border)] bg-white p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Visión
            </p>
            <p className="mt-4 font-display text-2xl leading-snug text-[color:var(--primary)]">
              Ser el aliado #1 en acompañamiento académico ético en
              Hispanoamérica.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section className="bg-[color:var(--primary)] px-5 py-24 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Nuestros principios
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
              La ética que guía cada asesoría
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principios.map(({ icon: Icon, titulo, texto }) => (
              <div
                key={titulo}
                className="reveal rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:border-[color:var(--accent)]/60 hover:bg-white/10"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO DE SERVICIO */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Cómo trabajamos
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Nuestro método de servicio
            </h2>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {metodo.map((p, i) => (
              <li
                key={p.titulo}
                className="reveal card-elevate rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent)]/15 font-display text-lg font-semibold text-[color:var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-[color:var(--primary)]">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {p.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section id="cotizar" className="bg-[color:var(--surface)] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-10 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Empecemos
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Cuéntanos sobre tu proyecto
            </h2>
          </div>
          <div className="reveal">
            <FormularioCotizacion />
          </div>
        </div>
      </section>

      <CTABanda
        title="¿Listo para dar el siguiente paso académico?"
        subtitle="Un asesor te contacta hoy mismo para diseñar contigo un plan a tu medida."
      />
    </>
  );
}
