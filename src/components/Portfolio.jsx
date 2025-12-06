import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "PC Part Picker",
    image: "/img/pc-part-picker.png",
    description:
      "A web application that allows users to browse and select PC components with real-time filtering, component details, and dynamic updating of selected parts.",
    techStack: ["React", "JavaScript","Node.js", "Tailwind CSS", "MySQL"],
    githubLink: "https://github.com/9Thanaphat/pc-part-picker",
  },
  {
    title: "Smart Hydroponics Control & Monitoring System",
    image: "/img/hydroweb.png",
    description:
      "A web application for the remote monitoring and automated control of a hydroponics farm.",
    githubLink: "https://github.com/jobreak11/https://github.com/9Thanaphat/2021_hydroponics_web_app_project",
    techStack: ["HTML", "CSS","PHP", "MySQL"],
  },
  {
    title: "Cub3D",
    image: "/img/cub3d-2.gif",
    description:
      "A 3D ray-casting engine inspired by Wolfenstein 3D, built in C using the MLX42 graphics library.",
    githubLink: "https://github.com/jobreak11/Cube3D",
    techStack: ["C", "MLX42 (Graphics Library)"],
  },
  {
    title: "FdF",
    image: "/img/fdf.gif",
    description:
      "A 3D wireframe terrain renderer written in C, featuring isometric projection and graphics using MLX42.",
    githubLink: "https://github.com/9Thanaphat/FdF",
    techStack: ["C", "MLX42 (Graphics Library)"],
  },
];

const Portfolio = () => {
  return (
	<section id='portfolio' className='p-5'>
    <h1>Projects</h1>
    <div className='mt-5'></div>
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto'>
        {projects.map((p, index) => (
        <ProjectCard
          key={index}
          title={p.title}
          image={p.image}
          description={p.description}
          githubLink={p.githubLink}
          techStack={p.techStack}
        />
      ))}
    </div>
  </section>
  )
}

export default Portfolio
