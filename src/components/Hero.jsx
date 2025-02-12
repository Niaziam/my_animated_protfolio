import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const circleVariants = (delay) => ({
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full h-[900px] md:h-screen mx-auto overflow-hidden">
      <div className="absolute max-w-7xl top-[150px] md:top-[200px] left-0 right-0 px-6 xl:m-auto flex flex-col-reverse lg:flex-row items-center justify-between mx-6 md:mx-16 z-10 gap-10">
        <motion.div
          className="flex items-start gap-5"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <div className="md:flex flex-col justify-center items-center mt-5 hidden">
            <div className="w-5 h-5 rounded-full bg-accent" />
            <div className="w-1 h-52 lg:h-80 xl:h-52 bg-gradient-to-b to-dark from-accent" />
          </div>

          <div className="space-y-4">
            <h1
              className={`font-bold lg:font-extrabold text-4xl lg:text-5xl mt-3 lg:mt-5 text-white-100`}
            >
              Hello, my name is <br className="inline-block md:hidden" />{" "}
              <span className="font-cursive text-highlight">
                {" "}
                Md. Niaz Uddin
              </span>
            </h1>
            <h1 className={`text-xl lg:text-3xl text-light`}>
              I'm a{" "}
              <ReactTyped
                className="text-highlight"
                strings={["Front-end Developer", "Web Designer"]}
                typeSpeed={70}
                backSpeed={30}
                loop
                cursorChar="|"
              />
            </h1>
            <a
              href="#contact"
              className="hover:bg-accent border-2 border-accent px-5 py-2 rounded-3xl text-lg font-semibold relative top-5"
            >
              Hire me
              <i className="fas fa-arrow-right ml-3 text-sm"></i>
            </a>
          </div>
        </motion.div>

        <motion.div>
          <motion.div
            className="w-[400px] h-[400px] rounded-full flex justify-center items-center shadow-neumorphic-inset m-auto bg-dark"
            initial="hidden"
            animate="visible"
            variants={circleVariants(0)}
          >
            <motion.div
              className="w-[360px] h-[360px] rounded-full flex justify-center items-center shadow-neumorphic p-4 bg-dark"
              initial="hidden"
              animate="visible"
              variants={circleVariants(0.1)}
            >
              <motion.div
                className="overflow-hidden w-full h-full rounded-full"
                initial="hidden"
                animate="visible"
                variants={circleVariants(0.2)}
              >
                <img
                  src="tanim.jpg"
                  alt="Hero"
                  className="w-full h-full object-cover max-w-full max-h-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
