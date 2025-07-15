import React from 'react';
import './MarioStyle.css';
import { TbFileCv } from "react-icons/tb";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {

  {/*NO ES NECESARIO EL BOTON DE SCROLL UP
     const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; */}

  return (
    <section className="mario-section">
      <h2 className="mario-title">Contacto</h2>

      <div className="mario-card">
        <p>
          <span className="mario-label">Email:</span>{' '}
          <a className="mario-label-mail" href="mailto:pablo.diazgar@gmail.com">
            pablo.diazgar@gmail.com
          </a>
        </p>
        <p>
          <span className="mario-label">Teléfono:</span>{' '}
          <span
            onClick={() => {
              navigator.clipboard.writeText('+34659103719');
              alert('¡Número copiado al portapapeles!');
            }}
            className="mario-copy-phone"
          >
            +34 659 103 719
          </span>
        </p>
      </div>

      <div className="mario-icon-buttons">
        <a
          href="/CV_PabloDíazGarcía.pdf"
          target="_blank"
          className="mario-icon-button cv"
        >
          <TbFileCv size={32} />
        </a>
        <a href="https://www.linkedin.com/in/pablo-díaz-garcía-344048350" target="_blank" rel="noopener noreferrer" className="mario-icon-button linkedin">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/PabloDev96" target="_blank" rel="noopener noreferrer" className="mario-icon-button github">
          <FaGithub size={32} />
        </a>
      </div>
      {/*NO ES NECESARIO EL BOTON DE SCROLL UP
      <button className="up-btn" onClick={scrollToTop}><FaArrowUp /></button> */}
    </section>
  );
};



export default Contact;
