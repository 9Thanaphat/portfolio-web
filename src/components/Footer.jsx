import React from 'react'
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="text-center md:text-left">
          <p className="font-medium text-slate-200">Thanaphat Tangcham</p>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className='flex items-center gap-2 text-sm'>
            <span>Built with React & Tailwind</span>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/9thanaphat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/9thanaphat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
