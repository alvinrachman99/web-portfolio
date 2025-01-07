import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  console.log({mobileMenu})
  const mobileMenuBtn = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="w-full sticky top-0 z-10 backdrop-blur-sm md:hover:bg-white">
      <div className="container flex mx-auto p-3">
        <div className="bg-slate-200 p-2 mr-2">01</div>
        <a href="#" className="py-2 font-bold">
          <span className="text-sky-500">alvin</span>Rchmns();
        </a>
        <div className="hidden md:flex space-x-1 ml-auto">
          <a href="#" className="px-4 py-2 relative group">
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

        <div
          id="mobileMenuBtn"
          onClick={mobileMenuBtn}
          className="md:hidden ml-auto cursor-pointer text-4xl"
        >
          {mobileMenu ? <IoMdClose /> : <FaBars />}
        </div>
      </div>

      {/* mobile menu */}
      <div
        id="mobileMenu"
        onClick={mobileMenuBtn}
        className={`${mobileMenu ? "flex" : "hidden"} bg-slate-100 flex-col`}
      >
        <a
          href="#"
          className="py-2 border-t text-center hover:bg-sky-950 hover:text-white"
        >
          🏠 Home
        </a>
        <HashLink
          to="#About"
          className="py-2 border-t text-center hover:bg-sky-950 hover:text-white"
        >
          😎 About
        </HashLink>
        <HashLink
          to="#Project"
          className="py-2 border-t text-center hover:bg-sky-950 hover:text-white"
        >
          🚀 Project
        </HashLink>
        <HashLink
          to="#Experiance"
          className="py-2 border-y text-center hover:bg-sky-950 hover:text-white"
        >
          📋 Experiance
        </HashLink>
      </div>
    </nav>
  );
}

export default Navbar;
