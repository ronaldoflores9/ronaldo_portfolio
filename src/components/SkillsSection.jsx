import { useState } from "react";
import { cn } from "../lib/utils";
const MAX_YEARS = 5;

const skills = [
  // Technical Skill
  { name: "HTML/CSS", years: 5, category: "technical" },
  { name: "JavaScript", years: 1, category: "technical" },
  { name: "React", years: 1, category: "technical" },
  { name: "Next.js", years: 1, category: "technical" },
  { name: "Microsoft 365", years: 5, category: "technical" },
  { name: "Github", years: 3, category: "technical" },
  { name: "Web Design", years: 4, category: "technical" },
  { name: "Figma", years: 2, category: "technical" },
  { name: "Python", years: 4, category: "technical" },
  { name: "C++", years: 2, category: "technical" },
  { name: "Dart", years: 2, category: "technical" },
  { name: "Flutter", years: 2, category: "technical" },
  { name: "OnShape", years: 1, category: "technical" },
  { name: "Java", years: 1, category: "technical" },
  { name: "LaTeX", years: 1, category: "technical" },

  // Soft Skills
  { name: "Strategic Planning", years: 5, category: "soft" },
  { name: "Research", years: 5, category: "soft" },
  { name: "Adaptable", years: 5, category: "soft" },
  { name: "Fast Learner", years: 5, category: "soft" },
  { name: "Problem Solving ", years: 5, category: "soft" },
  { name: "Discipline", years: 5, category: "soft" },
  { name: "Fast Learner", years: 5, category: "soft" },
  { name: "Effective Communication", years: 5, category: "soft" },
  { name: "Analytical Thinking", years: 5, category: "soft" },
];

const categories = ["all", "technical", "soft"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                  style={{ width: `${(skill.years / MAX_YEARS) * 100}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.years} yrs
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
