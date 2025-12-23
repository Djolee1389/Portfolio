import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "Izdavanje/Prodaja Nekretnina",
        description: "A real estate listing platform built with React",
        imageUrl: "/images/portfolio.png",
        projectUrl: "",
        technologies: ["React","Typescript","CSS", "Firebase", "Leaflet API"],
    },
    {
        id: 2,
        title: "ChatApp",
        description: "An social media application with real-time chat functionality.",
        imageUrl: "/images/ecommerce.png",
        projectUrl: "",
        technologies: ["React", "Typescript", "Firebase", "Material UI"],
    },
    {
        id: 3,
        title: "Fireboy and Watergirl Game",
        description: "A fun and interactive game built with JavaScript and HTML5 Canvas.",
        imageUrl: "/images/blog.png",
        projectUrl: "",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
]