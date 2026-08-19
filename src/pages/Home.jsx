import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceRoadmap } from "../components/ExperienceRoadmap";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceRoadmap />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
