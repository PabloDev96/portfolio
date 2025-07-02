import React from 'react';
import './Portfolio.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";

const Portfolio = ({ onBack }) => {
    return (
        <div className="portfolio-container">
            <section className="hero">
                <div className="text-content">
                    <p className="section-label">DESARROLLADOR WEB</p>
                    <h1>Hola, soy <span className="highlight">Pablo Díaz</span></h1>
                    <p>Diseño y desarrollo aplicaciones web modernas, funcionales y con personalidad.</p>
                    <div className="icon-buttons">
                        <a
                            href="/CV_PabloDíazGarcía.pdf"
                            download
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
                <div className="image-wrapper">
                    <img src="/img_portfolio.png" alt="Pablo Díaz" />
                </div>
            </section>

            <section className="about">
                <p className="section-label">SOBRE MÍ</p>
                <h2>¿Quién soy?</h2>
                <p>
                    Desarrollador web con enfoque FullStack, proactivo y enfocado en soluciones escalables.
                    Trabajo con tecnologías como React, Spring Boot, JavaScript, PHP, MySQL y más.
                </p>
            </section>

            <section className="services">
                <p className="section-label">SERVICIOS</p>
                <h2>¿Qué puedo hacer?</h2>
                <div className="service-grid">
                    <div className="service-card">Diseño Web</div>
                    <div className="service-card">Aplicaciones React</div>
                    <div className="service-card">API REST y backend</div>
                    <div className="service-card">Edición y mantenimiento</div>
                </div>
            </section>

            <section className="contact">
                <p className="section-label">CONTACTO</p>
                <h2>¿Trabajamos juntos?</h2>
                <p>Email: tuemail@example.com</p>
                <p>Teléfono: +34 600 000 000</p>
            </section>

            <button className="back-btn" onClick={onBack}>Volver al inicio</button>
        </div>
    );
};

export default Portfolio;
