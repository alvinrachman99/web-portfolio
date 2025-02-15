import React from "react";
import { dataProject } from "../data/DataProject";
import { motion } from "motion/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Project() {
  const data = [...dataProject].sort((a, b) => b.id - a.id)
  return (
    <>
      <div
        data-aos="fade-up"
        id="Project"
        className="flex items-center justify-center pt-8 md:col-span-2"
      >
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-2xl font-bold">🚀 PROJECT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {data.map((item, i) => (
        // section background
        // genap: bg-white/default, ganjil: bg-gray-100, border-y
        <div
          className={`px-8 xl:px-32 py-10 flex flex-col gap-8 md:flex-row ${
            i % 2 === 0 && "md:flex-row-reverse"
          } ${i % 2 !== 0 && "bg-gray-100 border-y"} md:col-span-2`}
          key={i}
        >
          {/* description */}
          <div
            data-aos={`fade-${i % 2 !== 0 ? "left" : "right"}`}
            className="w-full md:w-1/2 flex"
          >
            <div className="h-fit my-auto">
              <span
                className={`text-xl font-bold ${
                  i % 2 !== 0 && "dark:text-sky-950"
                }`}
              >
                {item.title}
              </span>
              <p
                className={`my-3 text-sm ${i % 2 !== 0 && "dark:text-sky-950"}`}
              >
                {item.description}
              </p>
              <div className="flex gap-3">
                {item.github && (
                  <a
                    target="_blank"
                    className="flex text-xs align-middle"
                    href={item.github}
                  >
                    <FaGithub
                      className={`text-lg ${
                        i % 2 !== 0 && "dark:text-sky-950"
                      } `}
                    />{" "}
                    <span className="ml-2 underline text-sky-500 hover:text-sky-400">GitHub</span>
                  </a>
                )}
                {item.detail && (
                  <Link
                    className="flex text-xs align-middle"
                    to={`/project/${item.id}`}
                  >
                    <FaExternalLinkAlt
                      className={`text-lg ${
                        i % 2 !== 0 && "dark:text-sky-950"
                      } `}
                    />{" "}
                    <span className="ml-2 underline text-sky-500 hover:text-sky-400">
                      View Detail
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* image */}
          <div
            data-aos={`fade-${i % 2 !== 0 ? "right" : "left"}`}
            className="w-full md:w-1/2"
          >
            <div className={`bg-gray-200 ${i % 2 !== 0 ? "dark:bg-gray-200" : "dark:bg-sky-900"} pt-5 shadow-xl rounded-md`}>
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{scale:1.1}}
                  transition={{ease:"easeInOut"}}
                  src={item.image}
                  className="w-full h-80 object-cover object-center"
                />
                <div
                  className={`flex absolute bottom-2 left-2 ${
                    i % 2 === 0 ? "md:left-2" : "md:right-2"
                  }`}
                >
                  {data
                    .find((_, index) => index == i)
                    .skill.map((data, idx) => (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ ease: "easeInOut" }}
                        className="p-2 mx-0.5 bg-sky-500 rounded-full hover:bg-sky-400 cursor-pointer"
                        key={idx}
                      >
                        {data.icon}
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
