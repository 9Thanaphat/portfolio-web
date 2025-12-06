import React from 'react'
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
	<section id='about' className='h-100 flex gap-5 items-center justify-center dark:text-white'>
		<div className="w-1/2">

  <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-100 space-y-3 text-justify">
    <p>
      I am Computer Engineering student from RMUTT,
      I am interested in Fullstack development and currently building my skills in React and Node.js, with a growing interest in Backend engineering.
      I am looking for an internship opportunity to gain real project experience, learn from a professional team, and apply my skills to real-world software development.
    </p>
    <p>
      I’m currently expanding my skills in backend development learning more about
      Go, Docker, and cloud deployment while also exploring software design principles such as
      Clean Architecture and design patterns to build robust, production-ready applications.
    </p>
    <div className='flex flex-wrap gap-4 pt-2'>
        <a className='bg-red-400 p-2 flex gap-2 items-center py-2 px-6 rounded-full hover:bg-red-500'><FaFileAlt />Resume</a>
        <a href="https://github.com/9thanaphat" target='_blank' className='bg-gray-400 p-2 flex gap-2 items-center py-2 px-6 rounded-full hover:bg-gray-500'><FaGithub/>Github</a>
        <a className='bg-blue-400 p-2 flex gap-2 items-center py-2 px-6 rounded-full hover:bg-blue-500'><FaLinkedin/>Linkedin</a>
    </div>

  </div>
</div>
		<div>
			<div className='w-75 h-75 bg-amber-300'>
        {/* <img src=""></img> */}
      </div>
		</div>
	</section>
  </>
  )
}

export default AboutMe
