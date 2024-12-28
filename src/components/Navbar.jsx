import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import Logo from "./Logo";

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: 'easeInOut',
    },
  },
};

const circleVariants = (delay) => ({
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: delay,
    },
  },
});

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 ${scrolled ? "bg-black-200/10 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Logo
            width='4'
            height='4'
            stroke='var(--black-100)'
            strokeWidth='100'
            className='bg-white-100 rounded-full'
            initial="hidden"
            animate="visible"
            variants={circleVariants(0)}
          />

          <p className='text-white-100 text-[18px] font-bold cursor-pointer flex '>
            Niaz &nbsp;
            <span className='sm:block hidden'> | Web Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white-100" : "text-secondary"} hover:text-white-100 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-sans_M_plus font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white-100" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
