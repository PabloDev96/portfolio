import React from 'react';
import './About.css';

import htmlLogo from '../assets/tech/html5.png';
import cssLogo from '../assets/tech/css3.png';
import tailwindLogo from '../assets/tech/tailwind.png';
import jsLogo from '../assets/tech/javascript.png';
import phpLogo from '../assets/tech/php.png';
import mysqlLogo from '../assets/tech/mysql.png';
import gitLogo from '../assets/tech/git.png';
import apacheLogo from '../assets/tech/apache.png';
import laravelLogo from '../assets/tech/laravel.png';
import reactLogo from '../assets/tech/react.png';
import springLogo from '../assets/tech/spring.png';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {

  const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
  return (
    <section className="about-section">
      <h2 className="section-title">Sobre mí</h2>
      <div className="info-card">
        <p>
          Soy desarrollador web con enfoque FullStack y una fuerte motivación por seguir creciendo en este sector. Me apasiona crear soluciones funcionales y modernas que resuelvan problemas reales. Durante mi formación y experiencia práctica he trabajado con tecnologías como PHP, Java, MySQL, JavaScript y Tailwind, combinando conocimientos técnicos con una mentalidad proactiva y resolutiva. Actualmente me estoy especializando en frameworks como React y Spring Boot, con el objetivo de construir proyectos escalables y de alto impacto. Busco continuamente nuevos retos que me permitan aprender, aportar valor y evolucionar como profesional.
        </p>
      </div>

      <h2 className="section-title">Estudios</h2>
      <div className="info-card">
        <ul>
          <li><strong>Grado superior – Desarrollo de aplicaciones Web</strong> | Centro FP MEDAC (2023 – 2025)</li>
          <li><strong>Grado superior – Mantenimiento electrónico</strong> | CIFP Cerdeño (2017 – 2019)</li>
          <li><strong>Grado superior – Sistemas de telecomunicaciones e informáticos</strong> | CIFP Cerdeño (2015 – 2017)</li>
        </ul>
      </div>

      <h2 className="section-title">Tecnologías que manejo</h2>
      <div className="info-card tech-grid">

        <div className="tech-icon">
          <img src={htmlLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={cssLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={tailwindLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={jsLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={phpLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={mysqlLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={gitLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={apacheLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={laravelLogo} alt="HTML" />
        </div>        
      </div>

      <h2 className="section-title">Actualmente aprendiendo</h2>
      <div className="info-card tech-grid">
        <div className="tech-icon">
          <img src={reactLogo} alt="HTML" />
        </div>
        <div className="tech-icon">
          <img src={springLogo} alt="HTML" />
        </div>
      </div>
      <button className="up-btn" onClick={scrollToTop}><FaArrowUp /></button>
    </section>
  );
};

export default About;
