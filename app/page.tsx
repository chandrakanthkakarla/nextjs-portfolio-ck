"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProfileCard from "./components/ProfileCard";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";
import { Sparkles, Target } from "lucide-react";
import { formatExperienceDuration } from "./lib/experience";
import CaseStudyCard from "./components/CaseStudyCard";
import GitHubProjectCard from "./components/GitHubProjectCard";
import BlogArticleCard from "./components/BlogArticleCard";
import { caseStudies } from "./lib/projects-data";
import { githubProjects } from "./lib/github-projects";
import { blogArticles } from "./lib/blog-data";

export default function HomePage() {
  const experienceYears = formatExperienceDuration("2023-08-31");
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
              className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-[var(--surface)] shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="p-10 md:p-14">
                <div className="max-w-3xl">
                  <span className="inline-flex rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                    Network Engineer L2
                  </span>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="mt-6 text-[clamp(2.8rem,5vw,4rem)] font-black tracking-tight text-slate-950 dark:text-white"
                  >
                    I help teams keep networks secure and stable.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                    className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300"
                  >
                    Specialized in 24/7 operations, incident response, and end-to-end network reliability for enterprise systems.
                  </motion.p>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Experience
                      </p>
                      <p className="mt-3 text-3xl font-extrabold text-slate-950 dark:text-white">
                        {experienceYears}
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Reliability
                      </p>
                      <p className="mt-3 text-3xl font-extrabold text-slate-950 dark:text-white">
                        24/7 focus
                      </p>
                    </div>
                  </div>
                </div>
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

            {/* ── CASE STUDIES (Featured) ── */}
            <section className="scroll-mt-28">
              <div className="mb-10 px-10">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Portfolio
                </p>
                <h2 className="font-black leading-[0.9] tracking-tight">
                  <span className="block text-[clamp(2.4rem,5vw,4rem)] text-black dark:text-white">
                    Featured
                  </span>
                  <span className="block text-[clamp(2.4rem,5vw,4rem)] text-zinc-500/50">
                    Case Study
                  </span>
                </h2>
              </div>
              {caseStudies.slice(0, 1).map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  role={study.role}
                  period={study.period}
                  challenge={study.challenge}
                  solution={study.solution}
                  technologies={study.technologies}
                  metrics={study.metrics}
                  outcome={study.outcome}
                  keyLearnings={study.keyLearnings}
                />
              ))}
              <div className="mt-8 text-center">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 transition-colors"
                >
                  View All Case Studies
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </section>

            {/* ── AUTOMATION ── */}
            <section id="automation" className="scroll-mt-28">
              <div className="mb-10 px-10">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Open Source
                </p>
                <h2 className="font-black leading-[0.9] tracking-tight">
                  <span className="block text-[clamp(2.4rem,5vw,4rem)] text-black dark:text-white">
                    Automation
                  </span>
                  <span className="block text-[clamp(2.4rem,5vw,4rem)] text-zinc-500/50">
                    Projects
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {githubProjects.slice(0, 2).map((project) => (
                  <GitHubProjectCard
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    technologies={project.technologies}
                    github={project.github}
                    status={project.status}
                    highlights={project.highlights}
                  />
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="/automation"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 transition-colors"
                >
                  View All Projects
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </section>

            {/* ── BLOG (Featured) ── */}
            <section className="scroll-mt-28">
              <div className="mb-10 px-10">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Insights
                </p>
                <h2 className="font-black leading-[0.9] tracking-tight">
                  <span className="block text-[clamp(2.4rem,5vw,4rem)] text-black dark:text-white">
                    Latest
                  </span>
                  <span className="block text-[clamp(2.4rem,5vw,4rem)] text-zinc-500/50">
                    Articles
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {blogArticles.slice(0, 2).map((article) => (
                  <BlogArticleCard
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    date={article.date}
                    readTime={article.readTime}
                    tags={article.tags}
                    slug={article.slug}
                  />
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 transition-colors"
                >
                  Read All Articles
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
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
  const words = ["ENGINEER", "NETWORK ENGINEER L2", "SECURITY ANALYST"];
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
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group flex flex-col justify-between rounded-3xl border
        border-slate-200 bg-[var(--surface)] p-7 transition-all duration-300
        hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm dark:border-slate-800
        dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900 min-h-[190px]"
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
