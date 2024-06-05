"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../../ui/tracing-beams";
import Image1 from "../../assets/projects/mobibattle/mb-home.png";
import Image2 from "../../assets/projects/mobibattle/mb-home-2.png";
import Image3 from "../../assets/projects/mobibattle/mb-moji.png";
import Image4 from "../../assets/projects/mobibattle/mb-recharge.png";
import Image5 from "../../assets/projects/mobibattle/mb-matching.png";
import Image6 from "../../assets/projects/mobibattle/mb-game.png";
import Image7 from "../../assets/projects/mobibattle/mb-leaderboard.png";
import Prose from "@/app/components/prose";
import ProjectTitle from "@/app/components/project-title";

function Mobibattle() {
  return (
    <>
      <ProjectTitle title={"Mobibattle"} />
      <TracingBeam className="px-6 text-slate-200 mb-32">
        <div className="mx-auto ml-4 antialiased pt-4 relative">
          <div className="text-xl mb-8 mt-4">What is Mobibattle?</div>
          <Prose
            text={
              "Mobibattle is a competitive gaming platform that I developed while working at BlackNGreen. It offers an engaging environment where users participate in 2-player games for rewards. This project is special to me, as I started it from scratch and took it to production, learning the basics of developing a new project and overcoming challenges related to optimization, responsiveness, cross-browser compatibility, and localization."
            }
            size="large"
          />
          <Prose
            text={
              "In Mobibattle, users start by onboarding with their mobile number and linking their account to a virtual wallet, which they can recharge at any time. This allows them to enter paid games and compete for monetary rewards. Users can select a game from a list of 2-player games, and once they choose, they are matched with another player. The winner's wallet is credited with coins, adding to the competitive excitement. The platform also maintains daily, weekly, and monthly leaderboards, rewarding top players."
            }
            size="large"
            wrapperClass="my-8"
          />
          <Prose
            text={
              "Mobibattle also caters to new users by offering free games for a trial period, allowing them to get accustomed to the platform before engaging in paid competitions. Besides 2-player gaming, Mobibattle features a Tournament section where moderators can schedule tournaments for major e-sports games like PUBG, Free Fire, and Call of Duty. The platform handles the scheduling and prize distribution logic for these tournaments efficiently."
            }
            size="large"
            wrapperClass="my-8"
          />

          <div className="grid grid-cols-12 gap-6 my-16">
            <Image
              src={Image1}
              alt="blog thumbnail"
              className="col-span-6 md:col-start-2 md:col-span-3 rounded-lg object-cover inset-0 "
            />
            <Image
              src={Image2}
              alt="blog thumbnail"
              className="col-span-6 md:col-span-3 rounded-lg object-cover inset-0 "
            />
            <Image
              src={Image3}
              alt="blog thumbnail"
              className="col-start-4 col-span-6 md:col-span-3 rounded-lg object-cover inset-0 "
            />
          </div>
          <div className="text-xl mb-8">My role in Mobibattle</div>
          <Prose
            text={
              "I worked on Mobibattle from the ground up, taking it from inception to production. I was involved in multiple Proofs of Concept (POCs) during the early development stages. I collaborated closely with the product and marketing teams to understand the product, stakes, and engineering challenges, bringing the product vision to life. Mobibattle is currently live in 7 countries, showcasing its widespread appeal and success."
            }
            size="large"
            wrapperClass="my-8"
          />
          <div className="text-xl mb-8">Technology & Challenges</div>
          <Prose
            text={
              "Mobibattle is built using React and Tailwind CSS for a streamlined and responsive user interface. One of the key technical components is its reliance on WebSocket for real-time communication, essential for maintaining game scores and results. We implemented WebSocket using the socket.io library to ensure seamless real-time interactions between players."
            }
            size="large"
            wrapperClass="my-8"
          />
          <Prose
            text={
              "A significant challenge was optimizing the platform for regions with limited bandwidth. Ensuring smooth performance under low latency conditions was crucial. To address this, we used several optimization techniques, including prefetching and preloading critical resources, code splitting to load only necessary components, and asset optimization using a Content Delivery Network (CDN). Effective caching techniques were also implemented to reduce load times and enhance user experience in bandwidth-challenged areas."
            }
            size="large"
            wrapperClass="my-8"
          />
          <Prose
            text={
              "These strategies ensured that Mobibattle delivered a fast, reliable, and engaging gaming experience, even in regions with connectivity constraints."
            }
            size="large"
            wrapperClass="my-8"
          />

          <div className="grid grid-cols-12 gap-x-6 gap-y-8 my-16">
            <Image
              src={Image4}
              alt="blog thumbnail"
              className="col-span-6 md:col-span-3 rounded-lg object-cover inset-0 "
            />
            <Image
              src={Image5}
              alt="blog thumbnail"
              className="col-span-6 md:col-span-3 rounded-lg object-cover inset-0 "
            />
            <Image
              src={Image6}
              alt="blog thumbnail"
              className="col-span-6 md:col-span-3 rounded-lg object-cover inset-0 "
            />
            <Image
              src={Image7}
              alt="blog thumbnail"
              className="col-span-6 md:col-span-3 rounded-lg object-cover inset-0 "
            />
          </div>
          <Prose
            text={
              "Additionally, I worked on the backend of this application, specifically on the Gaming Engine module. The gaming engine, written in Node.js, handles the player matching logic and operates using an event-driven architecture. The Game Engine receives events from the client via WebSocket and returns events in response"
            }
            size="large"
            wrapperClass="my-8"
          />
          <Prose
            text={
              <div>
                The three primary functions of the game engine are:
                <ol>
                  <li>Handling matching logic for players.</li>
                  <li>
                    Handling real-time score updates for both the player and
                    their opponent.
                  </li>
                  <li>
                    Managing gaming bots in case real players are not available.
                  </li>
                </ol>
              </div>
            }
            size="large"
            wrapperClass="my-8"
          />
          <Prose
            text={
              "Another challenge was catering to multiple business clients based in different geographical locations. The client-side application needed to be modified according to the brand colors and themes of individual clients and handle multiple languages, timezones, and localizations. This was solved using a config-driven UI that could be tweaked as per the requirements."
            }
            size="large"
            wrapperClass="my-8"
          />
        </div>
      </TracingBeam>
    </>
  );
}

export default Mobibattle;
