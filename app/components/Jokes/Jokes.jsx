import React from "react";
import Joke from "../Joke/Joke"
import JokeInput from '../JokeInput/JokeInput';

const Jokes = (props) => {
  return (
    <div>
      <JokeInput
        handleClick={props.handleClick}
        handleFavorites={props.handleFavorites}
      />
      <ul>
        {props.jokes.map((joke, i) =>
          <li
            key={i}>
            {joke}
            <button>★</button>
        </li>)}
      </ul>
    </div>
  );
};

export default Jokes;
