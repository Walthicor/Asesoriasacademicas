import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "aa_cookie_consent_v1";
export const OPEN_COOKIE_PREFS_EVENT = "aa:open-cookie-prefs";

type Prefs = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

function readPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Prefs;
  } catch {
    return null;
  }
}

function injectGtag() {
  if (typeof document === "undefined") return;
  const tagId = "AW-16459873319";
  if (document.getElementById(`gtag-${tagId}`)) return;

  const inline = document.createElement("script");
  inline.id = `gtag-${tagId}-inline`;
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${tagId}');

    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
        'send_to': '${tagId}/XfdPCLnm-ZEZEKf41qg9',
        'event_callback': callback
      });
      return false;
    }

    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest('a[href*="wa.me"]');
      if (el) {
        gtag_report_conversion();
      }
    });
  `;

  const asyncScript = document.createElement("script");
  asyncScript.id = `gtag-${tagId}`;
  asyncScript.async = true;
  asyncScript.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`;

  const first = document.getElementsByTagName("script")[0];
  if (first?.parentNode) {
    first.parentNode.insertBefore(inline, first);
    first.parentNode.insertBefore(asyncScript, first);
  } else {
    document.head.appendChild(inline);
    document.head.appendChild(asyncScript);
  }
}

function loadOptionalScripts(prefs: Prefs) {
  if (typeof window === "undefined") return;
  if (prefs.analytics) {
    // Espacio reservado para Google Analytics 4 u otro proveedor de analítica.
  }
  if (prefs.marketing || prefs.analytics) {
    injectGtag();
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const existing = readPrefs();
    if (existing) {
      loadOptionalScripts(existing);
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    } else {
      setVisible(true);
      requestAnimationFrame(() => setMounted(true));
    }

    const openHandler = () => {
      const current = readPrefs();
      if (current) {
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setVisible(true);
      setConfigOpen(true);
      requestAnimationFrame(() => setMounted(true));
    };
    window.addEventListener(OPEN_COOKIE_PREFS_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_COOKIE_PREFS_EVENT, openHandler);
  }, []);

  const persist = (prefs: Omit<Prefs, "decidedAt" | "essential">) => {
    const full: Prefs = {
      essential: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      decidedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    } catch {
      // ignore
    }
    loadOptionalScripts(full);
    setMounted(false);
    setTimeout(() => {
      setVisible(false);
      setConfigOpen(false);
    }, 250);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className={`fixed z-[70] transition-all duration-300 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md`}
    >
      <div
        className="border border-[color:var(--accent)]/40 bg-[#0F1B2D] text-white shadow-2xl md:rounded-xl"
        style={{ boxShadow: "0 20px 60px -20px rgba(201,162,39,0.25), 0 10px 30px rgba(0,0,0,0.4)" }}
      >
        <div className="p-5 md:p-6">
          {!configOpen ? (
            <>
              <h2 className="font-display text-lg text-[color:var(--ivory)]">
                Tu privacidad importa
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Usamos cookies para mejorar tu experiencia y medir nuestras
                visitas. Puedes aceptarlas, rechazarlas o configurarlas.{" "}
                <Link
                  to="/politica-de-cookies"
                  className="text-[color:var(--accent)] underline-offset-2 hover:underline"
                >
                  Ver política de cookies
                </Link>
                .
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => persist({ analytics: true, marketing: true })}
                  className="inline-flex items-center justify-center rounded-sm bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-[#0F1B2D] transition-colors hover:bg-[color:var(--accent-hover)]"
                >
                  Aceptar todas
                </button>
                <button
                  type="button"
                  onClick={() => persist({ analytics: false, marketing: false })}
                  className="inline-flex items-center justify-center rounded-sm border border-white/25 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  Rechazar
                </button>
                <button
                  type="button"
                  onClick={() => setConfigOpen(true)}
                  className="ml-auto text-sm text-[color:var(--accent)] underline-offset-2 hover:underline"
                >
                  Configurar
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-display text-lg text-[color:var(--ivory)]">
                Preferencias de cookies
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Las cookies esenciales son necesarias para el funcionamiento del
                sitio y no se pueden desactivar.
              </p>
              <div className="mt-4 space-y-3">
                <PrefRow
                  title="Esenciales"
                  desc="Necesarias para navegar el sitio."
                  checked
                  disabled
                />
                <PrefRow
                  title="Analíticas"
                  desc="Nos ayudan a medir visitas y mejorar el sitio."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <PrefRow
                  title="Marketing"
                  desc="Personalización y remarketing (futuro)."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => persist({ analytics, marketing })}
                  className="inline-flex items-center justify-center rounded-sm bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-[#0F1B2D] transition-colors hover:bg-[color:var(--accent-hover)]"
                >
                  Guardar preferencias
                </button>
                <button
                  type="button"
                  onClick={() => setConfigOpen(false)}
                  className="text-sm text-white/70 underline-offset-2 hover:text-white hover:underline"
                >
                  Volver
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function PrefRow({
  title,
  desc,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  desc: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-white/5 p-3">
      <div>
        <p className="text-sm font-semibold text-[color:var(--ivory)]">{title}</p>
        <p className="mt-0.5 text-xs text-white/65">{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange && onChange(!checked)}
        className={`relative mt-1 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-[color:var(--accent)]" : "bg-white/20"
        } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export function openCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_COOKIE_PREFS_EVENT));
  }
}
