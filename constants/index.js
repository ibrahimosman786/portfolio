import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Venture Builder",
    icon: <FullStackIcon />,
  },
  {
    title: "AI/ML Engineer",
    icon: <BackendIcon />,
  },
  {
    title: "Systems Architect",
    icon: <LeaderShipIcon />,
  },
  {
    title: "Tech Entrepreneur",
    icon: <ProblemSolvingIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "Founder",
    company_name: "HOMI (Fintech + AI Real Estate)",
    icon: "/assets/company/Homi_logo.jpg",
    iconBg: "#7c3aed",
    date: "Jan 2024 - Present",
    points: [
      "Transforming the $2.8 trillion UAE real estate market through AI-powered fintech solutions, reducing property search from months to seconds.",
      "Leading 25+ person engineering team building underwriting/ROI models that cut analysis time by 78% and increased close rates by 95%.",
      "Integrated developer APIs from 6+ major developers (Emaar, Damac, Binghatti, Ellington, Danube, Sobha); shipped investor dashboards.",
      "Architected platform with ETL/data pipelines, PostgreSQL schema, security; scaled from 0 to 30+ person product/engineering org.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "STARR - Alberta Rocketry Research",
    icon: "/assets/company/uastarr.webp",
    iconBg: "#10b981",
    date: "Sep 2024 - Jul 2025",
    points: [
      "Working on high-performance computing solutions and AI-driven optimizations for rocketry and aerospace applications.",
      "Implementing trajectory optimization algorithms using distributed computing on Ray clusters.",
      "Building real-time telemetry processing systems for rocket launches.",
      "Collaborating on open-source rocketry technology for educational missions.",
    ],
  },
  {
    title: "Software Team Member",
    company_name: "AlbertaSat - Ex-Alta 3 Mission",
    icon: "/assets/company/albertasat.png",
    iconBg: "#2563eb",
    date: "Sep 2024 - May 2025",
    points: [
      "Contributing to satellite missions that extend Canada's reach into space, developing end-to-end communication systems for CubeSats.",
      "Building communication systems using amateur radio frequencies, software-defined radio (SDR), and advanced signal processing.",
      "Working on Ex-Alta 3 satellite mission, implementing real-time telemetry processing and ground station communications.",
      "Engineering solutions for orbital deployment and space-based computing infrastructure.",
    ],
  },
  {
    title: "Founder & CEO",
    company_name: "NeoHemo",
    icon: "/assets/company/neohemo.png",
    iconBg: "#16a34a",
    date: "Jan 2020 - May 2022",
    points: [
      "Founded and led biotech startup focused on revolutionizing healthcare technology.",
      "Developed innovative solutions for medical applications and biotech research.",
      "Managed product development lifecycle from conception to market launch.",
      "Led cross-functional teams and established key partnerships in healthcare industry.",
    ],
  },
  {
    title: "Lead Developer & Founder",
    company_name: "Freelancing Collective - Self Employed",
    icon: "/assets/company/free.png",
    iconBg: "#16a34a",
    date: "Apr 2018 - Sep 2021",
    points: [
      "Built and scaled a freelancing collective through custom development projects.",
      "Delivered custom websites/apps for convention halls, clinics, retail, and SMBs; achieved on-time launch rate +25%, post-launch defects -35%.",
      "Led a 4–8 person development team; standardized SOWs, QA, and maintenance SLAs; implemented CI/CD, analytics, SEO/CRM.",
      "Stack: TypeScript/JavaScript, Next.js/React, Node.js, SQL; GitHub Actions, Docker.",
    ],
  },
  {
    title: "Instructor & Mentor",
    company_name: "Self-employed",
    icon: "/assets/company/insruct.png",
    iconBg: "#16a34a",
    date: "Jun 2019 - Nov 2019",
    points: [
      "Provided technical mentorship and training to aspiring developers.",
      "Designed and delivered comprehensive programming courses.",
      "Helped students build real-world projects and develop practical skills.",
      "Contributed to educational technology and skill development initiatives.",
    ],
  },
  {
    title: "Leadership Intern",
    company_name: "Rotary International",
    icon: "/assets/company/rotary.png",
    iconBg: "#16a34a",
    date: "Feb 2017 - Sep 2019",
    points: [
      "Supported community service initiatives and leadership development programs.",
      "Organized and managed volunteer events and community outreach programs.",
      "Developed leadership skills through mentorship and project management.",
      "Contributed to international service projects and humanitarian efforts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HOMI - Fintech Real Estate Platform",
    description:
      "Founded and built a comprehensive real estate investment platform with AI-powered underwriting. Leading 30+ person engineering team, integrated 6+ major developer APIs, reduced underwriting time by 78%, and increased close rates by 95%. Transforming property search from months to seconds.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
      {
        name: "aws",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/company/homi_project.jpg",
    source_code_link: "https://github.com/ibrahimosman786",
    deployed_link: "https://homiestate.com",
  },
  {
    name: "QuantumNeuron",
    description:
      "Multi-agent AI system with RAG and tool use on Ray cluster (A100). Wrote CUDA/Triton kernels for hot paths achieving 1.7x throughput improvement at p95 < 80ms under load. Implemented SLO-aware routing; unit cost -42% and task success +19% vs. prior pipeline.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "cuda",
        color: "green-text-gradient",
      },
      {
        name: "triton",
        color: "pink-text-gradient",
      },
      {
        name: "ray",
        color: "orange-text-gradient",
      },
      {
        name: "faiss",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/company/qn.png",
    source_code_link: "https://github.com/ibrahimosman786",
    deployed_link: "https://github.com/ibrahimosman786",
  },
  {
    name: "AlbertaSat - Ex-Alta 3",
    description:
      "Contributing to CubeSat missions that extend Canada's reach into space. Building end-to-end communication systems using amateur radio frequencies, software-defined radio (SDR), and advanced signal processing for the Ex-Alta 3 satellite mission.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      {
        name: "sdr",
        color: "pink-text-gradient",
      },
      {
        name: "embedded",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/company/ex-Alta.png",
    source_code_link: "https://github.com/AlbertaSat",
    deployed_link: "https://albertasat.ca",
  },
  {
    name: "ISRA.io - Blockchain Platform",
    description:
      "Smart contract platform revolutionizing blockchain applications with AI-driven automation and intelligent contract execution. Built on Solidity with advanced AI integration for autonomous contract management.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/company/blockchain.jpg",
    source_code_link: "https://github.com/ibrahimosman786",
    deployed_link: "https://github.com/ibrahimosman786",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/ibrahimosman786",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/ibrahimo1",
  },
];

const heroTexts = [
  "Serial Tech Entrepreneur",
  500,
  "AI & Space Engineer",
  500,
  "Founder",
  500,
  "Reinforcement Learning Engineer",
  500,
  "Venture Builder",
  500,
  "Systems Architect",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
