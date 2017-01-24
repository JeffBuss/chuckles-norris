import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from '../Header/Header';
import JokeButton from '../JokeButton/JokeButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import JokeCount from '../JokeCount/JokeCount';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <JokeCount />
        <JokeButton />
        <FavoriteButton />
      </div>
    );
  }
}
