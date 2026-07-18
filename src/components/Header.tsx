import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { waUrl } from "../lib/whatsapp";

const serviciosAcademicos = [
  { label: "Asesoría de tesis", to: "/asesoria-de-tesis" },
  { label: "Trabajos de grado", to: "/asesoria-trabajos-de-grado" },
  { label: "Ensayos académicos", to: "/asesoria-ensayos-academicos" },
  { label: "Monografías", to: "/asesoria-monografias" },
  { label: "Artículos científicos", to: "/asesoria-articulos-cientificos" },
] as const;

const serviciosMetodologicos = [
  { label: "Análisis estadístico SPSS", to: "/analisis-estadistico-spss" },
  { label: "Revisión bibliográfica", to: "/revision-bibliografica" },
  { label: "Normas APA 7", to: "/normas-apa" },
  { label: "Corrección de estilo", to: "/correccion-de-estilo" },
  { label: "Preparación sustentaciones", to: "/preparacion-sustentaciones" },
] as const;

const todosServicios = [...serviciosAcademicos, ...serviciosMetodologicos];

const navLinkClass =
  "relative gold-line py-1 text-sm font-medium text-[color:var(--primary)]/80 transition-colors hover:text-[color:var(--primary)]";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const waHeaderUrl = waUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll while mobile menu is open
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--border)] bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_-10px_rgba(10,31,68,0.15)]"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServOpen(true)}
            onMouseLeave={() => setServOpen(false)}
          >
            <button
              className={`${navLinkClass} inline-flex items-center gap-1`}
              aria-expanded={servOpen}
              aria-haspopup="true"
            >
              Servicios
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>
            <div
              className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                servOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none translate-y-1 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[var(--shadow-elegant)]">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent" />
                <div className="grid grid-cols-2 gap-x-2 p-4">
                  <div>
                    <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-magenta)]">
                      Acompañamiento académico
                    </p>
                    <ul>
                      {serviciosAcademicos.map((s) => (
                        <li key={s.label}>
                          <Link
                            to={s.to}
                            className="block rounded-lg px-3 py-2 text-sm text-[color:var(--primary)]/80 transition-colors hover:bg-[color:var(--surface)] hover:text-[color:var(--brand-magenta)]"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-magenta)]">
                      Metodología y estilo
                    </p>
                    <ul>
                      {serviciosMetodologicos.map((s) => (
                        <li key={s.label}>
                          <Link
                            to={s.to}
                            className="block rounded-lg px-3 py-2 text-sm text-[color:var(--primary)]/80 transition-colors hover:bg-[color:var(--surface)] hover:text-[color:var(--brand-magenta)]"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/quienes-somos" className={navLinkClass}>Quiénes somos</Link>
          <Link to="/blog" className={navLinkClass}>Blog</Link>
          <Link to="/contacto" className={navLinkClass}>Contacto</Link>

          <a
            href={waHeaderUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Escríbenos por WhatsApp"
            className="pulse-gold inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-[color:var(--brand-magenta)] hover:-translate-y-0.5"
          >
            Escríbenos por WhatsApp
          </a>
        </nav>

        <button
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          className="rounded-md border border-[color:var(--border)] bg-white p-2 text-[color:var(--primary)] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-[color:var(--border)] bg-white/98 backdrop-blur-lg lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-5 py-5">
            <details className="group border-b border-[color:var(--border)]/60 pb-2">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-[color:var(--primary)]">
                Servicios
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-1 space-y-0.5 pl-2">
                {todosServicios.map((s) => (
                  <li key={s.label}>
                    <Link
                      to={s.to}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm text-[color:var(--primary)]/75 hover:bg-[color:var(--surface)] hover:text-[color:var(--brand-magenta)]"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link
              to="/quienes-somos"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[color:var(--border)]/60 py-3 text-sm font-semibold text-[color:var(--primary)]"
            >
              Quiénes somos
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[color:var(--border)]/60 py-3 text-sm font-semibold text-[color:var(--primary)]"
            >
              Blog
            </Link>
            <Link
              to="/contacto"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[color:var(--border)]/60 py-3 text-sm font-semibold text-[color:var(--primary)]"
            >
              Contacto
            </Link>
            <a
              href={waHeaderUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-white"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
