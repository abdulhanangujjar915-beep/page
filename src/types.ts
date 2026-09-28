export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'fullstack' | 'frontend' | 'ecommerce' | 'webapps';
  image: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experienceYears: string;
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  formattedPhone: string;
  email: string;
  whatsappUrl: string;
  location: string;
  status: string;
  githubUrl: string;
  linkedinUrl: string;
  bio: string;
}
