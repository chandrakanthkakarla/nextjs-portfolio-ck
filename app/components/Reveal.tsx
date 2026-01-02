"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  amount = 0.25,
  y = 26,
}: {
  children: React.ReactNode;
  amount?: number;
  y?: number;
}) {
  const controls = useAnimation();
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    // Start hidden after mount (safe)
    controls.set({ opacity: 0, y });

    return () => {
      mountedRef.current = false;
    };
  }, [controls, y]);

  const safeStart = (anim: any) => {
    if (!mountedRef.current) return;
    controls.start(anim);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y }} // keeps SSR/first paint consistent
      animate={controls}
      onViewportEnter={() =>
        safeStart({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          },
        })
      }
      onViewportLeave={() =>
        safeStart({
          opacity: 0,
          y,
          transition: {
            duration: 0.55,
            ease: "easeInOut",
          },
        })
      }
      viewport={{
        once: false,
        amount,
        margin: "0px 0px -15% 0px",
      }}
    >
      {children}
    </motion.div>
  );
}
