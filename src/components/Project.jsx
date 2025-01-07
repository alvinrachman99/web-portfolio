import React from "react";
import { dataProject } from "../data/DataProject";

function Project() {
  return (
    <>
      <div id="Project" className="flex items-center justify-center pt-8 md:col-span-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-sky-950 text-2xl font-bold">🚀 PROJECT</span>
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
          <div className="w-full md:w-1/2 flex">
            <div className="h-fit my-auto">
              <span className="text-xl text-sky-950 font-bold">
                {item.title}
              </span>
              <p className="mt-3 text-sm">{item.description}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src={item.image}
                className="w-full h-80 bg-cover shadow-xl rounded-md"
                alt=""
              />
              <div className={`flex absolute bottom-2 ${i % 2 === 0 ? "md:left-2" : "md:right-2" }`}>
                {dataProject
                  .find((_, index) => index == i)
                  .skill.map((data, idx) => (
                    <div className="p-2 mx-1 bg-slate-200" key={idx}>{data}</div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
