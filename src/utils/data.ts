// CV Data - Replace with your real information
export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "design" | "tools" | "soft";
}

export const about = {
  name: "Mehdaoui Zakariya",
  title: "Software Engineer",
  description: [
    "𝐻𝒾 𝒹𝑒𝒶𝓇",

    "ℑ'𝔪  ℤ𝕒𝕜𝕒𝕣𝕚𝕪𝕒 𝕄𝕖𝕙𝕕𝕒𝕠𝕦𝕚,   𝔞 𝔭𝔞𝔰𝔰𝔦𝔬𝔫𝔞𝔱𝔢 𝔰𝔬𝔣𝔱𝔴𝔞𝔯𝔢 𝔢𝔫𝔤𝔦𝔫𝔢𝔢𝔯𝔦𝔫𝔤 𝔰𝔱𝔲𝔡𝔢𝔫𝔱 𝔞𝔱  𝐸𝒩𝒮𝒜 𝒜𝑔𝒶𝒹𝒾𝓇",

    " ℑ 𝔥𝔞𝔳𝔢 𝔞 𝔰𝔱𝔯𝔬𝔫𝔤 𝔣𝔬𝔲𝔫𝔡𝔞𝔱𝔦𝔬𝔫 𝔦𝔫 𝔭𝔯𝔬𝔤𝔯𝔞𝔪𝔪𝔦𝔫𝔤 𝔞𝔫𝔡 𝔰𝔬𝔣𝔱𝔴𝔞𝔯𝔢 𝔡𝔢𝔰𝔦𝔤𝔫",

    "ℑ'𝔪 𝔢𝔞𝔤𝔢𝔯 𝔱𝔬 𝔞𝔭𝔭𝔩𝔶 𝔪𝔶 𝔰𝔨𝔦𝔩𝔩𝔰 𝔦𝔫 𝔯𝔢𝔞𝔩-𝔴𝔬𝔯𝔩𝔡 𝔭𝔯𝔬𝔧𝔢𝔠𝔱𝔰",
  ],

  location: "Agadir, Morrocco",
  email: "zakariya.mehdaoui@edu.uiz.ac.ma",
  linkedin: "https://www.linkedin.com/in/zakariya-mehdaoui-7a9301255/",
  github: "https://github.com/ZAKARIYA-MEHDAOUI",
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineering Student",
    company: "École nationale des sciences appliquées d'Agadir",
    location: "Agadir, Morocco",
    startDate: "Sep 2022",
    endDate: "Present",
    description: [
      "Pursuing an engineering degree specializing in software development and applications.",
      "Strong foundation in programming, software design, and problem-solving.",
    ],
    technologies: [
      "Java",
      "Python",
      "Advanced C",
      "R",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "React.js",
      "Django",
      "Spring",
      "Express",
    ],
  },
  {
    id: 2,
    title: "Network Intern",
    company: "Nice Technologie",
    location: "Agadir, Morocco",
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    description: [
      "Worked onsite on computer network configuration and performance analysis.",
      "Participated in hardware setup projects (video phones, IT cabinets) and camera programming.",
      "Enhanced skills in project management and teamwork.",
    ],
    technologies: ["Networking", "Project Management", "Technical Support"],
  },
  {
    id: 3,
    title: "Administrative Assistant",
    company: "INJAZ Al-Maghrib",
    location: "Agadir, Souss-Massa, Morocco",
    startDate: "Apr 2024",
    endDate: "Jun 2024",
    description: [
      "Part-time hybrid work focused on internal and external communications management.",
      "Managed communication channels and built strong client and partner relationships.",
    ],
    technologies: ["Communication", "Marketing", "CRM Systems"],
  },
  {
    id: 4,
    title: "IT Assistant",
    company: "MYHER PREFA ET MATERIAUX DE CONSTRUCTION",
    location: "El Marsa, Laâyoune-Sakia El Hamra, Morocco",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    description: [
      "Full-time onsite work assisting with IT systems and automating client data processes using Excel VBA.",
      "Worked on project management and enhanced database systems.",
    ],
    technologies: ["Excel VBA", "Project Management", "Data Management"],
  },
];

export const educations: Education[] = [
  {
    id: 1,
    degree: "Engineering Degree (Ongoing)",
    field: "Software and Application Development",
    institution: "ENSA Agadir",
    location: "Agadir, Morocco",
    startDate: "2022",
    endDate: "2027",
  },
  {
    id: 2,
    degree: "Certificate of Attendance",
    field: "Initiation to Microcontrollers",
    institution: "Technopark Agadir - Orange Digital Center",
    location: "Agadir, Morocco",
    startDate: "2022",
    endDate: "2022",
  },
  {
    id: 3,
    degree: "Certificate of Attendance",
    field: "Django and Express Frameworks",
    institution: "Technopark Agadir - Orange Digital Center",
    location: "Agadir, Morocco",
    startDate: "2025",
    endDate: "2025",
  },
  {
    id: 3,
    degree: "Baccalaureate - Mathematical Sciences A",
    field: "Mathematics",
    institution: "Lycée Hassan II",
    location: "Morocco",
    startDate: "2021",
    endDate: "2022",
  },
];

export const skills: Skill[] = [
  { id: 1, name: "C Programming", level: 4, category: "backend" },
  { id: 2, name: "C++", level: 4, category: "backend" },
  { id: 3, name: "Matlab", level: 3, category: "tools" },
  { id: 4, name: "Maple", level: 3, category: "tools" },
  { id: 5, name: "Excel VBA", level: 4, category: "tools" },
  { id: 6, name: "Word", level: 5, category: "tools" },
  { id: 7, name: "PowerPoint", level: 5, category: "tools" },
  { id: 8, name: "Communication", level: 5, category: "soft" },
  { id: 9, name: "Teamwork", level: 5, category: "soft" },
  { id: 10, name: "Problem Solving", level: 5, category: "soft" },
  { id: 11, name: "Navigation", level: 4, category: "soft" },
  { id: 12, name: "Marketing", level: 4, category: "soft" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "",
    description:
      "Developed the official website of DevInnova, a company focused on software engineering, highlighting their services, portfolio, and digital solutions with a modern, responsive design.",
    technologies: ["Html", "CSS", "JavaScript"],
    image: "img/Dev.jpg",
    github: "https://mehdaoui-zakariya.github.io/Projects/",
  },
];
