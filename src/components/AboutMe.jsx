import React from 'react'
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id='about' className='min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 py-12 max-w-6xl mx-auto dark:text-gray-100'>

      <div className="w-full md:w-1/2 space-y-6">

        <div className="space-y-2">
            <h2 className="text-xl font-medium text-orange-400 dark:text-orange-400 tracking-wide">
                HELLO, I'M
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
                Thanaphat Tangcham
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                Computer Engineering Student
            </p>
        </div>

        <div className="text-base leading-7 text-slate-600 dark:text-slate-300 space-y-4 text-justify md:text-left">
          <p>
            I am a student from <span className="font-semibold text-slate-800 dark:text-white">RMUTT</span>,
            interested in Fullstack development. Currently building my skills in
            <span className="font-semibold text-orange-600 dark:text-orange-400"> React </span>
            and <span className="font-semibold text-orange-600 dark:text-orange-400"> Node.js</span>,
            with a growing passion for Backend engineering.
          </p>

          <p>
            I’m actively expanding my knowledge in <span className="font-semibold text-slate-800 dark:text-white">Go, Docker, and Cloud deployment</span>,
            while exploring software design principles like Clean Architecture to build robust applications.
          </p>
        </div>

        <div className='flex flex-wrap gap-4 pt-4'>
            <a href="#" className='bg-slate-900 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200 text-white flex gap-2 items-center py-2.5 px-6 rounded-lg transition-all font-medium text-sm shadow-sm'>
                <FaFileAlt /> Resume
            </a>

            <a href="https://github.com/9thanaphat" target='_blank' rel="noreferrer" className='border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:border-white dark:hover:text-white flex gap-2 items-center py-2.5 px-6 rounded-lg transition-all font-medium text-sm'>
                <FaGithub size={18}/> GitHub
            </a>

            <a href="https://www.linkedin.com/in/9thanaphat/" target='_blank' rel="noreferrer" className='border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400 flex gap-2 items-center py-2.5 px-6 rounded-lg transition-all font-medium text-sm'>
                <FaLinkedin size={18}/> LinkedIn
            </a>
        </div>

      </div>

      <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
        <div className='relative w-72 h-72 md:w-80 md:h-80'>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-slate-800 dark:border-slate-400 rounded-lg -z-10"></div>
            <div className='w-full h-full bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg object-cover'>
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                    Image
                </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default AboutMe
