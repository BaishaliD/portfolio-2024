"use client";
import Prose from "../components/prose";
import SectionHeader from "../components/section-header";
import { motion } from "framer-motion";
import Photo from "../assets/linkedin-photo.png";
import Image from "next/image";

function AboutMeSection() {
  return (
    <div>
      <SectionHeader title="About Me" slideDown />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mx-12 md:mx-28 lg:mx-40 xl:mx-56 w-100 flex-col md:flex-row flex items-end gap-8"
      >
        <div className="w-full md:w-2/3">
          <Prose
            text="Hey there! I'm Baishali, a frontend engineer with a unique journey
          from the depths of theoretical physics to the fast-paced world of web
          development. While I hold a Master's degree in Physics, I found my
          true passion in coding, where I can create tangible solutions that
          make a real impact."
            wrapperClass={"my-4"}
          />
          <Prose
            text="I love diving deep into how the web works, and have honed my skills in building products from scratch and crafting sleek web UIs. My toolkit includes React, Redux, and core JavaScript."
            wrapperClass={"my-4"}
          />
          <Prose
            text="When I'm not crafting code, you'll likely find me lost in a canvas, bringing colors to life, or cozying up on the couch with a good TV series. Let's
        build something amazing together!"
            wrapperClass={"my-4"}
          />
        </div>
        <Image
          src={Photo}
          height="300"
          width="300"
          className="rounded-full shadow-photo"
          // onLoad={() => setLoaded(true)}
          // className={cn(
          //   "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
          //   loaded ? "blur-none" : "blur-md"
          // )}
          alt="thumbnail"
        />
      </motion.div>
    </div>
  );
}

export default AboutMeSection;
