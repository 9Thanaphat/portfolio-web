import React from 'react'
import my_photo from '../../public/img/my_photo.png'

const Home = () => {
  return (
	<section id='home' className='h-screen bg-primary dark:bg-[#00021c] dark:text-white'>
		<div className='container mx-auto h-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4'>
			<div className='text-center md:text-left'>
				<h1 className='text-4xl md:text-6xl font-bold'>Thanaphat</h1>
				<p className='text-lg md:text-2xl mt-2'>Full-Stack Developer</p>
			</div>
			<div className='mt-8 md:mt-0'>
				<img src={my_photo} alt='Thanaphat' className='w-64 h-64 md:w-96 md:h-96 rounded-full object-cover' />
			</div>
		</div>
	</section>
  )
}

export default Home
