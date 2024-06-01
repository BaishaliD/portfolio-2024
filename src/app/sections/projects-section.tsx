"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import CakeShopThumbnail from "../assets/cake-shop-thumbnail.png";
import MobibattleThumbnail from "../assets/mobibattle-thumbnail.png";
import SuperheroThumbnail from "../assets/superhero-hunter-thumbnail.png";
import ProductivityThumbnail from "../assets/productivity-thumbnail.png";
import Button from "../components/button";

function ProjectSection() {
  return (
    <div className="h-[1200px] md:h-[900px] w-full md:w-3/4 mx-auto">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const Skeleton = ({ title, description, github, url }) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
      <div className="flex gap-4 my-8">
        <Button
          label="Live Link"
          handleClick={() => {
            window.open(url, "_blank");
          }}
        />
        <Button
          label="Github"
          handleClick={() => {
            window.open(github, "_blank");
          }}
        />
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: (
      <Skeleton
        title={"The Cake Bar & Co."}
        description={
          " A house by the river is a place of peace and tranquility. perfect place to relax, unwind, and enjoy life."
        }
        url="https://cake-shop-2022.web.app/"
        github="https://github.com/BaishaliD/cake-shop"
      />
    ),
    className: "col-span-12 md:col-span-7",
    thumbnail: CakeShopThumbnail,
  },
  {
    id: 2,
    content: (
      <Skeleton
        title={"Mobibattle"}
        description={
          " A house by the river is a place of peace and tranquility. perfect place to relax, unwind, and enjoy life."
        }
        github=""
        url=""
      />
    ),
    className: "col-span-12 md:col-span-5",
    thumbnail: MobibattleThumbnail,
  },
  {
    id: 3,
    content: (
      <Skeleton
        title={"Superhero Hunter"}
        description={
          " A house by the river is a place of peace and tranquility. perfect place to relax, unwind, and enjoy life."
        }
        github=""
        url=""
      />
    ),
    className: "col-span-12 md:col-span-5",
    thumbnail: SuperheroThumbnail,
  },
  {
    id: 4,
    content: (
      <Skeleton
        title={"Productivity Buddy"}
        description={
          " A house by the river is a place of peace and tranquility. perfect place to relax, unwind, and enjoy life."
        }
        github=""
        url=""
      />
    ),
    className: "col-span-12 md:col-span-7",
    thumbnail: ProductivityThumbnail,
  },
];

export default ProjectSection;
