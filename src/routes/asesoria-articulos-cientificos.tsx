import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "../lib/seo";
import { GraduationCap, BarChart3, Library } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-articulos.jpg";

export const Route = createFileRoute("/asesoria-articulos-cientificos")({
  head: () => serviceHead({
    path: "/asesoria-articulos-cientificos",
    title: "Asesoría para Publicar Artículos Científicos | Revistas Indexadas — Asesorías Académicas",
    description: "Mentoría experta para convertir tu investigación en un artículo publicable: estructura IMRyD, selección de revista y respuesta a revisores.",
    serviceName: "Mentoría de artículos científicos",
    ogType: "article",
    faq: FAQ,
  }),
  component: Page,
});

const FAQ = [
        { q: "¿Firman ustedes el artículo?", a: "No. La autoría intelectual es tuya; nuestro rol es de mentoría editorial y metodológica, como un tutor de publicación." },
        { q: "¿Garantizan la aceptación en la revista?", a: "Ninguna asesoría ética puede garantizarlo. Sí elevamos significativamente la calidad y la probabilidad de aceptación de tu manuscrito." },
        { q: "¿En qué revistas tienen experiencia?", a: "Revistas indexadas en Scopus, Web of Science y Publindex, en múltiples áreas curriculares." },
        { q: "¿Cómo son los pagos?", a: "Planes diferidos por etapas del acompañamiento. Te lo detallamos en la cotización." },
      ];

function Page() {
  return (
    <ServicioTemplate
      nombre="Artículos científicos"
      h1="Mentoría para artículos científicos: publica en revistas indexadas"
      subtitulo="Acompañamiento experto para convertir tu investigación en un artículo publicable: estructura IMRyD, estilo científico, selección de revista y respuesta a revisores."
      heroImage={heroImg}
      incluye={[
        "Evaluación de publicabilidad de tu investigación",
        "Asesoría en estructura IMRyD",
        "Retroalimentación editorial de tu manuscrito",
        "Orientación en selección de revista (Scopus, Publindex)",
        "Preparación de la carta de presentación",
        "Estrategia para responder a pares revisores",
      ]}
      pasos={[
        { titulo: "Evaluación inicial", texto: "Diagnosticamos el potencial de publicación de tu investigación." },
        { titulo: "Plan editorial", texto: "Definimos revista objetivo, estructura IMRyD y calendario." },
        { titulo: "Mentoría de escritura", texto: "Retroalimentación editorial sobre el manuscrito que escribes." },
        { titulo: "Envío y revisiones", texto: "Te acompañamos en la carta, el envío y la respuesta a revisores." },
      ]}
      perfiles={[
        { titulo: "Investigadores noveles", texto: "Reciben mentoría para su primer envío a una revista indexada." },
        { titulo: "Estudiantes de posgrado", texto: "Convierten un capítulo de tesis en un artículo publicable." },
        { titulo: "Docentes universitarios", texto: "Fortalecen su productividad académica y su índice H." },
      ]}
      faq={FAQ}
      relacionados={[
        { to: "/asesoria-de-tesis", titulo: "Asesoría de tesis", texto: "Acompañamiento metodológico para maestría y doctorado.", icon: GraduationCap },
        { to: "/", titulo: "Análisis estadístico SPSS", texto: "Consultoría estadística para defender tus resultados con solvencia.", icon: BarChart3 },
        { to: "/", titulo: "Revisión bibliográfica", texto: "Estrategias para revisar y sintetizar literatura académica.", icon: Library },
      ]}
      ctaTitle="¿Quieres publicar tu investigación?"
      ctaSubtitle="Cuéntanos tu manuscrito hoy y define esta semana tu ruta hacia una revista indexada."
    />
  );
}
