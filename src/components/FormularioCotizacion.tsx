import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const SERVICIOS = [
  "Asesoría de tesis",
  "Trabajo de grado",
  "Ensayo",
  "Monografía",
  "Artículo científico",
  "Análisis estadístico SPSS",
  "Revisión bibliográfica",
  "Normas APA",
  "Corrección de estilo",
  "Sustentación",
];

const fieldBase =
  "w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--primary)] placeholder:text-[color:var(--muted-foreground)] transition-colors focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/30";
const labelBase =
  "text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--primary)]/70";

export function FormularioCotizacion({
  title = "Solicita tu cotización",
  servicioPreseleccionado,
}: {
  title?: string;
  servicioPreseleccionado?: string;
}) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  if (sent) {
    return (
      <div className="pulse-frame-gold rounded-2xl">
        <div className="rounded-2xl border border-[color:var(--border)] bg-white p-10 text-center shadow-[var(--shadow-elegant)]">

        <CheckCircle2 className="mx-auto h-14 w-14 text-[color:var(--accent)]" />
        <h3 className="mt-5 font-display text-2xl text-[color:var(--primary)]">
          Recibimos tu solicitud
        </h3>
        <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
          Un asesor te contactará por WhatsApp o correo en las próximas horas
          hábiles para conversar sobre tu proceso académico.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-magenta)] hover:text-[color:var(--primary)]"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Formulario de cotización de asesoría académica"
      className="rounded-2xl border border-[color:var(--border)] bg-white p-8 shadow-[var(--shadow-elegant)] md:p-10"
    >
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-magenta)]">
          Cotización sin compromiso
        </p>
        <h3 className="mt-2 font-display text-3xl text-[color:var(--primary)] md:text-4xl">
          {title}
        </h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelBase}>Nombre</label>
          <input required name="nombre" className={fieldBase} placeholder="Tu nombre completo" />
        </div>
        <div className="space-y-2">
          <label className={labelBase}>WhatsApp</label>
          <input required name="whatsapp" className={fieldBase} placeholder="+57 300 000 0000" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className={labelBase}>Correo electrónico</label>
          <input required type="email" name="correo" className={fieldBase} placeholder="tucorreo@ejemplo.com" />
        </div>
        <div className="space-y-2">
          <label className={labelBase}>Tipo de servicio</label>
          <select
            required
            name="servicio"
            defaultValue={servicioPreseleccionado ?? ""}
            className={fieldBase}
          >
            <option value="" disabled>Selecciona un servicio</option>
            {SERVICIOS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className={labelBase}>Nivel</label>
          <select required name="nivel" defaultValue="" className={fieldBase}>
            <option value="" disabled>Selecciona un nivel</option>
            <option>Pregrado</option>
            <option>Posgrado</option>
          </select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className={labelBase}>Fecha límite</label>
          <input required type="date" name="fecha" className={fieldBase} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className={labelBase}>Cuéntanos sobre tu proceso</label>
          <textarea
            name="mensaje"
            rows={4}
            className={fieldBase}
            placeholder="Área de estudio, tema, en qué etapa vas, con qué necesitas acompañamiento..."
          />
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[color:var(--muted-foreground)]">
        Recuerda: te asesoramos, capacitamos y acompañamos. El autor de tu trabajo académico siempre eres tú.
      </p>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="pulse-gold relative inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-10 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-[color:var(--brand-magenta)] disabled:opacity-70"
        >
          {loading ? "Enviando..." : "Solicitar cotización"}
        </button>
      </div>
    </form>
  );
}
