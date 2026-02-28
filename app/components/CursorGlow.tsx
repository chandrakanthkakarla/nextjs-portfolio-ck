"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [hovering, setHovering]   = useState(false);
  const [clicking, setClicking]   = useState(false);
  const [visible,  setVisible]    = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const springX = useSpring(cursorX, { stiffness: 130, damping: 18, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 130, damping: 18, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move   = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY); setVisible(true); };
    const hide   = () => setVisible(false);
    const show   = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);
    const hIn    = () => setHovering(true);
    const hOut   = () => setHovering(false);

    const attach = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, label")
        .forEach((el) => {
          el.addEventListener("mouseenter", hIn);
          el.addEventListener("mouseleave", hOut);
        });
    };

    window.addEventListener("mousemove",  move);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    attach();

    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove",  move);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      obs.disconnect();
      document.body.style.cursor = "";
    };
  }, []); // eslint-disable-line

  return (
    <>
      {/* Dot — follows cursor instantly */}
      <motion.div
        className="pointer-events-none fixed z-[99999] rounded-full"
        animate={{
          width:   clicking ? 4  : hovering ? 10 : 6,
          height:  clicking ? 4  : hovering ? 10 : 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "rgb(var(--accent, 249 115 22))",
        }}
      />

      {/* Ring — spring lags behind */}
      <motion.div
        className="pointer-events-none fixed z-[99998] rounded-full"
        animate={{
          width:           clicking ? 18 : hovering ? 44 : 28,
          height:          clicking ? 18 : hovering ? 44 : 28,
          opacity:         visible ? (hovering ? 0.85 : 0.35) : 0,
          backgroundColor: hovering ? "rgba(var(--accent, 249 115 22) / 0.08)" : "transparent",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1.5px solid rgb(var(--accent, 249 115 22))",
        }}
      />
    </>
  );
}
