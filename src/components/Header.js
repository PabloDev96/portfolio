import React from 'react';

const Header = () => {
  return (
    <header style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>Pablo Díaz García</h1>
      <h2>Desarrollador de aplicaciones web (FullStack)</h2>
      <div style={{ marginTop: '20px' }}>
        <a href="https://www.linkedin.com/in/pablo-díaz-garcía-344048350" target="_blank" rel="noreferrer">LinkedIn</a> |{' '}
        <a href="https://github.com/PabloDev96" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </header>
  );
};

export default Header;