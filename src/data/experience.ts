export interface ExperienceRole {
  title: string;
  period: string;
  description: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Lennox India Technology Centre',
    location: 'Chennai, India',
    roles: [
      {
        title: 'Associate Developer',
        period: 'Mar 2026 → Present',
        description: [
          'Engineered enterprise Label Management applications using Java, Spring Boot, React, TypeScript, and SQL, delivering production features and backend enhancements across business workflows.',
          'Eliminated dependency on external print services by designing an asynchronous Spring AMQP (RabbitMQ) pipeline that routes print jobs directly to target printers.',
          'Owned the engineering lifecycle end-to-end, from technical discovery and design through automated testing, release staging, and post-launch monitoring.',
          'Delivered 50+ customer-requested user stories by working directly with US-based engineering leads and business stakeholders in a lean Agile team.',
          'Reduced production incidents by over 30% by identifying root causes across file processing, RBAC, and backend integrations.',
          'Cut weekly Playwright regression runtime by 50% (26 → 13 minutes) by refactoring test fixtures and parallelising execution.',
          'Supported a seamless enterprise platform migration with zero cutover downtime.',
          'Used GitHub Copilot Agents, custom workspace skills, and context indexing to streamline unit testing, debugging, code reviews, and API documentation.',
        ],
      },
      {
        title: 'Graduate Engineer Trainee',
        period: 'Jul 2025 → Mar 2026',
        description: [
          'Developed production features while transitioning from backend to full-stack engineering with Spring Boot, React, TypeScript, Java, and SQL.',
          'Automated label validation across multiple environments using Java, reducing validation effort from 45 hours to 7 hours.',
          'Diagnosed and resolved 20+ production defects by analysing application behaviour, logs, backend workflows, and integrations.',
        ],
      },
      {
        title: 'Student Intern',
        period: 'Feb 2025 → Jul 2025',
        description: [
          'Built a strong foundation in Java and Spring ecosystem technologies, including Spring Boot, Spring Security, JPA, Hibernate, JDBC, SQL, Maven, AOP, and ORM through hands-on development.',
        ],
      },
    ],
  },
];


export const impactStats = [
  { value: '50+', label: 'USER STORIES' },
  { value: '30%+', label: 'FEWER INCIDENTS' },
  { value: '50%', label: 'FASTER REGRESSION' },
  { value: '45h → 7h', label: 'VALIDATION AUTOMATION' },
];

export const journeySteps = [
  {
    phase: 'INTERN',
    label: 'Feb → Jul 2025',
    description: 'Started with backend systems. Printer pipelines. RabbitMQ.',
  },
  {
    phase: 'BACKEND',
    label: 'Jul → Mar 2026',
    description: 'Graduated to full ownership. APIs, testing, production.',
  },
  {
    phase: 'FULL STACK',
    label: 'Mar 2026',
    description: 'Moved across the stack. Frontend, integration, deployment.',
  },
  {
    phase: 'PRODUCTION',
    label: 'Present',
    description: 'Building things that run in real environments for real users.',
  },
];
