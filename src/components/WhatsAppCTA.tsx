import { waUrl } from "../lib/whatsapp";

/** Compact WhatsApp access placed after main sections. */
export function WhatsAppCTA({
  label = "¿Tienes dudas? Hablemos ahora mismo.",
  servicio,
}: {
  label?: string;
  servicio?: string;
}) {
  return (
    <div className="bg-white px-5 pb-14 lg:px-8">
      <div className="reveal mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.07] px-6 py-6 text-center sm:flex-row sm:text-left">
        <p className="font-display text-lg font-medium text-[color:var(--primary)] sm:text-xl">
          {label}
        </p>
        <a
          href={waUrl(servicio)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(37,211,102,0.8)] transition-all duration-300 hover:bg-[#1EBE5A] hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M16.02 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3 29l6.79-1.78a12.72 12.72 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.82-12.8-12.82zm7.4 18.1c-.24.65-1.34 1.24-1.88 1.32-.48.07-1.09.1-1.76-.11-.41-.13-.93-.3-1.6-.59-2.81-1.22-4.65-4.05-4.79-4.24-.14-.19-1.15-1.53-1.15-2.91s.72-2.06.98-2.34c.26-.28.56-.35.75-.35h.53c.17.01.4-.06.62.48.23.55.78 1.91.85 2.05.07.14.11.3.02.49-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.16-.19.69-.81.88-1.09.18-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.13.46.21.53.32.07.12.07.67-.16 1.32z" />
          </svg>
          Contáctanos por WhatsApp
        </a>
      </div>
    </div>
  );
}
