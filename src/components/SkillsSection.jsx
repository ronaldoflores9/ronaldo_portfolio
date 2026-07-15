import { useState } from "react";
import {
  Boxes,
  BrainCircuit,
  Braces,
  PencilRuler,
  Sparkles,
  Wrench,
} from "lucide-react";
import { cn } from "../lib/utils";

const MAX_YEARS = 5;

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend systems",
    description: "Interfaces that feel fast, clear, and intentional.",
    icon: Braces,
    category: "technical",
    skills: [
      { name: "HTML/CSS", years: 5 },
      { name: "JavaScript", years: 1 },
      { name: "React", years: 1 },
      { name: "Next.js", years: 1 },
    ],
  },
  {
    id: "product",
    title: "Product & design",
    description: "From early concepts to polished visual experiences.",
    icon: PencilRuler,
    category: "technical",
    skills: [
      { name: "Web Design", years: 4 },
      { name: "Figma", years: 2 },
      { name: "Microsoft 365", years: 5 },
      { name: "GitHub", years: 3 },
    ],
  },
  {
    id: "engineering",
    title: "Software engineering",
    description: "Building logic, systems, and cross-platform products.",
    icon: Boxes,
    category: "technical",
    skills: [
      { name: "Python", years: 4 },
      { name: "C++", years: 2 },
      { name: "Java", years: 1 },
      { name: "Dart", years: 2 },
      { name: "Flutter", years: 2 },
    ],
  },
  {
    id: "toolkit",
    title: "Creative toolkit",
    description: "Technical tools for modeling, documentation, and making.",
    icon: Wrench,
    category: "technical",
    skills: [
      { name: "OnShape", years: 1 },
      { name: "LaTeX", years: 1 },
      { name: "Blender", years: 1 },
    ],
  },
  {
    id: "strengths",
    title: "Core strengths",
    description: "The human skills I bring to every challenge and team.",
    icon: BrainCircuit,
    category: "soft",
    skills: [
      { name: "Strategic Planning", years: 5 },
      { name: "Research & Analysis", years: 5 },
      { name: "Adaptability", years: 5 },
      { name: "Fast Learning", years: 5 },
      { name: "Problem Solving", years: 5 },
      { name: "Discipline", years: 5 },
      { name: "Teamwork", years: 5 },
      { name: "Creativity", years: 5 },
      { name: "Leadership", years: 5 },
    ],
  },
];

const filters = [
  { id: "all", label: "All capabilities" },
  { id: "technical", label: "Technical" },
  { id: "soft", label: "Core strengths" },
];

const ExperienceDots = ({ years }) => (
  <div
    className="flex gap-1"
    aria-label={`${years} ${years === 1 ? "year" : "years"} of experience`}
  >
    {Array.from({ length: MAX_YEARS }).map((_, index) => (
      <span
        key={index}
        aria-hidden="true"
        className={cn(
          "h-1.5 w-4 rounded-full transition-colors duration-300",
          index < years ? "bg-primary" : "bg-foreground/10"
        )}
      />
    ))}
  </div>
);

const SkillGroup = ({ group, index }) => {
  const Icon = group.icon;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/80 p-5 shadow-[0_18px_60px_-36px_rgba(79,70,229,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6",
        group.id === "strengths" && "lg:col-span-2"
      )}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">
            {group.title}
          </h3>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-foreground/55">
            {group.description}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "relative mt-6 grid gap-2.5",
          group.id === "strengths"
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2"
        )}
      >
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-2xl border border-border/60 bg-background/55 p-3.5 text-left transition-colors duration-300 hover:border-primary/25 hover:bg-primary/[0.04]"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="font-medium leading-tight">{skill.name}</span>
              <span className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-foreground/45">
                {skill.years} {skill.years === 1 ? "yr" : "yrs"}
              </span>
            </div>
            <ExperienceDots years={skill.years} />
          </div>
        ))}
      </div>
    </article>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleGroups = skillGroups.filter(
    (group) => activeCategory === "all" || group.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-y border-border/50 bg-background/55 px-4 py-24 backdrop-blur-sm md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12rem] top-20 h-96 w-96 rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute bottom-0 right-[-10rem] h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-end gap-10 border-b border-border/70 pb-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="text-left">
            <div className="section-kicker mb-5">
              <Sparkles size={14} aria-hidden="true" />
              02 · Capability map
            </div>
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Skills that turn ideas into{" "}
              <span className="text-primary">working products.</span>
            </h2>
          </div>

          <div className="text-left lg:pb-1">
            <p className="text-base leading-7 text-foreground/60">
              A practical toolkit shaped by software development, thoughtful
              design, and collaborative problem-solving.
            </p>
            <div className="mt-6 grid grid-cols-3 divide-x divide-border/70 rounded-2xl border border-border/70 bg-card/60 py-4">
              <div className="px-3 text-center">
                <strong className="block text-2xl text-primary">16</strong>
                <span className="text-[0.68rem] uppercase tracking-wider text-foreground/45">Tools</span>
              </div>
              <div className="px-3 text-center">
                <strong className="block text-2xl text-primary">4</strong>
                <span className="text-[0.68rem] uppercase tracking-wider text-foreground/45">Disciplines</span>
              </div>
              <div className="px-3 text-center">
                <strong className="block text-2xl text-primary">9</strong>
                <span className="text-[0.68rem] uppercase tracking-wider text-foreground/45">Strengths</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-left text-xs font-semibold uppercase tracking-[0.18em] text-foreground/40">
            Explore the toolkit
          </p>
          <div
            className="flex w-full gap-1 rounded-2xl border border-border/70 bg-card/60 p-1.5 sm:w-auto"
            aria-label="Filter skills"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                aria-pressed={activeCategory === filter.id}
                onClick={() => setActiveCategory(filter.id)}
                className={cn(
                  "flex-1 whitespace-nowrap rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-300 sm:flex-none sm:px-4 sm:text-sm",
                  activeCategory === filter.id
                    ? "bg-primary text-primary-foreground shadow-[0_8px_24px_-10px_hsl(var(--primary))]"
                    : "text-foreground/55 hover:bg-primary/10 hover:text-foreground"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {visibleGroups.map((group, index) => (
            <SkillGroup key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
