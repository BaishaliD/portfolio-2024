"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import CakeShopThumbnail from "../assets/cake-shop-thumbnail.png";
import MobibattleThumbnail from "../assets/mobibattle-thumbnail.png";
import SuperheroThumbnail from "../assets/superhero-hunter-thumbnail.png";
import ProductivityThumbnail from "../assets/productivity-thumbnail.png";
import Button from "../components/button";
import GithubLogo from "../assets/icons/github-mark-white.svg";
import Arrow from "../assets/icons/arrow.svg";

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
      <div className="flex items-center gap-4 my-8">
        {github && (
          <img
            src={GithubLogo}
            height={30}
            width={30}
            onClick={() => {
              window.open(github, "_blank");
            }}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        )}
        {url && (
          <div className="border border-slate-200 rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer hover:scale-110 transition-transform">
            <img
              src={Arrow}
              height={16}
              width={16}
              color="white"
              onClick={() => {
                window.open(url, "_blank");
              }}
            />
          </div>
        )}

        <Button
          label="Read more"
          handleClick={() => {
            // router.push("project/cake-shop");
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
        url="https://mobibattle.com/"
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
        github="https://github.com/BaishaliD/SuperheroHunter"
        url="https://baishalid.github.io/SuperheroHunter/"
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
        github="https://github.com/BaishaliD/productivity"
        url=""
      />
    ),
    className: "col-span-12 md:col-span-7",
    thumbnail: ProductivityThumbnail,
  },
];

export default ProjectSection;
