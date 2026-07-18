import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "../lib/seo";
import { BookOpen, BarChart3, PenLine } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-apa.jpg";

export const Route = createFileRoute("/normas-apa")({
  head: () => serviceHead({
    path: "/normas-apa",
    title: "Normas APA 7 | Formato y Citación de Tesis — Asesorías Académicas",
    description: "Aplicamos el formato APA a tu documento y te capacitamos en citación para que nunca más pierdas puntos por forma.",
    serviceName: "Formato y capacitación en Normas APA 7",
    ogType: "article",
    faq: FAQ,
  }),
  component: APAPage,
});

const FAQ = [
        {
          q: "¿Trabajan también con IEEE, Vancouver o Chicago?",
          a: "Nuestro fuerte es APA 7. Consulta por otros estilos: podemos orientarte según disponibilidad de asesores.",
        },
        {
          q: "¿En cuánto tiempo entregan?",
          a: "Un documento estándar de tesis se entrega entre 3 y 7 días hábiles. Servicio exprés bajo cotización.",
        },
        {
          q: "¿Incluye corrección de estilo?",
          a: "No: APA es forma y citación. Para redacción y estilo tenemos el servicio de corrección de estilo dedicado.",
        },
        {
          q: "¿Reciben cualquier formato de archivo?",
          a: "Sí: Word, Google Docs y LaTeX. Devolvemos el archivo en el mismo formato en que lo entregaste.",
        },
      ];

function APAPage() {
  return (
    <ServicioTemplate
      nombre="Normas APA 7"
      h1="Normas APA 7: formato impecable y citación sin errores"
      subtitulo="Aplicamos el formato APA a tu documento y te capacitamos en citación para que nunca más pierdas puntos por forma."
      heroImage={heroImg}
      incluye={[
        "Formato completo del documento: portada, márgenes, interlineado, tablas y figuras",
        "Revisión de citas dentro del texto",
        "Corrección y complementación de la lista de referencias",
        "Mini-capacitación práctica de citación APA 7",
        "Guía rápida personalizada para tu carrera y tu programa",
      ]}
      pasos={[
        {
          titulo: "Diagnóstico del documento",
          texto:
            "Detectamos errores de formato, citación y referencias en tu archivo actual.",
        },
        {
          titulo: "Aplicación de APA 7",
          texto:
            "Formateamos tu documento completo cumpliendo la séptima edición.",
        },
        {
          titulo: "Capacitación breve",
          texto:
            "Sesión práctica para que aprendas a citar y referenciar por tu cuenta.",
        },
        {
          titulo: "Entrega + guía personalizada",
          texto:
            "Documento final más una guía rápida con los casos frecuentes de tu carrera.",
        },
      ]}
      perfiles={[
        {
          titulo: "Estudiantes con tesis o trabajo listo",
          texto:
            "Dejamos tu documento presentable en tiempo récord antes de la entrega.",
        },
        {
          titulo: "Investigadores redactando artículos",
          texto:
            "Formato APA y ajustes previos al envío a revistas académicas.",
        },
        {
          titulo: "Docentes preparando material",
          texto:
            "Capacitación APA 7 aplicada a guías, syllabus y publicaciones institucionales.",
        },
      ]}
      faq={FAQ}
      relacionados={[
        {
          to: "/correccion-de-estilo",
          titulo: "Corrección de estilo",
          texto:
            "Pule la redacción, coherencia y ortotipografía manteniendo tu voz.",
          icon: PenLine,
        },
        {
          to: "/asesoria-de-tesis",
          titulo: "Asesoría de tesis",
          texto:
            "Acompañamiento metodológico integral capítulo a capítulo.",
          icon: BookOpen,
        },
        {
          to: "/analisis-estadistico-spss",
          titulo: "Análisis estadístico SPSS",
          texto:
            "Interpreta y presenta tus resultados con solvencia estadística.",
          icon: BarChart3,
        },
      ]}
      ctaTitle="Que tu documento se vea tan sólido como su contenido"
      ctaSubtitle="Envíanos tu archivo y te devolvemos APA 7 impecable en pocos días."
    />
  );
}
