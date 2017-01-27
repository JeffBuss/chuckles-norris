import React from 'react';
import JokeInput from '../JokeInput/JokeInput';

const Favorites = (props) => {
  return (
    <div>
      <JokeInput
        handleClick={props.handleClick}
        setFavorites={props.setFavorites}
        handleChange={props.handleChange}
        handleKeyUp={props.handleKeyUp}
      />
      <ul>
        {props.favorites.map((fav, i) =>
          <li
            key={i}>
            {fav}
            <button
              onClick={() => props.setFavorites({ fav })}
            >★</button>
        </li>)}
      </ul>
    </div>
  );
};

export default Favorites;
