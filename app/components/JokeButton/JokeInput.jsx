import React from 'react';

const JokeInput = ({ handleChange, handleKeyUp, handleClick, handleFavorites }) => {
  return (
    <div>
      <input
      className='num-jokes-input'
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>New Jokes</button>
      <button onClick={handleFavorites}>Favorites</button>
    </div>
  );
};

export default JokeInput;
