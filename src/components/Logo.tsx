import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        aria-hidden
        className="grid h-10 w-10 place-items-center rounded-md bg-white ring-1 ring-[color:var(--border)] transition-all group-hover:ring-[color:var(--accent)]/60"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 3 L21 20 L3 20 Z"
            stroke="var(--primary)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M12 10 L15.5 17 L8.5 17 Z" fill="var(--brand-magenta)" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold text-[color:var(--primary)]">
            Asesorías Académicas
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[color:var(--brand-magenta)]">
            Acompañamiento ético
          </span>
        </span>
      )}
    </Link>
  );
}
