import React, { Component } from 'react';
import Bag from './Bag';
import '../App.css';

class Game extends Component {
    constructor(props) {
        super(props);
        let arr = ['burger','logo','burger','logo','fries','fries']
        var currentIndex = arr.length;
        var temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        this.state = {
          bags: arr,
          match: Array(2).fill(null),
          score: "Find the Match!"
        };

       
    }
   
    renderBag(i) {
        return (
          <Bag
            move={this.state.bags[i]}
            onClick={() => this.handleClick(i)}
          />
        );
    }

    handleClick(i) {
        const bags = this.state.bags.slice();
        bags[i] = bags[i]+'-up';
        let score = null;
        let currentMatch = this.state.match.slice();;
        if(currentMatch[0]!=null){
            currentMatch[1] = bags[i];
        }else{
            currentMatch[0] = bags[i];
        }
        this.setState({bags: bags, match:  currentMatch});
        if(currentMatch[1]!=null){

            if(currentMatch[0] === currentMatch[1]){
                score = "You Win!"
            }else{
                score = "You Lose!"
            }
            this.setState({score: score});
        }
     }

  render() {
    return (
      <div>
      <div clasName="score">
        <h1>{this.state.score}</h1>
      </div>
      <div className="game">
        {this.renderBag(0)}
        {this.renderBag(1)}
        {this.renderBag(2)}
        {this.renderBag(3)}
        {this.renderBag(4)}
        {this.renderBag(5)}
      </div>
      </div>  
    );
  }
}

export default Game;
