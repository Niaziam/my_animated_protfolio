import { motion } from "framer-motion";
import { styles } from "../styles";
import { ReactTyped } from 'react-typed';

const circleVariants = (delay) => ({
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: delay
    }
  }
});

const buttonVariants = {
  hidden: {
    opacity: 0, x: -50,
  },
  visible:
  {
    opacity: 1, x: 0,
    transition:
    {
      duration: 1.3,
      ease: 'easeInOut'

    }
  }
};

const Hero = () => {
  return (
    <section className="relative w-full h-[900px] md:h-screen mx-auto overflow-hidden">
      <div className="absolute max-w-7xl top-[150px] md:top-[200px] left-0 right-0 px-6 xl:m-auto flex flex-col lg:flex-row items-center justify-between mx-6 md:mx-16 z-10">
        <motion.div
          className="flex items-start gap-5"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-red-500" />
            <div className="w-1 h-52 lg:h-80 xl:h-52 bg-gradient-to-b to-primary from-highlight" />
          </div>

          <div className="space-y-5">
            <h1 className={`${styles.heroHeadText} text-white-100`}>
              Hello, my name is <span className="font-cursive text-highlight"> Md. Niaz Uddin</span>
            </h1>
            <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a{' '}
              <ReactTyped
                className="text-highlight"
                strings={[
                  "Front-end Developer",
                  "Web Designer",
                  "Graphics Designer",
                ]}
                typeSpeed={70}
                backSpeed={30}
                loop
                cursorChar="/"
              />
            </h1>
          </div>
        </motion.div>

        <motion.div>
          <motion.div
            className="w-[400px] h-[400px] rounded-full flex justify-center items-center shadow-neumorphic-inset m-auto bg-primary"
            initial="hidden"
            animate="visible"
            variants={circleVariants(0)}
          >
            <motion.div
              className="w-[360px] h-[360px] rounded-full flex justify-center items-center shadow-neumorphic p-4 bg-primary"
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
