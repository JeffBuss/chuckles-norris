import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from '../Header/Header';
import JokeButton from '../JokeButton/JokeButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import JokeCount from '../JokeCount/JokeCount';
import FetchJoke from '../Helpers/FetchJoke';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      RandomJoke: '',
    };
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random').then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ RandomJoke: data.value.joke });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <span>{this.state.RandomJoke}</span><br/>
        <JokeCount />
        <JokeButton />
        <FavoriteButton />
      </div>
    );
  }
}
