import React, { useState } from 'react';
import IntroGame from './components/IntroGame';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [sectionToShow, setSectionToShow] = useState(null);

  const handleGameEnd = (sectionId) => {
    setSectionToShow(sectionId);
  };

  return (
    <div>
      {!sectionToShow ? (
        <IntroGame onGameEnd={handleGameEnd} />
      ) : (
        <>
          {sectionToShow === 'about' && <Header />}
          {sectionToShow === 'about' && <About />}
          {sectionToShow === 'projects' && <Projects />}
          {sectionToShow === 'contact' && <Contact />}
        </>
      )}
    </div>
  );
}

export default App;