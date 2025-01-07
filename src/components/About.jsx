import React, { useState } from "react";
import { dataAbout, dataAboutTech, dataAboutTools } from "../data/DataAbout";
import { dataProject } from "../data/DataProject";

function About() {
  const lenDataProject = dataProject.length - 1
  const section = lenDataProject + 2

  const [active, setActive] = useState(0); // 0: tech, 1: tools

  const [dataSkills, setDataSkills] = useState(dataAboutTech);

  const btnSkills = (e) => {
    const value = parseInt(e.target.value);
    setActive(value);

    if (value === 0) {
      setDataSkills(dataAboutTech);
    }
    if (value === 1) {
      setDataSkills(dataAboutTools);
    }
  };

  return (
    <>
      <div className={`flex items-center justify-center pt-8 md:col-span-2 ${section % 2 !== 0 && "bg-gray-100 border-t"}`}>
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-sky-950 text-2xl font-bold">😎 ABOUT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className={`px-8 xl:px-32 py-10 text-center flex ${section % 2 !== 0 && "bg-gray-100 border-b"}`}>
        <div className="h-fit my-auto">
          <p>{dataAbout[0]}</p>
          <br />
          <p>{dataAbout[1]}</p>
        </div>
      </div>
      <div className={`px-8 xl:px-32 py-10 ${section % 2 !== 0 && "bg-gray-100 border-b"}`}>
        <div className="flex items-center w-28">
          <div className="flex-grow border-t border-sky-950"></div>
          <span className="ml-3 text-sky-950 font-semibold">Skills</span>
        </div>
        <div className="my-4">
          <button
            onClick={btnSkills}
            value="0"
            type="button"
            className={`text-xs mx-1 py-2 px-3 text-slate-400 rounded-md hover:bg-sky-950 hover:text-white ${active === 0 && "bg-sky-950 text-white"} `}
          >
            Tech Stack
          </button>
          <button
            onClick={btnSkills}
            value="1"
            type="button"
            className={`text-xs mx-1 py-2 px-3 text-slate-400 rounded-md hover:bg-sky-950 hover:text-white ${active === 1 && "bg-sky-950 text-white"} `}
          >
            Tools
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 my-4 text-sm">
            {
                dataSkills.map((item, i) => (
                    <div className="flex border-2 border-sky-950 rounded-md shadow-lg w-full p-3 cursor-pointer hover:bg-sky-950 hover:text-white" key={i}>
                        <div className="text-xl" style={{color: item.bgColor}}>
                            {item.icon}
                        </div>
                        <div className="ml-2">
                            {item.label}
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default About;
