import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { waAnuncioUrl } from "../lib/whatsapp";
import { CONVERSIONS, initTracking, trackConversion } from "../lib/tracking";

// Página puente: el enlace "Escríbenos por WhatsApp" de los anuncios de Google
// trae a la gente aquí. Se registra la conversión y se redirige a WhatsApp.
export const Route = createFileRoute("/whatsapp")({
  head: () => ({
    meta: [
      { title: "Conectando con un asesor por WhatsApp | Asesorías Académicas" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: WhatsAppBridge,
});

function WhatsAppBridge() {
  const url = waAnuncioUrl();

  useEffect(() => {
    initTracking();
    trackConversion(CONVERSIONS.whatsappDirecto, () => {
      window.location.replace(url);
    });
  }, [url]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#0F1B2D] px-5 py-20">
      <div className="max-w-md text-center">
        <div
          className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-[color:var(--accent)]/30 border-t-[color:var(--accent)]"
          aria-hidden
        />
        <h1 className="mt-8 font-display text-3xl text-[color:var(--ivory)]">
          Te estamos conectando con un asesor por WhatsApp…
        </h1>
        <p className="mt-3 text-sm text-white/70">
          Si WhatsApp no se abre en unos segundos, usa el botón.
        </p>
        <a
          href={url}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
        >
          Abrir WhatsApp
        </a>
      </div>
    </section>
  );
}
