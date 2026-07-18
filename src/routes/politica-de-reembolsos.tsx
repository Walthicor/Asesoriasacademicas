import { createFileRoute } from "@tanstack/react-router";
import { LegalTemplate, legalHead, LegalH2 } from "../components/LegalTemplate";

export const Route = createFileRoute("/politica-de-reembolsos")({
  head: () =>
    legalHead({
      path: "/politica-de-reembolsos",
      title: "Política de reembolsos y garantías | Asesorías Académicas",
      description:
        "Política de reembolsos de Asesorías Académicas: condiciones de retracto, cancelación, reprogramación y garantía por sesiones de asesoría.",
    }),
  component: PoliticaReembolsosPage,
});

function PoliticaReembolsosPage() {
  return (
    <LegalTemplate
      h1="Política de reembolsos y garantías"
      updatedAt="18 de julio de 2026"
    >
      <LegalH2>1. Naturaleza de nuestros planes</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Nuestros planes de asesoría se componen de{" "}
        <strong className="text-[color:var(--ink)]">
          sesiones, revisiones y capacitaciones
        </strong>
        . El pago se organiza por etapas, de acuerdo con el plan acordado con el
        estudiante. De esta manera, el estudiante paga conforme avanza el
        acompañamiento.
      </p>

      <LegalH2>2. Derecho de retracto</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Si cancelas tu servicio{" "}
        <strong className="text-[color:var(--ink)]">
          antes de la primera sesión programada
        </strong>
        , tienes derecho a un reembolso del{" "}
        <strong className="text-[color:var(--ink)]">100%</strong> del valor
        pagado, sin penalidades ni costos ocultos.
      </p>

      <LegalH2>3. Cancelación con plan iniciado</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Si el plan ya inició, se descontarán del reembolso las sesiones,
        revisiones o capacitaciones efectivamente prestadas. El saldo
        correspondiente a{" "}
        <strong className="text-[color:var(--ink)]">etapas no iniciadas</strong>{" "}
        será reembolsado en un plazo de hasta 10 días hábiles, por el mismo medio
        por el que se realizó el pago.
      </p>

      <LegalH2>4. Reprogramación e inasistencias</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Puedes reprogramar una sesión sin costo adicional si nos avisas con{" "}
        <strong className="text-[color:var(--ink)]">al menos 12 horas</strong>{" "}
        de anticipación. Las inasistencias sin aviso previo se considerarán como
        sesiones prestadas y se descontarán del plan contratado.
      </p>

      <LegalH2>5. Garantía de servicio</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Garantizamos que cada sesión o revisión cumplirá con lo acordado en el
        plan. Si una sesión o revisión no cumple con los términos pactados, esta
        se{" "}
        <strong className="text-[color:var(--ink)]">repite sin costo adicional</strong>{" "}
        para el estudiante.
      </p>

      <LegalH2>6. Lo que la garantía no cubre</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Nuestra garantía no cubre calificaciones finales, decisiones de jurados,
        comités académicos ni instituciones educativas. Tampoco cubre situaciones
        derivadas de incumplimiento por parte del estudiante de las entregas o
        recomendaciones acordadas.
      </p>

      <LegalH2>7. Solicitudes de reembolso</LegalH2>
      <p className="mt-4 leading-relaxed text-[color:var(--muted-foreground)]">
        Para solicitar un reembolso o reportar una garantía, escríbenos a{": "}
        <a
          href="mailto:contacto@asesoriasacademicas.co"
          className="text-[color:var(--accent-ink)] underline underline-offset-4 transition-colors hover:text-[color:var(--brand-magenta)]"
        >
          contacto@asesoriasacademicas.co
        </a>
        . Te responderemos en un plazo máximo de{" "}
        <strong className="text-[color:var(--ink)]">3 días hábiles</strong> con
        el estado de tu solicitud y los pasos a seguir.
      </p>
    </LegalTemplate>
  );
}
