"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle } from "lucide-react";

interface ProjectMetric {
  metric: string;
  value: string;
}

interface CaseStudyProps {
  title: string;
  role: string;
  period: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: ProjectMetric[];
  outcome: string;
  keyLearnings: string[];
}

export default function CaseStudyCard({
  title,
  role,
  period,
  challenge,
  solution,
  technologies,
  metrics,
  outcome,
  keyLearnings,
}: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
    >
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-8 dark:border-slate-800">
        <h3 className="mb-2 text-2xl font-black text-slate-950 dark:text-white">
          {title}
        </h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-500 dark:text-slate-400">
              Role
            </p>
            <p className="text-slate-950 dark:text-white">{role}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 dark:text-slate-400">
              Period
            </p>
            <p className="text-slate-950 dark:text-white">{period}</p>
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h4 className="mb-3 font-bold text-slate-950 dark:text-white">
            Challenge
          </h4>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            {challenge}
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-slate-950 dark:text-white">
            Solution
          </h4>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            {solution}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h4 className="mb-3 font-bold text-slate-950 dark:text-white">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="mb-8 rounded-2xl bg-slate-50 p-6 dark:bg-slate-900">
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp className="text-orange-500" size={20} />
          <h4 className="font-bold text-slate-950 dark:text-white">
            Key Metrics
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.metric} className="border-l-2 border-orange-500 pl-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {m.metric}
              </p>
              <p className="text-lg font-bold text-slate-950 dark:text-white">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome */}
      <div className="mb-8">
        <h4 className="mb-3 font-bold text-slate-950 dark:text-white">
          Outcome
        </h4>
        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
          {outcome}
        </p>
      </div>

      {/* Key Learnings */}
      <div>
        <h4 className="mb-4 font-bold text-slate-950 dark:text-white">
          Key Learnings
        </h4>
        <ul className="space-y-2">
          {keyLearnings.map((learning, idx) => (
            <li
              key={idx}
              className="flex gap-3 text-slate-600 dark:text-slate-400"
            >
              <CheckCircle
                size={20}
                className="mt-0.5 shrink-0 text-orange-500"
              />
              <span>{learning}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
