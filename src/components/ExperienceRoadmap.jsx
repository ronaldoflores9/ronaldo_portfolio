import {
  ArrowDownToLine,
  Code2,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const experiences = [
  {
    period: "2026 — Present",
    role: "Software Engineering Co-op",
    organization: "Collins Aerospace",
    summary:
      "Contributing to a developer platform that helps engineering teams build and deliver software more consistently.",
    highlights: [
      "Creating reusable software templates for internal development teams.",
      "Supporting DevOps workflows and software delivery practices.",
      "Developing multiple AI platforms and the software capabilities behind them.",
      "Applying Agile methodologies and presenting technical work to leadership.",
    ],
    icon: Workflow,
    current: true,
  },
  {
    period: "Aug 2025 — Present",
    role: "Power Electrical System Division Member",
    organization: "SPARC · NASA RASC-AL",
    location: "Mayagüez, Puerto Rico",
    summary:
      "Exploring intelligent systems and onboard computing for an ambitious lunar infrastructure concept.",
    highlights: [
      "Developing AI models for navigation, decision-making, and system control.",
      "Building simulations to validate solutions across mission scenarios.",
      "Researching a mobile propellant depot for lunar operations.",
    ],
    icon: Rocket,
    current: true,
  },
  {
    period: "May 2024 — Present",
    role: "Programmer",
    organization: "MiUni LLC",
    location: "Mayagüez, Puerto Rico",
    summary:
      "Building a digital platform that helps university students navigate academics and campus life.",
    highlights: [
      "Developing Academic Offer and curriculum-tracking experiences.",
      "Creating product documentation, UI designs, and flowcharts.",
      "Designed and built the company website with React and Next.js.",
    ],
    icon: Code2,
    current: true,
  },
  {
    period: "2024 — Present",
    role: "Student Mentor",
    organization: "University of Puerto Rico, Mayagüez",
    location: "Mayagüez, Puerto Rico",
    summary:
      "Helping incoming students find their footing and feel supported throughout university life.",
    highlights: [
      "Guiding new students through orientation and campus life.",
      "Providing continued peer support throughout the academic year.",
    ],
    icon: GraduationCap,
    current: true,
  },
  {
    period: "Aug 2024 — May 2025",
    role: "Recovery Division Member",
    organization: "DRACO Rocketry Team",
    location: "Mayagüez, Puerto Rico",
    summary:
      "Contributed to the systems responsible for bringing a student-built rocket safely back to Earth.",
    highlights: [
      "Prepared the avionics bay and recovery components before launches.",
      "Ran simulations and tests to improve recovery reliability.",
      "Designed, built, and evaluated rocket recovery systems.",
    ],
    icon: ShieldCheck,
    current: false,
  },
];

const ExperienceCard = ({ experience, index }) => {
  const Icon = experience.icon;

  return (
    <article className="group relative pl-12 md:pl-16">
      <div className="absolute left-[0.44rem] top-7 z-10 grid h-8 w-8 place-items-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_7px_hsl(var(--background))] md:left-[0.94rem]">
        <Icon size={15} strokeWidth={2} aria-hidden="true" />
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/75 p-5 text-left shadow-[0_22px_75px_-50px_rgba(124,58,237,0.85)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 md:p-7">
        <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/[0.08] blur-3xl transition-transform duration-500 group-hover:scale-150" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {experience.period}
              </span>
              {experience.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Current
                </span>
              )}
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] md:text-2xl">
              {experience.role}
            </h3>
            <p className="mt-1 font-medium text-foreground/65">
              {experience.organization}
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs text-foreground/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="relative mt-5 max-w-2xl text-sm leading-6 text-foreground/55 md:text-base md:leading-7">
          {experience.summary}
        </p>

        <ul className="relative mt-5 grid gap-3 border-t border-border/60 pt-5 md:grid-cols-2">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-6 text-foreground/65"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>

        {experience.location && (
          <p className="relative mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground/35">
            {experience.location}
          </p>
        )}
      </div>
    </article>
  );
};

export const ExperienceRoadmap = () => {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden border-y border-border/50 px-4 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-primary/[0.08] blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="text-left lg:sticky lg:top-28 lg:self-start">
          <div className="section-kicker mb-5">
            <Rocket size={14} aria-hidden="true" />
            03 · Experience roadmap
          </div>
          <h2 className="text-4xl font-black tracking-[-0.045em] md:text-5xl lg:text-6xl">
            Learning by doing,{" "}
            <span className="text-primary">one milestone at a time.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-foreground/60">
            My path connects software, aerospace research, leadership, and
            service—each role adding a new layer to how I build and collaborate.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-2 divide-x divide-border/70 rounded-2xl border border-border/70 bg-card/60 py-4">
            <div className="px-4 text-center">
              <strong className="block text-2xl text-primary">5</strong>
              <span className="text-[0.68rem] uppercase tracking-wider text-foreground/45">
                Milestones
              </span>
            </div>
            <div className="px-4 text-center">
              <strong className="block text-2xl text-primary">4</strong>
              <span className="text-[0.68rem] uppercase tracking-wider text-foreground/45">
                Current roles
              </span>
            </div>
          </div>

          <a
            href="/src/assets/RONALDO%20FLORES%20RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="space-button-secondary mt-6 px-4 py-2.5"
          >
            View updated résumé
            <ArrowDownToLine size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="relative space-y-5">
          <div className="absolute bottom-8 left-[1.4rem] top-8 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-[1.9rem]" />
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.organization + experience.period}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
