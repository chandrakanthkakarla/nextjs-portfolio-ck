"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Circle } from "lucide-react";

type ProjectRowProps = {
  name: string;
  description: string;
  image: string;
  date: string;
  view?: string | false;
  github?: string | false;
  status?: boolean;
};

export default function ProjectRow({
  name,
  description,
  image,
  date,
  view,
  github,
  status,
}: ProjectRowProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative flex flex-col gap-5 sm:flex-row sm:items-start
        sm:justify-between rounded-2xl border border-zinc-100 bg-white/70 p-6
        transition-all duration-300 hover:border-zinc-200 hover:bg-white
        hover:shadow-xl hover:shadow-black/5 dark:border-zinc-800/60
        dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60"
    >
      <div className="flex gap-5 max-w-2xl">
        {/* Thumbnail */}
        <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl
          bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500
              group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <h3 className="text-xl font-extrabold tracking-tight text-zinc-900
            dark:text-zinc-100">
            {name}
          </h3>

          <p className="mt-2 text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400
            line-clamp-3">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400
            dark:text-zinc-500">
            <span>{date}</span>
            {status && (
              <span className="flex items-center gap-1.5 rounded-full bg-green-500/10
                px-2.5 py-0.5 text-xs font-semibold text-green-600
                dark:text-green-400">
                <Circle size={6} className="fill-green-500" />
                Active
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3 sm:pt-1">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full bg-zinc-100
              text-zinc-500 transition-all hover:bg-zinc-200 hover:text-zinc-900
              dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700
              dark:hover:text-white"
          >
            <Github size={17} />
          </a>
        )}
        {view && (
          <a
            href={view}
            target="_blank"
            rel="noreferrer"
            aria-label="View project"
            className="grid h-9 w-9 place-items-center rounded-full bg-orange-500/10
              text-orange-500 transition-all hover:bg-orange-500 hover:text-white
              dark:hover:bg-orange-500"
          >
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5
                group-hover:-translate-y-0.5"
            />
          </a>
        )}
      </div>
    </motion.div>
  );
}
