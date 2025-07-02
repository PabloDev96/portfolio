import React, { useState } from 'react';
import IntroGame from './components/IntroGame';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';

function App() {
  const [section, setSection] = useState('landing'); // 'landing', 'game', 'about', 'projects', 'contact', 'basic'

  const goToGame = () => setSection('game');
  const goToLanding = () => setSection('landing');

  return (
    <>
      {section === 'landing' && (
        <Landing
          onSelectOption={(option) =>
            setSection(option === 'interactive' ? 'game' : 'basic')
          }
        />
      )}

      {section === 'game' && (
        <IntroGame onGameEnd={setSection} onBack={goToLanding} />
      )}

      {section === 'basic' && <Portfolio onBack={goToLanding} />}

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