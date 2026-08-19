import { ArrowDown, Download, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const ROLES = [
  "Software Engineering Student",
  "SWE Co-op @ Collins Aerospace",
  "Power Systems Member @ NASA RASC-AL",
  "Aerospace Systems & AI Enthusiast",
  "Rocket Recovery Engineer @ DRACO",
];

const stats = [
  { label: "Projects",   target: 6,  suffix: ""  },
  { label: "Skills",     target: 20, suffix: "+" },
  { label: "Yrs Coding", target: 5,  suffix: "+" },
];

const useCounter = (target, duration = 1500, delay = 900) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [target, duration, delay]);
  return value;
};

export const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Looping typewriter through ROLES
  useEffect(() => {
    const full = ROLES[roleIdx];
    let timeout;
    if (!deleting && text === full) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }, deleting ? 35 : 70);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  const c0 = useCounter(stats[0].target);
  const c1 = useCounter(stats[1].target);
  const c2 = useCounter(stats[2].target);
  const counts = [c0, c1, c2];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* ── Orbital system ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ perspective: "1000px" }}
      >
        {[480, 720, 1020].map((size, i) => (
          <div
            key={size}
            className="orbital-ring absolute top-1/2 left-1/2"
            style={{
              width: size + "px",
              height: size + "px",
              marginLeft: -size / 2,
              marginTop: -size / 2,
              transform: "rotateX(74deg)",
              borderColor: `hsl(var(--primary) / ${0.14 - i * 0.04})`,
            }}
          />
        ))}
        {/* Glowing planet at orbital center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, hsl(265 85% 80%), hsl(265 80% 42%) 60%, hsl(240 60% 25%))",
            boxShadow: "0 0 48px 10px hsl(var(--primary) / 0.35), inset -3px -3px 10px rgba(0,0,0,0.55), inset 3px 3px 8px rgba(255,255,255,0.12)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        {/* Status badge */}
        <div className="flex justify-center opacity-0 animate-fade-in">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-muted-foreground">Co-op @ Collins Aerospace</span>
            <span className="h-3.5 w-px bg-border/60" />
            <span className="text-primary/80 font-mono text-xs">NASA RASC-AL</span>
          </span>
        </div>

        {/* Name */}
        <h1 className="mt-7 text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]">
          <span className="block opacity-0 animate-fade-in-delay-1 text-foreground/90 text-2xl md:text-3xl font-medium mb-2">
            Hi, I'm
          </span>
          <span className="opacity-0 animate-fade-in-delay-2 text-gradient-cosmic text-glow">
            Ronaldo Flores
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="mt-5 h-8 opacity-0 animate-fade-in-delay-3">
          <p className="text-lg md:text-2xl font-mono text-primary/90">
            <span className="text-muted-foreground/60">&gt; </span>
            {text}
            <span className="inline-block w-0.5 h-5 md:h-6 ml-0.5 align-middle bg-primary animate-blink" />
          </p>
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I love turning ideas into impactful software — exploring everything from
          front-end interfaces to embedded systems, and growing as an engineer
          one meaningful project at a time.
        </p>

        {/* Location */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground/80 opacity-0 animate-fade-in-delay-4">
          <MapPin size={14} className="text-primary/70" />
          Puerto Rico · UPR Mayagüez
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">View My Work</a>
          <a href="#contact" className="cosmic-button-ghost">Get In Touch</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cosmic-button-ghost">
            <Download size={15} /> Resume
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 opacity-0 animate-fade-in-delay-5">
          <div className="inline-flex items-center gap-8 md:gap-14 px-8 py-4 rounded-2xl glass-card">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold font-display text-gradient-cosmic tabular-nums"
                  style={{ textShadow: "0 0 24px hsl(var(--primary) / 0.4)" }}
                >
                  {counts[i]}{s.suffix}
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground tracking-[0.15em] mt-1 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 p-2 cursor-pointer text-muted-foreground hover:text-primary transition-colors [@media(max-height:760px)]:hidden"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};
