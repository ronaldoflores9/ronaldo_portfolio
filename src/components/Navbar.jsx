import { Menu, Radio, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
<<<<<<< HEAD
  { name: "Home",     href: "#hero",     num: "00" },
  { name: "About",    href: "#about",    num: "01" },
  { name: "Skills",   href: "#skills",   num: "02" },
  { name: "Journey",  href: "#journey",  num: "03" },
  { name: "Projects", href: "#projects", num: "04" },
  { name: "Contact",  href: "#contact",  num: "05" },
=======
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
<<<<<<< HEAD
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled ? "py-2.5" : "py-5"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 rounded-full",
            isScrolled
              ? "px-5 py-2 rounded-full glass-card"
              : "px-1"
          )}
        >
          {/* Logo */}
          <a className="group flex items-center gap-2.5 font-display font-bold" href="#hero">
            <span className="relative flex items-center justify-center w-8 h-8">
              <span className="absolute inset-0 rounded-full border border-primary/40 animate-ring-spin-slow" />
              <span
                className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle"
                style={{ boxShadow: "0 0 8px 2px hsl(var(--primary) / 0.7)" }}
              />
            </span>
            <span className="text-base tracking-tight">
              <span className="text-foreground">Ronaldo</span>
              <span className="text-primary">.Flores</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-3.5 py-1.5 rounded-full text-sm transition-colors duration-300",
                    isActive ? "text-primary" : "text-foreground/65 hover:text-foreground"
                  )}
                >
                  <span className="font-mono text-[10px] mr-1.5 text-primary/50">{item.num}</span>
                  {item.name}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full -z-10 transition-all duration-300",
                      isActive ? "bg-primary/10 ring-1 ring-primary/25" : "bg-transparent"
                    )}
                  />
                </a>
              );
            })}
            <span className="mx-2 h-5 w-px bg-border" />
=======
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3.5 py-2.5 transition-all duration-300 md:px-4",
          isScrolled || isMenuOpen
            ? "border-border bg-background/80 shadow-[0_18px_60px_-35px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#hero" className="group flex items-center gap-3 text-left">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-xs font-black tracking-tight text-primary transition-transform duration-300 group-hover:rotate-6">
            RF
          </span>
          <span className="hidden sm:block">
            <strong className="block text-sm leading-none tracking-tight">Ronaldo Flores</strong>
            <span className="mt-1 flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-foreground/40">
              <Radio size={9} className="text-emerald-400" aria-hidden="true" />
              Systems online
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="group rounded-full px-3 py-2 text-xs font-semibold text-foreground/55 transition-colors hover:bg-primary/10 hover:text-foreground"
            >
              <span className="mr-1 text-[0.58rem] text-primary/65">0{index + 1}</span>
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <a href="#contact" className="space-button hidden px-4 py-2 text-xs md:inline-flex">
            Start a conversation
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/70 text-foreground lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-2xl transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "max-h-[32rem] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 border-transparent opacity-0"
        )}
      >
        <div className="p-3">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left font-semibold text-foreground/70 hover:bg-primary/10 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
              <span className="font-mono text-xs text-primary/50">0{index + 1}</span>
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-border px-4 pt-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/40">Theme</span>
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((p) => !p)}
              className="p-2 text-foreground z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300",
          "bg-background/95 backdrop-blur-xl",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-6 text-2xl font-display">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "flex items-baseline gap-3 transition-colors duration-300",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
              style={{ transitionDelay: isMenuOpen ? `${i * 40}ms` : "0ms" }}
            >
              <span className="font-mono text-sm text-primary/50">{item.num}</span>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
