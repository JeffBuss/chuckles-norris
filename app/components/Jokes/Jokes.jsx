import React from 'react';
import JokeInput from '../JokeInput/JokeInput';

const Jokes = (props) => {
  return (
    <div>
      <JokeInput
        handleClick={props.handleClick}
        setFavorites={props.setFavorites}
        handleChange={props.handleChange}
        handleKeyUp={props.handleKeyUp}
      />
      <ul>
        {props.jokes.map((joke, i) =>
          <li
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
