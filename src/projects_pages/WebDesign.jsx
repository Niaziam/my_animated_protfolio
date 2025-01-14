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
      { img: "/projectImage/WebDev/myWeb.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-2.jpg" },
      { img: "/projectImage/WebDev/myWeb.jpg" },
      { img: "/projectImage/WebDev/myWeb.jpg" },
    ],
    header: "My Portfolio",
    about:
      "Discover my journey as a developer through a collection of projects that showcase my creativity, problem-solving skills, and passion for technology.",
    liveLink: "https://example.com",
    github: "https://github.com",
    techList: [
      { techImage: "/tech/html.png" },
      { techImage: "/tech/css.png" },
      { techImage: "/tech/javascript.png" },
      { techImage: "/tech/react.png" },
    ],
  },
  {
    index: "2",
    image: [
      { img: "/projectImage/WebDev/myWeb.jpg" },
      { img: "/projectImage/WebDev/myWeb.jpg" },
      { img: "/projectImage/WebDev/myWeb.jpg" },
      { img: "/projectImage/WebDev/myWeb.jpg" },
      { img: "/projectImage/WebDev/myWeb.jpg" },
    ],
    header: "E-Commerce App",
    about:
      "A fully responsive e-commerce platform built to deliver a seamless shopping experience with modern UI/UX design.",
    liveLink: "https://example.com",
    github: "https://github.com",
    techList: [
      { techImage: "/tech/ai.png" },
      { techImage: "/tech/boot.png" },
      { techImage: "/tech/figma.png" },
      { techImage: "/tech/css.png" },
      { techImage: "/tech/github.png" },
      { techImage: "/tech/react.png" },
      { techImage: "/tech/ps.png" },
    ],
  },
];

const WebDesign = () => {
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
            live={item.liveLink}
            github={item.github}
            techList={item.techList}
            i={item.index}
            progress={scrollYProgress}
            range={[key * 0.25, 1]}
            targetScale={1 - (content.length - key) * 0.05}
            hidden="hidden"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(WebDesign, "");
