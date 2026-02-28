"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, FolderKanban, BarChart3, Wrench, MailCheck, Moon, Zap, Smartphone } from "lucide-react";
import { useTheme, Theme } from "./ThemeProvider";

const navItems = [
  { href: "/",           label: "Home",       icon: Home,          section: "home"       },
  { href: "/projects",   label: "Projects",   icon: FolderKanban,  section: "projects"   },
  { href: "/experience", label: "Experience", icon: BarChart3,     section: "experience" },
  { href: "/tools",      label: "Tools",      icon: Wrench,        section: "tools"      },
  { href: "/contact",    label: "Contact",    icon: MailCheck,     section: "contact"    },
];

const THEME_META: Record<Theme, { icon: any; label: string }> = {
  dark:   { icon: Moon,       label: "Dark"      },
  oxygen: { icon: Zap,        label: "Oxygen OS" },
  ios:    { icon: Smartphone, label: "iOS"       },
};

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, cycle } = useTheme();
  const ThemeIcon = THEME_META[theme].icon;

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-300
          ${scrolled
            ? "bg-white/85 shadow-xl shadow-black/10 ring-1 ring-black/5 backdrop-blur-2xl dark:bg-zinc-900/90 dark:shadow-black/40 dark:ring-white/8"
            : "bg-white/60 backdrop-blur-xl ring-1 ring-black/5 dark:bg-zinc-900/70 dark:ring-white/5"
          }`}
      >
        {navItems.map(({ href, label, icon: Icon, section }) => {
          const isActive = activeSection === section;
          return (
            <Link
              key={section}
              href={href}
              aria-label={label}
              onClick={(e) => handleClick(e, section)}
              className="relative flex items-center justify-center rounded-full p-2.5
                text-zinc-500 transition-colors hover:text-zinc-900
                dark:text-zinc-400 dark:hover:text-white"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-zinc-800"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors ${isActive ? "text-zinc-900 dark:text-white" : ""}`}>
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              </span>
            </Link>
          );
        })}

        {/* Divider */}
        <div className="mx-1 h-5 w-px rounded-full bg-zinc-200 dark:bg-zinc-700" />

        {/* Theme cycle button */}
        <motion.button
          onClick={cycle}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          title={`Switch theme (${THEME_META[theme].label})`}
          className="relative flex h-9 w-9 items-center justify-center rounded-full
            transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
          style={{ color: "rgb(var(--accent, 249 115 22))" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={theme}
              initial={{ rotate: -80, opacity: 0, scale: 0.4 }}
              animate={{ rotate: 0,   opacity: 1, scale: 1   }}
              exit={{    rotate:  80, opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <ThemeIcon size={16} strokeWidth={2} />
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.nav>
    </header>
  );
}
