import React from 'react';
import './Projects.css';
import pcRetro from '../assets/projects/pcretro.png';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Proyectos</h2>

      <div className="retro-project">
        <img src={pcRetro} alt="Ordenador retro" className="retro-image" />

        <div className="screen-overlay">
          <p className="typewriter">
            Gestor de tareas<br />
            HTML · Tailwind · JavaScript · PHP · MySQL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
