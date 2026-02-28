"use client";

import { useEffect, useRef } from "react";

interface Trail {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    let mouseX    = -200;
    let mouseY    = -200;
    let hovering  = false;
    let animId: number;

    // --- Get current accent color from CSS var ---
    const getAccent = (): [number, number, number] => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent").trim();
      const parts = raw.split(" ").map(Number);
      if (parts.length === 3) return [parts[0], parts[1], parts[2]];
      return [249, 115, 22]; // fallback orange
    };

    // --- Trail history ---
    const TRAIL_LEN = 18;
    const trail: Trail[] = Array.from({ length: TRAIL_LEN }, () => ({
      x: -200, y: -200, alpha: 0, size: 0,
    }));

    let headX = -200;
    let headY = -200;

    // --- Smooth lerp head towards mouse ---
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // --- Main draw loop ---
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const [r, g, b] = getAccent();
      const speed     = hovering ? 0.18 : 0.28;

      // Lerp head
      headX = lerp(headX, mouseX, speed);
      headY = lerp(headY, mouseY, speed);

      // Shift trail
      for (let i = trail.length - 1; i > 0; i--) {
        trail[i].x     = lerp(trail[i].x,     trail[i - 1].x,     0.55);
        trail[i].y     = lerp(trail[i].y,     trail[i - 1].y,     0.55);
        trail[i].alpha = (1 - i / trail.length) * (hovering ? 0.55 : 0.35);
        trail[i].size  = (1 - i / trail.length) * (hovering ? 5   : 3.5);
      }
      trail[0].x     = headX;
      trail[0].y     = headY;
      trail[0].alpha = hovering ? 0.7  : 0.5;
      trail[0].size  = hovering ? 6    : 4;

      // Draw trail dots
      trail.forEach((t) => {
        if (t.alpha <= 0) return;
        ctx.beginPath();
        ctx.arc(t.x, t.y, Math.max(t.size, 0.1), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${t.alpha})`;
        ctx.fill();
      });

      // --- Main dot ---
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, hovering ? 5 : 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},1)`;
      ctx.fill();

      // --- Outer glow ring ---
      const ringSize = hovering ? 22 : 16;
      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, ringSize * 0.3,
        mouseX, mouseY, ringSize
      );
      gradient.addColorStop(0, `rgba(${r},${g},${b},0.12)`);
      gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, ringSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    draw();

    // --- Events ---
    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };

    const onHIn  = () => { hovering = true;  };
    const onHOut = () => { hovering = false; };

    const attach = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, label")
        .forEach((el) => {
          el.addEventListener("mouseenter", onHIn);
          el.addEventListener("mouseleave", onHOut);
        });
    };

    window.addEventListener("mousemove", onMove);
    attach();
    document.body.style.cursor = "none";

    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      obs.disconnect();
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99999]"
    />
  );
}
