import { Link } from "@tanstack/react-router";
import logo from "../assets/logo-asesorias.jpg.asset.json";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="Asesorías Académicas — inicio"
    >
      <img
        src={logo.url}
        alt="Asesorías Académicas"
        width={compact ? 64 : 260}
        height={compact ? 64 : 80}
        className={
          compact
            ? "h-16 w-16 object-contain"
            : "h-16 w-auto object-contain md:h-20"
        }
        style={{ mixBlendMode: "darken" }}
      />
    </Link>
  );
}
