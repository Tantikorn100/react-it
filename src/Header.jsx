import React from 'react';
import './App.css';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>IT Equipment Recovery Office</h1>
      <p>6305655 ตันติกร อู้สกุลวัฒนา</p>

    </header>
  );
}

const headerStyle = {
    background: `url('https://media.discordapp.net/attachments/1105127091315409047/1107779639969075272/Background-header-home.png?width=1207&height=373')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
  };
  


export default Header;
