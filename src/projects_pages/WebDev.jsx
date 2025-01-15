import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import "../allStyles/works.css";
import { Link } from "react-router-dom";
import WebDevCard from "./cards/WebDevCard";

const content = [
  {
    index: "1",
    image: [
      { img: "/projectImage/WebDev/myFeedback/img1.png" },
      { img: "/projectImage/WebDev/myFeedback/img2.png" },
      { img: "/projectImage/WebDev/myFeedback/img3.png" },
      { img: "/projectImage/WebDev/myFeedback/img4.png" },
    ],
    header: "My Feedback",
    about:
      "An engaging platform where users can explore comprehensive reviews for various hotels and effortlessly book their stay. Developed using React, TailwindCSS, HTML, CSS, and JavaScript, this project showcases a seamless blend of functionality and user experience.",
    liveLink: "https://myfeedback123.netlify.app/",
    github: "https://github.com/Niaziam/myFeedback",
    techList: [
      { techImage: "/tech/reactjs.png" },
      { techImage: "/tech/tailwind.png" },
      { techImage: "/tech/html.png" },
      { techImage: "/tech/css.png" },
      { techImage: "/tech/javascript.png" },
    ],
  },
  {
    index: "2",
    image: [
      { img: "/projectImage/WebDev/myCurrentPortfolio/img1.png" },
      { img: "/projectImage/WebDev/myCurrentPortfolio/img2.png" },
      { img: "/projectImage/WebDev/myCurrentPortfolio/img3.png" },
      { img: "/projectImage/WebDev/myCurrentPortfolio/img4.png" },
    ],
    header: "My Portfolio",
    about:
      "An impressive showcase of your web development skills, built using React, TailwindCSS, HTML, CSS, JavaScript, Three.js, and Swiper.js.This portfolio highlights your expertise with a sleek design and seamless user experience.",
    liveLink: "https://niazuddin.netlify.app/",
    github: "https://github.com/Niaziam/my_animated_protfolio",
    techList: [
      { techImage: "/tech/reactjs.png" },
      { techImage: "/tech/Threejs.png" },
      { techImage: "/tech/tailwind.png" },
      { techImage: "/tech/html.png" },
      { techImage: "/tech/css.png" },
      { techImage: "/tech/javascript.png" },
    ],
  },
  {
    index: "3",
    image: [
      { img: "/projectImage/WebDev/wizia/img1.png" },
      { img: "/projectImage/WebDev/wizia/img2.png" },
      { img: "/projectImage/WebDev/wizia/img4.png" },
      { img: "/projectImage/WebDev/wizia/img5.png" },
    ],
    header: "Wazia",
    about:
      "Wazia is a comprehensive digital agency platform that showcases the agency's services, portfolio, and team. Built with React, TailwindCSS, HTML, CSS, JavaScript, and Swiper.js, this website offers dynamic animations and interactive elements to engage visitors. It features sections for services, case studies, team members, and contact information, providing an immersive user experience and highlighting the agency's expertise.",
    liveLink: "https://hpwazia.netlify.app/",
    github: "https://github.com/Niaziam/wizia",
    techList: [
      { techImage: "/tech/reactjs.png" },
      { techImage: "/tech/tailwind.png" },
      { techImage: "/tech/material.png" },
      { techImage: "/tech/html.png" },
      { techImage: "/tech/css.png" },
      { techImage: "/tech/javascript.png" },
    ],
  },
  {
    index: "4",
    image: [
      { img: "/projectImage/WebDev/chillBoys/img1.png" },
      { img: "/projectImage/WebDev/chillBoys/img2.png" },
      { img: "/projectImage/WebDev/chillBoys/img4.png" },
      { img: "/projectImage/WebDev/chillBoys/img5.png" },
      { img: "/projectImage/WebDev/chillBoys/img6.png" },
    ],
    header: "Agency Website",
    about:
      "A comprehensive site for a digital agency showcasing services, portfolio, case studies, team members, and contact info. Built with React, TailwindCSS, HTML, CSS, JavaScript, and Swiper.js, it offers dynamic animations and interactive elements.",
    liveLink: "",
    github: "https://github.com/Niaziam/chillsbay",
    techList: [
      { techImage: "/tech/reactjs.png" },
      { techImage: "/tech/tailwind.png" },
      { techImage: "/tech/html.png" },
      { techImage: "/tech/css.png" },
      { techImage: "/tech/javascript.png" },
    ],
  },
  {
    index: "5",
    image: [{ img: "/projectImage/WebDev/to_do.png" }],
    header: "To-do app",
    about:
      "A sleek and efficient task management application built with HTML, CSS, JavaScript, and TailwindCSS. This app allows users to add, edit, and delete tasks, helping them stay organized and productive.",
    liveLink: "https://advance-javascript.netlify.app/",
    github: "https://github.com/Niaziam/to-do",
    techList: [
      { techImage: "/tech/tailwind.png" },
      { techImage: "/tech/html.png" },
      { techImage: "/tech/javascript.png" },
    ],
  },
  {
    index: "6",
    image: [
      { img: "/projectImage/WebDev/creativesForYou/img.png" },
      { img: "/projectImage/WebDev/creativesForYou/img2.png" },
      { img: "/projectImage/WebDev/creativesForYou/img3.png" },
      { img: "/projectImage/WebDev/creativesForYou/img4.png" },
    ],
    header: "IT-Support",
    about:
      "A responsive and user-friendly platform offering comprehensive IT support services. Built with HTML, TailwindCSS, and JavaScript, this website features a sleek dark mode design. It ensures seamless navigation and accessibility across all devices, enhancing the user experience.",
    liveLink:
      "https://first-tailwind-project-98wnc161y-niaz-udding-tanims-projects.vercel.app/",
    github: "https://github.com/Niaziam/first_tailwind_project",
    techList: [
      { techImage: "/tech/html.png" },
      { techImage: "/tech/tailwind.png" },
      { techImage: "/tech/javascript.png" },
    ],
  },
  {
    index: "7",
    image: [{ img: "/projectImage/WebDev/creativesForYou/img5.png" }],
    header: "Upskill",
    about:
      "A responsive platform dedicated to enhancing professional skills. Built with HTML, TailwindCSS, and JavaScript, this website features a sleek dark mode design. Users can explore various courses and resources, ensuring seamless navigation and accessibility across all devices.",
    liveLink: "https://hp-tailwind-2nd-project.vercel.app/",
    github: "https://github.com/Niaziam/HP_tailwind_2nd_project",
    techList: [
      { techImage: "/tech/html.png" },
      { techImage: "/tech/tailwind.png" },
      { techImage: "/tech/javascript.png" },
    ],
  },
];

const WebDev = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={container}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className={`${styles.sectionSubText} text-highlight`}>
          Welcome to My
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.div
        className="w-full flex flex-col gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mt-3 text-secondary-text text-[17px] max-w-3xl leading-[30px]">
          Below is a curated collection of my work. Each project showcases my
          dedication, expertise, and commitment to excellence. Dive in to
          explore the innovative solutions and creative approaches I've worked
          on.
        </p>
        <div>
          <Link
            to="/"
            className="bg-primary text-accent font-semibold text-xl px-5 py-3 rounded-xl border-2 border-[#ff2e093d] hover:border-accent"
          >
            Go Back
          </Link>
        </div>
      </motion.div>

      <div className="mt-52 mb-44 relative flex flex-col gap-72">
        {content.map((item, key) => (
          <WebDevCard
            key={key}
            image={item.image}
            title={item.header}
            about={item.about}
            liveLink={item.liveLink}
            github={item.github}
            techList={item.techList}
            index={item.index}
            progress={scrollYProgress}
            range={[key * 0.1, 1]}
            targetScale={1 - (content.length - key) * 0.05}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(WebDev, "");
