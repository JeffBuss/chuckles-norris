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
      randomJoke: '',
      jokes: [],
      favorites: [],
      jokesCount: 5,
      url: 'http://api.icndb.com/jokes/random/',
    };
    this.getRandomJoke = this.getRandomJoke.bind(this);
    this.getJokes = this.getJokes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    FetchJoke(this.state.url, 1, this.getRandomJoke);
  }

  getRandomJoke(joke) {
    this.setState({ randomJoke: joke });
  }

  getJokes(jokes) {
    this.setState({ jokes });
  }

  handleChange(e) {
    this.setState({ jokesCount: e.target.value });
  }

  handleClick() {
    FetchJoke(this.state.url, this.state.jokesCount, this.getJokes);
  }

  render() {
    return (
      <div>
        <Header />
        <span>{this.state.randomJoke}</span><br/>
        <JokeCount
          handleChange={this.handleChange}
          handleKeyUp={(e) => {}}
        />
        <JokeButton
          handleClick={this.handleClick}
        />
        <FavoriteButton />
      </div>
    );
  }
}
