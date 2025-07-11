import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import IntroGame from './components/IntroGame';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import PhaserGame from './components/PhaserGame';


function App() {
  const [section, setSection] = useState('landing'); // opciones: 'landing', 'game', 'supermario', 'basic', 'about', 'projects', 'contact'

  const goToLanding = () => setSection('landing');

  useEffect(() => {
    const handleGoToLanding = () => setSection('landing');
    window.addEventListener('goToLanding', handleGoToLanding);
    return () => {
      window.removeEventListener('goToLanding', handleGoToLanding);
    };
  }, []);

  return (
    <>
      {section === 'landing' && (
        <Landing
          onSelectOption={(option) => {
            if (option === 'interactive') setSection('game');
            else if (option === 'supermario') setSection('supermario');
            else setSection('basic');
          }}
        />
      )}

      {section === 'game' && (
        <IntroGame onGameEnd={setSection} onBack={goToLanding} />
      )}

      {section === 'supermario' && (
        <>
          <button className="back-button-fixed" onClick={goToLanding}>
            <FaArrowLeft />
          </button>
          <PhaserGame />
        </>
      )}

      {section === 'basic' && <Portfolio onBack={goToLanding} />}

      {section === 'about' && (
        <>
          <Header />
          <About />
          <button className="back-button-fixed" onClick={goToLanding}><FaArrowLeft /></button>
        </>
      )}

      {section === 'projects' && (
        <>
          <Projects />
          <button className="back-button-fixed" onClick={goToLanding}><FaArrowLeft /></button>
        </>
      )}

      {section === 'contact' && (
        <>
          <Contact />
          <button className="back-button-fixed" onClick={goToLanding}><FaArrowLeft /></button>
        </>
      )}
    </>
  );
}

export default App;
