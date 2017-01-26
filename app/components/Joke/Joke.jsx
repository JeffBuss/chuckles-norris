import React from "react";

const Joke = (props) => {
  return (
    <div className='joke-card'>
      {props.joke}
      <span className='favorite-star'>&#9734</span>
    </div>);
};

export default Joke;
