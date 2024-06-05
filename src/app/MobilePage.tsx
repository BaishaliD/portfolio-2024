import { useRef } from "react";
import AboutMeSection from "./sections/mobile/about-me";
import HeroSection from "./sections/mobile/hero-section";
import SkillsSection from "./sections/mobile/skills-section";
import ExperienceSection from "./sections/experience-section";
import ProjectSection from "./sections/mobile/projects-section";
import ContactMeSection from "./sections/mobile/contact-me-section";
import Tabs from "./components/mobile/tabs";
import { downloadResume } from "./utils/downloadResume";

const RESUME_DRIVE_LINK =
  "https://drive.google.com/file/d/1MoBYV4rgh_FRbijyUyx8yE9h05hROq0_/view?usp=sharing";

function MobilePage() {
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
        downloadResume();
        break;
      default:
        null;
    }
  };

  return (
    <div className="dark relative">
      <Tabs smoothScroll={smoothScroll} />
      <div className="hidden md:block">
        <button className="absolute right-0 p-8 text-zinc-200 z-10 hover:scale-105 transition-transform">
          <span
            className="border border-indigo-500 py-2 px-4 rounded-full"
            onClick={() => {
              window.open(RESUME_DRIVE_LINK, "_blank");
            }}
          >
            View Resume
          </span>
        </button>
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
        <ExperienceSection mobile />
      </div>
      <ContactMeSection />
    </div>
  );
}

export default MobilePage;
