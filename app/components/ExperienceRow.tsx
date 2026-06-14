"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ExperienceRowProps = {
  title:       string;
  role:        string;
  description: string;
  period:      string;
  href?:       string;
};

export default function ExperienceRow({
  title,
  role,
  description,
  period,
  href,
}: ExperienceRowProps) {
  const Wrapper = href ? motion.a : motion.div;

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative flex gap-5 rounded-3xl border border-slate-200
        bg-[var(--surface)] p-6 transition-all duration-300
        hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm
        dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700
        dark:hover:bg-slate-900"
    >
      {/* Left accent bar */}
      <div
        className="mt-1 w-1 shrink-0 rounded-full opacity-60
          transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: "rgb(var(--accent, 249 115 22))" }}
      />

      <div className="flex flex-1 flex-col gap-2">
        {/* Company + role */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[17px] font-extrabold tracking-tight
              text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>
            <p className="mt-0.5 text-sm font-semibold"
              style={{ color: "rgb(var(--accent, 249 115 22))" }}>
              {role}
            </p>
          </div>
          {href && (
            <ArrowUpRight
              size={18}
              className="mt-0.5 shrink-0 text-zinc-300 transition-all
                group-hover:text-zinc-600 dark:text-zinc-600
                dark:group-hover:text-zinc-300"
            />
          )}
        </div>

        {/* Description */}
        <p className="text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

        {/* Period badge */}
        <span className="mt-1 inline-flex w-fit items-center rounded-full
          bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500
          dark:bg-zinc-800 dark:text-zinc-400">
          {period}
        </span>
      </div>
    </Wrapper>
  );
}
