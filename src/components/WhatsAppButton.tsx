import { waUrl } from "../lib/whatsapp";

export function WhatsAppButton({ servicio }: { servicio?: string } = {}) {
  const href = waUrl(servicio);
  const label = servicio
    ? `Escríbenos por WhatsApp para ${servicio.toLowerCase()}`
    : "Escríbenos por WhatsApp";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="pulse-gold fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-105 hover:bg-[color:var(--accent-hover)]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.28c-.28-.14-1.64-.81-1.89-.9-.25-.09-.44-.14-.62.14-.19.28-.72.9-.88 1.09-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.13-.12.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48h-.53c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34s1.01 2.72 1.15 2.91c.14.19 1.98 3.02 4.79 4.24.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.19-.53-.32zM16.02 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3 29l6.79-1.78a12.72 12.72 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.82-12.8-12.82zm0 23.42h-.01c-1.87 0-3.71-.5-5.31-1.45l-.38-.23-4.03 1.05 1.08-3.93-.25-.4a10.6 10.6 0 0 1-1.63-5.66c0-5.87 4.77-10.64 10.64-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.77 10.61-10.74 10.61z" />
      </svg>
    </a>
  );
}
