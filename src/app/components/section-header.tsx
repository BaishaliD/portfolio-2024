"use client";
import React from "react";
import { motion } from "framer-motion";
// import { cn } from "../utils/cn";

function SectionHeader({ title }) {
  return (
    <div className="z-30 relative">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ width: "6rem", opacity: 0, y: -100 }}
        whileInView={{ width: "10rem", opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-center mx-auto"
      ></motion.div>
    </div>
  );
}

export default SectionHeader;
