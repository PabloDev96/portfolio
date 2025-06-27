import React, { useEffect, useRef, useState } from 'react';
import './IntroGame.css';

export default function IntroGame({ onGameEnd }) {
  const canvasRef = useRef(null);
  const [bullets, setBullets] = useState([]);
  const [explosions, setExplosions] = useState([]);
  const [x, setX] = useState(150);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const sections = [
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationId;
    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#00b894';
      ctx.fillRect(x, height - 20, 20, 20); // nave

      // Dibujar balas
      ctx.fillStyle = '#fff';
      bullets.forEach((b, i) => {
        ctx.fillRect(b.x, b.y, 4, 10);
        b.y -= 5;
        if (b.y < 0) bullets.splice(i, 1);

        sections.forEach((s) => {
          const targetRef = sectionRefs[s.id];
          const rect = targetRef.current.getBoundingClientRect();
          const canvasRect = canvas.getBoundingClientRect();

          const targetX = rect.left - canvasRect.left;
          const targetY = rect.top - canvasRect.top;

          if (
            b.x >= targetX &&
            b.x <= targetX + rect.width &&
            b.y >= targetY &&
            b.y <= targetY + rect.height
          ) {
            bullets.splice(i, 1);
            setExplosions((prev) => [...prev, { x: b.x, y: b.y, frame: 0 }]);
            setTimeout(() => onGameEnd(s.id), 500); // Pasa el id de la sección
          }
        });
      });

      // Dibujar explosiones
      explosions.forEach((ex, i) => {
        ctx.fillStyle = `rgba(255, 0, 0, ${1 - ex.frame / 5})`;
        ctx.beginPath();
        ctx.arc(ex.x, ex.y, ex.frame * 4, 0, 2 * Math.PI);
        ctx.fill();
        ex.frame++;
        if (ex.frame > 5) explosions.splice(i, 1);
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animationId);
  }, [bullets, x, explosions, onGameEnd]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') setX((prev) => Math.max(0, prev - 10));
      if (e.key === 'ArrowRight') setX((prev) => Math.min(280, prev + 10));
      if (e.key === ' ') setBullets((prev) => [...prev, { x: x + 8, y: 280 }]);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [x]);

  return (
    <div className="intro-game">
      <canvas ref={canvasRef} width={320} height={300} className="pixel-canvas" />
      <div className="marcianos">
        <div key="about" ref={aboutRef} className="marciano">Sobre mí</div>
        <div key="projects" ref={projectsRef} className="marciano">Proyectos</div>
        <div key="contact" ref={contactRef} className="marciano">Contacto</div>
      </div>
    </div>
  );
}
