import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css'; // Agregamos el CSS externo

const Header = () => {
  return (
    <header className="header">
      <h1>Pablo Díaz García</h1>
      <h2>Desarrollador de aplicaciones web (FullStack)</h2>

      <div className="icon-buttons">
        <a
          href="https://www.linkedin.com/in/pablo-díaz-garcía-344048350"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button linkedin"
        >
          <FaLinkedin size={32} />
        </a>

        <a
          href="https://github.com/PabloDev96"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button github"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </header>
  );
};

export default Header;