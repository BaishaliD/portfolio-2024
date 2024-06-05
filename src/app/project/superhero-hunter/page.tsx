"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../../ui/tracing-beams";
import Image1 from "../../assets/projects/superhero/superhero-home.png";
import Image2 from "../../assets/projects/superhero/superhero-search.png";
import Image3 from "../../assets/projects/superhero/superhero-info.png";
import Image4 from "../../assets/projects/superhero/superhero-fav.png";
import Prose from "@/app/components/prose";
import ProjectTitle from "@/app/components/project-title";

function SuperheroHunter() {
  return (
    <>
      <ProjectTitle title={"Superhero Hunter"} />
      <TracingBeam className="px-6 text-slate-200 mb-32">
        <div className="mx-auto ml-4 antialiased pt-4 relative">
          <Prose
            text={
              "Superhero Hunter is a simple project where user gets a search interface to search for their favourite superhero from the DC and Marvel universe. It displays detailed information about the characters and lets users add their favorite characters to a Favourites list for easy access."
            }
            size="large"
          />
          <Prose
            text={
              "Superhero Hunter might be a smaller project, especially when compared to the other projects I have added in my portfolio. But it deserves a place here, since it's super important to me. It’s the first project I ever built, marking the start of my web development journey. Using just HTML, CSS, and Vanilla JS, this project was my crash course in web development."
            }
            size="large"
            wrapperClass="my-8"
          />
          <Prose
            text={
              "This was also the first project I showcased to my peers, and it received a lot of appreciation for its sleek and unique UI. Their positive feedback made me realize that I really enjoy working on the visual appeal of the UI as well, besides all the technical stuff. "
            }
            size="large"
            wrapperClass="my-8"
          />

          <div className="grid grid-cols-2 gap-6 my-16">
            <Image
              src={Image1}
              alt="blog thumbnail"
              className="col-span-2 md:col-span-1 rounded-lg object-cover inset-0 h-[250px] border border-slate-300"
            />
            <Image
              src={Image2}
              alt="blog thumbnail"
              className="col-span-2 md:col-span-1 rounded-lg object-cover inset-0 h-[250px] border border-slate-300"
            />
          </div>
          <Prose
            text={
              <div>
                <p className="mb-4">
                  This project taught me a bunch of stuff, like:
                </p>
                <ol>
                  <li className="mb-4">
                    <strong>1. DOM Manipulation:</strong> I got hands-on
                    experience updating web page content dynamically without any
                    libraries or frameworks.
                  </li>
                  <li className="mb-4">
                    <strong>2. Third-Party APIs:</strong> Working with the
                    Superhero API taught me how to fetch and display data from
                    external sources.
                  </li>
                  <li className="mb-4">
                    <strong>3. Dynamic Interactivity:</strong> I implemented
                    real-time search suggestions and learned about debouncing to
                    improve search performance.
                  </li>
                  <li className="mb-4">
                    <strong>4. Persistence: </strong> I used local storage to
                    keep the Favourites list persistent, ensuring data was saved
                    across sessions.
                  </li>
                  <li className="mb-4">
                    <strong>5. Responsive UI: </strong> I used CSS media queries
                    to achieve an UI that works on all device sizes.
                  </li>
                </ol>
              </div>
            }
            size="large"
            wrapperClass="my-8"
          />

          <div className="grid grid-cols-2 gap-6 my-16">
            <Image
              src={Image3}
              alt="blog thumbnail"
              className="col-span-2 md:col-span-1 rounded-lg object-cover inset-0 h-[250px] border border-slate-300"
            />
            <Image
              src={Image4}
              alt="blog thumbnail"
              className="col-span-2 md:col-span-1 rounded-lg object-cover inset-0 h-[250px] border border-slate-300"
            />
          </div>

          <Prose
            text={
              "This project was a fantastic learning experience that helped me understand the basics of web development. It was my playground for experimenting with core concepts and laid the foundation for my more complex projects."
            }
            size="large"
            wrapperClass="my-8"
          />
        </div>
      </TracingBeam>
    </>
  );
}

export default SuperheroHunter;
