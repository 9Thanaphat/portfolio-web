import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {

  return <div className='bg-primary dark:bg-[#010e21]'>
	<NavBar/>
	<div className='pl-100 pr-100 pt-25'>
		<AboutMe/>
		<div className="mt-16"></div>
		<Portfolio/>
		<div className="mt-16"></div>
		<Contact/>
	</div>
  </div>
}

export default App
