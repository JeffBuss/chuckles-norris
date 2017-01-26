import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from '../Header/Header';
import JokeButton from '../JokeButton/JokeButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import JokeCount from '../JokeCount/JokeCount';
import FetchJoke from '../Helpers/FetchJoke';
import Jokes from '../Jokes/Jokes';
import Settings from '../Settings/Settings';
import Favorites from '../Jokes/Favorites';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: '',
      jokes: [],
      favorites: [],
      jokesCount: 5,
      url: 'http://api.icndb.com/jokes/random',
      name: '',
      explicit: false,
    };
    this.getRandomJoke = this.getRandomJoke.bind(this);
    this.getJokes = this.getJokes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleNameSet = this.handleNameSet.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleExplicit = this.handleExplicit.bind(this);
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

  handleSettings() {
    console.log('handleSettings');
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleNameSet() {
    this.setName();
  }

  setName() {
    const newName = this.state.name.split(' ');
    const firstName = newName[0];
    const lastName = newName[1];
    this.setState({ url: `http://api.icndb.com/jokes/random?escape=javascript&firstName=
      ${firstName}&lastName=${lastName}` },
      FetchJoke(this.state.url, this.getJokes));
  }

  handleReset() {
    console.log('handleReset');
  }

  setExplicit() {
    this.state.explicit === true ?
    this.setState({ url: this.state.url + `&exclude=[explicit]` }) :
    this.setState({ url: 'http://api.icndb.com/jokes/random/' });
  }

  handleExplicit() {
    this.setState({ explicit: !this.state.explicit });
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
        <Settings
          handleSettings={this.handleSettings}
          handleName={this.handleName}
          handleNameSet={this.handleNameSet}
          handleReset={this.handleReset}
          handleExplicit={this.handleExplicit}
        />
        <Favorites />
        <Jokes
          jokes={this.state.jokes}
        />
      </div>
    );
  }
}
