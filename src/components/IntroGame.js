// IntroGame.js
import React, { useEffect, useRef, useState } from 'react';
import './IntroGame.css';
import naveImg from '../assets/nave.png';
import marcianoAbout from '../assets/marcianoSobreMi.png';
import marcianoProjects from '../assets/marcianoProyectos.png';
import marcianoContact from '../assets/marcianoContacto.png';

export default function IntroGame({ onGameEnd }) {
  const canvasRef = useRef(null);
  const [bullets, setBullets] = useState([]);
  const [explosions, setExplosions] = useState([]);
  const [x, setX] = useState(150);
  const naveRef = useRef(null);

  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const sections = [
    { id: 'about', label: 'Sobre mí', img: marcianoAbout },
    { id: 'projects', label: 'Proyectos', img: marcianoProjects },
    { id: 'contact', label: 'Contacto', img: marcianoContact },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const nave = new Image();
    nave.src = naveImg;

    let animationId;
    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(nave, x, height - 60, 50, 50); // nave más grande

      bullets.forEach((b, i) => {
        ctx.fillStyle = '#fff';
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
            setTimeout(() => onGameEnd(s.id), 500);
          }
        });
      });

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
      if (e.key === 'ArrowRight') setX((prev) => Math.min(430, prev + 10));
      if (e.key === ' ') setBullets((prev) => [...prev, { x: x + 23, y: 340 }]);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [x]);

  return (
    <div className="intro-game">
      <canvas ref={canvasRef} width={600} height={540} className="pixel-canvas" />
      <div className="marcianos">
        {sections.map((s) => (
          <img
            key={s.id}
            ref={sectionRefs[s.id]}
            src={s.img}
            alt={s.label}
            className="marciano-img marciano-large"
          />
        ))}
      </div>
      <div className="game-instructions">
        <p>→ Mueve la nave con las flechas izquierda/derecha</p>
        <p>→ Dispara con la barra espaciadora</p>
        <p>→ Elige una sección disparando a un marciano</p>
      </div>
    </div>
  );
}
