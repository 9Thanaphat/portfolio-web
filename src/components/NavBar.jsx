import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Sun, Moon, Menu, X } from "lucide-react";

function NavBar({lang, setLang}) {

	const [isDark, setDark] = useState(false);
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleLang = () => {
		setLang(lang === "en" ? "th" : "en");
	}

	const toggleTheme = () => {
		setDark(!isDark);
		document.documentElement.classList.toggle("dark");
	}

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	}

	useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
	<>
		<div className='h-20 px-4 sm:px-10 flex justify-between items-center border-b-2 border-gray-500 bg-primary dark:bg-[#000d21] dark:text-white'>
			<div className=''></div>
			<div className="hidden md:flex space-x-8 font-semibold">
				{/* <a href="#home" className="hover:text-orange-600">HOME</a> */}
				<a href="#about" className="hover:text-orange-600">ABOUT</a>
				<a href="#portfolio" className="hover:text-orange-600">PROJECTS</a>
				<a href="#contact" className="hover:text-orange-600">CONTACT</a>
			</div>
			<div className="flex items-center space-x-4">
				<button onClick={toggleLang} className='relative w-8 h-6 overflow-hidden font-semibold' >
					{lang === "th" ? "TH" : "EN"}
				</button>
				<button onClick={toggleTheme}  className='p-1 rounded-md'>{isDark ? <Moon /> : <Sun />}
				</button>
				<button onClick={toggleMenu} className='md:hidden border-1 p-1 rounded-md'>
					{isMenuOpen ? <X /> : <Menu />}
				</button>
			</div>
		</div>
		{isMenuOpen && (
			<div className="absolute top-20 left-0 w-full bg-primary dark:bg-[#000d21] dark:text-white flex flex-col items-center space-y-4 py-4 border-b-2 border-gray-500 md:hidden">
				<a href="#home" className="hover:text-orange-600" onClick={toggleMenu}>HOME</a>
				<a href="#about" className="hover:text-orange-600" onClick={toggleMenu}>ABOUT</a>
				<a href="#portfolio" className="hover:text-orange-600" onClick={toggleMenu}>PROJECTS</a>
				<a href="#contact" className="hover:text-orange-600" onClick={toggleMenu}>CONTACT</a>
			</div>
		)}
	</>
  )
}

export default NavBar
