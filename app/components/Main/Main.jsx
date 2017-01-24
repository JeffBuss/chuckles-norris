import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from '../Header/Header';
import JokeButton from '../JokeButton/JokeButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import JokeCount from '../JokeCount/JokeCount';
// import FetchJoke from '../Helpers/FetchJoke';

export default class Main extends Component {
  constructor() {
    super();
    this.setState = {
      RandomJoke: '',
    };
  }

  // componentDidMount() {
  //   FetchJoke('http://api.icndb.com/jokes/random', this.displayRandomJoke);
  // }
  //
  // displayRandomJoke(newRandomJoke) {
  //   this.setState({ RandomJoke: newRandomJoke });
  // }

  render() {
    return (
      <div>
        <Header />
        {/* <span>{this.state.RandomJoke}</span> */}
        <JokeCount />
        <JokeButton />
        <FavoriteButton />
      </div>
    );
  }
}
