import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Project from "../components/Project";
import Experiance from "../components/Experiance";
import About from "../components/About";
import Footer from "../components/Footer";
import FixedButton from "../components/FixedButton";

function Home() {
  
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    setDark(!dark)
  }

  return (
    <div className={`${dark && "dark"}`}>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main className="dark:bg-sky-950 transition-colors duration-200 container max-w-full">
        <div className="text-sky-950 dark:text-white grid md:grid-cols-2">
          <Header />
          <Project />
          <Experiance />
          <About />
        </div>
      </main>
      <Footer />
      <FixedButton />
    </div>
  );
}

export default Home;
