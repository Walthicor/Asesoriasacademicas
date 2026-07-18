import { type ReactNode } from "react";
import { pageHead } from "../lib/seo";

export function legalHead(cfg: {
  path: string;
  title: string;
  description: string;
  updatedAt?: string;
}) {
  return pageHead({
    path: cfg.path,
    title: cfg.title,
    description: cfg.description,
    ogType: "website",
  });
}

export function LegalTemplate({
  h1,
  updatedAt,
  children,
}: {
  h1: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      {/* Hero compacto oscuro */}
      <section
        className="relative overflow-hidden border-b border-[#1A2C5B]/40 px-5 py-16 lg:py-20"
        style={{ backgroundColor: "#0F1B2D" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(70% 80% at 50% 0%, rgba(201,162,39,0.15), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(142,29,69,0.12), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1
            className="text-4xl font-semibold leading-tight text-white md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {h1}
          </h1>
          <p className="mt-4 text-sm text-white/70">
            Última actualización: {updatedAt}
          </p>
        </div>
      </section>

      {/* Cuerpo marfil con ancho máximo */}
      <article
        className="px-5 py-16 lg:py-24"
        style={{ backgroundColor: "#F7F5F0" }}
      >
        <div className="mx-auto max-w-[760px] text-[color:var(--ink)]">
          {children}
        </div>
      </article>
    </>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="legal-heading mt-10 font-display text-2xl font-medium text-[color:var(--primary)] md:text-3xl">
      {children}
    </h2>
  );
}
