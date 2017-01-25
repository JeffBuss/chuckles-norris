import React from 'react';

const JokeButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>New Jokes</button>
  );
};

export default JokeButton;
