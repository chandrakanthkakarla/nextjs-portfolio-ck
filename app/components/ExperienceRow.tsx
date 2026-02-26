"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";

type ExperienceRowProps = {
  title: string;
  role: string;
  description: string;
  period: string;
  href?: string;
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
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="group relative flex flex-col gap-5 sm:flex-row sm:items-start
        sm:justify-between rounded-2xl border border-zinc-100 bg-white/70 p-7
        transition-all duration-300 hover:border-zinc-200 hover:bg-white hover:shadow-lg
        hover:shadow-black/4 dark:border-zinc-800/60 dark:bg-zinc-900/50
        dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60"
    >
      {/* Left accent bar */}
      <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-transparent
        transition-all duration-300 group-hover:bg-orange-500" />

      <div className="max-w-2xl space-y-3 pl-1">
        {/* Company + role */}
        <div className="space-y-1">
          <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900
            dark:text-zinc-100">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-base font-semibold text-orange-500">
            <Briefcase size={14} strokeWidth={2.5} />
            {role}
          </div>
        </div>

        {/* Description */}
        <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        {/* Period */}
        <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-400
          dark:text-zinc-500">
          <Calendar size={13} strokeWidth={2} />
          {period}
        </div>
      </div>

      {/* Arrow for linked rows */}
      {href && (
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 text-zinc-300 transition-all duration-300
            group-hover:text-orange-500 group-hover:translate-x-0.5
            group-hover:-translate-y-0.5 dark:text-zinc-600"
        />
      )}
    </Wrapper>
  );
}
