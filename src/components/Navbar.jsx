import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home",     href: "#hero",     num: "00" },
  { name: "About",    href: "#about",    num: "01" },
  { name: "Skills",   href: "#skills",   num: "02" },
  { name: "Journey",  href: "#journey",  num: "03" },
  { name: "Projects", href: "#projects", num: "04" },
  { name: "Contact",  href: "#contact",  num: "05" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
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
