"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export default function BlogArticleCard({
  title,
  excerpt,
  date,
  readTime,
  tags,
  slug,
}: BlogArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.a
      href={`/blog/${slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
    >
      {/* Meta */}
      <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="mb-6 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">
        {excerpt}
      </p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read More */}
      <div className="flex items-center gap-2 pt-4 font-semibold text-orange-600 dark:text-orange-400">
        Read Article
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </motion.a>
  );
}
