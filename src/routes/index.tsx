import { createFileRoute } from "@tanstack/react-router";
import { CTABanda } from "../components/CTABanda";
import { FormularioCotizacion } from "../components/FormularioCotizacion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgba(201,162,39,0.12), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5 py-28 text-center lg:px-8 lg:py-36">
          <p className="reveal text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Asesoría · Tutoría · Acompañamiento
          </p>
          <h1 className="reveal text-shine mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            Escribes tú. Te acompañamos nosotros.
          </h1>
          <p className="reveal mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-lg">
            Acompañamiento académico ético para estudiantes de pregrado y
            posgrado en Colombia. Te formamos, te asesoramos y caminamos contigo
            hasta la sustentación — sin sustituirte jamás.
          </p>
        </div>
      </section>

      <CTABanda />

      <section id="cotizar" className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
        <FormularioCotizacion />
      </section>
    </>
  );
}
