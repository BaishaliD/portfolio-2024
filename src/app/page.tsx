"use client";
import HeroSection from "./sections/hero-section";
import AboutMeSection from "./sections/about-me-section";
import SkillsSection from "./sections/skills-section";
import ProjectSection from "./sections/projects-section";
import ExperienceSection from "./sections/experience-section";
import ContactMeSection from "./sections/contact-me-section";
import Tabs from "./components/tabs";
import { useRef } from "react";
import Button from "./components/button";
import { motion } from "framer-motion";

const RESUME_DRIVE_LINK =
  "https://drive.google.com/file/d/1MoBYV4rgh_FRbijyUyx8yE9h05hROq0_/view?usp=sharing";

function App() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (section: string) => {
    switch (section) {
      case "Skills":
        if (skillsRef.current) {
          skillsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Projects":
        if (projectsRef.current) {
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Experience":
        if (experienceRef.current) {
          experienceRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Resume":
        window.open(RESUME_DRIVE_LINK, "_blank");
    }
  };

  return (
    <div className="dark relative">
      <Tabs smoothScroll={smoothScroll} />
      <div className="hidden md:block">
        <motion.button
          initial={{
            opacity: 0,
            top: 20,
          }}
          animate={{
            opacity: 1,
            top: 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          viewport={{ once: true }}
          className="absolute right-0 p-8 text-zinc-200 z-10 hover:scale-105 transition-transform"
        >
          <span
            className="border border-indigo-500 py-2 px-4 rounded-full"
            onClick={() => {
              window.open(RESUME_DRIVE_LINK, "_blank");
            }}
          >
            View Resume
          </span>
        </motion.button>
      </div>
      <HeroSection />
      <AboutMeSection />
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={projectsRef}>
        <ProjectSection />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <ContactMeSection />
    </div>
  );
}

export default App;
