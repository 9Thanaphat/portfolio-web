import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800'>
      <div className='max-w-3xl mx-auto px-6 text-center'>

        <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-6'>
          Contact Me
        </h2>

        {/* ตรงนี้ครับที่เพิ่มข้อความเข้าไป */}
        <p className='text-lg text-slate-600 dark:text-slate-300 mb-8 font-medium leading-relaxed'>
          I am currently looking for an internship opportunity. <br className="hidden md:block" />
          I would appreciate the opportunity to work with you.
        </p>

        <div className='flex justify-center mb-10'>
            <a
              href="mailto:your.email@example.com"
              className='
                flex items-center gap-2
                bg-slate-900 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200
                text-white font-medium
                py-3 px-8 rounded-lg
                transition-all duration-300
              '
            >
              <FaEnvelope />
              Send me an email
            </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
