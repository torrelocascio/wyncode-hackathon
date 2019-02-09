import React, { Component } from 'react';
import Header from './components/Header';
import Burger from './components/Burger';
import Runway from './components/Runway';
import './App.css';

class App extends Component {
  state = {
    score: 0
  }

  updateScore = (points) => {
    this.setState({ score: this.state.score + points});
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} />
        <Runway />
        <Burger addPoints={this.updateScore} />
      </div>
    );
  }
}

export default App;
