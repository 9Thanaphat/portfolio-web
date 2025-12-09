import React from 'react'

const skills = [
	{ name: 'HTML', },
	{ name: 'CSS', },
	{ name: 'JavaScript', },
	{ name: 'React', },
	{ name: 'Node.js', },
	{ name: 'Express', },
	{ name: 'MongoDB', },
	{ name: 'Git', },
	{ name: 'GitHub', },
	{ name: 'Docker', },
	{ name: 'Go', },
	{ name: 'C', },
]

const Skills = () => {
  return (
	<section id='skills' className='min-h-screen bg-primary dark:bg-[#00021c] dark:text-white py-12'>
		<div className='container mx-auto px-4'>
			<h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>My Skills</h2>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
				{skills.map((skill) => (
					<div key={skill.name} className='flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
						<p className='mt-2 text-lg font-semibold'>{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	</section>
  )
}

export default Skills
