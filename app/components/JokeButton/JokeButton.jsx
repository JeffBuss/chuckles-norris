import React from 'react';

const handleClick = () => {
  console.log('JokeButton');
};

const JokeButton = (props) => {
  return (
    <button onClick={() => handleClick() }>New Jokes</button>
  );
};

export default JokeButton;
