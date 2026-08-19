<<<<<<< HEAD
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
=======
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Orbit,
} from "lucide-react";
import resume from "../assets/RONALDO FLORES RESUME.pdf";

const orbitLabels = [
  { label: "AI systems", position: "left-0 top-[22%]" },
  { label: "DevOps", position: "right-0 top-[20%]" },
  { label: "React", position: "-left-2 bottom-[19%]" },
  { label: "Aerospace", position: "right-1 bottom-[17%]" },
];
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8

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
<<<<<<< HEAD
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
=======
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-20 pt-28 md:pb-16 md:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_35%,hsl(var(--primary)/0.11),transparent_26rem)]" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div className="text-left">
            <div className="section-kicker opacity-0 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.75)]" />
              Software engineer · Puerto Rico
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] opacity-0 animate-fade-in-delay-1 sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Building software for{" "}
              <span className="bg-gradient-to-r from-primary via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                ambitious missions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/60 opacity-0 animate-fade-in-delay-2 md:text-lg md:leading-8">
              I’m Ronaldo Flores—a software engineering student and Collins
              Aerospace co-op working across developer platforms, DevOps, and
              the development of AI systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-in-delay-3 sm:flex-row">
              <a href="#projects" className="space-button">
                Explore selected work
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="space-button-secondary"
              >
                Résumé
                <Download size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-5 opacity-0 animate-fade-in-delay-4">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-foreground/35">Connect</span>
              <span className="h-px w-8 bg-border" />
              <a href="https://github.com/ronaldoflores9" target="_blank" rel="noopener noreferrer" aria-label="Ronaldo Flores on GitHub" className="text-foreground/45 transition-colors hover:text-primary">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ronaldo-flores-nazario" target="_blank" rel="noopener noreferrer" aria-label="Ronaldo Flores on LinkedIn" className="text-foreground/45 transition-colors hover:text-primary">
                <Linkedin size={18} />
              </a>
            </div>
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
          </div>

          <div className="relative mx-auto w-full max-w-[33rem] opacity-0 animate-fade-in-delay-2" aria-hidden="true">
            <div className="relative aspect-square animate-float">
              <div className="orbit-ring absolute inset-[5%] rounded-full" />
              <div className="orbit-ring absolute inset-[17%] rounded-full border-dashed animate-orbit" />
              <div className="orbit-ring absolute inset-[30%] rounded-full animate-orbit-reverse" />
              <div className="absolute inset-[35%] grid place-items-center rounded-full border border-primary/35 bg-background/80 shadow-[0_0_90px_hsl(var(--primary)/0.28)] backdrop-blur-xl">
                <div className="text-center">
                  <Orbit className="mx-auto mb-2 text-primary" size={28} />
                  <span className="text-3xl font-black tracking-[-0.05em]">RF</span>
                  <span className="mt-1 block text-[0.52rem] font-bold uppercase tracking-[0.22em] text-foreground/40">Engineering</span>
                </div>
              </div>
              <span className="absolute left-1/2 top-[4%] h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
              <span className="absolute bottom-[16%] right-[16%] h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
              <span className="absolute left-[18%] top-[35%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(196,181,253,0.9)]" />
              {orbitLabels.map((item) => (
                <span key={item.label} className={`absolute ${item.position} rounded-full border border-border bg-card/80 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-foreground/55 shadow-lg backdrop-blur-xl`}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-card/45 backdrop-blur-xl sm:grid-cols-3 lg:mt-5">
          {[
            ["Current mission", "Collins Aerospace"],
            ["Primary systems", "Platforms · AI · DevOps"],
            ["Academic orbit", "UPRM · Class of 2028"],
          ].map(([label, value], index) => (
            <div key={label} className={`px-5 py-4 text-left ${index > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}>
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-primary/70">{label}</span>
              <strong className="mt-1 block text-sm font-semibold text-foreground/75">{value}</strong>
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 p-2 cursor-pointer text-muted-foreground hover:text-primary transition-colors [@media(max-height:760px)]:hidden"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
=======
      <a href="#about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-foreground/35 transition-colors hover:text-primary md:flex">
        <span className="text-[0.55rem] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={15} className="animate-bounce" />
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
      </a>
    </section>
  );
};
