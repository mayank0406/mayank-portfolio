// ---------------------------------------------------------------------
// All portfolio content lives here. Edit this file to personalize the
// site — names, bio, links, projects, skills, experience, education.
// ---------------------------------------------------------------------

import avatarImg from "../assets/avatar.jpg";

export const profile = {
  name: "Mayank Singh",
  title: "Full Stack Developer (MERN Stack)",
  tagline:
    "I build scalable, production-ready MERN stack applications — architecting RESTful APIs, optimizing performance, and crafting clean, reusable React interfaces.",
  location: "Bangalore, India",
  email: "mayanksingh88882@gmail.com",
  phone: "+91 7054767298",
  resumeUrl: "/resume.pdf",
  avatar: avatarImg,
  social: {
    github: "https://github.com/mayank0406",
    linkedin: "https://www.linkedin.com/in/mayank-singh-21208a190/",
    twitter: "",
  },
  about: [
    "Full Stack Developer with 3+ years of experience building scalable, production-ready MERN stack applications. Skilled in React.js, Next.js, Node.js, Express.js, and MongoDB, with a strong track record of architecting RESTful APIs, optimizing application performance, and delivering measurable business impact.",
    "I focus on end-to-end feature ownership — from database schema design to frontend implementation — with an emphasis on clean code, reusability, and Agile collaboration.",
  ],
};

// export const skills = [
//   {
//     category: "Frontend",
//     items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Redux", "Context API", "Tailwind CSS", "HTML5", "CSS3"],
//   },
//   {
//     category: "Backend",
//     items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "RBAC"],
//   },
//   {
//     category: "Database",
//     items: ["MongoDB", "Mongoose ODM", "Aggregation Pipeline", "Compound Indexing"],
//   },
//   {
//     category: "Tools & DevOps",
//     items: ["Git", "GitHub", "Docker", "CI/CD", "Vercel", "Render", "Postman", "Cloudinary"],
//   },
// ];

export const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Context API",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "Middleware & Error Handling",
    ],
  },
  {
    category: "Database",
    items: [
      "MongoDB",
      "Mongoose ODM",
      "Aggregation Pipeline",
      "Compound Indexing",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    category: "Cloud (AWS)",
    items: ["EC2", "S3", "SNS", "IAM"],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Linux",
      "Vercel",
      "Render",
      "Postman",
      "Cloudinary",
    ],
  },
];
export const projects = [
  {
    title: "DealDox — Enterprise Workflow Platform",
    description:
      "Led end-to-end development of a multi-module enterprise platform covering survey management, pricing workflows, and multi-level approval matrix systems. Architected 15+ RESTful APIs, cut API response time by ~30%, and improved page load speed by ~40% through lazy loading, memoization, and paginated APIs.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC"],
    image: null,
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    title: "Portfolio Builder Platform",
    description:
      "A full MERN SaaS-style app enabling students to create and publish professional portfolios with pre-built templates, real-time content editing, and dynamic routing. Includes JWT auth, a portfolio management dashboard, and Cloudinary media uploads.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: null,
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    title: "AI Car Marketplace",
    description:
      "A full-stack car marketplace with AI-based recommendations, dynamic filtering by make/model/price, and booking management — backed by paginated, indexed MongoDB queries for fast search.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: null,
    liveUrl: "",
    repoUrl: "",
    featured: false,
  },
];

export const experience = [
  {
    type: "work",
    title: "Software Developer (Team Lead)",
    organization: "SPM Global Technologies",
    period: "Aug 2023 —  Present",
    description:
      "Led end-to-end development of DealDox, a multi-module enterprise platform for survey management, pricing workflows, and multi-level approval matrices, using React.js, Node.js, and MongoDB.",
    highlights: [
      "Architected and implemented 15+ RESTful APIs with Node.js/Express.js, reducing average API response time by ~30% through query optimization and caching.",
      "Engineered a dynamic approval matrix workflow automating multi-level routing, cutting turnaround time by 40%.",
      "Built 20+ modular, reusable React.js UI components, reducing frontend development time for new features by ~35%.",
      "Implemented JWT-based authentication and RBAC, securing sensitive workflows for 100+ users across multiple roles.",
      "Improved page load speed by ~40% via React lazy loading, memoization (useMemo, useCallback), and paginated APIs.",
      "Designed MongoDB schemas with aggregation pipelines and compound indexing, cutting complex query execution time by ~50%.",
      "Mentored 2 junior developers through code reviews and pair programming; managed CI/CD pipelines via GitHub Actions and Render/Vercel.",
    ],
  },
  {
    type: "work",
    title: "Full Stack Development Intern",
    organization: "JSpiders",
    period: "Sep 2022 — Jul 2023",
    description:
      "Contributed to an internal e-commerce platform as part of a 4-member full-stack team using Git/GitHub.",
    highlights: [
      "Developed and integrated 10+ responsive React.js UI components with mobile-first design.",
      "Built RESTful APIs using Node.js and Express.js for product listings and user management; designed MongoDB schemas with CRUD validation.",
      "Participated in code reviews and Agile sprint planning.",
    ],
  },
  {
    type: "education",
    title: "B.Tech",
    organization: "Madhu Vachaspati Institute of Engineering & Technology (AKTU)",
    period: "2015 — 2019",
    description: "Bachelor of Technology degree.",
  },
];

export const contact = {
  heading: "Let's work together",
  description:
    "I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out.",
};
