"use client";
import React from "react";
import { motion } from "framer-motion";
// import { cn } from "../utils/cn";

function Prose({ text, wrapperClass = "" }) {
  return (
    <div className={wrapperClass}>
      <div className="text-sm md:text-base lg:text-md prose prose-sm text-slate-300 text-justify font-extralight">
        {text}
      </div>
    </div>
  );
}

export default Prose;
