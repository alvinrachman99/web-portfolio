import { BiSolidUpArrow } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

function FixedButton() {
  return (
    <>
      <motion.div
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className="fixed bottom-6 right-4 cursor-pointer rounded-full shadow-xl text-sky-950 dark:text-white bg-sky-500 hover:bg-sky-400"
      >
        <div
          className="p-2 font-bold md:p-3 text-xl">
          <a href="#Header"><BiSolidUpArrow /></a>
        </div>
      </motion.div>

      <div className="fixed right-4 bottom-1/3 cursor-pointer shadow-xl rounded-full">
        <motion.div 
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className="rounded-t-full p-2 font-bold md:p-3 text-xl text-sky-950 dark:text-white bg-sky-500 hover:bg-sky-400">
          <a target="_blank" href="https://github.com/alvinrachman99"><FaGithub /></a>
        </motion.div>
        <motion.div 
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className="p-2 font-bold md:p-3 text-xl text-sky-950 dark:text-white bg-sky-500 hover:bg-sky-400 my-0.5">
          <a target="_blank" href="https://www.linkedin.com/in/alvinrachman"><FaLinkedin /></a>
        </motion.div>
        <motion.div 
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className="rounded-b-full p-2 font-bold md:p-3 text-xl text-sky-950 dark:text-white bg-sky-500 hover:bg-sky-400">
          <a target="_blank" href="https://www.instagram.com/alvinrchmns_/"><FaInstagram /></a>
        </motion.div>
      </div>
    </>
  );
}

export default FixedButton;
