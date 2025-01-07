import React from 'react'
import { dataProject } from '../data/DataProject'

function Footer() {
  const lenDataProject = dataProject.length - 1
  const section = lenDataProject + 3

  return (
    <footer className={`max-w-full text-center text-xs p-6 bg-sky-950 text-white ${section % 2 !== 0 && "dark:bg-white dark:text-sky-950"}`}>
        <span>&copy; My Portofolio | Alvin Rachman Septian 2024</span>
    </footer>
  )
}

export default Footer