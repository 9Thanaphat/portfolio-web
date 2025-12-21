import React from 'react'
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"
import my_photo from '../../public/img/my_photo.png'
import { aboutText } from '../i18n/about'

const AboutMe = ({ lang }) => {
  const t = aboutText[lang]

  return (
    <section
      id="about"
      className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 px-6 py-20 max-w-6xl mx-auto"
    >
      {/* Text Section */}
      <div className="w-full md:w-3/5 space-y-8 text-center md:text-left order-2 md:order-1">
        <div className="space-y-3">
          <span className="text-orange-500 dark:text-orange-400 font-semibold uppercase tracking-widest text-sm">
            {t.hello}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium italic">
            {t.title}
          </p>
        </div>

        <div className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 space-y-5 max-w-2xl">
          <p className="border-l-4 border-orange-400 pl-4 py-1 bg-orange-50/30 dark:bg-orange-900/10">
            {t.p1}
          </p>
          <p>{t.p2}</p>
          <p className="font-light italic text-slate-500">{t.p3}</p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
          <a
            href="/Thanaphat_Tangcham_Resume.pdf"
            className="bg-slate-900 hover:bg-orange-500 dark:bg-white dark:text-black dark:hover:bg-orange-400 text-white flex gap-3 items-center py-3 px-8 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-orange-200 dark:hover:shadow-none"
          >
            <FaFileAlt /> {t.resume}
          </a>

          <div className="flex gap-3">
            <a
              href="https://github.com/9thanaphat"
              target="_blank"
              rel="noreferrer"
              className="p-3 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white text-slate-600 hover:text-slate-800 dark:text-slate-400 hover:dark:text-slate-200 rounded-full transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/9thanaphat/"
              target="_blank"
              rel="noreferrer"
              className="p-3 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 rounded-full transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-500"
              title="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
<div className="w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2">
  <img
    src={my_photo}
    alt="Thanaphat Tangcham"
    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
  />
</div>
    </section>
  )
}

export default AboutMe
