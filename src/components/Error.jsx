import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position on movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-dark text-light min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated 404 Numbers */}
      <div className="flex items-center justify-center">
        <motion.h1
          className="text-accent text-9xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.span
            className="inline-block"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            4
          </motion.span>
          <motion.span
            className="inline-block text-red-600"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0, 20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            0
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            4
          </motion.span>
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        className="text-light text-2xl mt-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Oops! You seem to have stumbled into the unknown.
        <br />
        Don't worry; it's cooler here!
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={() => (window.location.href = "/")}
        className="mt-6 bg-primary text-light px-6 py-3 rounded-lg shadow-lg hover:bg-navy transition-all duration-300"
        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
        whileTap={{ scale: 0.9 }}
      >
        Take Me Home
      </motion.button>

      {/* Dancing Character */}
      <motion.div
        className="absolute bottom-10 left-10 w-24"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
    </div>
  );
};

export default ErrorPage;
