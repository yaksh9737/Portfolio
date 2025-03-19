import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  rnw,
  hsinfo,
  carrent,
  jobit,
  tripguide,
  live,
  swarrnim,
  threejs,
  wisume,
  invoices,
  hms,
  gamelo,
  sms,
  interviewAI
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Development Course",
    institute_name: "Red and White MultiMedia Education",
    icon: rnw,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2024",
    points: [
      "Gained hands-on experience in frontend and backend development using React.js, Node.js, Express.js, and MongoDB.",
      "Worked on real-world projects, applying best practices in coding, version control (Git), and deployment.",
      "Developed and optimized responsive web applications, ensuring cross-browser compatibility.",
      "Built and integrated RESTful APIs to enhance application functionality and scalability.",
    ],
  },

  {
    title: "BCA (Bachelor Of Computer Applications)",
    institute_name: "Swarrnim Startup & Innovation University",
    icon: swarrnim,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Learning database management using SQL (MySQL) and NoSQL (MongoDB) for efficient data handling.",
      "Developing and maintaining web applications with modern technologies like HTML, CSS, JavaScript, and React.js.",
      "Enhancing problem-solving skills through data structures, algorithms, and competitive programming.",
      "Exploring cloud computing concepts and working with platforms like AWS, Azure, and Google Cloud.",
    ],
  },

  {
    title: "Web Developer (Internship)",
    company_name: "HS Infographics",
    icon: hsinfo,
    iconBg: "#1C1C1A",
    date: "Mar 2024 - Sep 2024",
    points: [
      "Building and maintaining interactive web applications using React.js and modern frontend technologies.",
      "Collaborating with designers and backend developers to deliver high-quality, scalable solutions.",
      "Ensuring responsive design, cross-browser compatibility, and optimal performance across devices.",
      "Participating in code reviews, debugging, and optimizing applications for better maintainability.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "Swiftrut Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2024 - Feb 2025",
    points: [
      "Developing and maintaining scalable web applications using React.js, Node.js, and MongoDB.",
      "Collaborating with designers, product managers, and backend developers to build high-performance solutions.",
      "Ensuring responsive design, cross-browser compatibility, and seamless user experiences.",
      "Reviewing code, debugging issues, and optimizing applications for efficiency and maintainability.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yaksh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Yaksh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Yaksh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Voranty",
    description:
      "All inclusive. Manage expenses, book travel, reimburse employees, create expense reports, and send invoices with OCR Feature which scan bills",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://voranty.vercel.app/",
    type: "Live",
  },
  {
    name: "SchedulX",
    description:
      " Our intuitive interface allows you to seamlessly design, preview, and schedule content across LinkedIn, Instagram, Facebook, and more—all in one place.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://schedulex-frontend-dot-nuxhealth-449518.el.r.appspot.com/",
    type: "Live",
  },
  {
    name: "Wisume",
    description:
      "Services include resume review and feedback, interview preparation tips, and career growth strategies.Count your ATS score here",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wisume,
    source_code_link: "https://project-wisume.web.app/",
    type: "Live",
  },
  {
    name: "NUXHealth",
    description:
      "Hospital Management System this webapplication helps patient to book there appointment.Doctor can also see how many appointent they have.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hms,
    source_code_link: "https://nuxhealth-frontend-dot-nuxhealth-449518.el.r.appspot.com/",
    type: "Live",
  },
  {
    name: "Gamelo",
    description:
      "Gamezop, Quizzop, Newszop, and Astrozop. Our products entertain over 45 million users around the world every month!.This platform helps user to play many games online",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gamelo,
    source_code_link: "https://gamelo-frontend.vercel.app/",
    type: "Live",
  },
  {
    name: "Society Management",
    description:
      "Society Management System this web-application helps residents to get there residences detail.Secreatery can also see how many residence live in society.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sms,
    source_code_link: "https://society-management-ebon.vercel.app/",
    type: "Live",
  },
  {
    name: "Interview AI",
    description:
      "Interview AI System this web-application helps user to get schedul there interview with AI or expert coach.In this web -application user can prepare there resume also.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: interviewAI,
    source_code_link: "https://interview-ai-frontend-0ogz.onrender.com/",
    type: "Live",
  },
  {
    name: "Invoices",
    description:
      "Invoices this web-application helps user to get genrate there invoices and maintain customer detail.In this web -application user can make there company portfolio.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    image: invoices,
    source_code_link: "https://invoice-frountend-live.vercel.app/",
    type: "Live",
  },
];

export { services, technologies, experiences, testimonials, projects };
