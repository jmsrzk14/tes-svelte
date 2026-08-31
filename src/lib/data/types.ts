export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Member {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  bio: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
}