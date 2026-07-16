/**
 * Portfolio data — single source of truth for all content.
 *
 * Edit this file to update any text, links, skills, projects, etc.
 * The website will automatically reflect the changes.
 */

import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Server,
  Layers,
  Palette,
  GitBranch,
  Boxes,
  Terminal,
  Cloud,
  ShieldCheck,
  LayoutGrid,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
 * Personal Info
 * ──────────────────────────────────────────────────────────── */
export const PERSONAL = {
  name: "Kazi Nihal Ahmed",
  monogram: "KN",
  role: "Backend-Focused Web Developer",
  tagline: "Django & REST API Specialist",
  headline: "Backend-Focused Web Developer | Django & REST API Specialist",
  subheadline:
    "Backend-focused web developer specializing in Django and REST APIs, with strong SQL database expertise and proficiency in modern frontend technologies including JavaScript, TypeScript, React, and Next.js.",
  shortIntro:
    "Currently working as an Intern at Recentriq LLC. Passionate about building scalable web applications, improving code quality, and continuously expanding expertise in system design, security, and deployment.",
  location: "Dhaka, Bangladesh",
  availability: "Available for freelance and full-time opportunities",
  email: "knasn1526@gmail.com",
  phone: "01976149269",
  resumeUrl: "https://drive.google.com/file/d/1zJDu5ZUmS_Ik6fSYRjcfAWwq08WTRj-l/view?usp=drive_link",
  profileImage: "/profile/nihal.png",
  heroBackground: "/profile/hero-bg.png",
} as const;

/* ────────────────────────────────────────────────────────────
 * Navigation
 * ──────────────────────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Certs", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/* ────────────────────────────────────────────────────────────
 * Social Links
 * ──────────────────────────────────────────────────────────── */
export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Nihal-123-456",
    icon: Github,
    handle: "@Nihal-123-456",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/k-nihal/",
    icon: Linkedin,
    handle: "in/k-nihal",
  },
  {
    label: "Email",
    href: `mailto:${PERSONAL.email}`,
    icon: Mail,
    handle: PERSONAL.email,
  },
] as const;

/* ────────────────────────────────────────────────────────────
 * Hero floating skill cards
 * ──────────────────────────────────────────────────────────── */
export const HERO_FLOATING_CARDS = [
  { label: "Django", color: "green" as const, position: "top-left" },
  { label: "REST APIs", color: "blue" as const, position: "top-right" },
  { label: "PostgreSQL", color: "teal" as const, position: "bottom-left" },
  { label: "Next.js", color: "orange" as const, position: "bottom-right" },
];

export const HERO_TECH_BADGES = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Django",
  "Node.js",
  "PostgreSQL",
  "React",
  "Next.js",
  "Docker",
  "Tailwind CSS",
];

/* ────────────────────────────────────────────────────────────
 * About — Journey Timeline
 * ──────────────────────────────────────────────────────────── */
export const ABOUT_PARAGRAPHS = [
  "I am a backend-focused web developer with expertise in Django, REST APIs, SQL database design, and modern web technologies. Although academically trained as a Textile Engineer, I transitioned into software development through intensive self-learning and practical experience.",
  "I am Currently serving as an Intern at Recentriq LLC. I am comfortable working across both frontend and backend systems and in leveraging modern AI-assisted development workflows to accelerate development while maintaining code quality.",
  "My primary interests include backend architecture, scalable systems, API design, database optimization, security, deployment, and full-stack product development.",
];

export const ABOUT_HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Years of learning & growth",
    description:
      "A multi-year self-directed journey from Textile Engineering into full-time software development, anchored in deliberate practice and consistent building.",
  },
  {
    icon: Sparkles,
    title: "Problem-solving mindset",
    description:
      "Approaches ambiguous problems by decomposing them into smaller, observable units — then validating each piece before composing a robust whole.",
  },
  {
    icon: Terminal,
    title: "Continuous learner",
    description:
      "Invests daily in system design, security, and deployment practices — translating theory into production-ready features shipped to real users.",
  },
  {
    icon: Briefcase,
    title: "Real-world product focus",
    description:
      "Builds products that real businesses depend on — from market analytics to multi-tenant ERPs — not just demos or coursework.",
  },
];

export const JOURNEY_TIMELINE = [
  {
    year: "2021 – 2025",
    title: "B.Sc. Textile Engineering",
    org: "Bangladesh University of Textiles",
    description:
      "Built a strong analytical foundation in engineering mathematics, materials, and process optimization — the same analytical rigor now applied to software systems.",
  },
  {
    year: "2024",
    title: "Self-directed transition into software",
    org: "Self-learning · Python · Django · SQL",
    description:
      "Began a structured self-learning path into Python, Django, REST APIs, and SQL — building real applications and contributing to side projects to bridge theory and practice.",
  },
  {
    year: "2025",
    title: "Graduated & deepened full-stack practice",
    org: "Next.js · TypeScript · Modern tooling",
    description:
      "Graduated in August 2025 and expanded into TypeScript, Next.js, and modern deployment workflows including Docker, Cloudflare, and CI-style automation.",
  },
  {
    year: "April 2026 – Present",
    title: "Software Development Intern",
    org: "Recentriq LLC",
    description:
      "Contributing to a stock market analytics platform and a 26+ module multi-tenant ERP system, working across full-stack development, REST APIs, and database design.",
  },
];

/* ────────────────────────────────────────────────────────────
 * Education
 * ──────────────────────────────────────────────────────────── */
export const EDUCATION = {
  degree: "Bachelor of Science (B.Sc.) in Textile Engineering",
  institution: "Bangladesh University of Textiles",
  graduated: "August 2025",
  description:
    "Built a strong analytical foundation through rigorous engineering coursework — mathematics, process control, and systems thinking. This foundation now powers a deliberate transition into software engineering, supported by a self-directed learning journey across Python, Django, databases, and modern full-stack tooling.",
  highlights: [
    "Strong analytical & systems-thinking foundation",
    "Self-directed transition into software engineering",
    "Hands-on practice across the modern web stack",
  ],
  icon: GraduationCap,
};

/* ────────────────────────────────────────────────────────────
 * Certifications
 * ──────────────────────────────────────────────────────────── */
export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  url: string;
  icon: LucideIcon;
  color: "blue" | "teal" | "green" | "orange";
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard / CS50",
    issued: "December 2025",
    url: "https://certificates.cs50.io/4b084d87-5fe6-467f-af14-ce9e9cdbbc60.pdf?size=letter",
    icon: Award,
    color: "blue",
  },
  {
    title: "CS50's Web Programming with Python and JavaScript",
    issuer: "Harvard / CS50",
    issued: "May 2025",
    url: "https://certificates.cs50.io/07e6fc72-7c04-46c2-b0e2-885f610ffa50.pdf?size=letter",
    icon: Award,
    color: "teal",
  },
  {
    title: "CSE Fundamentals",
    issuer: "Phitron",
    issued: "May 2024",
    url: "https://phitron.io/verification?validationNumber=PHBATCH361409701071",
    icon: Award,
    color: "green",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issued: "May 2024",
    url: "https://www.freecodecamp.org/certification/fccb1285cfb-6365-4677-8ba0-99310cd5506e/responsive-web-design",
    icon: Award,
    color: "orange",
  },
];

/* ────────────────────────────────────────────────────────────
 * Experience
 * ──────────────────────────────────────────────────────────── */
export const EXPERIENCES = [
  {
    company: "Recentriq LLC",
    position: "Software Development Intern",
    duration: "April 2026 – Present",
    location: "Remote",
    description:
      "Contributing to the development of production-grade business applications including a stock market analytics platform and a multi-tenant ERP system. Working across the full stack — from database design to REST APIs to Next.js interfaces.",
    responsibilities: [
      "Full-stack development across backend and frontend",
      "REST API development and integration",
      "Backend feature implementation and business logic",
      "Frontend development using Next.js and TypeScript",
      "Database design and integration",
      "Business module development (invoices, inventory, chat, etc.)",
      "Authentication and authorization systems (JWT, MFA)",
      "Cross-functional team collaboration",
    ],
    technologies: [
      "Node.js",
      "Express",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Tailwind CSS",
    ],
    icon: Briefcase,
  },
];

/* ────────────────────────────────────────────────────────────
 * Skills
 * ──────────────────────────────────────────────────────────── */
export type Skill = { name: string; level: number };
export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  color: "blue" | "teal" | "green" | "orange";
  description: string;
  skills: Skill[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "blue",
    description: "Core languages for backend, frontend, and systems work.",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "C", level: 70 },
      { name: "C++", level: 68 },
    ],
  },
  {
    title: "Backend Technologies",
    icon: Server,
    color: "green",
    description: "Frameworks and patterns for scalable server-side systems.",
    skills: [
      { name: "Django", level: 92 },
      { name: "Django REST Framework", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Flask", level: 75 },
    ],
  },
  {
    title: "Frontend Technologies",
    icon: LayoutGrid,
    color: "orange",
    description: "Modern UI tooling for responsive, performant interfaces.",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React", level: 82 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "teal",
    description: "Relational and document stores for production applications.",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 88 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: Cloud,
    color: "blue",
    description: "Containerization and modern cloud deployment workflows.",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Coolify", level: 80 },
      { name: "Render", level: 85 },
      { name: "Cloudflare", level: 80 },
    ],
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    color: "green",
    description: "Daily-driver tools for shipping high-quality software.",
    skills: [
      { name: "Git", level: 90 },
      { name: "Postman", level: 92 },
      { name: "Figma", level: 75 },
      { name: "Claude Code", level: 88 },
      { name: "Antigravity", level: 80 },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
 * Services
 * ──────────────────────────────────────────────────────────── */
export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
  color: "blue" | "teal" | "green" | "orange";
};

export const SERVICES: Service[] = [
  {
    title: "Backend Development & REST API",
    description:
      "Design and build scalable backend systems, APIs, authentication flows, and complex business logic with clean, maintainable architecture.",
    deliverables: [
      "REST API design & implementation",
      "Authentication & authorization",
      "Modular backend architecture",
    ],
    icon: Server,
    color: "green",
  },
  {
    title: "Custom Web Application Development",
    description:
      "Develop tailored web applications for startups, businesses, and enterprise workflows — engineered for clarity, performance, and longevity.",
    deliverables: [
      "End-to-end application build",
      "Domain-driven module design",
      "Production deployment & docs",
    ],
    icon: Boxes,
    color: "blue",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Schema design, query optimization, indexing strategies, and performance tuning for relational and document databases at scale.",
    deliverables: [
      "Normalized schema design",
      "Indexing & query tuning",
      "Migration & seed scripts",
    ],
    icon: Database,
    color: "teal",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development from database to user interface — coordinated, tested, and shipped as a unified product.",
    deliverables: [
      "Full-stack feature delivery",
      "API + UI integration",
      "CI-friendly release flow",
    ],
    icon: Layers,
    color: "orange",
  },
  {
    title: "Frontend Development (React / Next.js)",
    description:
      "Build responsive, modern, and performant user interfaces with thoughtful UX, accessibility, and polished micro-interactions.",
    deliverables: [
      "Component system design",
      "Responsive & accessible UI",
      "Performance optimization",
    ],
    icon: Palette,
    color: "blue",
  },
  {
    title: "System Design & Code Review",
    description:
      "Architecture reviews, security audits, and scalability planning — ensuring your codebase is ready for the next order of magnitude.",
    deliverables: [
      "Architecture review report",
      "Security & scalability audit",
      "Refactor roadmap",
    ],
    icon: ShieldCheck,
    color: "green",
  },
];

/* ────────────────────────────────────────────────────────────
 * Projects
 * ──────────────────────────────────────────────────────────── */
export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  features: string[];
  technologies: string[];
  contributions: string[];
  links: { label: string; href: string; primary?: boolean }[];
  color: "blue" | "teal" | "green" | "orange";
  accentGradient: string;
};

export const PROJECTS: Project[] = [
  {
    title: "DSE Block",
    category: "Full-Stack Market Analytics Platform",
    year: "2025",
    description:
      "A full-stack Node.js market analytics platform for the Dhaka Stock Exchange featuring automated market data collection, advanced market analysis, reporting, authentication, role-based access control, and AI integration capabilities.",
    features: [
      "Automated DSE data scraping",
      "JWT authentication",
      "Role & module access control",
      "Historical market analysis",
      "Block trade analysis",
      "PDF report generation",
      "Google Gemini AI integration",
      "Scheduled cron jobs",
    ],
    technologies: [
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "Cheerio",
      "Axios",
      "Puppeteer",
      "Docker",
    ],
    contributions: [
      "Built market data scrapers",
      "Developed protected REST APIs",
      "Implemented report generation",
      "Worked on analytics functionality",
      "Contributed to authorization systems",
    ],
    links: [
      { label: "Live Site", href: "https://dseblock.lalcha.com/", primary: true },
    ],
    color: "teal",
    accentGradient: "from-teal-400/30 via-teal-500/10 to-transparent",
  },
  {
    title: "Recentriq.com",
    category: "Enterprise SaaS Platform",
    year: "2026",
    description:
      "A comprehensive multi-tenant ERP/CRM platform containing 26+ integrated business modules — from CRM and HR to accounting, inventory, and team collaboration.",
    features: [
      "CRM",
      "HR Management",
      "Accounting",
      "Inventory Management",
      "Project Management",
      "Purchasing",
      "Team Chat",
      "Multi-channel Inbox",
      "MFA Security",
      "Stripe Billing",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Socket.io",
      "Docker",
      "JWT",
      "Cloudflare R2",
    ],
    contributions: [
      "Invoice module",
      "Purchase module",
      "Team Chat",
      "Inventory management",
      "Team management",
      "Accounting features",
      "Cross-module integrations",
    ],
    links: [
      { label: "Live Site", href: "https://recentriq.com/", primary: true },
    ],
    color: "blue",
    accentGradient: "from-blue-400/30 via-blue-500/10 to-transparent",
  },
  {
    title: "JobBoard",
    category: "Full-Stack Django Application",
    year: "2024",
    description:
      "A role-based job marketplace connecting employers and job seekers — with resume uploads, application tracking, education & experience management, notifications, and advanced filtering.",
    features: [
      "Role-based authentication",
      "Job posting system",
      "Resume uploads",
      "Application tracking",
      "Education management",
      "Work experience management",
      "Notification system",
      "Advanced filtering",
    ],
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    contributions: [
      "Designed and developed the entire application independently.",
    ],
    links: [
      { label: "Live Demo", href: "https://jobboard-vbjy.onrender.com/", primary: true },
      { label: "GitHub", href: "https://github.com/Nihal-123-456/JobBoard" },
    ],
    color: "orange",
    accentGradient: "from-orange-400/30 via-orange-500/10 to-transparent",
  },
  {
    title: "GroceryCart",
    category: "Full-Stack Real-Time E-Commerce Platform",
    year: "2026",
    description:
      "A full-stack Next.js 16 grocery delivery platform with three user roles (customer, admin, delivery man), real-time order tracking via a separate Socket.IO server, Stripe and COD payments, OTP-based delivery verification, geospatial rider assignment, and live chat between customers and delivery personnel.",
    features: [
      "NextAuth credentials + Google OAuth",
      "Role-based access (User / Admin / Delivery)",
      "Real-time order tracking via Socket.IO",
      "Stripe + Cash-on-Delivery payments",
      "Geospatial delivery assignment (MongoDB 2dsphere)",
      "OTP-based delivery verification",
      "Live chat between customer & rider",
      "Leaflet map with live GPS tracking",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Socket.IO",
      "MongoDB",
      "NextAuth v5",
      "Redux Toolkit",
      "Stripe",
      "Leaflet",
      "Tailwind CSS v4",
    ],
    contributions: [
      "Designed and developed the entire application independently.",
    ],
    links: [
      { label: "Live Demo", href: "https://e-commerce-demo-lovat.vercel.app/", primary: true },
    ],
    color: "blue",
    accentGradient: "from-blue-400/30 via-blue-500/10 to-transparent",
  },
];

/* ────────────────────────────────────────────────────────────
 * Stats
 * ──────────────────────────────────────────────────────────── */
export const STATS = [
  { label: "Years Coding", value: "3+", description: "Self-taught, deliberate practice" },
  { label: "Production Projects", value: "2", description: "Shipped to real users" },
  { label: "ERP Modules Built", value: "7+", description: "Across Recentriq.com" },
  { label: "Tech Stack Depth", value: "20+", description: "Languages, frameworks, tools" },
];

/* ────────────────────────────────────────────────────────────
 * Contact info
 * ──────────────────────────────────────────────────────────── */
export const CONTACT_INFO = [
  {
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    icon: Mail,
    copyable: true,
  },
  {
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone}`,
    icon: Phone,
    copyable: true,
  },
  {
    label: "Location",
    value: PERSONAL.location,
    href: "https://www.google.com/maps?q=Dhaka,Bangladesh",
    icon: MapPin,
    copyable: false,
  },
  {
    label: "GitHub",
    value: "github.com/Nihal-123-456",
    href: "https://github.com/Nihal-123-456",
    icon: Github,
    copyable: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/k-nihal",
    href: "https://www.linkedin.com/in/k-nihal/",
    icon: Linkedin,
    copyable: false,
  },
];

/* ────────────────────────────────────────────────────────────
 * Footer
 * ──────────────────────────────────────────────────────────── */
export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
