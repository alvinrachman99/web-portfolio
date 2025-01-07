import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Project from '../components/Project'
import Experiance from '../components/Experiance'
import About from '../components/About'
import Footer from '../components/Footer'

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
    </>
  )
}

export default Home