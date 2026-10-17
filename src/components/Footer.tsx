import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { waUrl } from "../lib/whatsapp";
import { openCookiePreferences } from "./CookieConsent";

const servicios = [
  { label: "Asesoría de tesis", to: "/asesoria-de-tesis" },
  { label: "Trabajo de grado", to: "/asesoria-trabajos-de-grado" },
  { label: "Ensayos académicos", to: "/asesoria-ensayos-academicos" },
  { label: "Monografías", to: "/asesoria-monografias" },
  { label: "Artículos científicos", to: "/asesoria-articulos-cientificos" },
];

const institucional = [
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Blog", to: "/blog" },
  { label: "Preguntas frecuentes", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              Tutoría y acompañamiento académico para estudiantes de pregrado
              y posgrado en Colombia. El autor de cada trabajo es siempre el
              estudiante.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)]">
              Servicios
            </h4>
            <ul className="mt-5 space-y-3">
              {servicios.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-[color:var(--primary)]/75 transition-colors hover:text-[color:var(--brand-magenta)]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)]">
              Institucional
            </h4>
            <ul className="mt-5 space-y-3">
              {institucional.map((i) => (
                <li key={i.label}>
                  <Link
                    to={i.to}
                    className="text-sm text-[color:var(--primary)]/75 transition-colors hover:text-[color:var(--brand-magenta)]"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)]">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--primary)]/80">
              <li>
                <a
                  href={waUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--brand-magenta)]"
                >
                  <Phone className="h-4 w-4 text-[color:var(--accent)]" />
                  +57 316 364 1646
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@asesoriasacademicas.co"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--brand-magenta)]"
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
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--brand-magenta)]"
                >
                  <Instagram className="h-4 w-4 text-[color:var(--accent)]" />
                  @asesorias_academics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent" />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-[color:var(--muted-foreground)]">
          <Link
            to="/aviso-legal"
            className="transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Aviso legal
          </Link>
          <span aria-hidden>·</span>
          <Link
            to="/politica-de-privacidad"
            className="transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Política de privacidad
          </Link>
          <span aria-hidden>·</span>
          <Link
            to="/politica-de-cookies"
            className="transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Política de cookies
          </Link>
          <span aria-hidden>·</span>
          <Link
            to="/politica-de-reembolsos"
            className="transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Política de reembolsos
          </Link>
          <span aria-hidden>·</span>
          <button
            type="button"
            onClick={openCookiePreferences}
            className="transition-colors hover:text-[color:var(--brand-magenta)]"
          >
            Preferencias de cookies
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-[color:var(--muted-foreground)]">
          <span className="block font-medium text-[color:var(--primary)]/80">
            Política ética: no elaboramos, redactamos ni vendemos trabajos
            académicos. Orientamos y capacitamos; la autoría es siempre del
            estudiante.
          </span>
          © 2026 Asesorías Académicas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
