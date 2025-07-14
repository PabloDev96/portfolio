import React from 'react';
import { TbFileCv } from "react-icons/tb";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './MarioStyle.css';

const Header = () => {
  return (
    <header className="header-mario">
      <div className="header-card-mario">
        <div className="header-content">
          <img
            src="/img_portfolio.png"
            alt="Pablo Díaz"
            className="profile-photo-mario"
          />

          <div className="text-info-mario">
            <h1>Pablo Díaz García</h1>
            <h2>Desarrollador de aplicaciones web (FullStack)</h2>

            <div className="mario-icon-buttons">
              <a
                href="/CV_PabloDíazGarcía.pdf"
                target="_blank"
                className="mario-icon-button cv"
              >
                <TbFileCv size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/pablo-díaz-garcía-344048350"
                target="_blank"
                rel="noopener noreferrer"
                className="mario-icon-button linkedin"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://github.com/PabloDev96"
                target="_blank"
                rel="noopener noreferrer"
                className="mario-icon-button github"
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
