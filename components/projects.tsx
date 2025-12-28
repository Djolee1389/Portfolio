import { Project } from "@/types/types";
import { Technology } from "@/types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Izdavanje/Prodaja Nekretnina",
    description: "A real estate listing platform built with React",
    imageUrl: "/images/apartments.png",
    projectUrl: "https://github.com/Djolee1389/IzdavanjeStanova",
    technologies: ["React", "Typescript", "CSS", "Firebase", "Leaflet API"],
  },
  {
    id: 2,
    title: "ChatApp",
    description:
      "An social media application with real-time chat functionality.",
    imageUrl: "/images/chat.png",
    projectUrl: "https://github.com/Djolee1389/ChatApp",
    technologies: ["React", "Typescript", "Firebase", "Material UI"],
  },
  {
    id: 3,
    title: "Fireboy and Watergirl Game",
    description:
      "A fun and interactive game built with JavaScript and HTML5 Canvas.",
    imageUrl: "/images/game.png",
    projectUrl: "https://github.com/Djolee1389/VatraIVoda",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const TechnologiesList: Technology[] = [
  {
    id: "html",
    name: "HTML",
    imgLink: "/images/icons/html5.svg",
    filter:
      "invert(53%) sepia(85%) saturate(4933%) hue-rotate(348deg) brightness(93%) contrast(91%)",
      category: "Frontend",
  },
  {
    id: "css",
    name: "CSS",
    imgLink: "/images/icons/css.svg",
    filter:
      "invert(21%) sepia(91%) saturate(1409%) hue-rotate(250deg) brightness(88%) contrast(92%)",
      category: "Frontend",
  },
  {
    id: "javascript",
    name: "JavaScript",
    imgLink: "/images/icons/javascript.svg",
    filter:
      "invert(80%) sepia(100%) saturate(4123%) hue-rotate(337deg) brightness(99%) contrast(97%)",
      category: "Frontend",
  },
  {
    id: "react",
    name: "React",
    imgLink: "/images/icons/react.svg",
    filter:
      "invert(82%) sepia(58%) saturate(1697%) hue-rotate(163deg) brightness(101%) contrast(97%)",
      category: "Frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    imgLink: "/images/icons/typescript.svg",
    filter:
      "invert(38%) sepia(92%) saturate(532%) hue-rotate(173deg) brightness(92%) contrast(87%)",
      category: "Frontend",
  },
  {
    id: "c",
    name: "C",
    imgLink: "/images/icons/c.svg",
    filter:
      "invert(100%) sepia(60%) saturate(2084%) hue-rotate(174deg) brightness(82%) contrast(94%)",
      category: "Programming Language",
  },
  {
    id: "cpp",
    name: "C++",
    imgLink: "/images/icons/cplusplus.svg",
    filter:
      "invert(15%) sepia(89%) saturate(3478%) hue-rotate(193deg) brightness(93%) contrast(101%)",
      category: "Programming Language",
  },
  {
    id: "nodejs",
    name: "Node.js",
    imgLink: "/images/icons/nodedotjs.svg",
    filter:
      "invert(48%) sepia(92%) saturate(266%) hue-rotate(62deg) brightness(98%) contrast(85%)",
      category: "Backend/API",
  },
  {
    id: "nextjs",
    name: "Next.js",
    imgLink: "/images/icons/nextdotjs.svg",
    filter:
      "invert(0%) sepia(6%) saturate(35%) hue-rotate(325deg) brightness(94%) contrast(100%)",
      category: "Frontend",
  },

  {
    id: "firebase",
    name: "Firebase",
    imgLink: "/images/icons/firebase.svg",
    filter:
      "invert(19%) sepia(80%) saturate(3899%) hue-rotate(11deg) brightness(94%) contrast(101%)",
    category: "Backend/API",
  },
  {
    id: "materialui",
    name: "Material UI",
    imgLink: "/images/icons/mui.svg",
    filter:
      "invert(31%) sepia(84%) saturate(2974%) hue-rotate(199deg) brightness(104%) contrast(103%)",
    category: "Frontend",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    imgLink: "/images/icons/tailwindcss.svg",
    filter:
      "invert(55%) sepia(60%) saturate(3634%) hue-rotate(153deg) brightness(101%) contrast(95%)",
    category: "Frontend",
  },
  {
    id: "googlemapsapi",
    name: "Maps API",
    imgLink: "/images/icons/googlemaps.svg",
    filter:
      "invert(43%) sepia(47%) saturate(1077%) hue-rotate(184deg) brightness(105%) contrast(92%)",
    category: "Backend/API",
  },
  {
    id: "git",
    name: "Git",
    imgLink: "/images/icons/git.svg",
    filter:
      "invert(50%) sepia(70%) saturate(4819%) hue-rotate(342deg) brightness(97%) contrast(94%)",
    category: "Version Control",
  },
  {
    id: "github",
    name: "GitHub",
    imgLink: "/images/icons/github.svg",
    filter:
      "invert(2%) sepia(6%) saturate(988%) hue-rotate(315deg) brightness(94%) contrast(86%)",
    category: "Version Control",
  },
  
  // {
  //   id: "csharp",
  //   name: "C#",
  //   imgLink: "/images/icons/csharp.svg",
  // },
];
