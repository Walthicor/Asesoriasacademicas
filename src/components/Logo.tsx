import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-sm border border-[color:var(--accent)]/40 bg-[color:var(--surface)] transition-colors group-hover:border-[color:var(--accent)]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M12 3 L21 20 L3 20 Z"
            stroke="var(--accent)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M8 20 L16 20" stroke="var(--accent)" strokeWidth="1.6" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg text-[color:var(--ivory)]">
            Asesorías Académicas
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
            Acompañamiento ético
          </span>
        </span>
      )}
    </Link>
  );
}
