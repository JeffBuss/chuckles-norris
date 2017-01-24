import React from 'react';

const handleClick = () => {
  console.log('FavoriteButton');
};

const FavoriteButton = (props) => {
  return (
    <button onClick={() => handleClick() }>Favorites</button>
  );
};

export default FavoriteButton;
