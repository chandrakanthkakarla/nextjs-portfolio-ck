"use client";

import NetworkBackground from "./components/NetworkBackground";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProfileCard from "./components/ProfileCard";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";
import { Sparkles, Target } from "lucide-react";

export default function HomePage() {
  return (
    <main className="pt-14">
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">

          {/* ── LEFT: Sticky ProfileCard ── */}
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <ProfileCard />
          </aside>

          {/* ── RIGHT: All sections ── */}
          <div className="space-y-10 pb-20">

            {/* ── HERO ── */}
            <section
              id="home"
              className="relative scroll-mt-28 overflow-hidden rounded-3xl
                bg-zinc-950 px-10 py-16 shadow-2xl shadow-black/40
                ring-1 ring-white/5"
            >
              {/* Animated network canvas */}
              <NetworkBackground />

              {/* Glow blobs */}
              <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72
                rounded-full bg-orange-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64
                rounded-full bg-blue-500/8 blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full
                    border border-orange-500/20 bg-orange-500/10 px-4 py-1.5"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping
                      rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full
                      bg-orange-500" />
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-orange-400">
                    Open to Work
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-black leading-[0.88] tracking-tight"
                >
                  <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-white">
                    NETWORK
                  </span>
                  <Typewriter />
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="mt-6 max-w-lg text-[15px] leading-relaxed text-zinc-400"
                >
                  Passionate about building secure and reliable network
                  infrastructures. Focused on turning complex technical
                  challenges into stable, high-performing systems that drive
                  real-world impact.
                </motion.p>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent
                  via-white/10 to-transparent" />

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="flex flex-wrap gap-12"
                >
                  <Stat value={2} label="Years of Experience" />
                  <Stat value={2} label="Projects Completed" />
                </motion.div>
              </div>
            </section>

            {/* ── INFO CARDS ── */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <InfoCard
                icon={Sparkles}
                iconColor="text-orange-500"
                iconBg="bg-orange-500/10"
                title="Currently Exploring"
                desc="Looking to grow as a Network & Security Engineer, building strong expertise in advanced networking and cybersecurity, while evolving into a high-impact security professional."
              />
              <InfoCard
                icon={Target}
                iconColor="text-blue-400"
                iconBg="bg-blue-500/10"
                title="What I'm Looking For"
                desc="Looking to grow as a Network & Security Engineer, building strong expertise in advanced networking and cybersecurity."
              />
            </div>

            {/* ── PROJECTS ── */}
            <section id="projects" className="scroll-mt-28">
              <ProjectsSection animated />
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="experience" className="scroll-mt-28">
              <ExperienceSection animated />
            </section>

            {/* ── TOOLS ── */}
            <section id="tools" className="scroll-mt-28">
              <ToolsSection animated />
            </section>

            {/* ── CONTACT ── */}
            <section id="contact" className="scroll-mt-28">
              <ContactSection animated />
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Typewriter ── */
function Typewriter() {
  const words = ["ENGINEER", "NOC SPECIALIST", "SECURITY ANALYST"];
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(word.slice(0, displayed.length + 1));
          if (displayed.length + 1 === word.length)
            setTimeout(() => setDeleting(true), 1500);
        } else {
          setDisplayed(word.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)]
      bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300
      bg-clip-text text-transparent">
      {displayed}
      <span className="animate-pulse text-orange-400">|</span>
    </span>
  );
}

/* ── Animated stat counter ── */
function Stat({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, 120);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-5xl font-black text-white">
        +{count}
        <span className="ml-1 text-orange-500">.</span>
      </span>
      <span className="mt-1.5 text-[11px] font-semibold uppercase
        tracking-[0.2em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}

/* ── Info cards ── */
function InfoCard({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  desc,
}: {
  icon: any;
  iconColor: string;
  iconBg: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col justify-between rounded-2xl border
        border-zinc-100 bg-white/70 p-7 transition-all duration-300
        hover:border-zinc-200 hover:bg-white hover:shadow-xl hover:shadow-black/5
        dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:hover:border-zinc-700
        dark:hover:bg-zinc-800/60 min-h-[190px]"
    >
      {/* Icon */}
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center
        rounded-xl ${iconBg} transition-transform duration-300
        group-hover:scale-110`}>
        <Icon size={18} className={iconColor} strokeWidth={2} />
      </div>

      <div>
        <h3 className="text-lg font-extrabold tracking-tight text-zinc-900
          dark:text-zinc-100">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-zinc-500
          dark:text-zinc-400">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
