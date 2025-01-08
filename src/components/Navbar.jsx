import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { motion } from "motion/react";

function Navbar({ dark, toggleDark }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuBtn = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="w-full sticky top-0 z-10 backdrop-blur-sm transition-colors duration-200 md:hover:bg-white">
      <div className="container flex mx-auto p-3">
        <motion.div
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.9}}
          onClick={toggleDark}
          className="my-1 mx-1 p-2 cursor-pointer border-2 border-sky-950 rounded-full dark:bg-sky-950 dark:text-white hover:bg-sky-950 hover:text-white dark:hover:bg-white dark:hover:text-sky-950"
        >
          {dark ? <IoMoon /> : <IoSunny />}
        </motion.div>
        <a href="#Header" className="my-2 mx-1 font-bold text-lg">
          <span className="text-sky-500">alvin</span>Rchmns();
        </a>
        <div className="hidden md:flex space-x-1 ml-auto">
          <a href="#Header" className="px-4 py-2 relative group">
            🏠 Home
            <span className="absolute left-1/4 bottom-0 border-0 w-0 group-hover:border-2 group-hover:w-1/2 group-hover:border-sky-950"></span>
          </a>
          <HashLink to="#About" className="px-4 py-2 relative group">
            😎 About
            <span className="absolute left-1/4 bottom-0 border-0 w-0 group-hover:border-2 group-hover:w-1/2 group-hover:border-sky-950"></span>
          </HashLink>
          <HashLink to="#Project" className="px-4 py-2 relative group">
            🚀 Project
            <span className="absolute left-1/4 bottom-0 border-0 w-0 group-hover:border-2 group-hover:w-1/2 group-hover:border-sky-950"></span>
          </HashLink>
          <HashLink to="#Experiance" className="px-4 py-2 relative group">
            📋 Experiance
            <span className="absolute left-1/4 bottom-0 border-0 w-0 group-hover:border-2 group-hover:w-1/2 group-hover:border-sky-950"></span>
          </HashLink>
        </div>

        <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          id="mobileMenuBtn"
          onClick={mobileMenuBtn}
          className="md:hidden ml-auto cursor-pointer text-4xl"
        >
          {mobileMenu ? <IoMdClose /> : <FaBars />}
        </motion.div>
      </div>

      {/* mobile menu */}
      <div
        id="mobileMenu"
        onClick={mobileMenuBtn}
        className={`${mobileMenu ? "flex" : "hidden"} bg-slate-100 flex-col`}
      >
        <ul>
          <li className="py-2 border-t text-center hover:bg-sky-950 hover:text-white">
            <a
              href="#"
              className=""
            >
              🏠 Home
            </a>
          </li>
          <li className="py-2 border-t text-center hover:bg-sky-950 hover:text-white">
            <HashLink
              to="#About"
              className=""
            >
              😎 About
            </HashLink>
          </li>
          <li className="py-2 border-t text-center hover:bg-sky-950 hover:text-white">
            <HashLink
              to="#Project"
              className=""
            >
              🚀 Project
            </HashLink>
          </li>
          <li className="py-2 border-y text-center hover:bg-sky-950 hover:text-white">
            <HashLink
              to="#Experiance"
              className=""
            >
              📋 Experiance
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
