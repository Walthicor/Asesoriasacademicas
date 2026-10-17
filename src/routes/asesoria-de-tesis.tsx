import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "../lib/seo";
import { BookOpen, BarChart3, BookMarked } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-tesis.jpg";

export const Route = createFileRoute("/asesoria-de-tesis")({
  head: () => serviceHead({
    path: "/asesoria-de-tesis",
    title: "Asesoría de Tesis en Colombia | Acompañamiento Metodológico — Asesorías Académicas",
    description: "Asesoría de tesis de maestría y doctorado con acompañamiento metodológico capítulo a capítulo. Sesiones personalizadas, revisión de avances y preparación de sustentación.",
    serviceName: "Asesoría de tesis",
    ogType: "article",
    faq: FAQ,
  }),
  component: AsesoriaTesisPage,
});

const FAQ = [
        {
          q: "¿Ustedes escriben la tesis por mí?",
          a: "No. La autoría es tuya siempre: tú escribes y nosotros te asesoramos, revisamos y orientamos. Así garantizas dominio total de tu trabajo ante tu jurado y un proceso académicamente ético.",
        },
        {
          q: "¿Cuánto dura el acompañamiento?",
          a: "Depende de tu avance y fecha límite; armamos planes desde 4 semanas hasta 12 meses.",
        },
        {
          q: "¿Atienden todas las áreas?",
          a: "Sí, contamos con más de 100 docentes asesores en todas las áreas curriculares.",
        },
        {
          q: "¿Cómo son los pagos?",
          a: "Planes diferidos por etapas del acompañamiento. Te lo detallamos en la cotización.",
        },
      ];

function AsesoriaTesisPage() {
  return (
    <ServicioTemplate
      nombre="Asesoría de tesis"
      h1="Asesoría de tesis: acompañamiento experto de la idea a la sustentación"
      subtitulo="Un asesor especializado en tu área te orienta capítulo a capítulo para que escribas una tesis rigurosa, con metodología sólida y con total dominio de tu investigación."
      heroImage={heroImg}
      incluye={[
        "Diagnóstico inicial de tu proyecto y de los requisitos de tu universidad",
        "Orientación para delimitar el problema y las preguntas de investigación",
        "Asesoría en diseño metodológico (cualitativo, cuantitativo o mixto)",
        "Revisión y retroalimentación detallada de cada capítulo que escribes",
        "Acompañamiento en el análisis e interpretación de tus resultados",
        "Orientación en normas APA y formato institucional",
        "Sesiones periódicas por videollamada y grupo de WhatsApp con tu equipo asesor",
        "Preparación para la sustentación final",
      ]}
      pasos={[
        {
          titulo: "Sesión de diagnóstico gratuita",
          texto:
            "Escuchamos tu proyecto, tus tiempos y los requisitos de tu programa.",
        },
        {
          titulo: "Plan de trabajo por capítulos",
          texto:
            "Definimos un calendario realista con entregas y sesiones por capítulo.",
        },
        {
          titulo: "Asesoría + revisiones escritas",
          texto:
            "Sesiones periódicas y retroalimentación detallada de tus avances.",
        },
        {
          titulo: "Simulacro de sustentación",
          texto:
            "Ensayamos tu defensa y ajustamos los últimos detalles del documento.",
        },
      ]}
      perfiles={[
        {
          titulo: "Estudiantes de maestría con poco tiempo",
          texto:
            "Optimizamos tu proceso con un plan claro y sesiones enfocadas en avanzar.",
        },
        {
          titulo: "Doctorandos que necesitan rigor metodológico",
          texto:
            "Asesores con trayectoria investigadora que elevan la solidez de tu tesis.",
        },
        {
          titulo: "Profesionales que retoman su tesis pausada",
          texto:
            "Un plan realista para reactivar tu proyecto y llegar al grado.",
        },
      ]}
      faq={FAQ}
      relacionados={[
        {
          to: "/",
          titulo: "Trabajos de grado",
          texto:
            "Acompañamiento integral para planear y sustentar tu trabajo de grado de pregrado.",
          icon: BookOpen,
        },
        {
          to: "/",
          titulo: "Análisis estadístico SPSS",
          texto:
            "Capacitación y consultoría estadística para defender tus resultados con solvencia.",
          icon: BarChart3,
        },
        {
          to: "/",
          titulo: "Normas APA",
          texto:
            "Formato profesional y capacitación en citación APA 7 para tu documento final.",
          icon: BookMarked,
        },
      ]}
      ctaTitle="¿Listo para avanzar en tu tesis?"
      ctaSubtitle="Cuéntanos tu caso hoy y arma tu plan de acompañamiento esta misma semana."
    />
  );
}
