import React from 'react';

const Settings = (props) => {
  return (
    <div>
      <input
        onChange={props.handleName}>
      </input>
      <button onClick={props.handleNameSet}>Set</button>
      <button onClick={props.handleReset}>Reset</button>
      <input onChange={props.handleExplicit} type='checkbox' value=''/>
    </div>
  );
};

export default Settings;
