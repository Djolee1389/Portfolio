export interface Project {  
    id: number; 
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    technologies: string[];
}

export interface Technology {
    id: string;
    name: string;
    imgLink: string;
    filter?: string;
    category?: string;
}