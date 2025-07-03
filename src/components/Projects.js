import React from 'react';
import './Projects.css';
import { FaLink, FaGithub } from "react-icons/fa6";
import pcRetroTaskly from '../assets/projects/pcretro-taskly.png';
import pcRetroAdopcion from '../assets/projects/pcretro-webadopcion.png';
import pcRetroAcortador from '../assets/projects/pcretro-acortador.png';

import htmlIcon from '../assets/tech/html5.png';
import tailwindIcon from '../assets/tech/tailwind.png';
import jsIcon from '../assets/tech/javascript.png';
import phpIcon from '../assets/tech/php.png';
import mysqlIcon from '../assets/tech/mysql.png';
import reactIcon from '../assets/tech/react.png';

const projects = [
  {
    id: 1,
    title: 'Taskly',
    image: pcRetroTaskly,
    tech: [htmlIcon, tailwindIcon, jsIcon, phpIcon, mysqlIcon],
    description: `Proyecto grupal donde me encargué del desarrollo del backend (creación de APIs para usuarios, proyectos y tareas) y de la integración en el frontend mediante los archivos de conexión.

La app permite crear proyectos y tareas asignadas a usuarios, con edición, eliminación y una vista Kanban con drag and drop para una gestión visual e intuitiva. Incluye sistema de login, registro y roles para controlar accesos y permisos.

Desarrollado en equipo aplicando buenas prácticas y metodologías ágiles.`,

    demo: 'https://demo-taskly.com',
    repo: 'https://github.com/PabloDev96/GestorDeTareasTaskly'
  },
  {
    id: 2,
    title: 'Web de Adopción',
    image: pcRetroAdopcion,
    tech: [reactIcon, tailwindIcon, jsIcon],
    description:
      'Sitio responsive para adopción de mascotas, con panel de administración y diseño moderno.',
    demo: 'https://demo-adopcion.com',
    repo: 'https://github.com/usuario/web-adopcion'
  },
  {
    id: 3,
    title: 'Acortador de URLs',
    image: pcRetroAcortador,
    tech: [reactIcon, tailwindIcon, jsIcon],
    description:
      'Aplicación para acortar enlaces con historial, validación y vista dinámica.',
    demo: 'https://demo-acortador.com',
    repo: 'https://github.com/usuario/acortador'
  }
];

const Projects = () => {
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
    </section>
  );
};

export default Projects;
