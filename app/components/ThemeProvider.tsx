"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "dark" | "oxygen" | "ios";

const THEMES: Theme[] = ["dark", "oxygen", "ios"];

const ACCENT: Record<Theme, string> = {
  dark:   "249 115 22",  // orange-500
  oxygen: "255 55 0",    // OnePlus red
  ios:    "0 122 255",   // iOS blue
};

interface ThemeCtx { theme: Theme; cycle: () => void; }
const Ctx = createContext<ThemeCtx>({ theme: "dark", cycle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const s = localStorage.getItem("ck-theme") as Theme | null;
    if (s && THEMES.includes(s)) setTheme(s);
  }, []);

  useEffect(() => {
    localStorage.setItem("ck-theme", theme);
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.setProperty("--accent", ACCENT[theme]);
    if (theme === "ios") root.classList.remove("dark");
    else root.classList.add("dark");
  }, [theme]);

  const cycle = () =>
    setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]);

  return <Ctx.Provider value={{ theme, cycle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
