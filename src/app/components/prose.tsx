"use client";
import React from "react";
import { motion } from "framer-motion";
// import { cn } from "../utils/cn";

function Prose({ text, wrapperClass = "", size = "normal" }) {
  return (
    <div className={wrapperClass}>
      <div
        className={`${
          size === "large"
            ? "text-md md:text-lg lg:text-xl"
            : "text-sm md:text-base lg:text-md"
        } prose prose-sm text-slate-300 text-justify font-extralight`}
      >
        {text}
      </div>
    </div>
  );
}

export default Prose;
