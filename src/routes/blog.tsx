import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { articles, CATEGORIES, getArticlesByCategory } from "../data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog académico | Asesorías Académicas" },
      {
        name: "description",
        content:
          "Guías prácticas de investigación, escritura académica, estadística y normas APA escritas por nuestros docentes asesores.",
      },
      { property: "og:title", content: "Blog académico | Asesorías Académicas" },
      {
        property: "og:description",
        content:
          "Consejos claros y aplicables para avanzar en tu tesis y trabajos académicos.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todos");
  const filtered = getArticlesByCategory(cat);

  return (
    <>
      <section className="bg-[color:var(--surface)] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
            Recursos
          </p>
          <h1 className="reveal mt-4 font-display text-4xl font-medium leading-tight text-shine md:text-6xl">
            Blog académico
          </h1>
          <p className="reveal mt-5 text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-lg">
            Guías prácticas de investigación, escritura académica y vida
            universitaria, escritas por nuestros docentes asesores.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-16 z-30 border-y border-[color:var(--border)] bg-white/85 px-5 py-4 backdrop-blur lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                  active
                    ? "border-[color:var(--primary)] bg-[color:var(--primary)] text-white"
                    : "border-[color:var(--border)] bg-white text-[color:var(--primary)] hover:border-[color:var(--accent)]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <p className="text-center text-[color:var(--muted-foreground)]">
              Pronto publicaremos artículos en esta categoría.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((a) => (
                <Link
                  key={a.slug}
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  className="reveal card-elevate group flex flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-[color:var(--accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--primary)]">
                      {a.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold leading-snug text-[color:var(--primary)] transition-colors group-hover:text-[color:var(--brand-magenta)] md:text-2xl">
                      {a.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                      {a.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-4 text-[11px] font-medium text-[color:var(--muted-foreground)]">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {a.dateLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {a.readingMinutes} min
                      </span>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)]">
                      Leer artículo
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <p className="sr-only">{articles.length} artículos publicados</p>
        </div>
      </section>
    </>
  );
}
