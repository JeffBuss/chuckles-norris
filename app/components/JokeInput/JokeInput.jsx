import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

const JokeInput = (props) => {
  return (
    <div className='jokes-input-field input'>
      <div className='new-jokes'>
        <Link to='/jokes'>
        <button
          className='jokes-button button'
          onClick={props.handleClick}
          >New Jokes</button>
        </Link>
        <input
        className='jokes-input input'
        type='number'
        onChange={props.handleChange}
        onKeyUp={props.handleKeyUp}
        />
      </div>
      <Link to='/favorites button'>
        <button
          className='favorites-button button'
          >Favorites</button>
      </Link>
    </div>
  );
};

export default JokeInput;
