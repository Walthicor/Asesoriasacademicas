import { createFileRoute } from "@tanstack/react-router";
import { PenLine, Library, BookMarked } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-monografias.jpg";

export const Route = createFileRoute("/asesoria-monografias")({
  head: () => ({
    meta: [
      { title: "Asesoría de Monografías | Investigación Documental — Asesorías Académicas" },
      { name: "description", content: "Asesoría en diseño, búsqueda de fuentes académicas y redacción de monografías, con revisiones progresivas de tus avances." },
      { property: "og:title", content: "Asesoría de Monografías | Investigación Documental" },
      { property: "og:description", content: "Investigación documental con rigor. Tú eres el autor; nosotros te acompañamos." },
      { property: "og:url", content: "/asesoria-monografias" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/asesoria-monografias" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicioTemplate
      nombre="Monografías"
      h1="Asesoría en monografías: investigación documental con rigor"
      subtitulo="Te guiamos en el diseño, la búsqueda de fuentes confiables y la redacción académica de tu monografía, con revisiones progresivas de tus avances."
      heroImage={heroImg}
      incluye={[
        "Delimitación del tema y objetivos",
        "Plan de trabajo por capítulos",
        "Estrategia de búsqueda de fuentes académicas",
        "Fichas y organización documental",
        "Retroalimentación por capítulos",
        "Formato y citación en normas APA",
      ]}
      pasos={[
        { titulo: "Delimitación del tema", texto: "Enfocamos tu monografía en un problema manejable y relevante." },
        { titulo: "Plan documental", texto: "Definimos fuentes, capítulos y calendario de entregas." },
        { titulo: "Sesiones + revisiones", texto: "Retroalimentación detallada de tus avances por capítulo." },
        { titulo: "Cierre y APA", texto: "Revisamos coherencia, referencias y formato institucional." },
      ]}
      perfiles={[
        { titulo: "Estudiantes de asignaturas de investigación", texto: "Aprenden a estructurar y desarrollar una monografía con método." },
        { titulo: "Quienes buscan fortalecer su rigor documental", texto: "Ganan criterio para elegir y citar fuentes académicas." },
        { titulo: "Aspirantes a artículos o tesis", texto: "Convierten su monografía en base para futuros proyectos." },
      ]}
      faq={[
        { q: "¿Ustedes escriben la monografía por mí?", a: "No. Te acompañamos con asesoría y revisión detallada; la autoría del texto es siempre tuya." },
        { q: "¿Cómo eligen las fuentes?", a: "Te enseñamos a buscarlas y evaluarlas en bases académicas confiables como Scopus, WoS y bibliotecas universitarias." },
        { q: "¿Cuánto tarda el proceso?", a: "Depende del tema y del calendario de tu asignatura; armamos un plan a tu medida." },
        { q: "¿Cómo son los pagos?", a: "Planes diferidos por etapas del acompañamiento. Te lo detallamos en la cotización." },
      ]}
      relacionados={[
        { to: "/asesoria-ensayos-academicos", titulo: "Ensayos académicos", texto: "Tutorías de escritura argumentativa con voz propia.", icon: PenLine },
        { to: "/", titulo: "Revisión bibliográfica", texto: "Aprende a filtrar y organizar literatura con gestores de referencias.", icon: Library },
        { to: "/", titulo: "Normas APA", texto: "Formato profesional y capacitación en citación APA 7.", icon: BookMarked },
      ]}
      ctaTitle="¿Empezando tu monografía?"
      ctaSubtitle="Cuéntanos tu tema hoy y arma tu plan de acompañamiento esta misma semana."
    />
  );
}
