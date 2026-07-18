import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function useReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    // Give the new route a tick to mount its DOM before we query for .reveal nodes.
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!els.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      els.forEach((el) => io.observe(el));

      // Store observer for cleanup
      cleanup = () => io.disconnect();
    });

    let cleanup: (() => void) | undefined;
    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [pathname]);
}
