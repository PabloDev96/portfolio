import React from 'react';
import './MarioStyle.css';
import { FaLink, FaGithub } from "react-icons/fa6";
import gameboyTaskly from '../assets/projects/gameboy-taskly.png';
import gameboyURL from '../assets/projects/gameboy-url.png';
import htmlIcon from '../assets/tech/html5.png';
import tailwindIcon from '../assets/tech/tailwind.png';
import postgreIcon from '../assets/tech/postgre.png';
import bladeIcon from '../assets/tech/blade.png';
import jsIcon from '../assets/tech/javascript.png';
import phpIcon from '../assets/tech/php.png';
import laravelIcon from '../assets/tech/laravel.png';
import cssIcon from '../assets/tech/css3.png';
import mysqlIcon from '../assets/tech/mysql.png';
import reactIcon from '../assets/tech/react.png';
import { FaArrowUp } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'Taskly',
    image: gameboyTaskly,
    tech: [htmlIcon, tailwindIcon, jsIcon, phpIcon, mysqlIcon],
    description: `Proyecto grupal donde desarrollé el backend (APIs para usuarios, proyectos y tareas) e integré con el frontend. La app permite crear y gestionar proyectos y tareas con vista Kanban (drag and drop), login, registro y control de accesos por roles.`,
    demo: 'https://coral-mule-348004.hostingersite.com/',
    repo: 'https://github.com/PabloDev96/GestorDeTareasTaskly'
  },
  {
    id: 2,
    title: 'Acortador de URLs',
    image: gameboyURL,
    tech: [htmlIcon, cssIcon, bladeIcon, laravelIcon, postgreIcon],
    description:
      'Aplicación web en Laravel para acortar URLs. Genera enlaces cortos únicos que redirigen a la URL original. Desplegada en Render usando Docker y PostgreSQL.',
    demo: 'https://acortador-url-18kt.onrender.com/',
    repo: 'https://github.com/PabloDev96/acortador-url'
  },
];

const Projects = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="mario-section">
      <h2 className="mario-title">Proyectos</h2>

      <div className="mario-project">
        {projects.map((project) => (
          <div key={project.id} className="mario-retro-project">
            <div className="mario-image-and-description">
              <div className="mario-image-wrapper mario-overlay-wrapper">
                <img src={project.image} alt={project.title} className="mario-retro-image" />

                <div className="mario-tech-overlay-center">
                  {project.tech.map((icon, i) => (
                    <img key={i} src={icon} alt="Tech Icon" className="mario-tech-icon-img" />
                  ))}
                </div>
              </div>

              <div className="mario-hover-description">
                <p>{project.description}</p>
                <div className="mario-project-buttons">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="mario-project-btn">
                    <FaLink />
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="mario-project-btn">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="up-btn" onClick={scrollToTop}><FaArrowUp /></button>
    </section>
  );
};

export default Projects;
