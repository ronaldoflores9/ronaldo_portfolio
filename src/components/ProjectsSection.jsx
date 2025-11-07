import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MiUni Website",
    description:
      "An informative and interactive site that presents MiUni’s mission, vision, team, partnerships, and student-life features — including local bars, restaurants, and organizations. It serves as a public preview of the platform’s core features and community focus.",
    image: "/projects/project1.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    demoUrl: "https://www.miunipr.com/",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Movie Searcher",
    description:
      "A Python application that connects to an external movie database API, allowing users to search films and retrieve detailed metadata including genre, cast, release date, and ratings. Implemented using the requests library for API communication and JSON parsing to manage and display structured data efficiently.",
    image: "/projects/project2.png",
    tags: ["Python", "Flask", "OMDB API", "HTML/CSS"],
    demoUrl: "#",
    githubURL: "https://github.com/ronaldoflores9/movie-searcher",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "This portfolio demonstrates selected projects, technical skills, and ways to contact me. It's implemented with modern web tooling (Vite, React, Tailwind) and includes a contact form wired to EmailJS so visitors can send messages directly to my email. The site is responsive, accessible, and easy to customize.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    demoUrl: "https://ronaldo-portfolio-rouge.vercel.app/",
    githubURL: "https://github.com/ronaldoflores9/ronaldo_portfolio",
  },

  {
    id: 4,
    title: "Fractals Generator",
    description:
      "A C++ application that generates and visualizes fractal patterns such as the Mandelbrot set and Julia sets. It utilizes efficient algorithms to compute fractal geometry and employs a graphical library for rendering high-resolution images, allowing users to explore complex mathematical structures interactively.",
    image: "/projects/project4.png",
    tags: ["C++"],
    demoUrl: "#",
    githubURL:
      "https://github.com/UPRM-CIIC4010-S24/pa3-kevin-gomez-ronaldo-flores",
  },
  {
    id: 5,
    title: "Space Invaders Game",
    description:
      "A C++ implementation of the classic Space Invaders arcade game. The game features player-controlled spaceship movement, enemy alien formations, projectile firing, and collision detection. It utilizes a graphical library to render 2D sprites and animations, providing an engaging gameplay experience that captures the essence of the original game.",
    image: "/projects/project5.png",
    tags: ["C++"],
    demoUrl: "#",
    githubURL:
      "https://github.com/UPRM-CIIC4010-S24/pa2-christian-berberena-ronaldo-flores",
  },
  {
    id: 6,
    title: "Blackjack Game",
    description:
      "A C++ console application that simulates the classic card game Blackjack. The program allows a single player to compete against a computer dealer, implementing standard Blackjack rules such as hitting, standing, doubling down, and splitting pairs. It features a simple text-based interface for user interaction and includes functionalities for shuffling and dealing cards, calculating hand values, and determining game outcomes.",
    image: "/projects/project6.png",
    tags: ["C++"],
    demoUrl: "#",
    githubURL: "https://github.com/ronaldoflores9/blackjack",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the academic and personal projects I’ve developed to
          strengthen my skills in software engineering and problem-solving. Each
          one reflects my curiosity, creativity, and commitment to learning
          while applying modern technologies to real-world challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl &&
                      project.demoUrl !== "#" &&
                      project.demoUrl.trim() !== "" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    {project.githubURL &&
                      project.githubURL !== "#" &&
                      project.githubURL.trim() !== "" && (
                        <a
                          href={project.githubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ronaldoflores9"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
