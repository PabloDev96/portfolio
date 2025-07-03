import React from 'react';
import './Projects.css';

import pcRetroTaskly from '../assets/projects/pcretro-taskly.png';
import pcRetroAdopcion from '../assets/projects/pcretro-webadopcion.png';
import pcRetroAcortador from '../assets/projects/pcretro-acortador.png';

import htmlIcon from '../assets/tech/html5.png';
import tailwindIcon from '../assets/tech/tailwind.png';
import jsIcon from '../assets/tech/javascript.png';
import phpIcon from '../assets/tech/php.png';
import mysqlIcon from '../assets/tech/mysql.png';
import reactIcon from '../assets/tech/react.png';


const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Proyectos</h2>

      <div className="project-list">
        {/* Proyecto 1 - Taskly */}
        <div className="retro-project">
          <img src={pcRetroTaskly} alt="Taskly" className="retro-image" />
          <div className="tech-overlay">
            <img src={htmlIcon} alt="HTML" />
            <img src={tailwindIcon} alt="Tailwind" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={phpIcon} alt="PHP" />
            <img src={mysqlIcon} alt="MySQL" />
          </div>
        </div>

        {/* Proyecto 2 - Web de Adopción */}
        <div className="retro-project">
          <img src={pcRetroAdopcion} alt="Web de Adopción" className="retro-image" />
          <div className="tech-overlay">
            <img src={reactIcon} alt="React" />
            <img src={tailwindIcon} alt="Tailwind" />
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>

        {/* Proyecto 3 - Acortador URLs */}
        <div className="retro-project">
          <img src={pcRetroAcortador} alt="Acortador" className="retro-image" />
          <div className="tech-overlay">
            <img src={reactIcon} alt="React" />
            <img src={tailwindIcon} alt="Tailwind" />
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
