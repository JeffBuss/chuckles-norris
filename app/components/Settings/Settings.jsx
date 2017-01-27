import React from 'react';

const Settings = (props) => {
  return (
    <div className='settings-field'>
      <div className='set-controls'>
        Set Name:
        <input
          className='name-input'
          type='text'
          onChange={props.handleName}>
        </input>
        <button
          onClick={props.handleNameSet}
          className='set-button button'
          >Set</button>
        <button
          onClick={props.handleReset}
          className='reset-button button'
          >Reset</button>
      </div>
      <div className='explicit-controls'>
        Parental Controls On:
        <input
          onChange={props.handleExplicit}
          className='explicit-checkbox'
          type='checkbox'
          value=''/>
      </div>

    </div>
  );
};

export default Settings;
