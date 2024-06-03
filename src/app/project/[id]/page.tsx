"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { TracingBeam } from "../../ui/tracing-beams";
import CakeShopThumbnail from "../../assets/thumbnails/cake-shop-thumbnail.png";
import MobibattleThumbnail from "../../assets/thumbnails/mobibattle-thumbnail.png";
import SuperheroThumbnail from "../../assets/thumbnails/superhero-hunter-thumbnail.png";
import ProductivityThumbnail from "../../assets/thumbnails/productivity-thumbnail.png";

function ProjectInfoPage() {
  const { id } = useParams();
  return (
    <TracingBeam className="px-6 text-white">
      <div className="text-2xl">{id}</div>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className="text-xl mb-4">{item.title}</p>

            <div className="text-lg  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="300"
                  width="300"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <p>
        The Cake Bar & Co. is a personal project I embarked on to delve into
        full-stack development.
      </p>
    ),
    badge: "Changelog",
    image: CakeShopThumbnail,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          For the frontend, I concentrated on creating an attractive UI with all
          the essential functionalities of an e-commerce website. Built with
          React, the frontend emphasizes a visually appealing and eye-catching
          design.
        </p>
      </>
    ),
    badge: "Launch Week",
    image: SuperheroThumbnail,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          A standout aspect of this project was experimenting with Framer
          Motion, where I learned many basics and integrated engaging
          animations. I designed the entire UI using Figma for wireframing.
        </p>
      </>
    ),
    badge: "Launch Week",
    image: SuperheroThumbnail,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          For the backend, I utilized Firebase, a Backend-as-a-Service (BAAS)
          solution that perfectly suited this project. Firebase allowed me to
          handle CRUD operations, authentication, and asset management
          efficiently.
        </p>
      </>
    ),
    badge: "Launch Week",
    image: SuperheroThumbnail,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          The major features include an animated landing page, user registration
          with email and SSO with Google, product listing, add to cart,
          wishlist, checkout functionality, customer reviews, product search and
          filter, and handling image upload and storage.
        </p>
      </>
    ),
    badge: "Launch Week",
    image: SuperheroThumbnail,
  },
];

export default ProjectInfoPage;
