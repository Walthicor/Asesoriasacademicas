import { Link } from "@tanstack/react-router";
import logo from "../assets/logo-asesorias-transparent.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="Asesorías Académicas — inicio"
    >
      <img
        src={logo}
        alt="Asesorías Académicas"
        width={compact ? 64 : 240}
        height={compact ? 64 : 80}
        className={
          compact
            ? "h-14 w-14 object-contain"
            : "h-14 w-auto object-contain md:h-16 lg:h-[72px]"
        }
      />
    </Link>
  );
}

