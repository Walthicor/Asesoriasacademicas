import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, BookMarked, Presentation } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-spss.jpg";

export const Route = createFileRoute("/analisis-estadistico-spss")({
  head: () => serviceHead({
    path: "/analisis-estadistico-spss",
    title: "Asesoría en Análisis Estadístico SPSS | Capacitación para Tesis — Asesorías Académicas",
    description: "Capacitación y consultoría estadística: te enseñamos a procesar tus datos en SPSS y a interpretar cada tabla para sustentar con seguridad.",
    serviceName: "Análisis estadístico con SPSS",
    ogType: "article",
    faq: FAQ,
  }),
  component: SPSSPage,
});

const FAQ = [
        {
          q: "¿Hacen el análisis y ya?",
          a: "Trabajamos contigo en pantalla compartida: el objetivo es que domines tu análisis, porque el jurado te preguntará por él.",
        },
        {
          q: "¿Qué pruebas cubren?",
          a: "Descriptivas, pruebas paramétricas y no paramétricas, correlaciones, regresiones, ANOVA, chi cuadrado, factoriales y más, según tu diseño.",
        },
        {
          q: "¿Solo SPSS o también otros programas?",
          a: "Nuestro fuerte es SPSS. También orientamos análisis básicos en Excel y R según el requerimiento de tu tesis.",
        },
        {
          q: "¿Cuántas sesiones necesito?",
          a: "Depende de la complejidad del estudio. Un análisis descriptivo suele resolverse en 2 a 4 sesiones; diseños avanzados requieren un plan mayor.",
        },
      ];

function SPSSPage() {
  return (
    <ServicioTemplate
      nombre="Análisis estadístico SPSS"
      h1="Análisis estadístico con SPSS: entiende y defiende tus resultados"
      subtitulo="Capacitación y consultoría estadística para tu investigación: te enseñamos a procesar tus datos en SPSS y a interpretar cada tabla, para que sustentes con total seguridad."
      heroImage={heroImg}
      incluye={[
        "Asesoría en diseño muestral e instrumentos de recolección",
        "Capacitación práctica en SPSS con tus propios datos",
        "Orientación en la elección de pruebas estadísticas pertinentes",
        "Acompañamiento en la interpretación de resultados",
        "Apoyo en la redacción del capítulo de resultados escrito por ti",
        "Sesión de preguntas pre-sustentación sobre tu análisis",
      ]}
      pasos={[
        {
          titulo: "Diagnóstico de tu base de datos",
          texto:
            "Revisamos tu instrumento, variables y objetivos para definir el plan de análisis.",
        },
        {
          titulo: "Capacitación en SPSS",
          texto:
            "Sesiones en pantalla compartida: tú manejas el software con nuestro acompañamiento.",
        },
        {
          titulo: "Interpretación guiada",
          texto:
            "Leemos juntos cada tabla y gráfico hasta que domines qué significan tus resultados.",
        },
        {
          titulo: "Ensayo pre-sustentación",
          texto:
            "Simulacro de preguntas típicas del jurado sobre metodología y estadística.",
        },
      ]}
      perfiles={[
        {
          titulo: "Tesistas sin formación estadística previa",
          texto:
            "Empezamos desde lo básico y llegamos a la interpretación de tus pruebas.",
        },
        {
          titulo: "Investigadores con datos ya recolectados",
          texto:
            "Definimos las pruebas correctas y te capacitamos para ejecutarlas.",
        },
        {
          titulo: "Estudiantes preparando sustentación",
          texto:
            "Refuerzo intensivo para explicar tus resultados con solvencia ante el jurado.",
        },
      ]}
      faq={FAQ}
      relacionados={[
        {
          to: "/asesoria-de-tesis",
          titulo: "Asesoría de tesis",
          texto:
            "Acompañamiento metodológico integral capítulo a capítulo hasta tu sustentación.",
          icon: BookOpen,
        },
        {
          to: "/normas-apa",
          titulo: "Normas APA 7",
          texto:
            "Presenta tus tablas de resultados con el formato APA exigido por tu universidad.",
          icon: BookMarked,
        },
        {
          to: "/preparacion-sustentaciones",
          titulo: "Preparación de sustentación",
          texto:
            "Simulacros con docentes y banco de preguntas para llegar seguro al gran día.",
          icon: Presentation,
        },
      ]}
      ctaTitle="Convierte tus datos en resultados sólidos"
      ctaSubtitle="Agenda una sesión y define contigo un plan estadístico realista para tu tesis."
    />
  );
}
