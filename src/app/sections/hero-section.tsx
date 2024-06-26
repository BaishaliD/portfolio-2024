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
        className="text-2xl px-4 md:text-3xl lg:text-4xl font-normal text-slate-200 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className="text-xl md:text-2xl lg:text-3xl">
          Hey there! I'm Baishali
        </div>
        <div className="my-4">
          I am a{" "}
          <Highlight className="text-slate-200">Frontend Engineer</Highlight>
        </div>
        <div className="text-md md:text-lg lg:text-xl font-normal">
          Crafting delightful web experiences with creativity and passion
        </div>
      </motion.div>
    </HeroHighlight>
  );
}

export default HeroSection;
