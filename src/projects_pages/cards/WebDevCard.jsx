import { motion, useTransform, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

const ProjectCard = ({ hidden, image, title, about, liveLink, github, techList, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);


  return (
    <motion.div
      ref={container}
      className='flex flex-col lg:flex-row gap-10 w-full bg-[#0a0a42] p-5 rounded-3xl border-2 border-[#ffffff5a] sticky lg:top-20 top-6 lg:h-[500px] h-[700px]'
      style={{ scale }}
    >
      <div className='w-full lg:w-[50%] flex flex-col gap-3'>
        <div>
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-lg mb-4 border-2 border-[#ffffff5a]"
          />
        </div>
        <div className='grid grid-cols-3 w-full gap-4 lg:gap-20'>
          <div className='col-span-1 flex justify-center items-center gap-3 bg-primary rounded-xl py-2 border-2 border-[#ffffff5a] text-accent cursor-pointer'>
            <i className='fas fa-arrow-left'></i>
          </div>
          <div className='col-span-1 flex justify-center items-center gap-3 bg-[#68ff688f] rounded-xl py-2 border-2 border-[#ffffff5a] cursor-pointer'>
            All Photos <i className='fas fa-image'></i>
          </div>
          <div className='col-span-1 flex justify-center items-center gap-3 bg-primary rounded-xl py-2 border-2 border-[#ffffff5a] text-accent cursor-pointer'>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className='text-lg font-semibold mt-4'>Built With :</h1>
          <div className='flex justify-start items-center flex-wrap gap-5'>
            {techList.map((itemTwo, key) => (
              <img
                key={key}
                src={itemTwo.techImage}
                alt=''
                className='w-[40px]'
              />
            ))}
          </div>
        </div>
      </div>

      <div className='w-full lg:w-[50%] flex flex-col justify-between'>
        <div className='space-y-5 mb-3'>
          <h1 className='text-xl lg:text-4xl font-semibold'>{title}</h1>
          <p className='text-secondary-text text-md lg:text-[18px] max-w-3xl leading-[30px]'>{about}</p>
        </div>
        <div className='flex items-center justify-end gap-10'>
          <a href={github} className={`${hidden}`}>
            <i className="fab fa-github bg-primary text-light px-3 py-2 text-3xl rounded-full"></i>
          </a>
          <a href={liveLink}>
            <i className="fas fa-link bg-primary text-light px-3 py-2 text-3xl rounded-full"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
