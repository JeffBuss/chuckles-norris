import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

const JokeInput = (props) => {
  return (
    <div>
      <input
      className='num-jokes-input'
      onChange={props.handleChange}
      onKeyUp={props.handleKeyUp}
      />
      <Link to='/jokes'>
      <button
        onClick={props.handleClick}
        >New Jokes</button>
      </Link>
      <Link to='/favorites'>
        <button
          >Favorites</button>
      </Link>
    </div>
  );
};

export default JokeInput;
