"use client";
import React from "react";

function SkillCard({
  label,
  image,
  url,
}: {
  label: string;
  image?: string;
  url?: string;
}) {
  return (
    <div className="cursor-pointer rounded-[10px] border-2 border-slate-500 bg-white dark:bg-black h-20 w-32 flex flex-col justify-center items-center md:text-md text-base font-normal text-slate-200 text-center">
      <div className="hover:scale-105 transition-transform flex justify-center items-center flex-col gap-4 h-full w-full p-4">
        {label}
      </div>
    </div>
  );
}

export default SkillCard;
