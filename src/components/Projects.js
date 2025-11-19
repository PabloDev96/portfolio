import React, { useState } from 'react';
import './About.css'
import './Projects.css';
import { FaLink, FaGithub } from "react-icons/fa6";
import pcRetroTaskly from '../assets/projects/pcretro-taskly.png';
import pcRetroRefugio from '../assets/projects/pcretro-pawshelt.png';
import pcRetroButtonPress from '../assets/projects/pcretroButtonPress.png';
import pcISAT from '../assets/projects/pcretro.png';

import htmlIcon from '../assets/tech/html5.png';
import springIcon from '../assets/tech/spring.png';
import tailwindIcon from '../assets/tech/tailwind.png';
import postgreIcon from '../assets/tech/postgre.png';
import firebaseIcon from '../assets/tech/firebase.png';
import jsIcon from '../assets/tech/javascript.png';
import phpIcon from '../assets/tech/php.png';
import cssIcon from '../assets/tech/css3.png';
import mysqlIcon from '../assets/tech/mysql.png';
import reactIcon from '../assets/tech/react.png';
import wordpressIcon from '../assets/tech/wordpress.png';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'iSAT',
    image: pcISAT,
    tech: [reactIcon, cssIcon, firebaseIcon],
    description:
      'Aplicación interna para la gestión completa de un servicio técnico de reparaciones. Permite administrar reparaciones, clientes, stock, tickets, proformas, facturas e informes, centralizando toda la información en una plataforma moderna y eficiente. Desarrollada en React con CSS y desplegada en Firebase.',
    demo: 'https://isat-demo.web.app/',
    repo: 'https://isat-demo.web.app/'
  },

  {
    id: 2,
    title: 'PawShelt',
    image: pcRetroRefugio,
    tech: [springIcon, reactIcon, postgreIcon],
    description:
      'App para la gestión interna de un refugio de animales. Permite llevar un control eficiente de animales, adopciones, citas y estadísticas con sistema de roles implementado. El objetivo principal es optimizar el trabajo diario de las protectoras, centralizando toda la información en una plataforma intuitiva, accesible y segura.',
    demo: 'https://paw-shelt-frontend.vercel.app/',
    repo: 'https://github.com/PabloDev96/paw-shelt'
  },

  {
    id: 3,
    title: 'Taskly',
    image: pcRetroTaskly,
    tech: [htmlIcon, tailwindIcon, jsIcon, phpIcon, mysqlIcon],
    description:
      'Proyecto grupal donde desarrollé el backend (APIs para usuarios, proyectos y tareas) e integré con el frontend. La app permite crear y gestionar proyectos y tareas con vista Kanban (drag and drop), login, registro y control de accesos por roles.',
    demo: 'https://coral-mule-348004.hostingersite.com/',
    repo: 'https://github.com/PabloDev96/GestorDeTareasTaskly'
  },

  {
    id: 4,
    title: 'ButtonPressGaming',
    image: pcRetroButtonPress,
    tech: [wordpressIcon],
    description:
      'Página Web de noticias gaming creada mediante Wordpress, utilizando tanto el editor visual como Elementor, y optimizada para SEO usando Yoast.',
    demo: 'https://buttonpressgaming.es/',
    repo: 'https://github.com/PabloDev96/buttonpressgaming'
  }
];

const Projects = () => {

  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000); // Quita el mensaje en 2s
  };


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
                {project.id === 1 && (
                  <p className="user-pass">
                    User:{" "}
                    <span
                      className="copy-tooltip"
                      data-tooltip={copied === "email" ? "¡Copiado!" : "Copiar"}
                      onClick={() => copyToClipboard("demo@isat.com", "email")}
                    >
                      demo@isat.com
                    </span>
                    <br />
                    Pass:{" "}
                    <span
                      className="copy-tooltip"
                      data-tooltip={copied === "pass" ? "¡Copiado!" : "Copiar"}
                      onClick={() => copyToClipboard("123456", "pass")}
                    >
                      123456
                    </span>
                  </p>
                )}
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
