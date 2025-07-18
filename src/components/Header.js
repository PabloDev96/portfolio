import React from 'react';
import { TbFileCv } from "react-icons/tb";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-card">
        <div className="header-content">
          <img
            src="/img_portfolio.png"
            alt="Pablo Díaz"
            className="profile-photo"
          />

          <div className="text-info">
            <h1>Pablo Díaz García</h1>
            <h2>Desarrollador de aplicaciones web (FullStack)</h2>

            <div className="icon-buttons">
              <a
                href="/CV_PabloDíazGarcía.pdf"
                target="_blank"
                className="icon-button cv"
              >
                <TbFileCv size={32} />
              </a>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
