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

const capabilities = [
  { icon: Code2, title: "Software systems", text: "Thoughtful, maintainable products across web, mobile, and internal platforms." },
  { icon: Boxes, title: "Developer platforms", text: "Reusable templates and workflows that help teams ship with consistency." },
  { icon: Bot, title: "AI development", text: "Developing AI platforms and the software capabilities that power them." },
];

export const AboutSection = () => {
  return (
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
              </a>
            </div>
          </div>

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
