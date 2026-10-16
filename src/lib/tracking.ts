// Medición de conversiones de Google Ads.
//
// La etiqueta de Google se carga siempre con el modo de consentimiento en
// "denegado": no guarda cookies hasta que el visitante acepta en el banner.
// Mientras tanto Google recibe solo señales anónimas sin cookies, de modo que
// las conversiones que vienen de los anuncios se siguen midiendo.

export const GOOGLE_TAG_ID = "AW-16459873319";

export const CONVERSIONS = {
  /** Clic en el anuncio que lleva directo a WhatsApp (página /whatsapp). */
  whatsappDirecto: `${GOOGLE_TAG_ID}/SPVCCOvngZ8dEKf41qg9`,
  /** Clic en cualquier botón o enlace de WhatsApp dentro del sitio. */
  whatsappSitio: `${GOOGLE_TAG_ID}/XdcjCO7ngZ8dEKf41qg9`,
  /** Envío exitoso del formulario de cotización. */
  formulario: `${GOOGLE_TAG_ID}/M2bBCPHngZ8dEKf41qg9`,
} as const;

/** Ruta de la página puente; los clics en ella no cuentan como "botón del sitio". */
export const WHATSAPP_BRIDGE_PATH = "/whatsapp";

type Gtag = (...args: unknown[]) => void;
type TrackingWindow = typeof window & {
  dataLayer?: unknown[];
  gtag?: Gtag;
  __aaTrackingReady?: boolean;
};

function getWindow(): TrackingWindow | null {
  return typeof window === "undefined" ? null : (window as TrackingWindow);
}

/** Carga gtag.js una sola vez, con consentimiento denegado por defecto. */
export function initTracking() {
  const w = getWindow();
  if (!w || w.__aaTrackingReady) return;
  w.__aaTrackingReady = true;

  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag espera el objeto `arguments`, no un arreglo.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };

  w.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
  // Conserva el identificador de clic de Google en la URL cuando no hay cookies.
  w.gtag("set", "url_passthrough", true);
  w.gtag("js", new Date());
  w.gtag("config", GOOGLE_TAG_ID);

  if (!document.getElementById(`gtag-${GOOGLE_TAG_ID}`)) {
    const script = document.createElement("script");
    script.id = `gtag-${GOOGLE_TAG_ID}`;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
    document.head.appendChild(script);
  }

  // Cualquier clic en un enlace de WhatsApp del sitio cuenta como conversión.
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      const link = target?.closest?.('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
      if (!link) return;
      if (window.location.pathname === WHATSAPP_BRIDGE_PATH) return;
      trackConversion(CONVERSIONS.whatsappSitio);
    },
    true,
  );
}

/** Actualiza el consentimiento según lo que el visitante eligió en el banner. */
export function updateConsent(prefs: { analytics: boolean; marketing: boolean }) {
  const w = getWindow();
  if (!w?.gtag) return;
  const ads = prefs.marketing ? "granted" : "denied";
  w.gtag("consent", "update", {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    analytics_storage: prefs.analytics ? "granted" : "denied",
  });
}

/**
 * Envía una conversión a Google Ads. Si se pasa `onDone`, se ejecuta cuando
 * Google confirma el envío o, como respaldo, tras `timeoutMs`; nunca dos veces.
 */
export function trackConversion(sendTo: string, onDone?: () => void, timeoutMs = 1200) {
  const w = getWindow();
  let finished = false;
  const done = () => {
    if (finished) return;
    finished = true;
    onDone?.();
  };

  if (w?.gtag) {
    w.gtag("event", "conversion", {
      send_to: sendTo,
      ...(onDone ? { event_callback: done } : {}),
    });
  }
  if (onDone) window.setTimeout(done, w?.gtag ? timeoutMs : 0);
}
