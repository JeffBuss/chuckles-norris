import React from 'react';

const JokeCount = ({ handleChange, handleKeyUp }) => {
  return (
    <input
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default JokeCount;
