"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  amount?: number;
  y?: number;
  margin?: string;
  delay?: number;
}

export default function Reveal({
  children,
  amount = 0.15,
  y = 28,
  margin = "0px 0px -40px 0px",
  delay = 0,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount, margin } as any);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
