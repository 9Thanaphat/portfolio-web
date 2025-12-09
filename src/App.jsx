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
import Footer from './components/Footer'

function App() {

  return <div className='bg-primary dark:bg-[#010e21]'>
	<NavBar/>
	{/* <Home/> */}
	<main>
		<AboutMe/>
		{/* <Skills/> */}
		<Portfolio/>
		<Contact/>
	</main>
	<Footer/>
  </div>
}

export default App
