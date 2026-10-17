import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "../lib/seo";
import { GraduationCap, BookMarked, SpellCheck } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-grado.jpg";

export const Route = createFileRoute("/asesoria-trabajos-de-grado")({
  head: () => serviceHead({
    path: "/asesoria-trabajos-de-grado",
    title: "Asesoría de Trabajos de Grado | Acompañamiento para Pregrado — Asesorías Académicas",
    description: "Acompañamiento integral para planear, estructurar, escribir y sustentar tu trabajo de grado de pregrado, con revisión de avances y docentes especializados.",
    serviceName: "Asesoría de trabajos de grado",
    ogType: "article",
    faq: FAQ,
  }),
  component: Page,
});

const FAQ = [
        { q: "¿Me entregan el trabajo hecho?", a: "No: te acompañamos para que tú lo desarrolles con calidad. Ese es el camino que te asegura graduarte con dominio de tu proyecto." },
        { q: "¿Cuánto dura el acompañamiento?", a: "Depende de tu avance y fecha límite; armamos planes desde 4 semanas hasta varios meses." },
        { q: "¿Atienden todas las facultades?", a: "Sí, contamos con más de 100 docentes asesores en todas las áreas curriculares." },
        { q: "¿Cómo son los pagos?", a: "Planes diferidos por etapas del acompañamiento. Te lo detallamos en la cotización." },
      ];

function Page() {
  return (
    <ServicioTemplate
      nombre="Trabajos de grado"
      h1="Asesoría en trabajos de grado: llega seguro a tu título profesional"
      subtitulo="Te orientamos para planear, estructurar, escribir y sustentar tu trabajo de grado de pregrado, con seguimiento constante y retroalimentación de docentes especializados."
      heroImage={heroImg}
      incluye={[
        "Elección y delimitación del tema",
        "Estructura según los requisitos de tu facultad",
        "Asesoría metodológica adaptada a tu proyecto",
        "Revisión de avances con comentarios detallados",
        "Orientación en instrumentos (encuestas, entrevistas)",
        "Formato y citación en normas APA",
        "Preparación de la sustentación",
      ]}
      pasos={[
        { titulo: "Diagnóstico gratuito", texto: "Revisamos tu idea, tu facultad y tus tiempos." },
        { titulo: "Plan de trabajo", texto: "Definimos capítulos, entregas y calendario realista." },
        { titulo: "Sesiones + revisiones", texto: "Retroalimentación de cada avance que escribes." },
        { titulo: "Sustentación", texto: "Ensayo de defensa y ajustes finales al documento." },
      ]}
      perfiles={[
        { titulo: "Estudiantes de últimos semestres", texto: "Convertimos tu idea en un proyecto viable y bien estructurado." },
        { titulo: "Quienes trabajan y estudian", texto: "Un plan realista para avanzar sin sacrificar la calidad." },
        { titulo: "Quienes buscan graduarse con excelencia", texto: "Trabajos sólidos, con dominio total del contenido." },
      ]}
      faq={FAQ}
      relacionados={[
        { to: "/asesoria-de-tesis", titulo: "Asesoría de tesis", texto: "Acompañamiento metodológico para maestría y doctorado.", icon: GraduationCap },
        { to: "/", titulo: "Normas APA", texto: "Formato profesional y capacitación en citación APA 7.", icon: BookMarked },
        { to: "/", titulo: "Corrección de estilo", texto: "Te señalamos mejoras de redacción y ortotipografía; tú aplicas los cambios.", icon: SpellCheck },
      ]}
      ctaTitle="¿Cerca de graduarte?"
      ctaSubtitle="Cuéntanos tu caso hoy y arma tu plan de acompañamiento esta misma semana."
    />
  );
}
