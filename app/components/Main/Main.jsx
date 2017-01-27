import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import Header from '../Header/Header';
// import JokeInput from '../JokeInput/JokeInput';
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
    this.handleName = this.handleName.bind(this);
    this.handleNameSet = this.handleNameSet.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleExplicit = this.handleExplicit.bind(this);
    this.setFavorites = this.setFavorites.bind(this);
    // this.handleFavorites = this.handleFavorites.bind(this);
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

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleNameSet() {
    const newName = this.state.name.split(' ');
    const firstName = newName[0];
    const lastName = newName[1];
    this.setState({ url: `http://api.icndb.com/jokes/random/${this.state.JokeCount}?escape=javascript&firstName=
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

  // handleFavorites() {
  //   console.log(this.state.favorites);
  // }

  setFavorites(joke) {
    let newFavs = this.state.favorites;
    newFavs.push(joke);
    this.setState({ favorites: newFavs });
    console.log(this.state.favorites);
  }

  render() {
    const clone = React.cloneElement(this.props.children, {
      handleChange: this.handleChange,
      handleKeyUp: this.handleKeyUp,
      handleClick: this.handleClick,
      handleNameSet: this.handleNameSet,
      setFavorites: this.setFavorites,
      // handleFavorites: this.handleFavorites,
      handleName: this.handleName,
      handleReset: this.handleReset,
      handleExplicit: this.handleExplicit,

      jokes: this.state.jokes,
      jokesCount: this.state.jokesCount,
      url: this.state.url,
      getJokes: this.state.getJokes,
      favorites: this.state.favorites,
    });
    return (
      <div className='main'>
        <Header
          handleSettings={this.handleSettings}
        />
        <p className='random-joke'>{this.state.randomJoke}</p><br/>
        {clone}
      </div>
    );
  }
}
