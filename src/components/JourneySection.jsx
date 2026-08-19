import { Rocket, GraduationCap, Code2, Globe, Sparkles, Shield, Cpu, Satellite } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const milestones = [
  {
    icon: Sparkles,
    year: "2021",
    title: "Began the coding journey",
    org: "Self-taught",
    body: "Started with web design — HTML, CSS, and Microsoft 365 tooling — discovering a love for building things on the web.",
    tags: ["HTML/CSS", "Web Design"],
  },
  {
    icon: GraduationCap,
    year: "2023",
    title: "B.S. in Software Engineering",
    org: "UPR Mayagüez",
    body: "Began formal studies in software engineering, diving into algorithms, data structures, and systems programming.",
    tags: ["C++", "Python", "Java"],
  },
  {
    icon: Code2,
    year: "2024",
    title: "Systems & coursework projects",
    org: "Academic",
    body: "Built a fractal generator, a Space Invaders clone, and a Blackjack engine in C++ — sharpening problem-solving and collaboration.",
    tags: ["C++", "Algorithms", "Teamwork"],
  },
  {
    icon: Globe,
    year: "2024–2026",
    title: "Programmer",
    org: "MiUni LLC.",
    body: "Built a multi-feature campus app helping university students with food, GPS, sports, and academics. Developed the Academic Offer feature and the company website from scratch with React and Next.js.",
    tags: ["React", "Next.js", "Flutter", "Dart"],
  },
  {
    icon: Shield,
    year: "2024–2025",
    title: "Recovery Division Member",
    org: "DRACO UPRM",
    body: "Assembled and tested rocket avionics bays and recovery systems, ran simulations to ensure safe launches, and designed components for the DRACO rocket.",
    tags: ["Rocketry", "Simulations", "Systems Design"],
  },
  {
    icon: Rocket,
    year: "Now",
    title: "Software Engineer Co-op",
    org: "Collins Aerospace",
    body: "Working on aerospace systems and simulation while exploring AI and automation — applying engineering skills to real-world, high-impact problems.",
    tags: ["Aerospace", "Simulation", "AI & Automation"],
  },
  {
    icon: Satellite,
    year: "Now",
    title: "Power Electrical System Division Member",
    org: "SPARC — NASA RASC-AL",
    body: "Developing AI models and onboard computing systems for decision-making, navigation, and system control. Researching the implementation of a mobile propellant depot on the moon.",
    tags: ["AI", "Onboard Computing", "NASA", "Research"],
  },
];

export const JourneySection = () => {
  return (
    <section id="journey" className="py-28 px-4 relative overflow-hidden">
      <div className="cosmic-grid absolute inset-0 pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative">
        <SectionHeader num="03" label="Journey" title="Flight" accent="Log"
          subtitle="The path so far — every milestone a step toward becoming a better engineer." />

        <div className="relative">
          {/* Central orbital line */}
          <div
            aria-hidden="true"
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.5) 12%, hsl(var(--primary) / 0.5) 88%, transparent)" }}
          />

          <div className="space-y-10 md:space-y-2">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const left = i % 2 === 0;
              return (
                <div
                  key={i}
                  data-reveal
                  data-reveal-delay={String(i * 90)}
                  className={`relative flex items-center ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="panel p-5 card-hover group hover:border-primary/40 hover:shadow-[0_0_28px_hsl(var(--primary)/0.16)]">
                      <div className={`flex items-center gap-2 mb-1 ${left ? "md:justify-end" : ""}`}>
                        <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {m.year}
                        </span>
                        <span className="text-xs text-muted-foreground">{m.org}</span>
                      </div>
                      <h3 className="text-lg font-semibold">{m.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{m.body}</p>
                      <div className={`flex flex-wrap gap-1.5 mt-3 ${left ? "md:justify-end" : ""}`}>
                        {m.tags.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-primary/20 text-primary/80 bg-primary/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span className="absolute w-9 h-9 rounded-full bg-primary/15 animate-pulse-subtle" />
                    <span
                      className="relative w-9 h-9 rounded-full grid place-items-center bg-card border border-primary/40"
                      style={{ boxShadow: "0 0 16px hsl(var(--primary) / 0.4)" }}
                    >
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
