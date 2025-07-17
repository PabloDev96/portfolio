import React from 'react';
import './About.css'
import './Projects.css';
import { FaLink, FaGithub } from "react-icons/fa6";
import pcRetroTaskly from '../assets/projects/pcretro-taskly.png';
import pcRetroAdopcion from '../assets/projects/pcretro-webadopcion.png';
import pcRetroAcortador from '../assets/projects/pcretro-acortador.png';

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
import { FaArrowLeft } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'Taskly',
    image: pcRetroTaskly,
    tech: [htmlIcon, tailwindIcon, jsIcon, phpIcon, mysqlIcon],
    description: `Proyecto grupal donde desarrollé el backend (APIs para usuarios, proyectos y tareas) e integré con el frontend. La app permite crear y gestionar proyectos y tareas con vista Kanban (drag and drop), login, registro y control de accesos por roles.`,

    demo: 'https://coral-mule-348004.hostingersite.com/',
    repo: 'https://github.com/PabloDev96/GestorDeTareasTaskly'
  },
  {
    id: 2,
    title: 'Acortador de URLs',
    image: pcRetroAcortador,
    tech: [htmlIcon, cssIcon, bladeIcon, laravelIcon, postgreIcon],
    description:
      'Aplicación para acortar enlaces con historial, validación y vista dinámica. ACTUALMENTE EN PROGRESO.',
    demo: 'https://acortador-url-18kt.onrender.com/',
    repo: 'https://github.com/PabloDev96/acortador-url'
  },  
];

const Projects = () => {

  const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }; 
  return (
    <section className="projects-section">
      <h2 className="section-title">Proyectos</h2>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="retro-project">
            <div className="image-and-description">
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} className="retro-image" />
                <div className="tech-overlay">
                  {project.tech.map((icon, i) => (
                    <img key={i} src={icon} alt="Tech" />
                  ))}
                </div>
              </div>
              <div className="project-description">
                <p>{project.description}</p>
                <div className="project-buttons">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <FaLink />
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-btn">
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
