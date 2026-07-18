// Central WhatsApp link builder — keeps the phone number and message format
// in one place so every CTA precarga el nombre del servicio de la página.

export const WA_PHONE = "573163641646";
export const WA_DISPLAY = "+57 316 364 1646";

/**
 * Build a wa.me URL with a pre-filled message.
 * When a servicio is passed, the message reads:
 *   "Hola, quiero cotizar la asesoría de tesis"
 * If not, falls back to a generic quote request.
 */
export function waUrl(servicio?: string): string {
  const message = servicio
    ? `Hola, quiero cotizar la ${servicio.toLowerCase()}`
    : "Hola, quiero una cotización de asesoría académica";
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}
