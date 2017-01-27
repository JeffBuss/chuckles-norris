import React from 'react';
import JokeInput from '../JokeInput/JokeInput';

const Favorites = (props) => {
  return (
    <div>
      <JokeInput
        className='joke-input-field'
        handleClick={props.handleClick}
        setFavorites={props.setFavorites}
        handleChange={props.handleChange}
        handleKeyUp={props.handleKeyUp}
      />
      <ul className='joke-list'>
        {props.favorites.map((fav, i) =>
          <li
            className='joke-card'
            key={i}>
            {fav.joke}
            <button
              onClick={() => props.setFavorites({ fav })}
              className='favorites-star'
            >★</button>
        </li>)}
      </ul>
    </div>
  );
};

export default Favorites;
