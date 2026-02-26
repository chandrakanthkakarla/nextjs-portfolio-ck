"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 rounded-full
        bg-gradient-radial from-orange-400/10 via-transparent to-transparent
        blur-3xl transition-transform duration-75 ease-out"
      aria-hidden
    />
  );
}
