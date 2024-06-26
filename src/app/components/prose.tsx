"use client";
import React from "react";
import { motion } from "framer-motion";
// import { cn } from "../utils/cn";

function Prose({
  text,
  wrapperClass = "",
  size = "normal",
}: {
  text: string | React.ReactNode;
  wrapperClass?: string;
  size?: string;
}) {
  return (
    <div className={wrapperClass}>
      <div
        className={`${
          size === "large"
            ? "text-md md:text-lg lg:text-xl"
            : "text-sm md:text-base lg:text-md"
        } prose prose-sm text-slate-200 text-justify font-extralight`}
      >
        {text}
      </div>
    </div>
  );
}

export default Prose;
