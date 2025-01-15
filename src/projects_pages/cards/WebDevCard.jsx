import { motion, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const WebDevCard = ({
  hidden,
  image,
  title,
  about,
  liveLink,
  github,
  techList,
  index,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Ensure currentImageIndex is within valid range if image array changes
  useEffect(() => {
    if (currentImageIndex >= image.length) {
      setCurrentImageIndex(0);
    }
  }, [image]);

  return (
    <>
      <motion.div
        ref={container}
        className="flex flex-col lg:flex-row gap-10 w-full bg-[#0a0a42] p-5 rounded-3xl border-2 border-[#ffffff5a] sticky lg:top-20 top-6 lg:h-[500px] h-[700px]"
        style={{ scale }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full lg:w-[50%] flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden h-[200px] lg:h-[300px] w-full">
              <img
                src={image[currentImageIndex].img}
                alt={title}
                className="rounded-lg shadow-lg border-2 border-[#ffffff5a] h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 w-full gap-4 lg:gap-20">
              <div
                onClick={handlePrevImage}
                className="col-span-1 flex justify-center items-center gap-3 bg-primary rounded-xl py-2 border-2 border-[#ffffff5a] text-accent cursor-pointer"
              >
                <i className="fas fa-arrow-left"></i>
              </div>
              <div
                onClick={() => setOpen(true)}
                className="col-span-1 flex justify-center items-center gap-3 bg-[#68ff688f] rounded-xl py-2 border-2 border-[#ffffff5a] cursor-pointer"
              >
                All Photos <i className="fas fa-image"></i>
              </div>
              <div
                onClick={handleNextImage}
                className="col-span-1 flex justify-center items-center gap-3 bg-primary rounded-xl py-2 border-2 border-[#ffffff5a] text-accent cursor-pointer"
              >
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex">
            <Link
              to="/"
              className="bg-primary text-accent font-semibold text-xl px-4 py-2 rounded-xl border-2 border-[#ffffff5a] hover:border-accent"
            >
              Go Back
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col justify-between">
          <div className="flex flex-col justify-between">
            <div className="space-y-5 mb-3">
              <h1 className="text-xl lg:text-4xl font-semibold">{title}</h1>
              <p className="text-secondary-text text-md lg:text-[18px] max-w-3xl leading-[30px]">
                {about}
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-lg font-semibold mt-4">Built With :</h1>
              <div className="flex justify-start items-center flex-wrap gap-5">
                {techList.map((itemTwo, key) => (
                  <img
                    key={key}
                    src={itemTwo.techImage}
                    alt=""
                    className="w-[40px]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between lg:justify-end mt-5 lg:mt-0">
            <div className="flex lg:hidden">
              <Link
                to="/"
                className="bg-primary text-accent font-semibold text-xl px-4 py-2 rounded-xl border-2 border-[#ffffff5a] hover:border-accent"
              >
                Go Back
              </Link>
            </div>

            <div className="flex items-center justify-between gap-5">
              <a href={github} className={`${hidden}`} target="_blank">
                <i className="fab fa-github bg-primary text-light px-3 py-2 text-3xl rounded-full"></i>
              </a>
              <a href={liveLink} target="_blank">
                <i className="fas fa-link bg-primary text-light px-3 py-2 text-3xl rounded-full"></i>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <Modal open={open} onClose={() => setOpen(false)} className="">
        <div className="py-10 lg:p-10 flex flex-col gap-5">
          <div
            onClick={() => setOpen(true)}
            className="flex justify-center items-center rounded-xl cursor-pointer w-full h-[200px] lg:h-[480px] overflow-hidden"
          >
            <img
              src={image[currentImageIndex].img}
              alt={title}
              className="rounded-lg shadow-lg border-2 border-[#ffffff5a] h-full w-full object-cover"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
            <div
              onClick={handlePrevImage}
              className="col-span-1 flex justify-center items-center gap-3 bg-primary rounded-xl py-2 border-2 border-[#ffffff5a] text-accent cursor-pointer"
            >
              <i className="fas fa-arrow-left"></i>
            </div>
            <div
              onClick={handleNextImage}
              className="col-span-1 flex justify-center items-center gap-3 bg-primary rounded-xl py-2 border-2 border-[#ffffff5a] text-accent cursor-pointer"
            >
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WebDevCard;
