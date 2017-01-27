import React from 'react';
import JokeInput from '../JokeInput/JokeInput';

const Favorites = (props) => {
  return (
    <div>
      <JokeInput />
      <ul>
        {props.favorites.map((fav, i) =>
          <li
            key={i}>
            {fav.joke}
            <button
              onClick={() => props.setFavorites({ fav })}
            >★</button>
        </li>)}
      </ul>
    </div>
  );
};

export default Favorites;
