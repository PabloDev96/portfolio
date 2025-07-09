import React from 'react';
import './Contact.css'; // puedes unificarlo con Projects.css si prefieres
import { TbFileCv } from "react-icons/tb";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contacto</h2>

      <div className="contact-card">
        <p>
          <span className="label">Email:</span>{' '}
          <a href="mailto:pablo.diazgar@gmail.com">
            pablo.diazgar@gmail.com
          </a>
        </p>
        <p>
          <span className="label">Teléfono:</span>{' '}
          <span
            onClick={() => {
              navigator.clipboard.writeText('+34659103719');
              alert('¡Número copiado al portapapeles!');
            }}
            className="copy-phone"
          >
            +34 659 103 719
          </span>
        </p>
      </div>

      <div className="icon-buttons">
        <a
          href="/CV_PabloDíazGarcía.pdf"
          target="_blank"
          className="icon-button cv"
        >
          <TbFileCv size={32} />
        </a>
        <a href="https://www.linkedin.com/in/pablo-díaz-garcía-344048350" target="_blank" rel="noopener noreferrer" className="icon-button linkedin">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/PabloDev96" target="_blank" rel="noopener noreferrer" className="icon-button github">
          <FaGithub size={32} />
        </a>
      </div>

    </section>
  );
};



export default Contact;
