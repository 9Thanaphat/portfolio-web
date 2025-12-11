import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, image, gif, description, techStack, githubLink, previewLink }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col overflow-hidden border border-gray-100">

      <div className="relative h-56 w-full overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {gif && (
          <img
            src={gif}
            alt={`${title} gif`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack && techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-100 text-gray-700 text-[11px] font-semibold rounded-md tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
        {(githubLink || previewLink) && (
            <div className='pt-4 border-t border-gray-100 flex flex-wrap gap-3 mt-auto'> {/* ใช้ mt-auto เพื่อให้ปุ่มอยู่ด้านล่างสุด */}

                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium shadow-sm"
                    >
                        <FaGithub size={18} />
                        View Code
                    </a>
                )}
                {previewLink && (
                    <a
                        href={previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-sm"
                    >
                        <FaExternalLinkAlt size={16} />
                        Live Preview
                    </a>
                )}
            </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
