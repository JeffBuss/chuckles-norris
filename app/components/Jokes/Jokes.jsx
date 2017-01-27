import React from "react";
import Joke from "../Joke/Joke"
import JokeInput from '../JokeInput/JokeInput';

const Jokes = ({ jokes }) => {
  return (
    <div>
      <JokeInput />
      <ul>
        {jokes.map((joke, i) =>
          <li
            key={i}>
            {joke}
        </li>)}
      </ul>
    </div>
  );
};

export default Jokes;
