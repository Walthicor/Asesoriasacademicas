import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, BarChart3, BookMarked } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-bibliografia.jpg";

export const Route = createFileRoute("/revision-bibliografica")({
  head: () => serviceHead({
    path: "/revision-bibliografica",
    title: "Asesoría en Revisión Bibliográfica y Estado del Arte — Asesorías Académicas",
    description: "Te enseñamos a buscar en bases de datos académicas, filtrar fuentes de calidad y organizar tu marco teórico con gestores de referencias.",
    serviceName: "Asesoría en revisión bibliográfica",
    ogType: "article",
    faq: FAQ,
  }),
  component: RevisionBibliograficaPage,
});

const FAQ = [
        {
          q: "¿Ustedes escriben el estado del arte?",
          a: "No. Te enseñamos el método, revisamos tu redacción y te retroalimentamos: la autoría del texto es tuya.",
        },
        {
          q: "¿Trabajan con acceso restringido a Scopus?",
          a: "Sí, orientamos también búsquedas en fuentes abiertas y te ayudamos a aprovechar los accesos de tu universidad.",
        },
        {
          q: "¿Qué gestor de referencias recomiendan?",
          a: "Zotero por ser gratuito y potente, o Mendeley si tu programa ya lo usa. Te capacitamos en cualquiera.",
        },
        {
          q: "¿Se puede usar para artículos científicos?",
          a: "Sí, es una base excelente para el marco teórico de artículos y revisiones para revistas indexadas.",
        },
      ];

function RevisionBibliograficaPage() {
  return (
    <ServicioTemplate
      nombre="Revisión bibliográfica"
      h1="Asesoría en revisión bibliográfica: domina la literatura de tu tema"
      subtitulo="Te enseñamos a buscar en bases de datos académicas, filtrar fuentes de calidad y organizar tu marco teórico con gestores de referencias."
      heroImage={heroImg}
      incluye={[
        "Estrategia de búsqueda en Scopus, Scielo y Google Académico",
        "Definición de criterios de inclusión y exclusión",
        "Capacitación en Zotero o Mendeley según tu preferencia",
        "Construcción de matriz de análisis documental",
        "Orientación PRISMA para revisiones sistemáticas",
        "Retroalimentación de tu redacción del estado del arte",
      ]}
      pasos={[
        {
          titulo: "Definimos tu ecuación de búsqueda",
          texto:
            "Traducimos tu tema a descriptores y operadores booleanos efectivos.",
        },
        {
          titulo: "Selección de fuentes",
          texto:
            "Aplicamos tus criterios de inclusión y exclusión para filtrar la literatura pertinente.",
        },
        {
          titulo: "Gestión y matriz documental",
          texto:
            "Organizamos referencias en Zotero o Mendeley y armamos tu matriz analítica.",
        },
        {
          titulo: "Redacción del estado del arte",
          texto:
            "Revisamos tu escritura hasta que refleje control conceptual del campo.",
        },
      ]}
      perfiles={[
        {
          titulo: "Tesistas comenzando el marco teórico",
          texto:
            "Empiezas con un método claro, no con búsquedas desordenadas en internet.",
        },
        {
          titulo: "Autores de revisiones sistemáticas",
          texto:
            "Orientación PRISMA para cumplir los estándares exigidos por las revistas.",
        },
        {
          titulo: "Estudiantes con literatura desorganizada",
          texto:
            "Ponemos orden a tus fuentes y te capacitamos para mantenerlo tú mismo.",
        },
      ]}
      faq={FAQ}
      relacionados={[
        {
          to: "/asesoria-de-tesis",
          titulo: "Asesoría de tesis",
          texto:
            "Integra tu revisión bibliográfica dentro de un acompañamiento integral de tesis.",
          icon: BookOpen,
        },
        {
          to: "/normas-apa",
          titulo: "Normas APA 7",
          texto:
            "Cita y referencia con impecable formato APA todo lo que consultes.",
          icon: BookMarked,
        },
        {
          to: "/analisis-estadistico-spss",
          titulo: "Análisis estadístico SPSS",
          texto:
            "Complementa el marco teórico con un análisis de resultados sólido.",
          icon: BarChart3,
        },
      ]}
      ctaTitle="Construye un marco teórico que impresione al jurado"
      ctaSubtitle="Planeamos contigo la estrategia de búsqueda y te capacitamos en las herramientas."
    />
  );
}
