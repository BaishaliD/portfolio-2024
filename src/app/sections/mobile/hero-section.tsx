"use client";

import Contact from "@/app/components/contact";

function HeroSection() {
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center text-2xl px-8 md:text-3xl lg:text-4xl font-normal text-slate-200 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto relative">
      <div className="text-xl md:text-2xl lg:text-3xl">
        Hey there! I'm Baishali
      </div>
      <div className="my-4">
        I am a{" "}
        <div className="relative inline-block pb-1 px-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500">
          Frontend Engineer
        </div>
      </div>
      <div className="text-sm md:text-base lg:text-md font-normal">
        Crafting delightful web experiences with creativity and passion
      </div>
      <Contact />
    </div>
  );
}

export default HeroSection;
