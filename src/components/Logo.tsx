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
        width={compact ? 56 : 220}
        height={compact ? 56 : 72}
        className={
          compact
            ? "h-14 w-14 object-contain"
            : "h-14 w-auto object-contain md:h-16"
        }
        style={{ mixBlendMode: "darken" }}
      />
    </Link>
  );
}
