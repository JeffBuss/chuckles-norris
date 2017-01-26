import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import './styles.scss';

import Main from './components/Main/Main';
import Jokes from './components/Jokes/Jokes';
import Header from './components/Header/Header';
// import JokeButton from '../JokeButton/JokeButton';
// import FavoriteButton from '../FavoriteButton/FavoriteButton';
// import JokeCount from '../JokeCount/JokeCount';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} >
      <Route path='header'>
        <IndexRoute component={Header}></IndexRoute>
      </Route>
      <Route path='jokes'>
        <IndexRoute component={Jokes}></IndexRoute>
      </Route>
    </Route>
  </Router>
, document.getElementById('root'));
