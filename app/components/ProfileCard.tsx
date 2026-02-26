"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chandrakanth18", icon: Linkedin },
];

const stats = [
  { value: "2+",   label: "Years Exp." },
  { value: "CCNA", label: "In Progress" },
  { value: "NOC",  label: "Operations" },
];

const certBadges = [
  "Google IT Support",
  "Zero Trust (ZTCA)",
  "Aws Cloud Practitioner",
  "CCNA (In Progress)",
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/8
        ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/8"
    >
      {/* Decorative rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full
          border-[2px] border-dashed border-orange-200/70 dark:border-orange-500/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full
          border-[2px] border-dashed border-zinc-200/60 dark:border-zinc-700/40"
      />

      <div className="relative p-7">
        {/* Avatar */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 p-1
          dark:from-zinc-800 dark:to-zinc-900 shadow-inner">
          <div className="h-[210px] w-full overflow-hidden rounded-xl">
            <img
              src="/img/smart.png"
              alt="Chandrakanth Kakarla — Network Engineer"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 text-center text-3xl font-black tracking-tight text-zinc-900
            dark:text-white"
        >
          Chandrakanth Kakarla
        </motion.h2>

        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.42, duration: 0.5 }}
          className="mt-2.5 flex justify-center"
        >
          <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-semibold
            text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300
            dark:ring-zinc-700">
            Network Engineer
          </span>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.58, duration: 0.5 }}
          className="mt-3 flex justify-center"
        >
          <span className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5
            text-sm font-semibold text-green-600 ring-1 ring-green-500/20
            dark:text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full
                bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available
          </span>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55 }}
          className="mt-5 grid grid-cols-3 divide-x divide-zinc-100 rounded-2xl
            bg-zinc-50 py-4 ring-1 ring-zinc-100 dark:divide-zinc-800
            dark:bg-zinc-800/50 dark:ring-zinc-800"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 px-2">
              <span className="text-lg font-black text-zinc-900 dark:text-white">
                {value}
              </span>
              <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Cert chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.72, duration: 0.5 }}
          className="mt-4 flex flex-wrap justify-center gap-2"
        >
          {certBadges.map((cert) => (
            <span
              key={cert}
              className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold
                text-orange-600 ring-1 ring-orange-200 dark:bg-orange-500/10
                dark:text-orange-400 dark:ring-orange-500/20"
            >
              {cert}
            </span>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-5 border-t border-zinc-100 dark:border-zinc-800" />

        {/* Socials */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.78 } },
          }}
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.15, y: -2 }}
              className="grid h-11 w-11 place-items-center rounded-full bg-zinc-100
                text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900
                dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700
                dark:hover:text-white"
            >
              <Icon size={20} strokeWidth={2} />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
