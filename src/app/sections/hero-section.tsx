"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

function HeroSection() {
  return (
    <HeroHighlight heroSection={true}>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-3xl lg:text-4xl font-normal text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className="text-xl md:text-2xl lg:text-3xl">
          Hey there! I'm Baishali
        </div>
        <div className="my-4">
          I am a <Highlight className="text-white">Frontend Engineer</Highlight>
        </div>
        <div className="text-md md:text-lg lg:text-xl font-normal">
          Crafting delightful web experiences with creativity and passion
        </div>
        {/* <button className="absolute bottom-0 p-8 text-zinc-200 z-10 hover:scale-105 transition-transform m-auto">
          <span className="border border-indigo-500 py-2 px-4 rounded-full text-base">
            Download Resume
          </span>
        </button> */}
      </motion.div>
      {/* <button className="absolute bottom-0 p-8 text-zinc-200 z-10 hover:scale-105 transition-transform m-auto">
        <span className="border border-indigo-500 py-2 px-4 rounded-full text-base">
          Download Resume
        </span>
      </button> */}
    </HeroHighlight>
  );
}

export default HeroSection;
