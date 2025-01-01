import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import WorkCard from "../global/WorkCard";
import '../allStyles/works.css';

const tech = [
  {
    path: '/tech/html.png',
    techName: 'HTML'
  },
  {
    path: '/tech/css.png',
    techName: 'CSS'
  },
  {
    path: '/tech/scss.png',
    techName: 'SCSS'
  },
  {
    path: '/tech/javascript.png',
    techName: 'JavaScript'
  },
  {
    path: '/tech/typescript.png',
    techName: 'TypeScript'
  },
  {
    path: '/tech/boot.png',
    techName: 'Bootstrap'
  },
  {
    path: '/tech/tailwind.png',
    techName: 'Tailwind CSS'
  },
  {
    path: '/tech/reactjs.png',
    techName: 'React'
  },
  {
    path: '/tech/nextjs.png',
    techName: 'Next JS'
  },
  {
    path: '/tech/material.png',
    techName: 'Material UI'
  },
  {
    path: '/tech/Chakra_UI.png',
    techName: 'Chakra UI'
  },
  {
    path: '/tech/git.png',
    techName: 'Git'
  },
  {
    path: '/tech/github.png',
    techName: 'Github'
  },
  {
    path: '/tech/figma.png',
    techName: 'Figma'
  },
  {
    path: '/tech/ps.png',
    techName: 'Photoshop'
  },
  {
    path: '/tech/ai.png',
    techName: 'Illustrator'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const Tech = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start("show");
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center text-white-100`}>Skills</h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-16 m-auto mt-20"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {tech.map((item, key) => (
          <motion.div
            key={key}
            variants={itemVariants}
            className="flex flex-col justify-between items-center gap-2"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={item.path} alt={item.techName} className="w-[80px]" />
            <p className="text-sm text-secondary-text">{item.techName}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default SectionWrapper(Tech, "");
