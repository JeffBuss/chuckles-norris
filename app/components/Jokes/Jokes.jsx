import React from 'react';
import JokeInput from '../JokeInput/JokeInput';

const Jokes = (props) => {
  return (
    <div className='joke-field'>
      <JokeInput
        className='joke-input-field'
        handleClick={props.handleClick}
        setFavorites={props.setFavorites}
        handleChange={props.handleChange}
        handleKeyUp={props.handleKeyUp}
      />
      <ul className='joke-list'>
        {props.jokes.map((joke, i) =>
          <li
            className='joke-card'
            key={i}>
            {joke}
            <button
              onClick={() => props.setFavorites({ joke })}
            >★</button>
        </li>)}
      </ul>
    </div>
  );
};

export default Jokes;
