import React, { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuBtn = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="max-w-full">
      <div className="container flex mx-auto p-3">
        <div className="bg-slate-200 p-2 mr-2">01</div>
        <a href="#" className="py-2 font-bold">
          <span className="text-sky-500">alvin</span>Rchmns();
        </a>
        <div className="hidden md:flex space-x-1 ml-auto">
          <a href="#Home" className="px-4 py-2 relative group">
            🏠 Home
            <span className="absolute left-1/4 bottom-0 border-0 w-0 group-hover:border-2 group-hover:w-1/2 group-hover:border-sky-950"></span>
          </a>
          <a href="#About" className="px-4 py-2 relative group">
            😎 About
            <span className="absolute left-1/4 bottom-0 border-0 w-0 group-hover:border-2 group-hover:w-1/2 group-hover:border-sky-950"></span>
          </a>
          <a href="#Project" className="px-4 py-2 relative group">
            🚀 Project
            <span className="absolute left-1/4 bottom-0 border-0 w-0 group-hover:border-2 group-hover:w-1/2 group-hover:border-sky-950"></span>
          </a>
          <a href="#Experiance" className="px-4 py-2 relative group">
            📋 Experiance
            <span className="absolute left-1/4 bottom-0 border-0 w-0 group-hover:border-2 group-hover:w-1/2 group-hover:border-sky-950"></span>
          </a>
        </div>

        <div
          onClick={menuBtn}
          id="menuBtn"
          className="md:hidden ml-auto cursor-pointer"
        >
          <svg
            className="fill-current h-7 w-7"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </div>
      </div>

      {/* mobile menu */}
      <div
        id="mobileMenu"
        className={`${mobileMenu ? "flex" : "hidden"} bg-slate-100 flex-col`}
      >
        <a
          href="#Home"
          className="py-2 border-t text-center hover:bg-sky-950 hover:text-white"
        >
          🏠 Home
        </a>
        <a
          href="#About"
          className="py-2 border-t text-center hover:bg-sky-950 hover:text-white"
        >
          😎 About
        </a>
        <a
          href="#Project"
          className="py-2 border-t text-center hover:bg-sky-950 hover:text-white"
        >
          🚀 Project
        </a>
        <a
          href="#Experiance"
          className="py-2 border-y text-center hover:bg-sky-950 hover:text-white"
        >
          📋 Experiance
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
