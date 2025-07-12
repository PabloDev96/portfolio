import React from 'react';
import './Portfolio.css';
import { FaLink } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";
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
import javaLogo from '../assets/tech/java.png';
import laptopImg from '../assets/projects/laptop.png';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Portfolio = ({ onBack }) => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="portfolio-container">
            <section className="hero">
                <div className="text-content">
                    <h1>Hola, soy <span className="highlight">Pablo Díaz</span></h1>
                    <h2 className="section-label">DESARROLLADOR WEB</h2>                    
                    <p>Diseño y desarrollo aplicaciones web modernas, funcionales y con personalidad.</p>
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
                <div className="image-wrapper">
                    <img src="/img_portfolio.png" alt="Pablo Díaz" />
                </div>
            </section>

            <section className="about">
                <h2 className="section-label">SOBRE MÍ</h2>
                <p>
                    Soy desarrollador web con enfoque FullStack y una fuerte motivación por seguir creciendo en este sector. Me apasiona crear soluciones funcionales y modernas que resuelvan problemas reales. Durante mi formación y experiencia práctica he trabajado con tecnologías como PHP, Java, MySQL, JavaScript y Tailwind, combinando conocimientos técnicos con una mentalidad proactiva y resolutiva. Actualmente me estoy especializando en frameworks como React y Spring Boot, con el objetivo de construir proyectos escalables y de alto impacto. Busco continuamente nuevos retos que me permitan aprender, aportar valor y evolucionar como profesional.
                </p>
            </section>

            <section className="projects">
                <h2 className="section-label">PROYECTOS</h2>
                <div className="project-grid">

                    {/*PROYECTO 1*/}
                    <div className="project-card-image">
                        <div
                            className="image-container"
                            style={{ backgroundImage: `url(${require('../assets/projects/laptop-taskly.png')})` }}
                        >
                            <div className="project-overlay">
                                <h3>Gestor de Tareas - Taskly</h3>
                                <div className="tech-icons">
                                    <img src={require('../assets/tech/html5.png')} alt="HTML" />
                                    <img src={require('../assets/tech/tailwind.png')} alt="Tailwind" />
                                    <img src={require('../assets/tech/javascript.png')} alt="JavaScript" />
                                    <img src={require('../assets/tech/php.png')} alt="PHP" />
                                    <img src={require('../assets/tech/mysql.png')} alt="MySQL" />
                                </div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>Proyecto grupal donde desarrollé el backend (APIs para usuarios, proyectos y tareas) e integré con el frontend. La app permite crear y gestionar proyectos y tareas con vista Kanban (drag and drop), login, registro y control de accesos por roles.                                
                            </p>
                            <div className="project-btns">
                                <a href="https://coral-mule-348004.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="p-btn">
                                    <FaLink />
                                </a>
                                <a href="https://github.com/PabloDev96/GestorDeTareasTaskly" target="_blank" rel="noopener noreferrer" className="p-btn">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>


                    {/*PROYECTO 2*
                    <div className="project-card-image">
                        <div
                            className="image-container"
                            style={{ backgroundImage: `url(${require('../assets/projects/laptop-taskly.png')})` }}
                        >
                            <div className="project-overlay">
                                <h3>Web adopción mascotas</h3>
                                <div className="tech-icons">
                                    <img src={require('../assets/tech/html5.png')} alt="HTML" />
                                    <img src={require('../assets/tech/tailwind.png')} alt="Tailwind" />
                                    <img src={require('../assets/tech/javascript.png')} alt="JavaScript" />
                                    <img src={require('../assets/tech/php.png')} alt="PHP" />
                                    <img src={require('../assets/tech/mysql.png')} alt="MySQL" />
                                </div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>App fullstack para publicar y buscar mascotas en adopción. Incluye filtros, perfiles, login/registro y carga de imágenes. Desarrollada con React, Node.js y MongoDB, enfocada en una experiencia accesible y responsive.</p>
                            <div className="project-btns">
                                <a href="" target="_blank" rel="noopener noreferrer" className="p-btn">
                                    <FaLink />
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className="p-btn">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div> */}

                    {/* PROYECTO 3 */}
                    <div className="project-card-image">
                        <div
                            className="image-container"
                            style={{ backgroundImage: `url(${require('../assets/projects/laptop-in-progress.png')})` }}
                        >
                            <div className="project-overlay">
                                <h3>Acortador URLs</h3>
                                <div className="tech-icons">
                                    <img src={require('../assets/tech/html5.png')} alt="HTML" />
                                    <img src={require('../assets/tech/css3.png')} alt="CSS" />
                                    <img src={require('../assets/tech/laravel.png')} alt="Laravel" />
                                    <img src={require('../assets/tech/mysql.png')} alt="MySQL" />
                                </div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>Aplicación para acortar enlaces con historial, validación y vista dinámica. <b>ACTUALMENTE TRABAJANDO EN ELLO </b>.
                            </p>
                            <div className="project-btns">
                                <a href="https://github.com/PabloDev96/portfolio" target="_blank" rel="noopener noreferrer" className="p-btn">
                                    <FaLink />
                                </a>
                                <a href="https://github.com/PabloDev96/portfolio" target="_blank" rel="noopener noreferrer" className="p-btn">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div> 

                    {/* PROYECTO 4
                    <div className="project-card-image">
                        <div
                            className="image-container"
                            style={{ backgroundImage: `url(${require('../assets/projects/laptop-taskly.png')})` }}
                        >
                            <div className="project-overlay">
                                <h3>GTA VI</h3>
                                <div className="tech-icons">
                                    <img src={require('../assets/tech/html5.png')} alt="HTML" />
                                    <img src={require('../assets/tech/tailwind.png')} alt="Tailwind" />
                                    <img src={require('../assets/tech/javascript.png')} alt="JavaScript" />
                                    <img src={require('../assets/tech/php.png')} alt="PHP" />
                                    <img src={require('../assets/tech/mysql.png')} alt="MySQL" />
                                </div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>Página promocional ficticia de GTA VI con trailer, info del juego y suscripción por correo. Hecha en HTML, CSS y JS, con diseño responsive y animaciones visuales.</p>
                            <div className="project-btns">
                                <a href="" target="_blank" rel="noopener noreferrer" className="p-btn">
                                    <FaLink />
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className="p-btn">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div> */}

                </div>
            </section>

            {/*<section className="services">
                <h2 className="section-label">SERVICIOS</h2>
                <div className="service-grid">
                    <div className="service-card">Diseño Web</div>
                    <div className="service-card">Aplicaciones React</div>
                    <div className="service-card">API REST y backend</div>
                    <div className="service-card">Edición y mantenimiento</div>
                </div>
            </section>*/}

            <section className="technologies-section">
                <h2 className="section-label">TECNOLOGÍAS QUE MANEJO</h2>

                <div className="technologies">
                    <div className="tech-card">
                        <img src={htmlLogo} alt="HTML" />
                        <span>HTML</span>
                    </div>
                    <div className="tech-card">
                        <img src={cssLogo} alt="CSS" />
                        <span>CSS</span>
                    </div>
                    <div className="tech-card">
                        <img src={tailwindLogo} alt="Tailwind" />
                        <span>Tailwind</span>
                    </div>
                    <div className="tech-card">
                        <img src={jsLogo} alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className="tech-card">
                        <img src={javaLogo} alt="JavaScript" />
                        <span>Java</span>
                    </div>
                    <div className="tech-card">
                        <img src={phpLogo} alt="PHP" />
                        <span>PHP</span>
                    </div>
                    <div className="tech-card">
                        <img src={mysqlLogo} alt="MySQL" />
                        <span>MySQL</span>
                    </div>
                    <div className="tech-card">
                        <img src={gitLogo} alt="Git" />
                        <span>Git</span>
                    </div>
                    <div className="tech-card">
                        <img src={apacheLogo} alt="Apache" />
                        <span>Apache</span>
                    </div>
                    <div className="tech-card">
                        <img src={laravelLogo} alt="Laravel" />
                        <span>Laravel</span>
                    </div>
                </div>
            </section>

            <section className="learning-section">
                <h2 className="section-label">ACTUALMENTE EN FORMACIÓN</h2>

                <div className="learning">
                    <div className="learning-card">
                        <img src={reactLogo} alt="React" />
                        <span>React</span>
                    </div>
                    <div className="learning-card">
                        <img src={springLogo} alt="Spring" />
                        <span>Spring</span>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h2 className="section-label">CONTACTO</h2>
                <p>Email: <a href="mailto:pablo.diazgar@gmail.com">pablo.diazgar@gmail.com</a></p>
                <p>Teléfono: <a href="tel:+34659103719">+34 659 103 719</a></p>
            </section>

            <button className="back-btn" onClick={onBack}><FaArrowLeft /></button>
            <button className="up-btn" onClick={scrollToTop}><FaArrowUp /></button>
        </div>
    );
};

export default Portfolio;
