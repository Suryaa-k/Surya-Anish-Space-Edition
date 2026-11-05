import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/*  PERSONAL                                                           */
/* ------------------------------------------------------------------ */
export const PROFILE = {
  name: "Surya Anish K",
  shortName: "Surya",
  initials: "SAK",
  roles: ["Python Full-Stack Developer", "Web Developer", "Machine Learning Enthusiast"],
  location: "Hyderabad, Telangana, India",
  email: "Suryakudupudi888@gmail.com",
  phone: "+91 81210 21005",
  linkedin: "https://www.linkedin.com/in/surya-anish-6a2458227",
  github: "https://github.com/Suryaa-k",
  portfolio: "https://surya-anish.onrender.com",
  summary:
    "Software Developer skilled in designing, developing, and deploying full-stack applications. Proficient in modern programming languages, frameworks, and database management, with a strong emphasis on writing modular code and building responsive, user-centric architectures. Proven ability to quickly master new technologies, and optimize backend and frontend components for maximum speed and scalability.",
  heroTagline:
    "I design, build and deploy full-stack web applications with Python, Django and React — modular, responsive and built around the user.",
} as const;

export const SOCIALS: ReadonlyArray<{
  name: string;
  icon: IconType;
  link: string;
  handle: string;
}> = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: PROFILE.linkedin,
    handle: "surya-anish-6a2458227",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: `mailto:${PROFILE.email}`,
    handle: PROFILE.email,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: PROFILE.github,
    handle: "Suryaa-k",
  },
];

export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "Education", link: "/education" },
  { title: "Achievements", link: "/achievements" },
  { title: "Hire Me", link: "/hire-me" },
] as const;

/* ------------------------------------------------------------------ */
/*  HOME – quick facts                                                 */
/* ------------------------------------------------------------------ */
export const QUICK_FACTS = [
  { label: "Based in", value: "Hyderabad, India" },
  { label: "Degree", value: "B.Tech – Computer Science & Engineering" },
  { label: "Focus", value: "Full-stack web, Django & ML" },
  { label: "Languages", value: "Python · Java" },
] as const;

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/*  Add new projects here. Each tab paginates automatically (9/page).  */
/* ------------------------------------------------------------------ */
export const PROJECT_CATEGORIES = ["Python", "MERN", "Portfolios"] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
export const PROJECTS_PER_PAGE = 9;

export type Project = {
  title: string;
  category: ProjectCategory;
  year?: string;
  description: string;
  highlights?: string[];
  tech: string[];
  link?: string; // GitHub / live URL – add when available
};

export const PROJECTS: Project[] = [
  {
    title: "Book Finder",
    category: "MERN",
    description: "A React project for searching and discovering books.",
    tech: ["React"],
    link: PROFILE.github,
  },
  {
    title: "Detection of Cyber Attacks in Networks using ML Techniques",
    category: "Python",
    year: "2024",
    description:
      "A real-time network intrusion detection system built on ensemble ML methods, classifying both known and novel cyberattacks with 94% accuracy.",
    highlights: [
      "Automated response mechanisms and behavioral analysis modules that reduced false-positive alerts",
      "Tkinter desktop GUI with threat visualizations and monitoring dashboards for non-technical users",
      "Ensemble learning pipeline for known and novel attack classification",
    ],
    tech: ["Python", "Tkinter", "Pandas", "NumPy", "Scikit-learn", "Keras", "Ensemble Learning"],
    link: PROFILE.github,
  },
  {
    title: "Surya Anish K – Main Portfolio",
    category: "Portfolios",
    description: "My main developer portfolio.",
    tech: ["Portfolio"],
    link: PROFILE.portfolio,
  },
  {
    title: "Detection of Parkinson's Disease through Analysis of Image and Speech Data using AI/ML",
    category: "Python",
    year: "2024 – 2025",
    description:
      "A serverless dual-modality diagnostic system that analyzes brain MRI images and speech patterns to detect early signs of Parkinson's Disease.",
    highlights: [
      "Image segmentation to identify structural abnormalities in the substantia nigra",
      "Voice feature extraction (pitch, phonation, rhythm) for speech impairment analysis",
      "Two independent data sources combined in one ML pipeline to reduce diagnostic uncertainty",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Scikit-learn", "Ensemble Learning"],
    link: PROFILE.github,
  },
  {
    title: "Tarun Varma's Portfolio",
    category: "Portfolios",
    description: "A friend's portfolio – Tarun Varma.",
    tech: ["Portfolio"],
  },
  {
    title: "Weather Forecast",
    category: "MERN",
    description: "A React app that fetches live forecasts from a weather API.",
    tech: ["React", "Weather API"],
    link: PROFILE.github,
  },
  {
    title: "Recipe Ideas",
    category: "MERN",
    description: "A front-end React project for browsing recipe ideas.",
    tech: ["React", "Front-End"],
    link: PROFILE.github,
  },
  {
    title: "Surya Anish K 2.0",
    category: "Portfolios",
    description: "Portfolio 2.0 – the second iteration of my developer portfolio.",
    tech: ["Portfolio"],
    link: PROFILE.github,
  },
  {
    title: "Media Management System",
    category: "MERN",
    description: "A MERN stack project for managing media.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: PROFILE.github,
  },
  {
    title: "Surya Anish K 3.0",
    category: "Portfolios",
    description: "Portfolio 3.0 – the third iteration of my developer portfolio.",
    tech: ["Portfolio"],
    link: PROFILE.github,
  },
  {
    title: "E-Learning Platform",
    category: "MERN",
    description: "A full-stack web application for online learning.",
    tech: ["Full-Stack"],
    link: PROFILE.github,
  },
  {
    title: "Adithyaa Krishna's Portfolio",
    category: "Portfolios",
    description: "A friend's portfolio – Adithyaa Krishna.",
    tech: ["Portfolio"],
  },
  {
    title: "Password Manager",
    category: "Python",
    description: "A secure password management app.",
    tech: ["Security"],
    link: PROFILE.github,
  },
  {
    title: "Library Management System",
    category: "Python",
    description: "A Django web application for managing a library.",
    tech: ["Python", "Django"],
    link: PROFILE.github,
  },
  {
    title: "Skill Bridge",
    category: "Python",
    description: "A Python-Django web application.",
    tech: ["Python", "Django"],
    link: PROFILE.github,
  },
  {
    title: "Netflix Edition",
    category: "Portfolios",
    description: "A special-edition portfolio.",
    tech: ["Portfolio", "Special Edition"],
    link: PROFILE.github,
  },
  {
    title: "Prime Edition",
    category: "Portfolios",
    description: "A special-edition portfolio.",
    tech: ["Portfolio", "Special Edition"],
    link: PROFILE.github,
  },
];



/* ------------------------------------------------------------------ */
/*  EDUCATION & SKILLS                                                 */
/* ------------------------------------------------------------------ */
export const EDUCATION = [
  {
    institution: "Malla Reddy Institute of Technology and Science (JNTUH)",
    location: "Hyderabad",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    period: "2021 – 2025",
    coursework: [
      "Web Technologies",
      "Software Engineering",
      "Data Structures and Algorithms",
      "Database Management Systems",
    ],
  },
] as const;

export const SKILL_GROUPS = [
  { title: "Programming Languages", items: ["Python", "Java"] },
  {
    title: "Frontend & Design",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "UI/UX Design", "AutoCAD", "StarUML"],
  },
  { title: "Backend Development", items: ["Django", "REST API", "Tkinter", "Postman"] },
  { title: "Databases & Analytics", items: ["MySQL", "MongoDB", "Data Analysis", "Power BI"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Antigravity"] },
  { title: "AI & Generative AI", items: ["Prompt Engineering"] },
  {
    title: "Engineering Core",
    items: [
      "Data Structures & Algorithms",
      "Code Design",
      "Project/User Manual Documentation",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  ACHIEVEMENTS                                                       */
/*  Resume lists certification names only – add issuer/year/link here. */
/* ------------------------------------------------------------------ */
export type Certification = {
  title: string;
  issuer?: string;
  year?: string;
  link?: string;
};

export const CERTIFICATIONS: Certification[] = [
  { title: "Python Full-Stack" },
  { title: "SQL" },
  { title: "Web Development" },
  { title: "Artificial Intelligence" },
];

export type Award = {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
};

// No awards were listed on the resume. Add entries here and they appear automatically.
export const AWARDS: Award[] = [];
