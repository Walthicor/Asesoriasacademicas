import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const servicios = [
  { label: "Asesoría de tesis", to: "/servicios" },
  { label: "Trabajo de grado", to: "/servicios" },
  { label: "Ensayo y monografía", to: "/servicios" },
  { label: "Artículo científico", to: "/servicios" },
  { label: "Análisis estadístico SPSS", to: "/servicios" },
  { label: "Revisión bibliográfica", to: "/servicios" },
  { label: "Normas APA", to: "/servicios" },
  { label: "Corrección de estilo", to: "/servicios" },
  { label: "Preparación de sustentación", to: "/servicios" },
];

const navLinkClass =
  "relative gold-line py-1 text-sm text-[color:var(--ivory)]/85 transition-colors hover:text-[color:var(--ivory)]";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-[color:var(--border)]/60 bg-[color:var(--surface)]/85 backdrop-blur-lg"
          : "border-transparent bg-[color:var(--surface)]/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServOpen(true)}
            onMouseLeave={() => setServOpen(false)}
          >
            <button className={`${navLinkClass} inline-flex items-center gap-1`}>
              Servicios
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>
            <div
              className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-200 ${
                servOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none translate-y-1 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-md border border-[color:var(--border)] bg-[color:var(--card)] shadow-[var(--shadow-elegant)]">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent" />
                <ul className="py-2">
                  {servicios.map((s) => (
                    <li key={s.label}>
                      <Link
                        to={s.to}
                        className="block px-4 py-2 text-sm text-[color:var(--ivory)]/80 transition-colors hover:bg-[color:var(--surface)] hover:text-[color:var(--accent-hover)]"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link to="/" className={navLinkClass}>
            Quiénes somos
          </Link>
          <Link to="/" className={navLinkClass}>
            Blog
          </Link>
          <Link to="/" className={navLinkClass}>
            Preguntas frecuentes
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--accent-foreground)] shadow-[var(--shadow-gold)] transition-all duration-300 hover:bg-[color:var(--accent-hover)] hover:-translate-y-0.5"
          >
            Cotizar ahora
          </Link>
        </nav>

        <button
          aria-label="Abrir menú"
          className="rounded-sm border border-[color:var(--border)] p-2 text-[color:var(--ivory)] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--surface)]/95 backdrop-blur-lg lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-5 py-4">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm text-[color:var(--ivory)]/90">
                Servicios
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-1 space-y-1 pl-3">
                {servicios.map((s) => (
                  <li key={s.label}>
                    <Link
                      to={s.to}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-[color:var(--ivory)]/75 hover:text-[color:var(--accent-hover)]"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link to="/" className="block py-2 text-sm text-[color:var(--ivory)]/90">
              Quiénes somos
            </Link>
            <Link to="/" className="block py-2 text-sm text-[color:var(--ivory)]/90">
              Blog
            </Link>
            <Link to="/" className="block py-2 text-sm text-[color:var(--ivory)]/90">
              Preguntas frecuentes
            </Link>
            <Link
              to="/"
              className="mt-2 inline-flex w-full items-center justify-center rounded-sm bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--accent-foreground)]"
            >
              Cotizar ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
