import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    id: 1,
    title: "MiUni Website",
    description:
      "An informative, interactive site presenting MiUni's mission, vision, team, partnerships, and student-life features — a public preview of the platform's core experience.",
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
    description:
      "A Python app connecting to an external movie database API. Search films and retrieve metadata — genre, cast, release date, ratings — via JSON parsing.",
    image: "/projects/project2.png",
    tags: ["Python", "Flask", "OMDB API"],
    demoUrl: "#",
    githubURL: "https://github.com/ronaldoflores9/movie-searcher",
    status: "archived",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "This site — built with Astro, React, and Tailwind CSS. Features an EmailJS-powered contact form, fully responsive layout, and light/dark themes.",
    image: "/projects/project3.png",
    tags: ["Astro", "React", "Tailwind CSS"],
    demoUrl: "https://ronaldo-portfolio-rouge.vercel.app/",
    githubURL: "https://github.com/ronaldoflores9/ronaldo_portfolio",
    status: "live",
  },
  {
    id: 4,
    title: "Fractals Generator",
    description:
      "A C++ application that generates and visualizes fractals like the Mandelbrot and Julia sets, using efficient algorithms and high-resolution rendering.",
    image: "/projects/project4.png",
    tags: ["C++", "Graphics"],
    demoUrl: "#",
    githubURL: "https://github.com/UPRM-CIIC4010-S24/pa3-kevin-gomez-ronaldo-flores",
    status: "archived",
  },
  {
    id: 5,
    title: "Space Invaders",
    description:
      "A C++ take on the classic arcade game — player movement, enemy formations, projectile firing, collision detection, and 2D sprite rendering.",
    image: "/projects/project5.png",
    tags: ["C++", "Game Dev"],
    demoUrl: "#",
    githubURL: "https://github.com/UPRM-CIIC4010-S24/pa2-christian-berberena-ronaldo-flores",
    status: "archived",
  },
  {
    id: 6,
    title: "Blackjack Engine",
    description:
      "A C++ console Blackjack simulation vs. a computer dealer — full rules (hit, stand, double, split), shuffle/deal logic, and hand-value calculations.",
    image: "/projects/project6.png",
    tags: ["C++", "Logic"],
    demoUrl: "#",
    githubURL: "https://github.com/ronaldoflores9/blackjack",
    status: "archived",
  },
];

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
          </a>
        </div>
      </div>
    </section>
  );
};
