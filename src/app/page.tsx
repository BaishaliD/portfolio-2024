"use client";
import HeroSection from "./sections/hero-section";
import AboutMeSection from "./sections/about-me-section";
import SkillsSection from "./sections/skills-section";
import ProjectSection from "./sections/projects-section";
import ExperienceSection from "./sections/experience-section";
import ContactMeSection from "./sections/contact-me-section";

function App() {
  return (
    <div className="dark">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactMeSection />
    </div>
  );
}

export default App;
