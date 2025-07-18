import React from 'react';
import './Landing.css';
import { FaLink } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";

function Landing({ onSelectOption }) {
  return (
    <div className="landing-container">
      <h1>Hola, soy Pablo Díaz</h1>
      <h1>Bienvenido a mi Portfolio!</h1>
      <div className="landing-buttons">
        <button onClick={() => onSelectOption('basic')}>Versión Estándar</button>
        <button onClick={() => onSelectOption('interactive')}>Versión Space Invaders</button>
        <button onClick={() => onSelectOption('supermario')}>Versión Mario Bros</button>
      </div>
      <div className="icon-btns">
        <a href="/CV_PabloDíazGarcía.pdf" target="_blank" rel="noopener noreferrer" className="icon-btn cv">
          <TbFileCv size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-díaz-garcía-344048350"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn linkedin"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/PabloDev96"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn github"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </div>
  );
}

export default Landing;