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
    <section className="relative overflow-hidden border-y border-[color:var(--border)] bg-[color:var(--surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(201,162,39,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
        <h2 className="text-shine font-display text-3xl md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-[color:var(--accent)]/50 bg-transparent px-7 py-3 text-sm font-medium text-[color:var(--ivory)] transition-all duration-300 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/10 hover:-translate-y-0.5"
          >
            Escríbenos por WhatsApp
          </a>
          <a
            href="#cotizar"
            className="inline-flex items-center justify-center rounded-sm bg-[color:var(--accent)] px-7 py-3 text-sm font-medium text-[color:var(--accent-foreground)] shadow-[var(--shadow-gold)] transition-all duration-300 hover:bg-[color:var(--accent-hover)] hover:-translate-y-0.5"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}
