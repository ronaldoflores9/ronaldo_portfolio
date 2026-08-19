<<<<<<< HEAD
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
=======
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8

const projects = [
  {
    id: 1,
    title: "MiUni Website",
    type: "Community platform",
    description:
<<<<<<< HEAD
      "An informative, interactive site presenting MiUni's mission, vision, team, partnerships, and student-life features — a public preview of the platform's core experience.",
=======
      "A public-facing platform that brings MiUni’s mission, team, partnerships, and student-life ecosystem into one clear, interactive experience.",
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
    image: "/projects/project1.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    demoUrl: "https://www.miunipr.com/",
    githubURL: "#",
    status: "live",
    featured: true,
  },
  {
    id: 2,
    title: "Movie Searcher",
    type: "API application",
    description:
<<<<<<< HEAD
      "A Python app connecting to an external movie database API. Search films and retrieve metadata — genre, cast, release date, ratings — via JSON parsing.",
=======
      "A Python and Flask application that searches movie data and turns API responses into useful film details, ratings, and metadata.",
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
    image: "/projects/project2.png",
    tags: ["Python", "Flask", "OMDB API"],
    demoUrl: "#",
    githubURL: "https://github.com/ronaldoflores9/movie-searcher",
    status: "archived",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    type: "Portfolio experience",
    description:
<<<<<<< HEAD
      "This site — built with Astro, React, and Tailwind CSS. Features an EmailJS-powered contact form, fully responsive layout, and light/dark themes.",
=======
      "A responsive portfolio built to present my work, skills, and story—with a polished interface and an EmailJS-powered contact flow.",
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
    image: "/projects/project3.png",
    tags: ["Astro", "React", "Tailwind CSS"],
    demoUrl: "https://ronaldo-portfolio-rouge.vercel.app/",
    githubURL: "https://github.com/ronaldoflores9/ronaldo_portfolio",
    status: "live",
  },
  {
    id: 4,
    title: "Fractals Generator",
    type: "Generative graphics",
    description:
<<<<<<< HEAD
      "A C++ application that generates and visualizes fractals like the Mandelbrot and Julia sets, using efficient algorithms and high-resolution rendering.",
=======
      "A C++ visualizer for exploring Mandelbrot and Julia sets through efficient computation and high-resolution rendering.",
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
    image: "/projects/project4.png",
    tags: ["C++", "Graphics"],
    demoUrl: "#",
    githubURL: "https://github.com/UPRM-CIIC4010-S24/pa3-kevin-gomez-ronaldo-flores",
    status: "archived",
  },
  {
    id: 5,
<<<<<<< HEAD
    title: "Space Invaders",
    description:
      "A C++ take on the classic arcade game — player movement, enemy formations, projectile firing, collision detection, and 2D sprite rendering.",
=======
    title: "Space Invaders Game",
    type: "Game development",
    description:
      "A C++ recreation of the arcade classic featuring player movement, enemy formations, projectiles, collision detection, and animated sprites.",
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
    image: "/projects/project5.png",
    tags: ["C++", "Game Dev"],
    demoUrl: "#",
    githubURL: "https://github.com/UPRM-CIIC4010-S24/pa2-christian-berberena-ronaldo-flores",
    status: "archived",
  },
  {
    id: 6,
<<<<<<< HEAD
    title: "Blackjack Engine",
    description:
      "A C++ console Blackjack simulation vs. a computer dealer — full rules (hit, stand, double, split), shuffle/deal logic, and hand-value calculations.",
=======
    title: "Blackjack Game",
    type: "Game logic",
    description:
      "A console-based Blackjack experience with complete hand evaluation, dealer logic, shuffling, hitting, standing, doubling, and splitting.",
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
    image: "/projects/project6.png",
    tags: ["C++", "Logic"],
    demoUrl: "#",
    githubURL: "https://github.com/ronaldoflores9/blackjack",
    status: "archived",
  },
];

<<<<<<< HEAD
const statusStyle = {
  live:     { label: "LIVE",     color: "hsl(145 65% 58%)" },
  archived: { label: "ARCHIVED", color: "hsl(var(--primary))" },
};

const ProjectCard = ({ project, i }) => {
  const s = statusStyle[project.status];
  return (
    <div
      data-reveal
      data-reveal-delay={String(i * 70)}
      className={cnFeatured(project.featured)}
    >
      {/* Spotlight hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.14) 0%, transparent 60%)" }}
      />

      {/* Image */}
      <div className={`overflow-hidden relative ${project.featured ? "h-56 md:h-full md:min-h-[260px]" : "h-44"}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 30%, hsl(var(--card)) 100%)" }} />
        <div className="absolute top-3 left-3 z-20">
          <span className="text-[10px] font-mono text-white/70 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
            MISSION // {String(project.id).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-20">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1"
            style={{ color: s.color, background: `${s.color}1f`, border: `1px solid ${s.color}55` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} /> {s.label}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 relative z-20 flex flex-col">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[11px] font-medium border border-primary/25 rounded-full bg-primary/5 text-primary/80">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
        <div className="flex gap-2 mt-auto">
          {project.demoUrl && project.demoUrl !== "#" && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors border border-primary/20">
              <ExternalLink size={12} /> Demo
            </a>
          )}
          {project.githubURL && project.githubURL !== "#" && (
            <a href={project.githubURL} target="_blank" rel="noopener noreferrer"
              aria-label={`GitHub repo for ${project.title}`}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors border border-primary/20">
              <Github size={12} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const cnFeatured = (featured) =>
  [
    "group panel card-hover hover:border-primary/40 hover:shadow-[0_0_36px_hsl(var(--primary)/0.22)] flex flex-col",
    featured ? "md:col-span-2 md:grid md:grid-cols-2" : "",
  ].join(" ");

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative">
        <SectionHeader num="04" label="Projects" title="Mission" accent="Log"
          subtitle="Academic and personal projects reflecting my curiosity, creativity, and drive to keep building." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>

        <div data-reveal data-reveal-delay="200" className="text-center mt-12">
          <a className="cosmic-button" target="_blank" rel="noopener noreferrer" href="https://github.com/ronaldoflores9">
            All Repositories <ArrowRight size={16} />
=======
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
            <div className="section-kicker mb-5">
              <Sparkles size={14} aria-hidden="true" />
              04 · Selected work
            </div>
            <h2 className="text-4xl font-black tracking-[-0.045em] md:text-5xl lg:text-6xl">
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
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
          </a>
        </div>
      </div>
    </section>
  );
};
