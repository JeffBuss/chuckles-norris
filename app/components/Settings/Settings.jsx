import React from 'react';

const Settings = ({ handleSettings, handleName, handleNameSet, handleReset }) => {
  return (
    <div>
      <button onClick={handleSettings}>Settings</button>
      <input
        onChange={handleName}>
      </input>
      <button onClick={handleNameSet}>Set</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Settings;
