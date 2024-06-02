"use client";
import { cn } from "../utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import Contact from "../components/contact";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  heroSection = false,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  heroSection?: boolean;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        `relative flex items-center bg-black justify-center w-full group ${
          heroSection ? "h-[40rem]" : "py-[2rem]"
        }`,
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
      {/* <button className="absolute bottom-0 p-8 text-zinc-200 z-10 hover:scale-105 transition-transform m-auto">
        <span className="border border-indigo-500 py-2 px-4 rounded-full text-base">
          Download Resume
        </span>
      </button> */}
      <Contact />
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
