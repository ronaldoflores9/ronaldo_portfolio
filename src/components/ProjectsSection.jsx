import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MiUni Website",
    type: "Community platform",
    description:
      "A public-facing platform that brings MiUni’s mission, team, partnerships, and student-life ecosystem into one clear, interactive experience.",
    image: "/projects/project1.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    demoUrl: "https://www.miunipr.com/",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Movie Searcher",
    type: "API application",
    description:
      "A Python and Flask application that searches movie data and turns API responses into useful film details, ratings, and metadata.",
    image: "/projects/project2.png",
    tags: ["Python", "Flask", "OMDB API", "HTML/CSS"],
    demoUrl: "#",
    githubURL: "https://github.com/ronaldoflores9/movie-searcher",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    type: "Portfolio experience",
    description:
      "A responsive portfolio built to present my work, skills, and story—with a polished interface and an EmailJS-powered contact flow.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    demoUrl: "https://ronaldo-portfolio-rouge.vercel.app/",
    githubURL: "https://github.com/ronaldoflores9/ronaldo_portfolio",
  },
  {
    id: 4,
    title: "Fractals Generator",
    type: "Generative graphics",
    description:
      "A C++ visualizer for exploring Mandelbrot and Julia sets through efficient computation and high-resolution rendering.",
    image: "/projects/project4.png",
    tags: ["C++"],
    demoUrl: "#",
    githubURL:
      "https://github.com/UPRM-CIIC4010-S24/pa3-kevin-gomez-ronaldo-flores",
  },
  {
    id: 5,
    title: "Space Invaders Game",
    type: "Game development",
    description:
      "A C++ recreation of the arcade classic featuring player movement, enemy formations, projectiles, collision detection, and animated sprites.",
    image: "/projects/project5.png",
    tags: ["C++"],
    demoUrl: "#",
    githubURL:
      "https://github.com/UPRM-CIIC4010-S24/pa2-christian-berberena-ronaldo-flores",
  },
  {
    id: 6,
    title: "Blackjack Game",
    type: "Game logic",
    description:
      "A console-based Blackjack experience with complete hand evaluation, dealer logic, shuffling, hitting, standing, doubling, and splitting.",
    image: "/projects/project6.png",
    tags: ["C++"],
    demoUrl: "#",
    githubURL: "https://github.com/ronaldoflores9/blackjack",
  },
];

const hasUrl = (url) => Boolean(url && url !== "#" && url.trim());

const ProjectTags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="rounded-full border border-primary/20 bg-primary/[0.08] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary"
      >
        {tag}
      </span>
    ))}
  </div>
);

const ProjectActions = ({ project, featured = false }) => (
  <div className="flex flex-wrap gap-2.5">
    {hasUrl(project.demoUrl) && (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live ${project.title} project`}
        className={
          featured
            ? "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_hsl(var(--primary))]"
            : "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-2 text-xs font-semibold transition-colors duration-300 hover:border-primary/40 hover:text-primary"
        }
      >
        Live project
        <ExternalLink size={featured ? 16 : 14} aria-hidden="true" />
      </a>
    )}
    {hasUrl(project.githubURL) && (
      <a
        href={project.githubURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} source code on GitHub`}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-2 text-xs font-semibold transition-colors duration-300 hover:border-primary/40 hover:text-primary"
      >
        <Github size={featured ? 16 : 14} aria-hidden="true" />
        Source
      </a>
    )}
  </div>
);

const FeaturedProject = ({ project }) => (
  <article className="group relative grid overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 shadow-[0_28px_90px_-52px_rgba(124,58,237,0.8)] backdrop-blur-sm lg:grid-cols-[1.18fr_0.82fr]">
    <div className="relative min-h-72 overflow-hidden border-b border-border/70 lg:min-h-[31rem] lg:border-b-0 lg:border-r">
      <img
        src={project.image}
        alt={`${project.title} interface preview`}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20" />
      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
        Featured release
      </div>
    </div>

    <div className="relative flex flex-col justify-between p-6 text-left md:p-10 lg:p-12">
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {project.type}
          </span>
          <span className="font-mono text-sm text-foreground/35">01 / 06</span>
        </div>
        <h3 className="text-3xl font-bold tracking-[-0.035em] md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 text-base leading-7 text-foreground/60">
          {project.description}
        </p>
        <div className="mt-7">
          <ProjectTags tags={project.tags} />
        </div>
      </div>
      <div className="relative mt-10 border-t border-border/70 pt-6">
        <ProjectActions project={project} featured />
      </div>
    </div>
  </article>
);

const ProjectCard = ({ project }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/75 shadow-[0_20px_70px_-48px_rgba(124,58,237,0.8)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-background/40">
      <img
        src={project.image}
        alt={`${project.title} interface preview`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-70" />
      <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 font-mono text-[0.68rem] text-white/80 backdrop-blur-md">
        {String(project.id).padStart(2, "0")}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5 text-left md:p-6">
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
        {project.type}
      </span>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em]">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-foreground/55">
        {project.description}
      </p>
      <div className="mt-5">
        <ProjectTags tags={project.tags} />
      </div>
      <div className="mt-6 border-t border-border/60 pt-5">
        <ProjectActions project={project} />
      </div>
    </div>
  </article>
);

export const ProjectsSection = () => {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden px-4 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-14rem] top-40 h-[32rem] w-[32rem] rounded-full bg-primary/[0.08] blur-[120px]" />
        <div className="absolute bottom-40 left-[-12rem] h-96 w-96 rounded-full bg-primary/[0.07] blur-[110px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 grid items-end gap-7 text-left md:mb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles size={14} aria-hidden="true" />
              Selected work
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Projects built to{" "}
              <span className="text-primary">learn, solve, and ship.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-foreground/60 lg:pb-1">
            A collection of product experiments, academic builds, and personal
            work—each one turning a new technical challenge into something
            tangible.
          </p>
        </div>

        <FeaturedProject project={featuredProject} />

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:mt-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-primary/20 bg-primary/[0.07] p-6 text-left md:flex-row md:items-center md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              More in the repository
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              Explore the code behind the work.
            </h3>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_hsl(var(--primary))]"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ronaldoflores9"
          >
            View GitHub profile
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
