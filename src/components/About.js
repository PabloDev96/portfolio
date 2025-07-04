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

const About = () => {
  return (
    <section style={{ padding: '40px 20px' }}>
      <h2 className="titulo" style={{ marginTop: '30px' }}>Sobre mí</h2>
      <p>
        Soy desarrollador web con enfoque FullStack y una fuerte motivación por seguir creciendo en este sector. Me apasiona crear soluciones funcionales y modernas que resuelvan problemas reales. Durante mi formación y experiencia práctica he trabajado con tecnologías como PHP, Java, MySQL, JavaScript y Tailwind, combinando conocimientos técnicos con una mentalidad proactiva y resolutiva. Actualmente me estoy especializando en frameworks como React y Spring Boot, con el objetivo de construir proyectos escalables y de alto impacto. Busco continuamente nuevos retos que me permitan aprender, aportar valor y evolucionar como profesional.
      </p>

       <h2 className="titulo" style={{ marginTop: '30px' }}>Estudios</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>
          <strong>Grado superior – Desarrollo de aplicaciones Web</strong> | Centro FP MEDAC (2023 – 2025)
        </li>
        <li>
          <strong>Grado superior – Mantenimiento electrónico</strong> | CIFP Cerdeño (2017 – 2019)
        </li>
        <li>
          <strong>Grado superior – Sistemas de telecomunicaciones e informáticos</strong> | CIFP Cerdeño (2015 – 2017)
        </li>
      </ul>
      

      <h2 className="titulo" style={{ marginTop: '30px' }}>Tecnologías que manejo</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
        <img src={htmlLogo} alt="HTML" height={40} />
        <img src={cssLogo} alt="CSS" height={40} />
        <img src={tailwindLogo} alt="Tailwind" height={40} />
        <img src={jsLogo} alt="JavaScript" height={40} />
        <img src={phpLogo} alt="PHP" height={40} />
        <img src={mysqlLogo} alt="MySQL" height={40} />
        <img src={gitLogo} alt="Git" height={40} />
        <img src={apacheLogo} alt="Apache" height={40} />
        <img src={laravelLogo} alt="Laravel" height={40} />
      </div>

      <h2 className="titulo" style={{ marginTop: '30px' }}>Actualmente aprendiendo</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <img src={reactLogo} alt="React" height={40} />
        <img src={springLogo} alt="Spring" height={40} />
      </div>
    </section>
  );
};

export default About;
