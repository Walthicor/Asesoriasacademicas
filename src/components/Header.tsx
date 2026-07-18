import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const servicios = [
  { label: "Asesoría de tesis", to: "/asesoria-de-tesis" },
  { label: "Trabajo de grado", to: "/asesoria-trabajos-de-grado" },
  { label: "Ensayo académico", to: "/asesoria-ensayos-academicos" },
  { label: "Monografía", to: "/asesoria-monografias" },
  { label: "Artículo científico", to: "/asesoria-articulos-cientificos" },
];

const navLinkClass =
  "relative gold-line py-1 text-sm font-medium text-[color:var(--primary)]/80 transition-colors hover:text-[color:var(--primary)]";

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
              <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[var(--shadow-elegant)]">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent" />
                <ul className="py-2">
                  {servicios.map((s) => (
                    <li key={s.label}>
                      <Link
                        to={s.to}
                        className="block px-4 py-2.5 text-sm text-[color:var(--primary)]/75 transition-colors hover:bg-[color:var(--surface)] hover:text-[color:var(--brand-magenta)]"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link to="/" className={navLinkClass}>Quiénes somos</Link>
          <Link to="/" className={navLinkClass}>Blog</Link>
          <Link to="/" className={navLinkClass}>Contacto</Link>

          <a
            href="https://wa.me/573163641646?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20de%20asesor%C3%ADa%20acad%C3%A9mica"
            target="_blank"
            rel="noreferrer"
            className="pulse-gold inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-[color:var(--brand-magenta)] hover:-translate-y-0.5"
          >
            Escríbenos por WhatsApp
          </a>
        </nav>

        <button
          aria-label="Abrir menú"
          className="rounded-md border border-[color:var(--border)] bg-white p-2 text-[color:var(--primary)] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[color:var(--border)] bg-white/95 backdrop-blur-lg lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-5 py-4">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium text-[color:var(--primary)]">
                Servicios
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-1 space-y-1 pl-3">
                {servicios.map((s) => (
                  <li key={s.label}>
                    <Link
                      to={s.to}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-[color:var(--primary)]/70 hover:text-[color:var(--brand-magenta)]"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link to="/" className="block py-2 text-sm font-medium text-[color:var(--primary)]">Quiénes somos</Link>
            <Link to="/" className="block py-2 text-sm font-medium text-[color:var(--primary)]">Blog</Link>
            <Link to="/" className="block py-2 text-sm font-medium text-[color:var(--primary)]">Contacto</Link>
            <a
              href="https://wa.me/573163641646?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20de%20asesor%C3%ADa%20acad%C3%A9mica"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--primary)] px-5 py-2.5 text-sm font-medium text-white"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
