import React from 'react';
// import './header-style.css';
import SettingsButton from './SettingsButton';

const Header = ({ handleSettings }) => {
  return (
    <div className="Header">
      <h1>Chuckles Norris</h1>
      <SettingsButton
        handleSettings={handleSettings}
      />
    </div>
  );
};

export default Header;
