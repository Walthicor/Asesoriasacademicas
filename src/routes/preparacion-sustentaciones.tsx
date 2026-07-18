import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "../lib/seo";
import { BookOpen, BarChart3, PenLine } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-sustentacion.jpg";

export const Route = createFileRoute("/preparacion-sustentaciones")({
  head: () => serviceHead({
    path: "/preparacion-sustentaciones",
    title: "Preparación para Sustentación de Tesis | Simulacros con Docentes — Asesorías Académicas",
    description: "Simulacros con docentes, diseño de tu presentación y entrenamiento en preguntas de jurado. La sustentación se gana antes de entrar a la sala.",
    serviceName: "Preparación de sustentación",
    ogType: "article",
    faq: FAQ,
  }),
  component: SustentacionPage,
});

const FAQ = [
        {
          q: "¿Preparan también sustentación en modalidad virtual?",
          a: "Sí, entrenamos manejo de cámara, encuadre, iluminación y ritmo específicos para defensa virtual.",
        },
        {
          q: "¿Cuánto antes debo agendar?",
          a: "Ideal: mínimo dos semanas antes. También ofrecemos preparación exprés en 4 a 5 días.",
        },
        {
          q: "¿Ustedes hacen las diapositivas por mí?",
          a: "Te asesoramos con criterios profesionales y te acompañamos en su construcción; el diseño lo ejecutas tú.",
        },
        {
          q: "¿El docente del simulacro conoce mi área?",
          a: "Asignamos un asesor con perfil afín a tu tema para que las preguntas sean realistas y pertinentes.",
        },
      ];

function SustentacionPage() {
  return (
    <ServicioTemplate
      nombre="Preparación de sustentación"
      h1="Preparación de sustentación: llega al gran día con total seguridad"
      subtitulo="Simulacros con docentes, diseño de tu presentación y entrenamiento en preguntas de jurado. La sustentación se gana antes de entrar a la sala."
      heroImage={heroImg}
      incluye={[
        "Estructura del discurso de sustentación adaptado a tu tiempo",
        "Asesoría en el diseño de diapositivas profesionales",
        "Simulacro con banco de preguntas típicas de jurado",
        "Retroalimentación de oratoria y manejo de nervios",
        "Sesión final de ajustes días previos a la defensa",
      ]}
      pasos={[
        {
          titulo: "Diagnóstico de tu tesis y jurado",
          texto:
            "Analizamos tu documento y el perfil probable del jurado de tu programa.",
        },
        {
          titulo: "Diseño de la presentación",
          texto:
            "Orientación para armar diapositivas claras, profesionales y bien jerarquizadas.",
        },
        {
          titulo: "Simulacro con docente",
          texto:
            "Ensayas la exposición y respondes preguntas críticas en un entorno seguro.",
        },
        {
          titulo: "Ajuste final",
          texto:
            "Última sesión de pulido para llegar tranquilo al día de la defensa.",
        },
      ]}
      perfiles={[
        {
          titulo: "Tesistas con fecha de sustentación asignada",
          texto:
            "Un plan intensivo en pocos días para maximizar tu preparación.",
        },
        {
          titulo: "Estudiantes con miedo escénico",
          texto:
            "Entrenamos técnicas de manejo de nervios y control de voz.",
        },
        {
          titulo: "Autores que ya reprobaron una sustentación",
          texto:
            "Analizamos qué pasó, corregimos brechas y te preparamos para el segundo intento.",
        },
      ]}
      faq={FAQ}
      relacionados={[
        {
          to: "/asesoria-de-tesis",
          titulo: "Asesoría de tesis",
          texto:
            "Si aún estás escribiendo, asegúrate de un acompañamiento integral hasta el final.",
          icon: BookOpen,
        },
        {
          to: "/analisis-estadistico-spss",
          titulo: "Análisis estadístico SPSS",
          texto:
            "Refuerza tus resultados estadísticos antes de defenderlos ante el jurado.",
          icon: BarChart3,
        },
        {
          to: "/correccion-de-estilo",
          titulo: "Corrección de estilo",
          texto:
            "Deja tu documento impecable antes de radicarlo para la sustentación.",
          icon: PenLine,
        },
      ]}
      ctaTitle="Convierte tu sustentación en tu mejor momento"
      ctaSubtitle="Agenda una sesión diagnóstica y arma tu plan de preparación esta semana."
    />
  );
}
