export interface Project {
    id: string;
    title: string;
    description: string;
    students: string[];
    technologies: string[];
    image: string;
    date: string;
    year: string;
    likes?: number;
    liveUrl?: string;
    sourceUrl?: string;
  }