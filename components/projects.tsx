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
    id: "react",
    name: "React",
    imgLink: "/public/icons/react.svg",
  },
  {
    id: "nextjs",
    name: "Next.js",
    imgLink: "/public/icons/nextjs.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    imgLink: "/public/icons/typescript.svg",
  },
  {
    id: "javascript",
    name: "JavaScript",
    imgLink: "/public/icons/javascript.svg",
  },
  {
    id: "html",
    name: "HTML",
    imgLink: "/public/icons/html.svg",
  },
  {
    id: "css",
    name: "CSS",
    imgLink: "/public/icons/css.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    imgLink: "/public/icons/nodejs.svg",
  },
  {
    id: "firebase",
    name: "Firebase",
    imgLink: "/public/icons/firebase.svg",
  },
  {
    id: "materialui",
    name: "Material UI",
    imgLink: "/public/icons/materialui.svg",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    imgLink: "/public/icons/tailwindcss.svg",
  },
  {
    id: "googlemapsapi",
    name: "Google maps API",
    imgLink: "/public/icons/googlemapsapi.svg",
  },
  {
    id: "git",
    name: "Git",
    imgLink: "/public/icons/git.svg",
  },
  {
    id: "github",
    name: "GitHub",
    imgLink: "/public/icons/github.svg",
  },
  {
    id: "c",
    name: "C",
    imgLink: "/public/icons/c.svg",
  },
  {
    id: "cpp",
    name: "C++",
    imgLink: "/public/icons/cpp.svg",
  },
  {
    id: "csharp",
    name: "C#",
    imgLink: "/public/icons/csharp.svg",
  },
];
