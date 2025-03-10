import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3+ years of hands-on experience, I have honed my skills in front-end technology like React , as well as back-end technologies like Node.js, ExpressJs and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3+ years of professional experience, I have worked with a variety of technologies, including React, Node.js, ExpressJs and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2022",
    role: "Application Development Associate",
    company: "Accenture",
    description: `• Worked on creating and maintaining reusable Ul components.\n
            • Implemented Spinner Loading, Carousel, and Accordion in the Ul to enhance user experience.\n
            • Maintained State Management using Context API.\n
            • Developed a dynamic modal with form validation and comprehensive error handling to enhance user interaction
              and ensure data integrity.\n
            • Implemented accessibility best practices across the Ul to improve user experience and ensure compliance with
              accessibility standards.\n
            • Design and integrated a product summary flyout feature, allowing users to quickly access key product information,
              leading to a more seamless and intuitive user experience.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "mongoDB"],
  },
  {
    year: "2022 - Present",
    role: "Application Development Analyst",
    company: "Accenture",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "AI-AGENT",
    image: project1,
    description:
      "1. Developed an intelligent AI agent that generates and executes JavaScript code in real-time to solve user queries and programming challenges 👨🏻‍💻 2. Engineered a high- performance backend using Node.js, Express, and Genezio to seamlessly process user requests and execute AI - generated code💻",
    technologies: ["HTML", "CSS", "React", "Node.js", "TypeScript", "Express", "zod"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "NOIDA",
  email: "nynishuyadav85@gmail.com",
};
