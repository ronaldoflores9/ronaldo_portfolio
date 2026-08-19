import { Briefcase, Code, Cpu, Download, Mail } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const resume = "/resume.pdf";

const cards = [
  {
    icon: Code,
    title: "Software Development",
    body: "Building efficient, scalable, and well-structured solutions with modern languages and frameworks.",
  },
  {
    icon: Cpu,
    title: "Systems & Automation",
    body: "From embedded systems to automation scripts — I enjoy making things run faster and smarter.",
  },
  {
    icon: Briefcase,
    title: "Collaboration & Delivery",
    body: "Leading and collaborating on projects from concept to delivery with clarity and teamwork.",
  },
];

const facts = [
  { k: "Education", v: "University of Puerto Rico at Mayagüez" },
  { k: "Degree",    v: "B.S. Software Engineering · GPA 3.75 / 4.00" },
  { k: "Interest",  v: "Aerospace · AI & Automation · Rocketry · App Dev" },
  { k: "Active",    v: "Collins Aerospace · NASA RASC-AL (SPARC)" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      <div className="cosmic-grid absolute inset-0 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">
        <SectionHeader num="01" label="About" title="Mission" accent="Profile" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Bio + facts */}
          <div className="lg:col-span-3 space-y-6">
            <h3 data-reveal className="text-2xl md:text-3xl font-semibold">
              Software engineer building at the intersection of code and space.
            </h3>
            <p data-reveal data-reveal-delay="80" className="text-muted-foreground leading-relaxed">
              I'm a software engineering student with a 3.75 GPA, currently working as an
              SWE co-op at <span className="text-foreground/90 font-medium">Collins Aerospace</span> on
              aerospace systems and simulation — and concurrently serving as a Power Electrical
              Systems member at <span className="text-foreground/90 font-medium">SPARC (NASA RASC-AL)</span>,
              where I develop AI models and onboard computing systems for lunar mission research.
            </p>
            <p data-reveal data-reveal-delay="160" className="text-muted-foreground leading-relaxed">
              I've also built and shipped a full-stack campus app and company website at{" "}
              <span className="text-foreground/90 font-medium">MiUni</span>, assembled rocket
              recovery systems as a member of the{" "}
              <span className="text-foreground/90 font-medium">DRACO UPRM</span> rocketry team,
              and led campus mentorship initiatives. I thrive where design, engineering, and
              real-world impact converge.
            </p>

            {/* Quick facts */}
            <div data-reveal data-reveal-delay="220" className="grid grid-cols-2 gap-3 pt-2">
              {facts.map((f) => (
                <div key={f.k} className="rounded-xl border border-border bg-card/40 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-primary/60 font-mono">{f.k}</div>
                  <div className="text-sm font-medium mt-0.5">{f.v}</div>
                </div>
              ))}
            </div>

            <div data-reveal data-reveal-delay="300" className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button">
                <Mail size={16} /> Get In Touch
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="cosmic-button-ghost">
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          {/* Photo + feature cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Profile photo */}
            <div
              data-reveal
              data-reveal-delay="60"
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 0 0 1px hsl(var(--primary) / 0.25), 0 0 48px hsl(var(--primary) / 0.18)" }}
            >
              <img
                src="/profile.jpg"
                alt="Ronaldo Flores at Collins Aerospace"
                className="w-full object-cover object-top"
                style={{ maxHeight: "320px" }}
              />
              {/* Cosmic overlay at bottom */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: "linear-gradient(to top, hsl(var(--card) / 0.85), transparent)" }}
              />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-xs font-mono text-primary/80 bg-card/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-primary/20">
                  @ Collins Aerospace
                </span>
              </div>
            </div>

            {/* Feature cards */}
            {cards.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                data-reveal
                data-reveal-delay={String(140 + i * 100)}
                className="panel p-5 card-hover group hover:border-primary/40 hover:shadow-[0_0_32px_hsl(var(--primary)/0.18)]"
              >
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px cosmic-edge-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/25 shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ boxShadow: "0 0 18px hsl(var(--primary) / 0.25)" }}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
