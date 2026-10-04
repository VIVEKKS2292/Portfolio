export interface Project {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  what: string;
  why: string;
  learned: string;
  github?: string;
  demo?: string;
  type: 'selected' | 'exploratory';
  status: 'complete' | 'in-progress' | 'experimental';
}

export const projects: Project[] = [
  {
    id: 'ldm',
    name: 'Learning & Development Management',
    tagline: 'Backend system for managing employee learning tracks.',
    stack: ['Spring Boot', 'REST API', 'JWT', 'Spring Security', 'JPA/Hibernate'],
    what: 'Built a full backend application with role-based access control, JWT authentication, and a persistent data layer for managing training programs.',
    why: 'Wanted to deeply understand how enterprise authentication and authorization works in practice — not just theory.',
    learned: 'Role-based systems need careful design at the data model level. JWT expiry + refresh logic is more nuanced than it looks.',
    github: 'https://github.com/L-DMS-V1/Batch-1',
    type: 'selected',
    status: 'complete',
  },
  {
    id: 'guidesphere',
    name: 'GuideSphere',
    tagline: 'Learning material and job search platform with ML recommendations.',
    stack: ['Flask', 'Python', 'JavaScript', 'MongoDB', 'Node.js'],
    what: 'Built a platform that surfaces relevant learning resources and job postings. Used Bag-of-Words + Cosine Similarity for content recommendations.',
    why: 'Curious whether a simple NLP approach could actually produce useful recommendations without a large ML pipeline.',
    learned: 'Even simple text similarity models produce surprisingly decent results when the domain is narrow. Full-stack integration across Flask + Node added useful complexity.',
    github: 'https://github.com/Guide-Sphere/Guide-Sphere-Web-Project',
    type: 'selected',
    status: 'complete',
  },
  {
    id: 'distritube',
    name: 'DistriTube',
    tagline: 'What happens when I try to build my own distributed video platform?',
    stack: ['React', 'NestJS', 'PostgreSQL', 'Prisma', 'MinIO', 'Docker'],
    what: 'Building a distributed video streaming platform from scratch — upload, storage, streaming, authentication, metadata management.',
    why: 'Wanted to understand how video platforms actually work under the hood. What happens between upload and playback?',
    learned: 'Object storage, chunked uploads, and token architecture are non-trivial. Still in progress. That\'s the point.',
    github: 'https://github.com/VIVEKKS2292',
    type: 'exploratory',
    status: 'in-progress',
  },
  {
    id: 'jarvis',
    name: 'JARVIS Desktop',
    tagline: 'A floating AI assistant widget for Windows. Phase 1 shipped.',
    stack: ['Electron', 'React', 'Vite', 'React-Konva', 'TypeScript'],
    what: 'Frameless, transparent Windows widget that stays on top of everything. Hexagonal UI with an AI core at the center. Modules for chat, weather, notes and system info. System tray, hide-to-tray, auto-start, draggable window.',
    why: 'Wanted to know if JARVIS could exist as a real desktop app — not a web chatbot. Ended up exploring desktop dev, AI integration and interactive UI design all at once.',
    learned: 'Electron\'s main/renderer split and IPC. Windows APIs: tray, screen positioning, auto-start. React-Konva for animated graphical UIs. Packaging, env configs and the quirks of building for Windows.',
    github: 'https://github.com/VIVEKKS2292/jarvis-personal-assistant',
    type: 'exploratory',
    status: 'complete',
  },
];

