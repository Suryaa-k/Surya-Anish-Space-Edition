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
      description:
        "A React app that lets users search for books and browse the results in a clean, responsive interface.",
      highlights: [
        "Search box that returns book results for a user's query",
        "Card-based layout for quickly scanning results",
        "Component-based React architecture with reusable UI pieces",
    ],
      tech: ["React", "JavaScript", "CSS3"],
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
    description:
      "My main developer portfolio – one place for my projects, skills, education, achievements and contact details.",
    highlights: [
      "Dedicated sections for projects, skills, education, achievements and certifications",
      "Responsive layout that works across desktop and mobile",
      "Contact section with links to my social profiles",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
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
    description:
      "A portfolio website for my friend Tarun Varma, presenting his skills, projects and background.",
    highlights: [
      "Clean layout that highlights his work and skills",
      "Responsive design for desktop and mobile",
      "Contact details and social links in one place",
    ],
    tech: ["Portfolio", "UI/UX Design"],
  },
  {
        title: "Weather Forecast",
    category: "MERN",
    description:
      "A React app that fetches live weather data from a weather API and shows current conditions for any city a user searches.",
    highlights: [
      "Search by city name",
      "Live data fetched from a weather API",
      "Clear, responsive display of temperature and conditions",
    ],
    tech: ["React", "Weather API", "JavaScript", "CSS3"],
  },
  {
        title: "Recipe Ideas",
    category: "MERN",
    description:
      "A front-end React app that suggests recipe ideas and lets users browse dishes at a glance.",
    highlights: [
      "Browsable recipe cards",
      "Reusable React components",
      "Responsive layout for desktop and mobile",
    ],
    tech: ["React", "JavaScript", "CSS3"],
  },
  {
        title: "Surya Anish K 2.0",
    category: "Portfolios",
    description:
      "Portfolio 2.0 – the second iteration of my developer portfolio, with a refreshed design and expanded sections.",
    highlights: [
      "Redesigned look and feel compared to the first version",
      "Updated project showcase and skills sections",
      "Responsive across screen sizes",
    ],
    tech: ["Portfolio", "UI/UX Design"],
  },
  {
        title: "Media Management System",
    category: "MERN",
    description:
      "A full-stack MERN application for uploading, organising and managing media files.",
    highlights: [
      "MongoDB database for storing media records",
      "Express and Node.js REST API on the back end",
      "React front end for browsing and managing media",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
        title: "Surya Anish K 3.0",
    category: "Portfolios",
    description:
      "Portfolio 3.0 – the third iteration of my developer portfolio, with a more polished design and richer content.",
    highlights: [
      "Further refined design over Portfolio 2.0",
      "Expanded sections for projects, skills and achievements",
      "Responsive across screen sizes",
    ],
    tech: ["Portfolio", "UI/UX Design"],
  },
  {
        title: "E-Learning Platform",
    category: "MERN",
    description:
      "A full-stack web application for online learning, where learners can browse and access course content.",
    highlights: [
      "Course browsing through a learner-friendly interface",
      "Back-end APIs connected to a database",
      "Responsive front end for desktop and mobile",
    ],
    tech: ["Full-Stack"],
  },
  {
        title: "Adithyaa Krishna's Portfolio",
    category: "Portfolios",
    description:
      "A portfolio website for my friend Adithyaa Krishna, presenting his skills, projects and background.",
    highlights: [
      "Clean layout that highlights his work and skills",
      "Responsive design for desktop and mobile",
      "Contact details and social links in one place",
    ],
    tech: ["Portfolio", "UI/UX Design"],
  },
  {
        title: "Password Manager",
    category: "Python",
    description:
      "A secure password management app for storing and retrieving credentials in one protected place.",
    highlights: [
      "Secure storage of saved credentials",
      "Add, view, edit and delete saved entries",
      "Simple, user-friendly interface",
    ],
    tech: ["Security"],
  },
  {
        title: "Library Management System",
    category: "Python",
    description:
      "A Django web application for managing a library's books and members.",
    highlights: [
      "Add, update and remove books in the catalogue",
      "Manage members and track book issues and returns",
      "Django ORM and admin for data management",
    ],
    tech: ["Python", "Django", "HTML5", "CSS3"],
  },
  {
        title: "Skill Bridge",
    category: "Python",
    description:
      "A Python–Django web platform where students exchange skills, connecting people who want to learn with those who can teach.",
    highlights: [
      "User accounts and profiles listing the skills each student offers",
      "Discovery of students to learn from or teach",
      "Django back end with a database-backed data model",
    ],
    tech: ["Python", "Django"],
  },
  {
        title: "Netflix Edition",
    category: "Portfolios",
    description:
      "A special-edition portfolio themed after Netflix's streaming interface, presenting my work like a browsable catalogue.",
    highlights: [
      "Netflix-inspired layout and visual style",
      "Projects presented as browsable rows",
      "Responsive across screen sizes",
    ],
    tech: ["Portfolio", "Special Edition"],
  },
  {
        title: "Prime Edition",
    category: "Portfolios",
    description:
      "A special-edition portfolio themed after Prime Video's streaming interface, presenting my work like a browsable catalogue.",
    highlights: [
      "Prime Video-inspired layout and visual style",
      "Projects presented as browsable rows",
      "Responsive across screen sizes",
    ],
    tech: ["Portfolio", "Special Edition"],
  },
  {
    title: "Space Edition",
    category: "Portfolios",
    description:
      "A special-edition, space-themed portfolio built as a multi-page Next.js app, with an animated 3D starfield behind every page.",
    highlights: [
      "Animated 3D starfield background built with React Three Fiber and three.js",
      "Separate pages for Home, Projects, Education & Skills, Achievements and Hire Me",
      "Projects page with category tabs and automatic pagination",
      "Contact form on the Hire Me page, with a fully responsive dark UI",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
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
