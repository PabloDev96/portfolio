import React, { useEffect, useRef, useState } from 'react';
import './IntroGame.css';
import naveImg from '../assets/nave.png';
import marcianoAbout from '../assets/marcianoSobreMi.png';
import marcianoProjects from '../assets/marcianoProyectos.png';
import marcianoContact from '../assets/marcianoContacto.png';

export default function IntroGame({ onGameEnd }) {
  const lastCanvasWidthRef = useRef(null);
  const canvasRef = useRef(null);
  const [bullets, setBullets] = useState([]);
  const [explosions, setExplosions] = useState([]);
  const [x, setX] = useState(150);
  const [isMobile, setIsMobile] = useState(false);
  const [spriteSize, setSpriteSize] = useState({
    shipWidth: 150,
    shipHeight: 150,
    alienWidth: 100,
    alienHeight: 100,
  });

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

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(/Mobi|Android|iPhone|iPad|iPod|Touch/.test(navigator.userAgent));
      };
      checkMobile();
    }, []);

    const resizeCanvas = () => {
      const prevWidth = canvas.width || window.innerWidth;
      canvas.width = window.innerWidth * 0.95;
      canvas.height = window.innerHeight * 0.8;

      if (lastCanvasWidthRef.current !== null) {
        const ratio = canvas.width / lastCanvasWidthRef.current;
        setX((prevX) => prevX * ratio);
      }
      lastCanvasWidthRef.current = canvas.width;

      const baseWidth = canvas.width;
      const shipW = baseWidth * 0.15;
      const shipH = shipW;
      const alienW = baseWidth * 0.12;

      setSpriteSize({
        shipWidth: shipW,
        shipHeight: shipH,
        alienWidth: alienW,
        alienHeight: alienW,
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(nave, x, height - spriteSize.shipHeight - 30, spriteSize.shipWidth, spriteSize.shipHeight);

      bullets.forEach((b, i) => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(b.x, b.y, 6, 20);
        b.y -= 5;
        if (b.y < 0) bullets.splice(i, 1);

        sections.forEach((s) => {
          const targetRef = sectionRefs[s.id];
          const rect = targetRef.current.getBoundingClientRect();
          const canvasRect = canvas.getBoundingClientRect();
          const scaleX = canvas.width / canvasRect.width;
          const scaleY = canvas.height / canvasRect.height;

          const targetX = (rect.left - canvasRect.left) * scaleX;
          const targetY = (rect.top - canvasRect.top) * scaleY;
          const targetWidth = rect.width * scaleX;
          const targetHeight = rect.height * scaleY;

          if (
            b.x >= targetX &&
            b.x <= targetX + targetWidth &&
            b.y >= targetY &&
            b.y <= targetY + targetHeight
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
        ctx.arc(ex.x, ex.y, ex.frame * 8, 0, 2 * Math.PI);
        ctx.fill();
        ex.frame++;
        if (ex.frame > 5) explosions.splice(i, 1);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [bullets, x, explosions, onGameEnd, spriteSize]);

  useEffect(() => {
    const handleKey = (e) => {
      const canvas = canvasRef.current;
      const NAV_SPEED = canvas.width * 0.02;

      if (e.key === 'ArrowLeft') {
        setX((prev) => Math.max(0, prev - NAV_SPEED));
      }
      if (e.key === 'ArrowRight') {
        setX((prev) => Math.min(canvas.width - spriteSize.shipWidth, prev + NAV_SPEED));
      }
      if (e.key === ' ') {
        setBullets((prev) => [
          ...prev,
          {
            x: x + spriteSize.shipWidth / 2,
            y: canvas.height - spriteSize.shipHeight - 30,
          },
        ]);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [x, spriteSize]);

  const moveLeft = () => {
    const canvas = canvasRef.current;
    const speed = canvas.width * 0.02;
    setX((prev) => Math.max(0, prev - speed));
  };

  const moveRight = () => {
    const canvas = canvasRef.current;
    const speed = canvas.width * 0.02;
    setX((prev) => Math.min(canvas.width - spriteSize.shipWidth, prev + speed));
  };

  const shoot = () => {
    const canvas = canvasRef.current;
    setBullets((prev) => [
      ...prev,
      {
        x: x + spriteSize.shipWidth / 2,
        y: canvas.height - spriteSize.shipHeight - 30,
      },
    ]);
  };

  return (
    <div className="intro-game">
      <canvas ref={canvasRef} className="pixel-canvas" />
      <div className="marcianos">
        {sections.map((s) => (
          <img
            key={s.id}
            ref={sectionRefs[s.id]}
            src={s.img}
            alt={s.label}
            className="marciano-img"
            style={{
              width: `${spriteSize.alienWidth}px`,
              height: 'auto',
            }}
          />
        ))}
      </div>
      {isMobile ? (
        <div className="mobile-controls">
          <button onTouchStart={moveLeft} className="control-button">◀️</button>
          <button onTouchStart={shoot} className="control-button">🔫</button>
          <button onTouchStart={moveRight} className="control-button">▶️</button>
        </div>
      ) : (
        <div className="game-instructions">
          <p>→ Mueve la nave con las flechas izquierda/derecha</p>
          <p>→ Dispara con la barra espaciadora</p>
          <p>→ Elige una sección disparando a un marciano</p>
        </div>
      )}
    </div>
  );
}