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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  // {
  //   title: "Next JS Developer",
  //   icon: backend,
  // },
  {
    title: "Web Designer",
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
    title: "React.js Developer",
    company_name: "Freelance",
    icon: "/tech/reactjs.png",
    iconBg: "#16213e",
    date: "Feb 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and developers to deliver high-quality products.",
      "Creating reusable components and implementing responsive designs to ensure seamless user experiences.",
      "Performing code reviews and maintaining best practices for scalability and performance.",
    ],
  },
  // {
  //   title: "Next.js Developer",
  //   company_name: "Freelance",
  //   icon: "/tech/nextjs.png",
  //   iconBg: "#E0E0E0",
  //   date: "April 2024 - Present",
  //   points: [
  //     "Building server-side rendered (SSR) and static site generated (SSG) applications for improved performance.",
  //     "Optimizing applications with Next.js for SEO-friendly structures and fast loading times.",
  //     "Integrating APIs, third-party services, and ensuring smooth deployment workflows.",
  //     "Implementing advanced dynamic routing and middleware for scalable web solutions.",
  //   ],
  // },
  // {
  //   title: "Graphics Designer",
  //   company_name: "Freelance",
  //   icon: "/tech/design.png",
  //   iconBg: "orange",
  //   date: "Jan 2023 - March 2024",
  //   points: [
  //     "Crafting high-quality visuals, including logos, banners, and marketing materials.",
  //     "Collaborating with clients to develop compelling designs tailored to their needs.",
  //     "Producing engaging content for websites, social media, and print materials.",
  //     "Ensuring timely delivery of projects while maintaining a strong attention to detail.",
  //   ],
  // },
  {
    title: "Web Designer",
    company_name: "Freelance",
    icon: "/tech/figma.png",
    iconBg: "#16213e",
    date: "Jan 2023 - July 2023",
    points: [
      "Learning to design simple, clean, and user-friendly web layouts.",
      "Practicing creating prototypes and mockups to improve design ideas.",
      "Focusing on consistency across designs for better user experiences.",
      "Using tools like Figma to explore and streamline the design process.",
    ],
  },
  {
    title: "Soft Skills",
    company_name: "Freelance",
    icon: "/tech/skill.png",
    iconBg: "#FFFFFF",
    date: "Ongoing",
    points: [
      "Learning to guide small groups and work together toward shared goals.",
      "Practicing problem-solving and thinking creatively to find simple solutions.",
      "Communicating with clients and teammates to keep things clear and build trust.",
      "Getting better at handling new challenges and staying motivated in busy situations.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
