"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Check } from "lucide-react";

interface GitHubProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  status: "active" | "complete" | "maintenance";
  highlights: string[];
}

export default function GitHubProjectCard({
  name,
  description,
  technologies,
  github,
  status,
  highlights,
}: GitHubProjectCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    complete: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    maintenance: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
  };

  const statusLabels = {
    active: "Actively Maintained",
    complete: "Complete",
    maintenance: "Maintenance Mode",
  };

  return (
    <motion.a
      href={github}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
            {name}
          </h3>
          <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
        <Github
          size={24}
          className="shrink-0 text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
        />
      </div>

      {/* Description */}
      <p className="mb-6 flex-1 text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {/* Highlights */}
      <div className="mb-6 space-y-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <Check size={16} className="mt-0.5 shrink-0 text-orange-500" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer Link */}
      <div className="flex items-center gap-2 pt-4 text-sm font-semibold text-orange-600 dark:text-orange-400">
        View on GitHub
        <ExternalLink size={16} />
      </div>
    </motion.a>
  );
}
