import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { getArticleBySlug, type ArticleBlock } from "../data/blog";
import { CTABanda } from "../components/CTABanda";
import { FormularioCotizacion } from "../components/FormularioCotizacion";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artículo no encontrado | Blog Asesorías Académicas" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} | Blog Asesorías Académicas` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:url", content: `/blog/${a.slug}` },
        { property: "og:type", content: "article" },
        { property: "og:image", content: a.image },
        { property: "article:published_time", content: a.date },
        { property: "article:section", content: a.category },
      ],
      links: [{ rel: "canonical", href: `/blog/${a.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            datePublished: a.date,
            author: {
              "@type": "Organization",
              name: "Equipo docente de Asesorías Académicas",
            },
            articleSection: a.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticleView,
});

function ArticleNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-[color:var(--primary)]">
        Artículo no disponible
      </h1>
      <p className="mt-4 text-[color:var(--muted-foreground)]">
        No encontramos el artículo que buscas.
      </p>
      <Link
        to="/blog"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-medium text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Volver al blog
      </Link>
    </div>
  );
}

function ArticleView() {
  const { article } = Route.useLoaderData();
  const headings = article.blocks.filter(
    (b): b is Extract<ArticleBlock, { type: "h2" }> => b.type === "h2"
  );

  return (
    <>
      {/* HERO */}
      <section className="bg-[color:var(--surface)] px-5 pt-16 pb-10 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)] hover:text-[color:var(--brand-magenta)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-[color:var(--accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
            {article.category}
          </span>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-[color:var(--primary)] md:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[color:var(--muted-foreground)]">
            <span className="font-semibold text-[color:var(--primary)]">
              Equipo docente de Asesorías Académicas
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {article.dateLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {article.readingMinutes} min de lectura
            </span>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="aspect-[16/9] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            width={1600}
            height={900}
          />
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_1fr]">
          {/* TOC sticky */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
                Índice
              </p>
              <ul className="mt-4 space-y-3 border-l border-[color:var(--border)] pl-4">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="block text-xs leading-snug text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--brand-magenta)]"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Body */}
          <article className="mx-auto w-full max-w-[720px]">
            <div className="space-y-6 text-[17px] leading-[1.85] text-[color:var(--primary)]/90">
              {article.blocks.map((b, i) => renderBlock(b, i))}
            </div>

            {/* CTA intermedio hacia servicio relacionado */}
            <aside className="my-14 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
                ¿Necesitas apoyo con esto?
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-[color:var(--primary)] md:text-3xl">
                {article.relatedService.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {article.relatedService.texto}
              </p>
              <Link
                to={article.relatedService.to}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[color:var(--brand-magenta)] hover:-translate-y-0.5"
              >
                Conocer el servicio <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </article>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section className="bg-[color:var(--surface)] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-magenta)]">
              Empecemos
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
              Cotiza tu acompañamiento
            </h2>
          </div>
          <FormularioCotizacion
            servicioPreseleccionado={article.relatedService.titulo}
          />
        </div>
      </section>

      <CTABanda
        title="Lleva estos consejos a la práctica con un asesor experto"
        subtitle="Un docente especializado te acompaña paso a paso hasta tu grado."
      />
    </>
  );
}

function renderBlock(b: ArticleBlock, i: number) {
  switch (b.type) {
    case "p":
      return <p key={i}>{b.text}</p>;
    case "h2":
      return (
        <h2
          key={i}
          id={b.id}
          className="scroll-mt-28 pt-4 font-display text-2xl font-semibold text-[color:var(--primary)] md:text-3xl"
        >
          {b.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="list-disc space-y-2 pl-6 marker:text-[color:var(--accent)]">
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={i}
          className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-[color:var(--brand-magenta)]"
        >
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-4 border-l-4 border-[color:var(--accent)] bg-[color:var(--surface)] py-4 pl-6 pr-4 font-display text-xl italic leading-snug text-[color:var(--primary)]"
        >
          {b.text}
        </blockquote>
      );
  }
}
