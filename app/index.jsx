import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import './styles.css';

import Main from './components/Main/Main';
// import Header from '../Header/Header';
// import JokeButton from '../JokeButton/JokeButton';
// import FavoriteButton from '../FavoriteButton/FavoriteButton';
// import JokeCount from '../JokeCount/JokeCount';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} >
    </Route>
  </Router>
, document.getElementById('root'));
