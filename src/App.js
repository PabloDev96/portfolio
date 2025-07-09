import React, { useState } from 'react';
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
        <PhaserGame />
      )}
      
      {section === 'basic' && <Portfolio onBack={goToLanding} />}

      {section === 'about' && (
        <>
          <Header />
          <About />
          <button className="back-button" onClick={goToLanding}>Volver al inicio</button>
        </>
      )}

      {section === 'projects' && (
        <>
          <Projects />
          <button className="back-button" onClick={goToLanding}>Volver al inicio</button>
        </>
      )}

      {section === 'contact' && (
        <>
          <Contact />
          <button className="back-button" onClick={goToLanding}>Volver al inicio</button>
        </>
      )}
    </>
  );
}

export default App;
