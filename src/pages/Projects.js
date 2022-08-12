import React from 'react';
import { projects } from '../utils/projects';
import githubLogo from '../assets/logos/github-logo.svg'

function Projects() {
  return (
    <section className='m-auto'>
      <div className=" w-full p-10 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">
            My Projects
          </h1>
        <div className="flex flex-wrap justify-around">
          {projects.map((project) => (
            <div key={project.name} className="flex relative w-full md:w-1/3 h-96 mb-5 md:m-5">
              <img
                alt="project screenshot"
                className="absolute inset-0 w-full h-full object-cover object-center radius"
                src={project.image}
              />
              <div className="flex flex-col justify-around items-center radius px-8 py-15 relative z-10 w-full border-4 border-black bg-white opacity-0 hover:opacity-90">
                <h1 className="text-lg title-font font-bold text-black mb-1">
                  <a href={project.live} target='_blank' rel="noreferrer">{project.name}</a>
                </h1>
                <h3 className="text-lg font-medium text-black mb-3">
                  {project.tech}
                </h3>
                <a href={project.repo} target='_blank' rel="noreferrer">
                  <img src={githubLogo} width='48px' height='48px' alt='github logo'></img>
                </a>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;