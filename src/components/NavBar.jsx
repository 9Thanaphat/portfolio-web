import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Sun, Moon, Menu } from "lucide-react";

function NavBar() {
	const [isDark, setDark] = useState(true);

	const toggleTheme = () => {
		setDark(!isDark);
		document.documentElement.classList.toggle("dark");
	}

	useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
	<div className='h-20 px-10 flex justify-between items-center border-b-2 border-gray-500 bg-primary dark:bg-[#000d21] dark:text-white'>
		<div className=''></div>
		<div className="flex space-x-8">
  			<a href="#home" className="hover:text-orange-600">HOME</a>
  			<a href="#about" className="hover:text-orange-600">ABOUT</a>
  			<a href="#portfolio" className="hover:text-orange-600">PROJECTS</a>
 			<a href="#contact" className="hover:text-orange-600">CONTACT</a>
		</div>
		<button onClick={toggleTheme}  className='border-1 p-1 rounded-md'>{isDark ? <Moon /> : <Sun />}
		</button>
	</div>
  )
}

export default NavBar
