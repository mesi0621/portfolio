export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    photoUrl: string;
    cvUrl: string;
}

export interface InfoCard {
    id: string;
    title: string;
    content: string;
    icon: string;
}

export interface AboutInfo {
    bio: string;
    infoCards: InfoCard[];
}

export interface ProjectCard {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    liveDemoUrl: string;
    githubUrl: string;
}

export interface SkillsInfo {
    projectShowcases: ProjectCard[];
}

export interface ProjectsInfo {
    accomplishments: string[];
}

export interface ContactInfo {
    email: string;
    phone?: string;
    linkedinUrl: string;
    githubUrl: string;
}

export interface PortfolioData {
    personal: PersonalInfo;
    about: AboutInfo;
    skills: SkillsInfo;
    projects: ProjectsInfo;
    contact: ContactInfo;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface ContactFormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export interface Language {
    code: string;
    name: string;
    flag: string;
}

export interface MenuItem {
    id: string;
    label: string;
    targetSection: string;
}
