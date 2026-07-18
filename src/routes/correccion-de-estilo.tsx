import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, BookMarked, Presentation } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-correccion.jpg";

export const Route = createFileRoute("/correccion-de-estilo")({
  head: () => ({
    meta: [
      {
        title:
          "Corrección de Estilo de Tesis y Documentos Académicos — Asesorías Académicas",
      },
      {
        name: "description",
        content:
          "Correctores profesionales pulen redacción, coherencia y ortotipografía de tu documento académico respetando tu autoría. Control de cambios y observaciones.",
      },
      {
        property: "og:title",
        content: "Corrección de estilo y contenido",
      },
      {
        property: "og:description",
        content:
          "Tu texto en su mejor versión: claridad, precisión y fluidez, sin alterar tu voz.",
      },
      { property: "og:url", content: "/correccion-de-estilo" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/correccion-de-estilo" }],
  }),
  component: CorreccionPage,
});

function CorreccionPage() {
  return (
    <ServicioTemplate
      nombre="Corrección de estilo"
      h1="Corrección de estilo y contenido: tu texto, en su mejor versión"
      subtitulo="Correctores profesionales pulen la redacción, coherencia, cohesión y ortotipografía de tu documento académico, siempre respetando tu voz y tu autoría."
      heroImage={heroImg}
      incluye={[
        "Corrección ortotipográfica (ortografía, puntuación, tildes)",
        "Corrección de estilo: claridad, precisión y fluidez",
        "Control de cambios para que veas y apruebes cada ajuste",
        "Informe de observaciones de contenido",
        "Verificación de coherencia entre objetivos, metodología y conclusiones",
      ]}
      pasos={[
        {
          titulo: "Muestra gratuita",
          texto:
            "Corregimos una página para que veas el nivel de intervención antes de aprobar.",
        },
        {
          titulo: "Corrección con control de cambios",
          texto:
            "Cada modificación queda visible: tú decides qué aceptar y qué rechazar.",
        },
        {
          titulo: "Informe de observaciones",
          texto:
            "Detectamos vacíos de contenido y saltos lógicos que puedan afectar el jurado.",
        },
        {
          titulo: "Segunda pasada final",
          texto:
            "Una vez integrados tus cambios, revisamos el documento completo otra vez.",
        },
      ]}
      perfiles={[
        {
          titulo: "Tesistas cerca de la entrega final",
          texto:
            "Última revisión profesional antes de radicar el documento en tu programa.",
        },
        {
          titulo: "Autores de artículos científicos",
          texto:
            "Preparamos tu manuscrito para el estándar editorial de revistas indexadas.",
        },
        {
          titulo: "Investigadores no hispanohablantes",
          texto:
            "Corrección profesional en español académico para escritores con otra lengua materna.",
        },
      ]}
      faq={[
        {
          q: "¿La corrección altera mi autoría?",
          a: "No: la corrección de estilo es una práctica editorial estándar. Todos los cambios van con control de cambios y tú los apruebas.",
        },
        {
          q: "¿En cuánto tiempo entregan?",
          a: "De 5 a 10 días hábiles según extensión. Modalidad exprés bajo cotización.",
        },
        {
          q: "¿Reescriben capítulos completos?",
          a: "No. Corregimos y sugerimos; la reescritura la haces tú con nuestra retroalimentación.",
        },
        {
          q: "¿Incluye normas APA?",
          a: "No está incluido en este servicio, pero puedes contratarlo en paquete con el servicio de APA 7.",
        },
      ]}
      relacionados={[
        {
          to: "/normas-apa",
          titulo: "Normas APA 7",
          texto:
            "Complementa la corrección con formato APA y citación impecables.",
          icon: BookMarked,
        },
        {
          to: "/asesoria-de-tesis",
          titulo: "Asesoría de tesis",
          texto:
            "Acompañamiento metodológico integral capítulo a capítulo.",
          icon: BookOpen,
        },
        {
          to: "/preparacion-sustentaciones",
          titulo: "Preparación de sustentación",
          texto:
            "Cuando el texto esté listo, prepárate para defenderlo con seguridad.",
          icon: Presentation,
        },
      ]}
      ctaTitle="Entrega un documento que se lea con solidez profesional"
      ctaSubtitle="Envíanos tu manuscrito y recibe una muestra gratuita de corrección."
    />
  );
}
