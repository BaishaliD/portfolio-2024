"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../../ui/tracing-beams";
import Image1 from "../../assets/projects/cake-shop/landing-page.png";
import Image2 from "../../assets/projects/cake-shop/landing-page-2.png";
import Image3 from "../../assets/projects/cake-shop/landing-page-3.png";
import Image4 from "../../assets/projects/cake-shop/product.png";
import Image5 from "../../assets/projects/cake-shop/wedding-cakes.png";
import Prose from "@/app/components/prose";
import ProjectTitle from "../../components/project-title";
import Back from "../../assets/icons/back-arrow.svg";

function CakeShop() {
  return (
    <>
      <ProjectTitle title={"The Cake Bar & Co."} />
      <TracingBeam className="px-6 text-white mb-32">
        <div className="mx-auto ml-4 antialiased pt-4 relative">
          <Prose
            text={
              "The Cake Bar & Co. is a personal project I embarked on to delve into full-stack development."
            }
            size="large"
          />
          <Prose
            text={
              "For the frontend, I concentrated on creating an attractive UI with all the essential functionalities of an e-commerce website. Built with React, the frontend emphasizes a visually appealing and eye-catching   design."
            }
            size="large"
            wrapperClass="my-8"
          />

          <div className="grid grid-cols-12 gap-6 my-16">
            <Image
              src={Image1}
              alt="blog thumbnail"
              className="col-span-12 md:col-span-7 rounded-lg object-cover inset-0 h-[250px]"
            />
            <Image
              src={Image2}
              alt="blog thumbnail"
              className="col-span-12 md:col-span-5 rounded-lg object-cover inset-0 h-[250px]"
            />
          </div>
          <Prose
            text={
              " A standout aspect of this project was experimenting with Framer Motion, where I learned many basics and integrated engaging animations. I designed the entire UI using Figma for wireframing."
            }
            size="large"
            wrapperClass="my-8"
          />
          <Prose
            text={
              "For the backend, I utilized Firebase, a Backend-as-a-Service (BAAS) solution that perfectly suited this project. Firebase allowed me to handle CRUD operations, authentication, and asset management efficiently."
            }
            size="large"
            wrapperClass="my-8"
          />
          <Prose
            text={
              "The major features include an animated landing page, user registration with email and SSO with Google, product listing, add to cart, wishlist, checkout functionality, customer reviews, product search and filter, and handling image upload and storage."
            }
            size="large"
            wrapperClass="my-8"
          />

          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <Image
              src={Image3}
              alt="blog thumbnail"
              className="col-span-12 md:col-span-5 rounded-lg object-cover inset-0 h-[300px]"
            />
            <Image
              src={Image4}
              alt="blog thumbnail"
              className="col-span-12 md:col-span-7 rounded-lg object-cover inset-0 h-[300px]"
            />
            <Image
              src={Image5}
              alt="blog thumbnail"
              className="md:col-start-3 col-span-12 md:col-span-8 rounded-lg object-cover inset-0 h-[350px]"
            />
          </div>
        </div>
      </TracingBeam>
    </>
  );
}

export default CakeShop;
