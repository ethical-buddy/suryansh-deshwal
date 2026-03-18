"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-[100] p-3 border-2 border-primary/20 bg-background/50 backdrop-blur-md hover:border-primary transition-all group"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-primary animate-pulse" />
      ) : (
        <Moon className="w-6 h-6 text-primary" />
      )}
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary group-hover:scale-150 transition-transform" />
    </button>
  );
}
