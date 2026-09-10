import { waUrl } from "../lib/whatsapp";

export function CTABanda({
  title = "¿Listo para avanzar con tu trabajo académico?",
  subtitle = "Recibe orientación profesional, personalizada y ética. Tú sigues siendo el autor; nosotros te guiamos en cada paso.",
  servicio,
}: {
  title?: string;
  subtitle?: string;
  servicio?: string;
}) {
  const href = waUrl(servicio);
  const waLabel = servicio
    ? `Contáctanos por WhatsApp para ${servicio.toLowerCase()}`
    : "Contáctanos por WhatsApp al +57 316 364 1646";

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
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center lg:px-8 lg:py-24">
        <h2 className="font-display text-4xl font-medium text-[color:var(--primary)] md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={waLabel}
            className="pulse-whatsapp inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_-10px_rgba(37,211,102,0.8)] transition-all duration-300 hover:bg-[#1EBE5A] hover:-translate-y-0.5"
          >
            Contáctanos por WhatsApp
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
