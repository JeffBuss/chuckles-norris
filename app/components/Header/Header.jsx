import React from 'react';
import './header-style.css';

const logStuff = () => {
  console.log('clicked!');
};

const Header = () => {
  return (
    <div className="Header">
      <h1>Chuckles Norris</h1>
    </div>
  );
};

export default Header;
