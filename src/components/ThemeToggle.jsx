import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      return stored ? stored === "dark" : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch {}
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((p) => !p)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="hidden md:flex items-center gap-1.5 px-1 py-1 rounded-full border border-primary/20 transition-all duration-300 focus:outline-none relative"
      style={{
        background: isDark
          ? "hsl(250 40% 12%)"
          : "hsl(45 80% 90%)",
        boxShadow: isDark
          ? "0 0 10px hsl(250 65% 65% / 0.25)"
          : "0 0 10px hsl(45 80% 60% / 0.3)",
        width: "64px",
        height: "32px",
      }}
    >
      {/* Moon icon — left side */}
      <Moon
        size={13}
        className="shrink-0 transition-opacity duration-300 ml-1.5"
        style={{
          color: isDark ? "hsl(250 65% 70%)" : "hsl(250 20% 60%)",
          opacity: isDark ? 1 : 0.35,
        }}
      />

      {/* Sun icon — right side */}
      <Sun
        size={13}
        className="shrink-0 transition-opacity duration-300"
        style={{
          color: isDark ? "hsl(45 80% 60%)" : "hsl(38 90% 50%)",
          opacity: isDark ? 0.35 : 1,
        }}
      />

      {/* Sliding indicator ball */}
      <span
        aria-hidden="true"
        className="absolute top-[3px] w-[26px] h-[26px] rounded-full transition-all duration-300"
        style={{
          left: isDark ? "3px" : "calc(100% - 29px)",
          background: isDark
            ? "linear-gradient(135deg, hsl(250 65% 65%), hsl(270 55% 55%))"
            : "linear-gradient(135deg, hsl(45 90% 65%), hsl(38 85% 55%))",
          boxShadow: isDark
            ? "0 0 8px hsl(250 65% 65% / 0.8)"
            : "0 0 8px hsl(45 90% 60% / 0.8)",
        }}
      />
    </button>
  );
};
