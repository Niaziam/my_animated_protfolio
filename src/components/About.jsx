import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[200px] md:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] bg-card shadow-neumorphic"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-transparent rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white-100 text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <motion.section className="">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-highlight`}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary-text text-[17px] max-w-3xl leading-[30px]"
      >
        I'm MD. Niaz Uddin, a web developer and designer with a passion for
        creating clean, efficient, and user-friendly applications. I'm skilled
        in frontend development and enjoy solving problems, whether it's fixing
        bugs or improving functionality. I'm also a strong team player with
        leadership experience, always eager to take on new challenges and learn
        along the way. My goal is to keep growing in this field and deliver
        high-quality, practical solutions that exceed client expectations.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-start gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default SectionWrapper(About, "about");
