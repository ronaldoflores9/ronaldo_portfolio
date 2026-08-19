<<<<<<< HEAD
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
=======
import {
  ArrowUpRight,
  Bot,
  Boxes,
  Code2,
  Download,
  Gauge,
  Orbit,
} from "lucide-react";
import { createElement } from "react";
import resume from "../assets/RONALDO FLORES RESUME.pdf";
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8

const capabilities = [
  { icon: Code2, title: "Software systems", text: "Thoughtful, maintainable products across web, mobile, and internal platforms." },
  { icon: Boxes, title: "Developer platforms", text: "Reusable templates and workflows that help teams ship with consistency." },
  { icon: Bot, title: "AI development", text: "Developing AI platforms and the software capabilities that power them." },
];

export const AboutSection = () => {
  return (
<<<<<<< HEAD
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
=======
    <section id="about" className="relative px-4 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex items-center gap-4 text-left">
          <span className="font-mono text-xs text-primary">01</span>
          <span className="h-px w-10 bg-primary/35" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-foreground/40">Mission profile</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="text-left">
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Curiosity is the fuel.<br />
              <span className="text-primary">Impact is the destination.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/60 md:text-lg md:leading-8">
              I’m a third-year Software Engineering student at UPRM who enjoys
              working where complex systems, clear product thinking, and
              collaborative teams meet.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/60">
              From aerospace research and rocket recovery systems to campus
              products and developer platforms, I learn by building—and I bring
              discipline, adaptability, and thoughtful communication to every mission.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="space-button">
                Let’s work together
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="space-button-secondary">
                Download résumé
                <Download size={16} aria-hidden="true" />
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
              </a>
            </div>
          </div>

<<<<<<< HEAD
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
=======
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 text-left md:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-[80px]" />
            <div className="relative flex items-start justify-between gap-6">
              <div>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary">Current coordinates</span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">Software Engineering Co-op</h3>
                <p className="mt-1 text-sm font-semibold text-foreground/45">Collins Aerospace · 2026—Present</p>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                <Orbit size={22} aria-hidden="true" />
              </div>
            </div>
            <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [Gauge, "Agile delivery"],
                [Boxes, "Software templates"],
                [Bot, "AI platforms"],
                [Code2, "DevOps workflows"],
              ].map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3">
                  {createElement(Icon, { size: 16, className: "text-primary", "aria-hidden": true })}
                  <span className="text-sm font-semibold text-foreground/65">{label}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-7 border-t border-border pt-5">
              <p className="text-sm leading-6 text-foreground/50">
                Also building technical presentations for leadership and
                translating engineering progress into clear decisions.
              </p>
            </div>
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="glass-panel card-hover rounded-[1.5rem] p-5 text-left md:p-6">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  {createElement(Icon, { size: 18, "aria-hidden": true })}
                </div>
                <span className="font-mono text-xs text-foreground/25">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/50">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
