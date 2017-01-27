import React from 'react';

const JokeInput = (props) => {
  return (
    <div>
      <input
      className='num-jokes-input'
      onChange={props.handleChange}
      onKeyUp={props.handleKeyUp}
      />
      <button onClick={props.handleClick}>New Jokes</button>
      <button onClick={props.handleFavorites}>Favorites</button>
    </div>
  );
};

export default JokeInput;
