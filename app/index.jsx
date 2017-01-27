import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import './styles.scss';

import Main from './components/Main/Main';
import Jokes from './components/Jokes/Jokes';
import Settings from './components/Settings/Settings';
import JokeInput from './components/JokeInput/JokeInput';
import Favorites from './components/Jokes/Favorites';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={JokeInput} />
      <Route path='jokes' component={Jokes} />
      <Route path='favorites' component={Favorites} />
      <Route path='settings' component={Settings} />
    </Route>
  </Router>
, document.getElementById('root'));
