"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-72 w-72 rounded-full
        bg-orange-500/10 blur-3xl transition-all duration-200 ease-out"
      style={{ transform: `translate(${pos.x - 144}px, ${pos.y - 144}px)` }}
    />
  );
}
