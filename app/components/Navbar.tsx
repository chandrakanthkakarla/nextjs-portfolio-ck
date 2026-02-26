"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, FolderKanban, BarChart3, Wrench, MailCheck } from "lucide-react";

const navItems = [
  { href: "/",          label: "Home",       icon: Home,         section: "home" },
  { href: "/projects",  label: "Projects",   icon: FolderKanban, section: "projects" },
  { href: "/experience",label: "Experience", icon: BarChart3,    section: "experience" },
  { href: "/tools",     label: "Tools",      icon: Wrench,       section: "tools" },
  { href: "/contact",   label: "Contact",    icon: MailCheck,    section: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(
        navItems.find((n) => pathname.startsWith("/" + n.section))?.section ?? "home"
      );
      return;
    }
    setActiveSection("home");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -85% 0px", threshold: 0 }
    );

    ["home", "projects", "experience", "tools", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] flex justify-center pt-4 pb-2 px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center gap-1 rounded-full px-3 py-2.5
          transition-all duration-300
          ${scrolled
            ? "bg-zinc-900/90 shadow-2xl shadow-black/30 ring-1 ring-white/10 backdrop-blur-xl"
            : "bg-zinc-900/70 shadow-lg ring-1 ring-white/8 backdrop-blur-md"
          }`}
      >
        {navItems.map((item) => {
          const active = pathname === "/" ? activeSection === item.section : pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="group relative grid place-items-center h-11 w-11 rounded-full
                text-white/60 hover:text-white transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {active && (
                <motion.span
                  layoutId="activeBubble"
                  className="absolute inset-1 rounded-full bg-white/95 shadow-md dark:bg-white"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <Icon
                className={`relative z-10 h-5 w-5 transition-colors duration-200
                  ${active ? "text-zinc-900" : "text-white/70 group-hover:text-white"}`}
              />
              {/* Tooltip */}
              <span className="pointer-events-none absolute top-[54px] left-1/2 -translate-x-1/2
                rounded-lg px-2.5 py-1 text-xs font-medium whitespace-nowrap
                bg-zinc-900 text-white ring-1 ring-white/10
                opacity-0 -translate-y-1 transition-all duration-200
                group-hover:opacity-100 group-hover:translate-y-0">
                {item.label}
              </span>
            </Link>
          );
        })}
      </motion.nav>
    </header>
  );
}
