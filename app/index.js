import React from 'react';
import { render } from 'react-dom';
import './styles.css';

import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

render(<App />, document.querySelector('.application'));