// components/Landing.js
import React from 'react';
import './Landing.css';

function Landing({ onSelectOption }) {
  return (
    <div className="landing-container">
      <h1>Bienvenido a mi Portfolio</h1>
      <div className="landing-buttons">
        <button onClick={() => onSelectOption('interactive')}>Versión Interactiva (Juego)</button>
        <button onClick={() => onSelectOption('basic')}>Versión Básica</button>
      </div>
    </div>
  );
}

export default Landing;