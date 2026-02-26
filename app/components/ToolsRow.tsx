"use client";

import { motion } from "framer-motion";

type ToolsRowProps = {
  name: string;
  subtitle: string;
  iconSrc: string;
};

export default function ToolsRow({ name, subtitle, iconSrc }: ToolsRowProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 350, damping: 24 }}
      className="group flex items-center gap-4 rounded-2xl border border-zinc-100
        bg-white/70 p-5 transition-all duration-300 hover:border-zinc-200
        hover:bg-white hover:shadow-lg hover:shadow-black/4
        dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:hover:border-zinc-700
        dark:hover:bg-zinc-800/60"
    >
      {/* Icon */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
        bg-zinc-50 ring-1 ring-zinc-100 transition-all duration-300
        group-hover:ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700
        dark:group-hover:ring-zinc-600">
        <img
          src={iconSrc}
          alt={name}
          className="h-6 w-6 object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">
          {name}
        </span>
        <span className="text-sm text-zinc-400 dark:text-zinc-500">{subtitle}</span>
      </div>
    </motion.div>
  );
}
