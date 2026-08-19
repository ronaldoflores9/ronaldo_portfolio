import { useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { SectionHeader } from "./SectionHeader";

const RADIUS = 30;
const STROKE = 3.5;
const CIRC = 2 * Math.PI * RADIUS;

// level: 3 = Advanced, 2 = Proficient, 1 = Familiar
const LEVELS = { 3: "Advanced", 2: "Proficient", 1: "Familiar" };

const techSkills = [
  { name: "HTML/CSS",        abbr: "HTML", level: 3 },
  { name: "Python",          abbr: "Py",   level: 3 },
  { name: "Web Design",      abbr: "WD",   level: 3 },
  { name: "Microsoft 365",   abbr: "M365", level: 3 },
  { name: "C++",             abbr: "C++",  level: 2 },
  { name: "GitHub",          abbr: "Git",  level: 2 },
  { name: "Figma",           abbr: "Fig",  level: 2 },
  { name: "Dart",            abbr: "Dart", level: 2 },
  { name: "Flutter",         abbr: "Flu",  level: 2 },
  { name: "JavaScript",      abbr: "JS",   level: 2 },
  { name: "React",           abbr: "Re",   level: 2 },
  { name: "Next.js",         abbr: "Next", level: 2 },
  { name: "Java",            abbr: "Java", level: 1 },
  { name: "Firebase",        abbr: "Fire", level: 1 },
  { name: "Android Studio",  abbr: "AS",   level: 1 },
  { name: "OnShape",         abbr: "CAD",  level: 1 },
  { name: "LaTeX",           abbr: "TeX",  level: 1 },
  { name: "Blender",         abbr: "3D",   level: 1 },
];

const softSkills = [
  "Problem Solving", "Strategic Planning", "Research & Analysis", "Adaptability",
  "Fast Learner", "Discipline", "Teamwork", "Creativity", "Leadership",
];

const categories = ["all", "technical", "soft"];

const SkillRing = ({ skill, index }) => {
  const [fill, setFill] = useState(0);
  const ref = useRef(null);
  const color = "hsl(var(--primary))";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setFill((skill.level / 3) * CIRC), Math.min(index, 11) * 35);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px 80px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [skill.level, index]);

  return (
    <div
      ref={ref}
      className="panel rounded-xl p-4 flex flex-col items-center gap-2 card-hover group hover:border-primary/40"
    >
      <div className="relative w-[72px] h-[72px]">
        <svg viewBox="0 0 76 76" className="w-full h-full -rotate-90">
          <circle cx="38" cy="38" r={RADIUS} fill="none" stroke="hsl(var(--primary) / 0.14)" strokeWidth={STROKE} />
          <circle
            cx="38" cy="38" r={RADIUS} fill="none"
            stroke={color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${fill} ${CIRC}`}
            style={{
              transition: "stroke-dasharray 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
              filter: `drop-shadow(0 0 4px ${color})`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold leading-none font-display text-primary">{skill.abbr}</span>
        </div>
      </div>
      <span className="text-xs font-medium text-center leading-tight text-foreground/80 group-hover:text-foreground transition-colors">
        {skill.name}
      </span>
      <span className="text-[10px] text-muted-foreground/80">{LEVELS[skill.level]}</span>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const showTech = activeCategory === "all" || activeCategory === "technical";
  const showSoft = activeCategory === "all" || activeCategory === "soft";

  return (
    <section id="skills" className="py-28 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative">
        <SectionHeader num="02" label="Skills" title="Tech" accent="Arsenal"
          subtitle="The tools and languages I build with, plus the strengths I bring to a team." />

        {/* Filters */}
        <div data-reveal className="flex flex-col items-center gap-5 mb-12">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.5)]"
                    : "glass-card text-foreground/70 hover:text-foreground"
                )}
              >
                {cat === "soft" ? "Strengths" : cat === "technical" ? "Technical" : "All"}
              </button>
            ))}
          </div>
        </div>

        {/* Technical rings */}
        {showTech && (
          <div className="mb-14">
            <div data-reveal className="flex items-center gap-3 mb-6">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-primary/70">Technical</h3>
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">Proficiency</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {techSkills.map((skill, i) => (
                <SkillRing key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Soft skills as chips */}
        {showSoft && (
          <div data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-primary/70">Strengths</h3>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full glass-card text-sm text-foreground/80 hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
