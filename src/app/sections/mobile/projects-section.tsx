"use client";
import SectionHeader from "@/app/components/mobile/section-header";
import { cards } from "../projects-section";
import Image, { StaticImageData } from "next/image";

function ProjectSection() {
  return (
    <>
      <SectionHeader title={"Projects"} />
      <div className="px-4 my-8">
        {cards.map((card) => (
          <div key={card.id} className="bg-slate-900 rounded-lg p-4 my-4">
            <Image
              src={card.thumbnail}
              alt={"project image"}
              className="rounded-lg my-4"
            />
            {card.content}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
