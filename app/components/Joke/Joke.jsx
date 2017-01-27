import React from 'react';

const Joke = (props) => {
  return (
    <div className='joke-card'>
      {props.joke}
    </div>);
};

export default Joke;
