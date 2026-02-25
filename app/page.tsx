"use client";
import NetworkBackground from "./components/NetworkBackground";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProfileCard from "./components/ProfileCard";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";

export default function HomePage() {
  return (
    <main className="pt-14">
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">

          <aside className="lg:sticky lg:top-10 lg:self-start">
            <ProfileCard />
          </aside>

          <div className="space-y-10 pb-16">

            {/* ✅ relative added, NetworkBackground inside */}
            <section id="home" className="relative scroll-mt-28 px-10 py-0">
              <NetworkBackground />

              <h1 className="font-black leading-[0.9] tracking-tight">
                <span className="block text-[clamp(3.5rem,7vw,7rem)] dark:text-white text-black">
                  NETWORK
                </span>
                <Typewriter />
              </h1>

              <p className="mt-6 max-w-2xl text-zinc-400">
                Passionate about building secure and reliable network infrastructures. Focused on turning complex technical challenges into stable, high-performing systems that drive real-world impact.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3">
                <Stat value={2} label="Years of experience" />
                <Stat value={2} label="Projects completed" />
              </div>
            </section>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-10">
              <PlaceholderCard
                title="Currently Exploring"
                desc="Looking to grow as a Network & Security Engineer, building strong expertise in advanced networking and cybersecurity, while evolving into a high-impact security professional."
              />
              <PlaceholderCard
                title="What I'm Looking For"
                desc="Looking to grow as a Network & Security Engineer, building strong expertise in advanced networking and cybersecurity."
              />
            </div>

            <section id="projects" className="scroll-mt-28">
              <ProjectsSection animated />
            </section>

            <section id="experience" className="scroll-mt-28">
              <ExperienceSection animated />
            </section>

            <section id="tools" className="scroll-mt-28">
              <ToolsSection animated />
            </section>

            <section id="contact" className="scroll-mt-28">
              <ContactSection animated />
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}

function Typewriter() {
  const words = ["ENGINEER", "NOC SPECIALIST", "SECURITY ANALYST"];
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const timeout = setTimeout(() => {
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
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

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
    <div ref={ref}>
      <div className="text-5xl font-extrabold dark:text-white text-black">
        +{count}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wide text-zinc-500">
        {label}
      </div>
    </div>
  );
}

function PlaceholderCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="h-[220px] rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/50
      hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70
      transition-colors duration-300 p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">{desc}</p>
      </div>
    </div>
  );
}
