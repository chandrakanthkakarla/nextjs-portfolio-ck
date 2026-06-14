"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chandrakanth18", icon: Linkedin },
];

function getExperienceYears(joinDate: string) {
  const join = new Date(joinDate);
  const now = new Date();
  let years = now.getFullYear() - join.getFullYear();
  if (
    now.getMonth() < join.getMonth() ||
    (now.getMonth() === join.getMonth() && now.getDate() < join.getDate())
  ) {
    years -= 1;
  }
  return years;
}

const stats = [
  { value: `${getExperienceYears("2023-08-31")}+`, label: "Years Exp." },
  { value: "CCNA", label: "In Progress" },
  { value: "Network Engineer L2", label: "Operations" },
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-[var(--surface)] shadow-sm dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="p-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Hi, I’m Chandrakanth
        </p>
        <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          Network Engineer L2
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
          Secure Networks • Reliable Operations
        </p>
      </div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 text-center text-3xl font-black tracking-tight
            text-zinc-900 dark:text-white"
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
            text-zinc-600 ring-1 ring-zinc-200
            dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
            Network Engineer
          </span>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.54, duration: 0.4 }}
          className="mt-3 flex justify-center"
        >
          <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
            Available
          </span>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.55 }}
          className="mt-5 grid grid-cols-3 divide-x divide-zinc-100 rounded-2xl
            bg-zinc-50 py-4 ring-1 ring-zinc-100
            dark:divide-zinc-800 dark:bg-zinc-800/50 dark:ring-zinc-800"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 px-2">
              <span
                className="text-lg font-black"
                style={{ color: "rgb(var(--accent, 249 115 22))" }}
              >
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
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-4 flex flex-wrap justify-center gap-2"
        >
          {certBadges.map((cert) => (
            <span
              key={cert}
              className="rounded-full px-3 py-1 text-[11px] font-semibold ring-1"
              style={{
                color:           "rgb(var(--accent, 249 115 22))",
                backgroundColor: "rgba(var(--accent, 249 115 22), 0.08)",
                borderColor:     "rgba(var(--accent, 249 115 22), 0.2)",
              }}
            >
              {cert}
            </span>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-gradient-to-r from-transparent
          via-zinc-200 to-transparent dark:via-zinc-700" />

        {/* Socials */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.76 } },
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
                hidden:  { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.15, y: -2 }}
              className="grid h-11 w-11 place-items-center rounded-full bg-zinc-100
                text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900
                dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
            >
              <Icon size={20} strokeWidth={2} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
