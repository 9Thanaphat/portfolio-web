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

	const [lang, setLang] = useState("en");

  return <div className='bg-primary dark:bg-[#010e21]'>
	<NavBar lang={lang} setLang={setLang}/>
	{/* <Home/> */}
	<main>
		<AboutMe lang={lang}/>
		{/* <Skills/> */}
		<Portfolio lang={lang}/>
		<Contact/>
	</main>
	<Footer/>
  </div>
}

export default App
