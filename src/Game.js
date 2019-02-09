import React, { Component } from 'react';
import './index.scss';
import Square from './Square';
import Score from './Score';

const createMoles = (amount, range) => {
  let set = new Set();
  while (set.size < amount) {
    set.add(Math.floor(Math.random() * range));
  }
  return [...set];
};

const gameMessages = {
  start: 'start',
  playing: 'go go go!!!',
  over: 'play again'
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      activeMoles: []
    };
  }

  /* instance properties */
  boardSize = [
    ...Array(this.props.boardSize)
      .fill(this.props.boardSize)
      .keys()
  ];
  gameState = 'start';
  maxScore = 0;

  /* clear any interval */
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /* starts the game and creates game intervals based on the timbitSpeed prop */
  startGame = () => {
    this.gameState = 'playing';
    if (this.timer) {
      this.timer = clearInterval(this.timer);
      return null;
    }
    this.timer = setInterval(() => {
      const randomMoleAmount = Math.floor(
        Math.random() * (this.props.boardSize / 2)
      );
      const activeMoles = createMoles(randomMoleAmount, this.props.boardSize);
      this.setState({ activeMoles });
    }, this.props.timbitSpeed);
    this.stopGame();
  };

  /* wait whatever amount of time the duration prop is before finishing and clear intervals */
  stopGame = () => {
    setTimeout(() => {
      this.timer = clearInterval(this.timer);
      this.gameState = 'over';
      const { score } = this.state;
      if (score > this.maxScore) {
        this.maxScore = score;
      }
      this.setState({ score: 0, activeMoles: [] });
    }, this.props.duration);
  };

  /* update score */
  handleClick = () => {
    this.setState(prevState => {
      const score = prevState.score + 1;
      return { score };
    });
  };

  render() {
    const { activeMoles, score } = this.state;
    return (
      <div className="game">
        <img
          className="logo"
          src="https://www.timhortons.com/us/images/Tim_Hortons_Script.jpg"
          alt=""
        />
        <div className="max-score">
          <h2 className="title">Timbit-Dunker</h2>
          <div className="title-copy">
            Welcome to the timbit dunker! the goal? Dunk as many timbits in your
            coffe before the time runs out. Scroll down and click Start to begin
          </div>
        </div>
        <div className="board">
          {this.boardSize.map((cell, i) => {
            const isActive = activeMoles.includes(i);
            return (
              <Square
                onClick={this.handleClick}
                key={cell}
                id={i}
                isActive={isActive}
              />
            );
          })}
        </div>
        <Score
          score={score}
          gameState={this.gameState}
          message={gameMessages[this.gameState]}
          maxScore={this.maxScore}
          onClick={this.startGame}
        />
      </div>
    );
  }
}

export default Game;
