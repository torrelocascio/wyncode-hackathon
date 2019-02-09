import React, { Component } from 'react';
import Bag from './Bag';
import '../App.css';

class Game extends Component {
  render() {
    return (
      <div className="App">
       <Bag />
      </div>
    );
  }
}

export default Game;
