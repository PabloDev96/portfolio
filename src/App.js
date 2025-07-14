import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import IntroGame from './components/IntroGame';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import PhaserGame from './components/PhaserGame';
import HeaderMario from './components/HeaderMario';
import AboutMario from './components/AboutMario';
import ProjectsMario from './components/ProjectsMario';
import ContactMario from './components/ContactMario';

function App() {
  const [section, setSection] = useState('landing');

  const goToLanding = () => setSection('landing');
  const goToIntroGame = () => setSection('game');

  const goToSection = useCallback((targetSection) => {
    setSection(targetSection);
  }, []);

  useEffect(() => {
    const handleGoToLanding = () => setSection('landing');
    const handleGoToSection = (e) => {
      const section = e.detail;
      setSection(section);
    };

    window.addEventListener('goToLanding', handleGoToLanding);
    window.addEventListener('goToSection', handleGoToSection);

    return () => {
      window.removeEventListener('goToLanding', handleGoToLanding);
      window.removeEventListener('goToSection', handleGoToSection);
    };
  }, []);

  const isMarioSection = ['aboutMario', 'projectsMario', 'contactMario'].includes(section);

  return (
    <div className={`global-wrapper ${isMarioSection ? 'mario-bg' : ''}`}>
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
        <IntroGame onGameEnd={goToSection} onBack={goToLanding} />
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
          <button className="back-button-fixed" onClick={goToIntroGame}><FaArrowLeft /></button>
        </>
      )}

      {section === 'projects' && (
        <>
          <Projects />
          <button className="back-button-fixed" onClick={goToIntroGame}><FaArrowLeft /></button>
        </>
      )}

      {section === 'contact' && (
        <>
          <Contact />
          <button className="back-button-fixed" onClick={goToIntroGame}><FaArrowLeft /></button>
        </>
      )}

      {section === 'aboutMario' && (
        <>
          <HeaderMario />
          <AboutMario />
          <button className="back-button-fixed" onClick={goToLanding}><FaArrowLeft /></button>
        </>
      )}

      {section === 'projectsMario' && (
        <>
          <ProjectsMario />
          <button className="back-button-fixed" onClick={goToLanding}><FaArrowLeft /></button>
        </>
      )}

      {section === 'contactMario' && (
        <>
          <ContactMario />
          <button className="back-button-fixed" onClick={goToLanding}><FaArrowLeft /></button>
        </>
      )}
    </div>
  );
}

export default App;
