import React from 'react'
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"
import my_photo from '../../public/img/my_photo.png'
import { aboutText } from '../i18n/about'

const AboutMe = ({ lang }) => {
  const t = aboutText[lang]

  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 py-12 max-w-6xl mx-auto dark:text-gray-100"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-6 max-w-prose text-center md:text-left">
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-orange-400 tracking-wide">
            {t.hello}
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            {t.name}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            {t.title}
          </p>
        </div>

        <div className="text-base leading-7 text-slate-600 dark:text-slate-300 space-y-4">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <a
            href="/Thanaphat_Tangcham_Resume.pdf"
            className="bg-slate-900 text-white flex gap-2 items-center py-2.5 px-6 rounded-lg"
          >
            <FaFileAlt /> {t.resume}
          </a>

          <a
            href="https://github.com/9thanaphat"
            target="_blank"
            rel="noreferrer"
            className="border flex gap-2 items-center py-2.5 px-6 rounded-lg"
          >
            <FaGithub /> {t.github}
          </a>

          <a
            href="https://www.linkedin.com/in/9thanaphat/"
            target="_blank"
            rel="noreferrer"
            className="border flex gap-2 items-center py-2.5 px-6 rounded-lg"
          >
            <FaLinkedin /> {t.linkedin}
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={my_photo}
          alt="Thanaphat Tangcham"
          className="w-72 h-72 object-cover rounded-lg"
        />
      </div>
    </section>
  )
}

export default AboutMe
