import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

const SettingsButton = (props) => {
  if (window.location.pathname === '/settings') {
    return (
      <Link to='/jokes'>
        <input
          className='settings-button'
          type='submit'
          value='Jokes'
          />
      </Link>
    );
  }
  return (
    <Link to='/settings'>
      <input
        className='settings-button'
        type='submit'
        value='Settings'
        />
    </Link>
  );
};

export default SettingsButton;
