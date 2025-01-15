import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import WorkCard from "../global/WorkCard";
import "../allStyles/works.css";

const contents = [
  {
    title: "Web Development",
    about: "Dynamic, responsive websites showcasing modern web technologies.",
    path: "web_development_projects",
  },
  // {
  //   title: "Web Design",
  //   about: "Creative, visually appealing designs with intuitive interfaces.",
  //   path: "web_design_projects",
  // },
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

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary-text text-[17px] max-w-3xl leading-[30px]"
        >
          The projects highlighted below demonstrate my expertise and practical
          experience through real-world applications of my work. Each project
          includes a concise description along with links to its code repository
          and live demo. These examples showcase my ability to tackle complex
          challenges, adapt to various technologies, and deliver well-executed
          solutions with efficiency and precision.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center lg:justify-start items-center gap-10 mt-20"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {contents.map((item, key) => (
          <motion.div key={key} variants={itemVariants}>
            <WorkCard title={item.title} about={item.about} path={item.path} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
