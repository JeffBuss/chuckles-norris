import React from 'react';

const Settings = ({ handleSettings, handleName, handleNameSet, handleReset, handleExplicit }) => {
  return (
    <div>
      <button onClick={handleSettings}>Settings</button>
      <input
        onChange={handleName}>
      </input>
      <button onClick={handleNameSet}>Set</button>
      <button onClick={handleReset}>Reset</button>
      <input onClick={handleExplicit} type='checkbox'/>
    </div>
  );
};

export default Settings;
