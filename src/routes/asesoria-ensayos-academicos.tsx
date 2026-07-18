import { createFileRoute } from "@tanstack/react-router";
import { FileText, BookMarked, SpellCheck } from "lucide-react";
import { ServicioTemplate } from "../components/ServicioTemplate";
import heroImg from "../assets/servicio-ensayos.jpg";

export const Route = createFileRoute("/asesoria-ensayos-academicos")({
  head: () => serviceHead({
    path: "/asesoria-ensayos-academicos",
    title: "Tutoría de Ensayos Académicos | Escritura Argumentativa — Asesorías Académicas",
    description: "Tutorías de escritura argumentativa: tesis central, estructura, evidencia y estilo. Aprende a escribir ensayos con voz propia.",
    serviceName: "Tutoría de ensayos académicos",
    ogType: "article",
    faq: FAQ,
  }),
  component: Page,
});

const FAQ = [
        { q: "¿Ustedes escriben el ensayo por mí?", a: "No. Te enseñamos a escribirlo mejor: tú desarrollas el texto y nosotros te acompañamos con tutorías y retroalimentación." },
        { q: "¿Cuántas sesiones necesito?", a: "Desde una tutoría puntual hasta un plan mensual, según tu carga académica." },
        { q: "¿Trabajan cualquier tema?", a: "Sí, contamos con docentes en humanidades, sociales, ciencias, salud, ingeniería y más." },
        { q: "¿Cómo son los pagos?", a: "Sesiones sueltas o paquetes con precio preferencial. Te lo detallamos en la cotización." },
      ];

function Page() {
  return (
    <ServicioTemplate
      nombre="Ensayos académicos"
      h1="Tutoría de ensayos académicos: aprende a argumentar con voz propia"
      subtitulo="Sesiones prácticas de escritura argumentativa: tesis central, estructura, evidencia y estilo. Sales escribiendo mejores ensayos para toda tu carrera."
      heroImage={heroImg}
      incluye={[
        "Análisis de la consigna del docente",
        "Esquema argumentativo claro y sólido",
        "Tutoría de redacción en vivo",
        "Retroalimentación de borradores escritos por ti",
        "Citación correcta y uso ético de fuentes",
        "Técnicas de revisión y autoedición",
      ]}
      pasos={[
        { titulo: "Diagnóstico de consigna", texto: "Interpretamos lo que realmente te está pidiendo tu docente." },
        { titulo: "Esquema argumentativo", texto: "Definimos tesis, argumentos y evidencia antes de escribir." },
        { titulo: "Tutoría de redacción", texto: "Sesiones en vivo para mejorar párrafos, conectores y estilo." },
        { titulo: "Revisión final", texto: "Retroalimentación de tu borrador y ajustes de citación." },
      ]}
      perfiles={[
        { titulo: "Estudiantes que quieren mejorar sus notas", texto: "Aprenden a estructurar ideas y a argumentar con solidez." },
        { titulo: "Quienes entregan ensayos frecuentemente", texto: "Ganan un método replicable para toda la carrera." },
        { titulo: "Aspirantes a posgrado", texto: "Elevan la calidad de sus escritos para procesos de admisión." },
      ]}
      faq={FAQ}
      relacionados={[
        { to: "/asesoria-monografias", titulo: "Monografías", texto: "Asesoría en investigación documental con rigor académico.", icon: FileText },
        { to: "/", titulo: "Normas APA", texto: "Formato profesional y capacitación en citación APA 7.", icon: BookMarked },
        { to: "/", titulo: "Corrección de estilo", texto: "Pulimos redacción y ortotipografía respetando tu autoría.", icon: SpellCheck },
      ]}
      ctaTitle="¿Quieres escribir mejor?"
      ctaSubtitle="Agenda hoy tu tutoría y empieza esta misma semana a fortalecer tu escritura académica."
    />
  );
}
