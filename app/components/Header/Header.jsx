import React from 'react';
import SettingsButton from './SettingsButton';

const Header = ({ handleSettings }) => {
  return (
    <div className='header'>
      <h1 className='title'>Chuckles Norris</h1>
      <SettingsButton
        handleSettings={handleSettings}
      />
    </div>
  );
};

export default Header;
