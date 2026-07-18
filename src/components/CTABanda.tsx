const WA_URL =
  "https://wa.me/573163641646?text=" +
  encodeURIComponent("Hola, quiero una cotización de asesoría académica");

export function CTABanda({
  title = "¿Listo para avanzar con tu trabajo académico?",
  subtitle = "Recibe orientación profesional, personalizada y ética. Tú sigues siendo el autor; nosotros te guiamos en cada paso.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-[color:var(--border)] bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(201,162,39,0.10), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(142,29,69,0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center lg:px-8">
        <h2 className="font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="pulse-gold inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-7 py-3 text-sm font-medium text-white shadow-[var(--shadow-gold)] transition-all duration-300 hover:bg-[color:var(--brand-magenta)] hover:-translate-y-0.5"
          >
            Escríbenos por WhatsApp
          </a>
          <a
            href="#cotizar"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-8 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-[color:var(--brand-magenta)] hover:-translate-y-0.5"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}
