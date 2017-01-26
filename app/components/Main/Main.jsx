import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from '../Header/Header';
import JokeButton from '../JokeButton/JokeButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import JokeCount from '../JokeCount/JokeCount';
import FetchJoke from '../Helpers/FetchJoke';
import Jokes from '../Jokes/Jokes';
import Settings from '../Settings/Settings';

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
    this.handleSettings = this.handleSettings.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleNameSet = this.handleNameSet.bind(this);
    this.handleReset = this.handleReset.bind(this);
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
    console.log('handleNameSet');
  }

  handleReset() {
    console.log('handleReset');
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
        />
        <Jokes
          jokes={this.state.jokes}
        />
        {/* <div className='textBox'>{React.cloneElement(this.props.children, this.state)}</div> */}
      </div>
    );
  }
}
