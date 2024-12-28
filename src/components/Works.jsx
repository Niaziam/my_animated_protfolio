import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import WorkCard from "../global/WorkCard";
import '../allStyles/works.css';
import { Link } from "react-router-dom";

const contents = [
  {
    title: 'Web Development',
    about: 'Dynamic, responsive websites showcasing modern web technologies.',
  },
  {
    title: 'Web Design',
    about: 'Creative, visually appealing designs with intuitive interfaces.',
  },
  {
    title: 'Graphics Design',
    about: 'Professional designs from branding to marketing materials.',
  },
];



const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Works = () => {
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
        <p className={`${styles.sectionSubText} text-highlight`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-10 mt-20"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {contents.map((item, key) => (
          <motion.div key={key} variants={itemVariants}>
            <WorkCard title={item.title} about={item.about} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default SectionWrapper(Works, "");
