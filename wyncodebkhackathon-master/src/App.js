import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

class App extends Component {
  state =  {
    width:8,
    height:5,
    bks: 100,
    nonbks: 200,
    totalMolesStart:300,
    totalMolesLeft:300,
    gameStatus: 'new', // new, playing, won, lost
    remainingSeconds: 20,
    points:0
  }

  startGame = () => {
    console.log('START GAME')
    if(this.state.gameStatus==='playing'){

    } else {
      this.setState({ gameStatus: 'playing' }, () => {
        this.intervalId = setInterval(() => {
          this.setState((prevState) => {
            const newRemainingSeconds = prevState.remainingSeconds - 1;
            if (newRemainingSeconds === 0) {
              clearInterval(this.intervalId);
              return { gameStatus: 'lost', remainingSeconds: 0 };
            }
            return { remainingSeconds: newRemainingSeconds };
          });
        }, 1000);
      });
    }
   
  };

  render() {
    return (
      <div className="App">
          <div className="mainScreen">
          <div className="mainHeader">
          <h1>Whack A BK Logo</h1>
          <img className='burger2' src='https://mpng.pngfly.com/20180802/egy/kisspng-hamburger-hot-dog-cheeseburger-veggie-burger-buffa-improve-your-health-naturally-lose-weight-and-20-y-5b62f0208e7570.0245846815332106565835.jpg' alt="Logo"/>
          <h3>BK Whack = +1  - Other Whack = -2</h3>
          <button onClick={this.startGame}>
          <h3>Start Game</h3>
          </button>
          <h3>Remaining Seconds: {this.state.remainingSeconds} -- Points: {this.state.points}</h3>
          </div>
            <Board 
            width={this.state.width} 
            height={this.state.height}
            bks={this.state.bks}
            nonbks={this.state.nonbks}
            totalMolesLeft={this.state.totalMolesLeft}
            totalMolesStart={this.state.totalMolesStart}
            gameStatus={this.state.gameStatus}
            remainingSeconds={this.state.remainingSeconds}
            points={this.state.points}/>
          </div>
      </div>
    );
  }
}

export default App;
