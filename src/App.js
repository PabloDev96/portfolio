import React, { useState } from 'react';
import IntroGame from './components/IntroGame';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [section, setSection] = useState('game'); // 'about', 'projects', 'contact'

  const goToGame = () => setSection('game');

  return (
    <>
      {section === 'game' && <IntroGame onGameEnd={setSection} />}
      {section === 'about' && (
        <>
          <Header />
          <About />
          <button className="back-button" onClick={goToGame}>Volver al juego</button>
        </>
      )}
      {section === 'projects' && (
        <>
          <Projects />
          <button className="back-button" onClick={goToGame}>Volver al juego</button>
        </>
      )}
      {section === 'contact' && (
        <>
          <Contact />
          <button className="back-button" onClick={goToGame}>Volver al juego</button>
        </>
      )}
    </>
  );
}

export default App;