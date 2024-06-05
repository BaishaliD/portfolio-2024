"use client";
import SectionHeader from "../../components/mobile/section-header";
import SkillCard from "@/app/components/mobile/skill-card";
import { SKILLS } from "../skills-section";

function SkillItem({
  label,
  url,
  image,
}: {
  label: string;
  url?: string;
  image: string;
}) {
  return (
    <div className="border border-slate-600 p-4 md:text-2xl text-lg text-slate-200 relative z-20 flex flex-col justify-center items-center">
      <img src={image} alt={label} height={60} width={60} />
      {label}
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="">
      <SectionHeader title={"Skills"} />
      <div className="flex gap-8 w-4/5 md:w-3/4 flex-wrap mx-auto justify-center mt-8">
        {SKILLS.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
