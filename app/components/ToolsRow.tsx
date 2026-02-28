"use client";

import { motion } from "framer-motion";

type ToolsRowProps = {
  name: string;
  subtitle: string;
  iconSrc?: string;
  emoji?: string;
};

export default function ToolsRow({ name, subtitle, emoji }: ToolsRowProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group flex items-center gap-4 rounded-2xl border border-zinc-100
        bg-white/70 px-5 py-4 transition-all duration-300
        hover:border-zinc-200 hover:bg-white hover:shadow-lg hover:shadow-black/5
        dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:hover:border-zinc-700
        dark:hover:bg-zinc-800/60"
    >
      {/* Emoji icon — no file needed */}
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
          text-xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "rgba(var(--accent, 249 115 22), 0.08)" }}
      >
        {emoji}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-[15px] font-bold tracking-tight
          text-zinc-900 dark:text-zinc-100">
          {name}
        </span>
        <span className="text-[12px] font-medium text-zinc-400 dark:text-zinc-500">
          {subtitle}
        </span>
      </div>

      {/* Accent bar on right */}
      <div
        className="ml-auto h-7 w-[3px] rounded-full opacity-0 transition-opacity
          duration-300 group-hover:opacity-100"
        style={{ backgroundColor: "rgb(var(--accent, 249 115 22))" }}
      />
    </motion.div>
  );
}
