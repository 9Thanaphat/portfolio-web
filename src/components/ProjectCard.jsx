import React from 'react'
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, image, description, techStack, githubLink }) => {
  return (
	<div className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm mt-1">{description}</p>

		<div className="flex flex-wrap gap-2 my-2">
          {techStack && techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
		<div className='mt-4 pt-4 border-t border-slate-100 flex gap-3'>
		  	{githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 shadow-sm p-2 rounded-md hover:text-black transition-colors font-medium"
        >
          <FaGithub size={20} />
          Code
        </a>
      )}
		</div>


    </div>
  )
}

export default ProjectCard
