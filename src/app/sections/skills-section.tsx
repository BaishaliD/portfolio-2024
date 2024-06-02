"use client";
import SectionHeader from "../components/section-header";
import SkillCard from "../components/skill-card";
import { Boxes } from "../ui/background-boxes";
import BackgroundGridSmall from "../ui/background-grid-small";

const SKILLS = [
  {
    label: "React",
    url: "https://reactjs.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    label: "Javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image:
      "https://pngset.com/images/logo-javascript-logo-javascript-images-text-symbol-number-rug-transparent-png-1979976.png",
  },
  {
    label: "Redux Toolkit",
    url: "https://redux-toolkit.js.org/",
    image:
      "https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text.png",
  },
  {
    label: "Socket.io",
    url: "https://socket.io/",
    image:
      "https://banner2.cleanpng.com/20190120/wqk/kisspng-socket-io-javascript-express-js-react-logo-5c452f6410dd60.1342776015480379880691.jpg",
  },
  // {
  //   label: "Webpack",
  //   url: "https://webpack.js.org/",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHo9vJGHMtB9aqSBaElF_Sdp2R-87t1UUZuA&s",
  // },
  {
    label: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  { label: "Material UI", url: "", image: "" },
  { label: "Framer Motion", url: "", image: "" },
  // {
  //   label: "HTML5",
  //   url: "https://www.w3.org/html/",
  //   image:
  //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  // },
  // {
  //   label: "CSS3",
  //   url: "https://www.w3schools.com/css/",
  //   image:
  //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  // },
  {
    label: "Chart.js",
    url: "https://www.chartjs.org",
    image: "https://www.chartjs.org/media/logo-title.svg",
  },
  {
    label: "Angular",
    url: "https://angular.io",
    image: "https://angular.io/assets/images/logos/angular/angular.svg",
  },
  {
    label: "Node JS",
    url: "https://nodejs.org",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  // {
  //   label: "Git",
  //   url: "https://git-scm.com/",
  //   image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  // },
  // {
  //   label: "Figma",
  //   url: "https://www.figma.com/",
  //   image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  // },
];

function SkillItem({ label, url, image }) {
  return (
    <div className="border border-slate-600 p-4 md:text-2xl text-lg text-white relative z-20 flex flex-col justify-center items-center">
      <img src={image} alt={label} height={60} width={60} />
      {label}
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="">
      <BackgroundGridSmall>
        <SectionHeader title={"Skills"} />
        <div className="flex gap-8 w-4/5 md:w-3/4 flex-wrap mx-auto justify-center mt-20">
          {SKILLS.map((skill) => (
            <SkillCard {...skill} />
          ))}
        </div>
      </BackgroundGridSmall>
    </div>
  );
}

export default SkillsSection;
