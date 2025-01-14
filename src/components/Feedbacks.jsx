import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-gradient-to-r from-primary to-navy p-10 rounded-3xl xs:w-[320px] w-[400px] shadow-lg transform transition duration-500 hover:scale-105 flex flex-col border-[1px] border-[#ffffff49]"
  >
    <p className="text-[#ff5c8a] font-black text-[48px]">"</p>

    <div className="mt-1 flex flex-col justify-between flex-grow">
      <p className="text-[#e4e4f0] tracking-wider text-[18px] leading-relaxed">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-[#e4e4f0] font-medium text-[16px]">
            <span className="text-[#5973a8]">@</span> {name}
          </p>
          <p className="mt-1 text-[#b3b7c1] text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#ff5c8a]"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-navy rounded-[20px] shadow-md`}>
      <div
        className={`bg-primary rounded-2xl ${styles.padding} min-h-[300px] flex flex-col justify-center items-center`}
      >
        <motion.div variants={textVariant()} className="text-center">
          <p className={styles.sectionSubText} style={{ color: "#ff5c8a" }}>
            What others say
          </p>
          <h2 className={styles.sectionHeadText} style={{ color: "#e4e4f0" }}>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
