import { createFileRoute } from "@tanstack/react-router";
import { LegalTemplate, legalHead, LegalH2 } from "../components/LegalTemplate";
import { waUrl } from "../lib/whatsapp";

export const Route = createFileRoute("/aviso-legal")({
  head: () =>
    legalHead({
      path: "/aviso-legal",
      title: "Aviso legal | Asesorías Académicas",
      description:
        "Información legal del sitio Asesorías Académicas: titular del sitio, naturaleza del servicio, propiedad intelectual y legislación aplicable en Colombia.",
    }),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  return (
    <LegalTemplate h1="Aviso legal" updatedAt="18 de julio de 2026">
      <LegalH2>1. Identificación del titular</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Este sitio,{" "}
        <strong className="text-[color:var(--ink)]">www.asesoriasacademicas.co</strong>,
        es operado por{" "}
        <strong className="text-[color:var(--ink)]">[RAZÓN SOCIAL]</strong>, NIT{" "}
        <strong className="text-[color:var(--ink)]">[NIT]</strong>, empresa
        legalmente constituida en Colombia con certificado de Cámara de
        Comercio y RUT.
      </p>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Contacto:{": "}
        <a
          href="mailto:contacto@asesoriasacademicas.co"
          className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
        >
          contacto@asesoriasacademicas.co
        </a>
        {" · "}
        <a
          href={waUrl()}
          target="_blank"
          rel="noreferrer"
          className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
        >
          +57 316 364 1646
        </a>
      </p>

      <LegalH2>2. Naturaleza del servicio</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Prestamos servicios de{" "}
        <strong className="text-[color:var(--ink)]">
          asesoría, tutoría, capacitación, corrección de estilo y
          acompañamiento académico
        </strong>{" "}
        con finalidad formativa y de orientación. La autoría de los trabajos
        académicos corresponde siempre al estudiante.
      </p>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Nunca realizamos trabajos académicos a nombre del estudiante ni
        sustituimos su proceso de aprendizaje. Nuestro objetivo es fortalecer
        sus habilidades de investigación, escritura y argumentación.
      </p>

      <LegalH2>3. Uso del sitio</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        El usuario se compromete a utilizar este sitio de conformidad con la ley
        colombiana, la ética académica y los reglamentos de su institución
        educativa. Queda prohibido emplear los contenidos o servicios para
        actividades fraudulentas, de plagio o contrarias a las normas de su
        universidad.
      </p>

      <LegalH2>4. Propiedad intelectual</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Los contenidos publicados en este sitio —textos, imágenes, logotipo,
        estructura y materiales educativos— son propiedad de Asesorías
        Académicas o de sus licenciantes, salvo indicación expresa en contrario.
      </p>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Los documentos elaborados por el estudiante durante el acompañamiento
        son de su exclusiva propiedad. Nosotros no conservamos derechos de
        autor sobre ellos ni los publicamos ni reutilizamos sin autorización.
      </p>

      <LegalH2>5. Limitación de responsabilidad</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Asesorías Académicas no garantiza calificaciones específicas ni
        decisiones de comités, jurados o instituciones educativas. Nuestra
        responsabilidad se limita a prestar los servicios de asesoría y
        acompañamiento contratados con la debida diligencia y ética profesional.
      </p>

      <LegalH2>6. Legislación aplicable</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        El presente aviso legal se rige por las leyes de la República de
        Colombia. Cualquier controversia se someterá a los jueces y tribunales
        de la ciudad de Bogotá, D.C., con renuncia expresa a cualquier otro
        fuero que pudiera corresponder.
      </p>
    </LegalTemplate>
  );
}
