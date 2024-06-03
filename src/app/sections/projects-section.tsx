"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import CakeShopThumbnail from "../assets/thumbnails/cake-shop-thumbnail.png";
import MobibattleThumbnail from "../assets/thumbnails/mobibattle-thumbnail.png";
import SuperheroThumbnail from "../assets/thumbnails/superhero-hunter-thumbnail.png";
import ProductivityThumbnail from "../assets/thumbnails/productivity-thumbnail.png";
import Button from "../components/button";
import GithubLogo from "../assets/icons/github-mark-white.svg";
import Arrow from "../assets/icons/arrow.svg";
import SectionHeader from "../components/section-header";
import Link from "next/link";

function ProjectSection() {
  return (
    <>
      <SectionHeader title={"Projects"} />
      <div className="h-[1200px] md:h-[900px] w-full md:w-3/4 mx-auto mt-12">
        <LayoutGrid cards={cards} />
      </div>
    </>
  );
}

const Skeleton = ({ title, description, github, url, route = null }) => {
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

        {route && (
          <Link href={"/project" + route}>
            <Button label="Read more" showChevron />
          </Link>
        )}
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
          "A full-stack e-commerce website for a cake shop featuring a stunning UI, built with React and Firebase, offering user registration, product management, and engaging animations."
        }
        url="https://cake-shop-2022.web.app/"
        github="https://github.com/BaishaliD/cake-shop"
        route="/cake-shop"
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
        route="/mobibattle"
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
        route="/superhero-hunter"
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
