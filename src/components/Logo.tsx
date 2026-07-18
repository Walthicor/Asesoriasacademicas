import { Link } from "@tanstack/react-router";
import logo from "../assets/logo-asesorias.jpg.asset.json";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Asesorías Académicas — inicio">
      <img
        src={logo.url}
        alt="Asesorías Académicas"
        width={compact ? 44 : 200}
        height={compact ? 44 : 56}
        className={
          compact
            ? "h-11 w-11 object-contain mix-blend-multiply"
            : "h-12 w-auto object-contain mix-blend-multiply md:h-14"
        }
      />
    </Link>
  );
}
