"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Circle, X, ZoomIn } from "lucide-react";

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
  const [lightbox, setLightbox] = useState(false);

  // ── ESC key to close lightbox ──
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  // ── Prevent body scroll when lightbox is open ──
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
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

          {/* Clickable Thumbnail */}
          <button
            onClick={() => setLightbox(true)}
            aria-label={`View ${name} image`}
            className="group/img relative h-[72px] w-[72px] shrink-0 overflow-hidden
              rounded-xl bg-zinc-100 ring-1 ring-zinc-200 cursor-zoom-in
              dark:bg-zinc-800 dark:ring-zinc-700"
          >
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500
                group-hover/img:scale-110"
            />
            {/* Zoom overlay */}
            <div className="absolute inset-0 flex items-center justify-center
              bg-black/40 opacity-0 transition-opacity duration-200
              group-hover/img:opacity-100 rounded-xl">
              <ZoomIn size={18} className="text-white" />
            </div>
          </button>

          {/* Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-extrabold tracking-tight text-zinc-900
              dark:text-zinc-100">
              {name}
            </h3>

            {/* ✅ line-clamp-3 removed — full description shows */}
            <p className="mt-2 text-[14px] leading-relaxed text-zinc-600
              dark:text-zinc-400">
              {description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs
              text-zinc-400 dark:text-zinc-500">
              <span>{date}</span>
              {status && (
                <span className="flex items-center gap-1.5 rounded-full
                  bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold
                  text-green-600 dark:text-green-400">
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
              className="grid h-9 w-9 place-items-center rounded-full
                bg-orange-500/10 text-orange-500 transition-all
                hover:bg-orange-500 hover:text-white"
            >
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
          )}
        </div>
      </motion.div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center
              bg-black/85 backdrop-blur-md p-4 cursor-zoom-out"
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-5 right-5 flex h-10 w-10 items-center
                justify-center rounded-full bg-white/10 text-white
                hover:bg-white/20 transition-all"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* ESC hint */}
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full
                bg-white/10 px-3 py-1 text-xs font-medium text-white/50
                backdrop-blur-sm"
            >
              Press ESC or click outside to close
            </motion.span>

            {/* Image */}
            <motion.img
              src={image}
              alt={name}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain
                shadow-2xl ring-1 ring-white/10"
            />

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-6 text-sm font-medium text-white/60"
            >
              {name}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
