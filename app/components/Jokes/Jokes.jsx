import React from "react";
import Joke from "../Joke/Joke"

const Jokes = ({ jokes }) => {
  return (
    <div>
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
