"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

function SkillCard({ label, image, url }) {
  return (
    <div>
      <BackgroundGradient className="cursor-pointer rounded-[10px] bg-white dark:bg-black h-20 w-32 flex flex-col justify-center items-center md:text-base text-sm font-normal text-white text-center">
        <div className="hover:scale-105 transition-transform flex justify-center items-center flex-col gap-4 h-full w-full">
          {/* <img src={image} alt={label} className="h-8" /> */}
          {label}
        </div>
      </BackgroundGradient>
    </div>
  );
}

export default SkillCard;
