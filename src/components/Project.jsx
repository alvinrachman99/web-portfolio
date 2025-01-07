import React from "react";
import { dataProject } from "../data/DataProject";

function Project() {
  return (
    <>
      <div id="Project" className="flex items-center justify-center pt-8 md:col-span-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-2xl font-bold">🚀 PROJECT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {dataProject.map((item, i) => (
        // section background
        // genap: bg-white/default, ganjil: bg-gray-100, border-y
        <div
          className={`px-8 xl:px-32 py-10 flex flex-col gap-8 md:flex-row ${
            i % 2 === 0 && "md:flex-row-reverse"
          } ${i % 2 !== 0 && "bg-gray-100 border-y"} md:col-span-2`}

          key={i}
        >
          {/* description */}
          <div className="w-full md:w-1/2 flex"> 
            <div className="h-fit my-auto">
              <span className={`text-xl font-bold ${i % 2 !== 0 && "dark:text-sky-950"}`}>
                {item.title}
              </span>
              <p className={`mt-3 text-sm ${i % 2 !== 0 && "dark:text-sky-950"}`}>{item.description}</p>
            </div>
          </div>
          {/* image */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 dark:bg-sky-900 p-3 shadow-xl rounded-md">
              <div className="relative">
                <img
                  src={item.image}
                  className="w-full h-80 object-cover object-left-top"
                />
                <div className={`flex absolute bottom-2 left-2 ${i % 2 === 0 ? "md:left-2" : "md:right-2" }`}>
                  {dataProject
                    .find((_, index) => index == i)
                    .skill.map((data, idx) => (
                      <div className="p-2 mx-0.5 bg-sky-500 rounded-full hover:bg-sky-400 cursor-pointer" key={idx}>{data.icon}</div>
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
