import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "../lib/seo";
import { BookOpen, BookMarked, Presentation } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-correccion.jpg";

export const Route = createFileRoute("/correccion-de-estilo")({
  head: () => serviceHead({
    path: "/correccion-de-estilo",
    title: "Corrección de Estilo de Tesis y Documentos Académicos — Asesorías Académicas",
    description: "Revisamos la redacción, coherencia y ortografía de tu documento con comentarios y explicaciones para que tú mejores tu texto.",
    serviceName: "Corrección de estilo académica",
    ogType: "article",
    faq: FAQ,
  }),
  component: CorreccionPage,
});

const FAQ = [
        {
          q: "¿La corrección altera mi autoría?",
          a: "No: trabajamos con comentarios y sugerencias. Tú decides qué mejorar y haces los ajustes en tu documento.",
        },
        {
          q: "¿Cuánto tarda la revisión?",
          a: "Depende de la extensión del documento; lo acordamos en la cotización.",
        },
        {
          q: "¿Reescriben capítulos completos?",
          a: "No. Corregimos y sugerimos; la reescritura la haces tú con nuestra retroalimentación.",
        },
        {
          q: "¿Incluye normas APA?",
          a: "No está incluido en este servicio, pero puedes contratarlo en paquete con el servicio de APA 7.",
        },
      ];

function CorreccionPage() {
  return (
    <ServicioTemplate
      nombre="Corrección de estilo"
      h1="Corrección de estilo y contenido: tu texto, en su mejor versión"
      subtitulo="Revisamos la redacción, coherencia y ortografía de tu documento con comentarios y explicaciones, para que tú mejores tu texto conservando tu voz y tu autoría."
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
            "Revisamos una página de muestra para que veas el tipo de comentarios que recibirás.",
        },
        {
          titulo: "Comentarios explicados",
          texto:
            "Cada observación explica el problema y cómo resolverlo: tú haces los cambios.",
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
      faq={FAQ}
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
      ctaTitle="Mejora tu redacción con retroalimentación profesional"
      ctaSubtitle="Envíanos tu manuscrito y recibe una muestra gratuita de revisión."
    />
  );
}
