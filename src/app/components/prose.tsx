"use client";
import React from "react";
import { motion } from "framer-motion";
// import { cn } from "../utils/cn";

function Prose({ text }) {
  return (
    <div className="my-4">
      <div className="text-sm md:text-base lg:text-lg prose prose-sm text-slate-300 text-justify font-extralight">
        {text}
      </div>
    </div>
  );
}

export default Prose;
