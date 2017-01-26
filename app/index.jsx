import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import './styles.scss';

import Main from './components/Main/Main';
import Jokes from './components/Jokes/Jokes';
import Header from './components/Header/Header';
import Settings from './components/Settings/Settings';
// import JokeButton from '../JokeButton/JokeButton';
// import FavoriteButton from '../FavoriteButton/FavoriteButton';
// import JokeCount from '../JokeCount/JokeCount';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Jokes} />
      <Route path='jokes' component={Jokes} />
    </Route>
    <Route path='settings' component={Settings} />
  </Router>
, document.getElementById('root'));
