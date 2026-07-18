import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

const servicios = [
  "Asesoría de tesis",
  "Trabajo de grado",
  "Ensayo y monografía",
  "Artículo científico",
  "Análisis estadístico SPSS",
  "Normas APA",
];

const institucional = [
  { label: "Quiénes somos", to: "/" },
  { label: "Metodología", to: "/" },
  { label: "Blog", to: "/" },
  { label: "Preguntas frecuentes", to: "/" },
  { label: "Política de acompañamiento ético", to: "/" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              Asesoría, tutoría y acompañamiento académico para estudiantes de
              pregrado y posgrado en Colombia. Te formamos para que tu trabajo
              sea, siempre, tuyo.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
              Servicios
            </h4>
            <ul className="mt-5 space-y-3">
              {servicios.map((s) => (
                <li key={s}>
                  <Link
                    to="/"
                    className="text-sm text-[color:var(--ivory)]/75 transition-colors hover:text-[color:var(--accent-hover)]"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
              Institucional
            </h4>
            <ul className="mt-5 space-y-3">
              {institucional.map((i) => (
                <li key={i.label}>
                  <Link
                    to={i.to}
                    className="text-sm text-[color:var(--ivory)]/75 transition-colors hover:text-[color:var(--accent-hover)]"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--ivory)]/75">
              <li>
                <a
                  href="https://wa.me/573163641646"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--accent-hover)]"
                >
                  <Phone className="h-4 w-4 text-[color:var(--accent)]" />
                  +57 316 364 1646
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@asesoriasacademicas.co"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--accent-hover)]"
                >
                  <Mail className="h-4 w-4 text-[color:var(--accent)]" />
                  contacto@asesoriasacademicas.co
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/asesorias_academics"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--accent-hover)]"
                >
                  <Instagram className="h-4 w-4 text-[color:var(--accent)]" />
                  @asesorias_academics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--accent)]/40 to-transparent" />

        <p className="mt-6 text-center text-xs text-[color:var(--muted-foreground)]">
          © 2026 Asesorías Académicas — Acompañamiento académico ético. Tú eres
          el autor de tu trabajo.
        </p>
      </div>
    </footer>
  );
}
