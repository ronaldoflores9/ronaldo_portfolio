import { Briefcase, Code, User } from "lucide-react";
import resume from "../assets/RONALDO FLORES RESUME.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer Student & Tech Innovator
            </h3>
            <p className="text-muted-foreground">
              With a strong foundation in software development, I’m passionate
              about building reliable, creative, and efficient solutions that
              solve real-world problems. My experience spans different areas of
              programming, from front-end interfaces to embedded systems and
              automation projects. I enjoy exploring new technologies, learning
              continuously, and applying my knowledge to projects that have
              impact.
            </p>

            <p className="text-muted-foreground">
              I’m driven by curiosity and collaboration — I love taking part in
              projects where design, logic, and innovation come together to
              create meaningful results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Download resume"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building efficient, scalable, and well-structured solutions
                    using modern programming languages and frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    UI/UX & Product Design
                  </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-friendly interfaces that
                    balance functionality and visual appeal.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Project Management & Team Collaboration
                  </h4>
                  <p className="text-muted-foreground">
                    Leading and collaborating on projects from concept to
                    delivery, ensuring organization, clarity, and teamwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
