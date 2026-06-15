"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { skillsMatrix } from "../lib/skills-data";

function ProficiencyBadge({
  level,
}: {
  level: "expert" | "proficient" | "learning";
}) {
  const colors = {
    expert: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
    proficient: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    learning: "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300",
  };

  const labels = {
    expert: "Expert",
    proficient: "Proficient",
    learning: "Learning",
  };

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${colors[level]}`}>
      {labels[level]}
    </span>
  );
}

export default function SkillsMatrix() {
  return (
    <div className="space-y-12">
      {/* Legend */}
      <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-900">
        <h3 className="mb-4 font-bold text-slate-950 dark:text-white">
          Proficiency Levels
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/20">
              <Star size={16} className="text-orange-600 dark:text-orange-400" fill="currentColor" />
            </div>
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">Expert</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Production experience
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">Proficient</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Solid understanding
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-slate-400" />
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">Learning</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Active development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills by Category */}
      <div className="space-y-8">
        {skillsMatrix.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <h3 className="mb-6 text-lg font-bold text-slate-950 dark:text-white">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-start justify-between rounded-lg bg-slate-50 p-4 dark:bg-slate-900"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-950 dark:text-white">
                      {skill.name}
                    </h4>
                    {skill.yearsOfExperience !== undefined && (
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {skill.yearsOfExperience} years experience
                      </p>
                    )}
                  </div>
                  <div className="ml-3 shrink-0">
                    <ProficiencyBadge level={skill.proficiency} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
