import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Project from '../components/Project'
import Experiance from '../components/Experiance'
import About from '../components/About'
import Footer from '../components/Footer'
import { scrollToTop } from '../components/ScrollToTop'
import { BsArrowUp } from 'react-icons/bs'

function Home() {

  return (
    <>
        <Navbar />
        <main className="container max-w-full">
            <div className="grid md:grid-cols-2">
                <Header />
                <Project />
                <Experiance />
                <About />
            </div>
        </main>
        <Footer />
        <div onClick={scrollToTop} className='fixed bottom-4 right-4 cursor-pointer border-2 border-sky-950 rounded-full hover:bg-sky-950 hover:text-white'>
          <div className='p-3 font-bold'><BsArrowUp /></div>
        </div>
    </>
  )
}

export default Home