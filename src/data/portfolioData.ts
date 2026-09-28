import { Project, Experience, Education, SkillCategory, Certification, ContactInfo } from '../types';

export const contactData: ContactInfo = {
  name: 'Abdul Hanan',
  title: 'Full-Stack & Frontend Web Developer',
  phone: '03281230478',
  formattedPhone: '+92 328 1230478',
  email: 'abdulhanangujjar915@gmail.com',
  whatsappUrl: 'https://wa.me/923281230478?text=Hello%20Abdul%20Hanan,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  location: 'Lahore, Pakistan (Worldwide Remote)',
  status: 'Available for freelance & full-time roles',
  githubUrl: 'https://github.com/abdulhanan',
  linkedinUrl: 'https://linkedin.com/in/abdul-hanan',
  bio: 'Full-Stack & Frontend Web Developer building fast, responsive web apps with React, TypeScript, Node.js, and modern CSS. Focused on clean code and delightful UX.',
};

export const heroStats = [
  { value: '25+', label: 'Delivered Projects' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const projectsData: Project[] = [
  {
    id: 'nexus-analytics',
    title: 'Nexus SaaS Analytics',
    subtitle: 'Real-time Metrics Dashboard',
    category: 'fullstack',
    image: '/src/assets/images/project_modern_saas_1790600374138.jpg',
    description: 'High-performance real-time financial analytics dashboard with live charts, custom filters, and sub-200ms query latency.',
    longDescription: 'Engineered an end-to-end transactional analytics platform with React, TypeScript, and Express. Handles 50k+ virtualized records smoothly with real-time websocket updates.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    metrics: ['99.6% Uptime', '50k+ Virtualized Records', '<180ms Response'],
    features: [
      'Interactive time-series charts with custom date filters and comparisons',
      'Real-time transaction log with WebSocket live event feed',
      'Automated PDF/CSV export for executive financial summaries',
      'Fully responsive UI optimized for mobile, tablet, and desktop'
    ],
    liveUrl: 'https://example.com/demo/nexus-analytics',
    githubUrl: 'https://github.com/abdulhanan/nexus-analytics-saas'
  },
  {
    id: 'aura-ecommerce',
    title: 'Aura Modern Storefront',
    subtitle: 'Headless E-Commerce Experience',
    category: 'ecommerce',
    image: '/src/assets/images/project_ecommerce_shop_1790600388763.jpg',
    description: 'Ultra-fast, mobile-first e-commerce store with instant client-side filtering, animated cart, and seamless checkout.',
    longDescription: 'Achieved a 99+ mobile Lighthouse score with zero layout shift (CLS 0.0). Built with responsive image pipelines, optimistic cart updates, and Stripe checkout integration.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    metrics: ['99 Lighthouse Score', '0.0 Layout Shift', '+42% Higher Checkout'],
    features: [
      'Instant faceted search with multi-attribute filtering (category, price, color)',
      'Optimistic cart updates with zero layout shift (CLS 0.0)',
      'Smooth checkout flow with client-side form validation',
      'Dark and light mode with high-contrast accessibility'
    ],
    liveUrl: 'https://example.com/demo/aura-store',
    githubUrl: 'https://github.com/abdulhanan/aura-lifestyle-ecommerce'
  },
  {
    id: 'pulse-task-flow',
    title: 'Pulse Collaborative Board',
    subtitle: 'Sprint & Kanban Workspace',
    category: 'webapps',
    image: '/src/assets/images/project_task_flow_1790600403765.jpg',
    description: 'Agile sprint manager featuring fluid drag-and-drop Kanban columns, team workload tracking, and real-time state sync.',
    longDescription: 'A collaborative project workspace enabling engineering teams to organize sprints, assign tasks, and track velocity with instantaneous persistence.',
    techStack: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Vite'],
    metrics: ['60 FPS Drag Interaction', 'Zero Latency State', '100% Mobile Ready'],
    features: [
      'Smooth multi-column Kanban board with custom status columns',
      'Sprint burndown calculation and velocity tracking',
      'Detailed task modal with markdown descriptions and checklists',
      'Responsive touch gestures for mobile sprint inspection'
    ],
    liveUrl: 'https://example.com/demo/pulse-workspace',
    githubUrl: 'https://github.com/abdulhanan/pulse-sprint-flow'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Responsive, fast, and accessible user interfaces.',
    skills: [
      { name: 'React 18 / 19', level: 95, experienceYears: '3+ yrs', highlight: true },
      { name: 'TypeScript', level: 92, experienceYears: '3+ yrs', highlight: true },
      { name: 'JavaScript (ES6+)', level: 96, experienceYears: '4+ yrs', highlight: true },
      { name: 'Tailwind CSS', level: 98, experienceYears: '3+ yrs', highlight: true },
      { name: 'Next.js', level: 88, experienceYears: '2+ yrs' },
      { name: 'HTML5 & Modern CSS', level: 98, experienceYears: '4+ yrs' },
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'Server architectures, databases, and authentication.',
    skills: [
      { name: 'Node.js & Express', level: 92, experienceYears: '3+ yrs', highlight: true },
      { name: 'RESTful API Architecture', level: 94, experienceYears: '3+ yrs', highlight: true },
      { name: 'PostgreSQL / SQL', level: 85, experienceYears: '2+ yrs' },
      { name: 'MongoDB / NoSQL', level: 86, experienceYears: '2+ yrs' },
      { name: 'Firebase & Firestore', level: 88, experienceYears: '2+ yrs' },
      { name: 'JWT & Authentication', level: 90, experienceYears: '3+ yrs' },
    ]
  },
  {
    category: 'Tools & DevOps',
    description: 'Developer tooling and production deployment.',
    skills: [
      { name: 'Git & GitHub', level: 94, experienceYears: '4+ yrs', highlight: true },
      { name: 'Vite & Build Tools', level: 92, experienceYears: '3+ yrs', highlight: true },
      { name: 'Vercel / Cloud Run', level: 90, experienceYears: '2+ yrs' },
      { name: 'Performance & SEO', level: 95, experienceYears: '3+ yrs', highlight: true },
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Web Developer',
    company: 'Freelance & Consulting',
    location: 'Remote',
    period: '2024 — Present',
    isCurrent: true,
    description: 'Building custom web applications, SaaS dashboards, and responsive e-commerce storefronts for global clients.',
    highlights: [
      'Delivered 15+ production applications with 100% on-time delivery.',
      'Optimized load times to under 1.2 seconds, boosting client conversions.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    role: 'Frontend Web Developer',
    company: 'TechSphere Solutions',
    location: 'Lahore, Pakistan',
    period: '2023 — 2024',
    isCurrent: false,
    description: 'Developed accessible, responsive enterprise portals and optimized Core Web Vitals.',
    highlights: [
      'Refactored legacy codebases to React and TypeScript, cutting bugs by 40%.',
      'Achieved consistent 90+ Lighthouse performance scores.'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs']
  }
];

export const educationData: Education[] = [
  {
    id: 'edu-1',
    degree: 'BS in Computer Science (BSCS)',
    institution: 'University of Engineering and Technology',
    location: 'Lahore, Pakistan',
    period: '2020 — 2024',
    grade: 'First Class Honors',
    highlights: [
      'Specialized in Web Technologies, Software Engineering, and Database Architecture.'
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    name: 'Meta Front-End Developer Certificate',
    issuer: 'Meta (Coursera)',
    year: '2023',
  },
  {
    id: 'cert-2',
    name: 'Full-Stack Web Development',
    issuer: 'HKUST',
    year: '2023',
  }
];
