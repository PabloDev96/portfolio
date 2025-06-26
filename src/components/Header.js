import React from 'react';

const Header = () => {
  return (
    <header style={{
  textAlign: 'center',
  padding: '40px 10px',
  backgroundColor: '#006B56',
  color: 'white',
  borderBottom: '4px solid #00b894'
}}>
  <h1>Pablo Díaz García</h1>
  <h2>Desarrollador FullStack</h2>
  <div style={{ marginTop: '20px' }}>
    <a href="..." target="_blank">LinkedIn</a> | <a href="...">GitHub</a>
  </div>
</header>
  );
};

export default Header;