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
      jokesCount: 5,
      url: 'http://api.icndb.com/jokes/random/',
    };
    this.getRandomJoke = this.getRandomJoke.bind(this);
  }

  componentDidMount() {
    FetchJoke(this.state.url, 5, this.getRandomJoke);
  }

  getRandomJoke(data) {
    this.setState({ randomJoke: data });
  }

  handleChange(e) {
    this.setState({ jokesCount: e.target.value })
  }
  handleClick() {
    console.log('JokeButton');
  }

  render() {
    return (
      <div>
        <Header />
        <span>{this.state.randomJoke}</span><br/>
        <JokeCount
          handleChange={this.handleChange.bind(this)}
          handleKeyUp={(e) => {}}
        />
        <JokeButton
          handleClick={this.handleClick.bind(this)}
        />
        <FavoriteButton />
      </div>
    );
  }
}
