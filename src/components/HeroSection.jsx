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

export const HeroSection = () => {
  return (
    <section
      id="hero"
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

      <a href="#about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-foreground/35 transition-colors hover:text-primary md:flex">
        <span className="text-[0.55rem] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  );
};
