import React from "react";
import SectionHeader from "../components/section-header";
import Prose from "../components/prose";

const EXPERIENCES = [
  {
    title: "Senior Software Engineer (Frontend)",
    company: "FabHotels",
    duration: "Dec 2023 - Present",
    description: [
      "Leading the end-to-end development of a new B2C product from scratch.",
      "Gathering business and functional requirements, creating proof of concepts, and leading UI development.",
      "Collaborating with cross-functional teams to ensure seamless product development.",
    ],
  },
  {
    title: "Software Engineer (Frontend)",
    company: "BlackNGreen (BNG Advacned Mobile SOlutions Pvt. Ltd.)",
    duration: "Feb 2021 - Dec 2023",
    description: [
      "Developed a highly optimized, responsive web UI for an online multiplayer gaming platform using React, Tailwind CSS, and Socket.io, tailored for bandwidth-challenged regions. The application is live in 7 countries.",
      "Created a server-driven UI for a Customer Value Management system (SAAS application) to manage campaigns and customer lifecycles.",
      "Developed and optimized a gaming engine based on NodeJS and Socket.io, supporting user interactions and bot functionality.",
      "Upgraded a multipage quiz portal to a single-page React application deployed in 8 countries, increasing conversion rates by 40%. Integrated Google Analytics to track user metrics.",
      "Designed and developed an MIS for visualizing data across multiple services and applications.",
    ],
  },
  {
    title: "Fullstack Web Development Intern",
    company: "Zykoon Technologies Pvt. Ltd.",
    duration: "Sep 2020 - Dec 2020",
    description: [
      "Developed a responsive, cross-browser-compatible e-learning website to enhance remote learning.",
      "Incorporated features such as video conferencing, uploading/exporting CSV reports, third-party payment gateway, in-app whiteboard, and doodling.",
      "Worked on JWT authentication, validation, and CRUD operations on the backend using NodeJS and MongoDB.",
    ],
  },
];

function ExperienceSection() {
  return (
    <div>
      <section className="dark:text-slate-200">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="">
            <SectionHeader title={"Work Experience"} />
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9 mt-16">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-slate-700">
                {EXPERIENCES.map((experience) => (
                  <TimelineItem {...experience} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({
  title,
  company,
  duration,
  description,
}: {
  title: string;
  company: string;
  duration: string;
  description: string[];
}) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gradient-to-b from-indigo-700 to-purple-500">
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <div className="text-sm tracking-wide dark:text-slate-400 mt-2">
        {company}
      </div>
      <time className="text-xs tracking-wide uppercase dark:text-slate-400 my-2">
        {duration}
      </time>
      {description.map((text) => (
        // <p className="mt-3 text-sm md:text-base lg:text-md prose prose-sm text-slate-300 text-justify font-extralight">
        //   {item}
        // </p>
        <Prose text={text} wrapperClass={"my-2"} />
      ))}
    </div>
  );
}

export default ExperienceSection;
