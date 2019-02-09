import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Game from './Game';

ReactDOM.render(
  <Game boardSize={25} duration={30000} timbitSpeed={900} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
