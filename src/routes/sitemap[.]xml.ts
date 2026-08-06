import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles } from "../data/blog";
import { SITE_URL } from "../lib/seo";

const staticPaths: { path: string; changefreq: string; priority: string }[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/quienes-somos", changefreq: "monthly", priority: "0.7" },
  { path: "/preguntas-frecuentes", changefreq: "monthly", priority: "0.6" },
  { path: "/contacto", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/asesoria-de-tesis", changefreq: "monthly", priority: "0.9" },
  { path: "/asesoria-trabajos-de-grado", changefreq: "monthly", priority: "0.9" },
  { path: "/asesoria-ensayos-academicos", changefreq: "monthly", priority: "0.8" },
  { path: "/asesoria-monografias", changefreq: "monthly", priority: "0.8" },
  { path: "/asesoria-articulos-cientificos", changefreq: "monthly", priority: "0.8" },
  { path: "/analisis-estadistico-spss", changefreq: "monthly", priority: "0.9" },
  { path: "/revision-bibliografica", changefreq: "monthly", priority: "0.8" },
  { path: "/normas-apa", changefreq: "monthly", priority: "0.8" },
  { path: "/correccion-de-estilo", changefreq: "monthly", priority: "0.8" },
  { path: "/preparacion-sustentaciones", changefreq: "monthly", priority: "0.8" },
  { path: "/aviso-legal", changefreq: "yearly", priority: "0.3" },
  { path: "/politica-de-privacidad", changefreq: "yearly", priority: "0.3" },
  { path: "/politica-de-cookies", changefreq: "yearly", priority: "0.3" },
  { path: "/politica-de-reembolsos", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls: string[] = [];
        for (const e of staticPaths) {
          urls.push(
            `  <url>\n    <loc>${SITE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          );
        }
        for (const a of articles) {
          urls.push(
            `  <url>\n    <loc>${SITE_URL}/blog/${a.slug}</loc>\n    <lastmod>${a.date}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>`,
          );
        }
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
