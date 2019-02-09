import React, { Component } from 'react';
import Bag from './Bag';
import '../App.css';

class Game extends Component {
    constructor(props) {
        super(props);
        let arr = ['burger','something','something','something','something','something']
        var currentIndex = arr.length;
        var temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        this.state = {
          bags: arr,
          match: Array(2).fill(null)
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
        bags[i] = 'up';
        let currentMatch = this.state.match.slice();;
        if(currentMatch[0]!=null){
            currentMatch[1] = i;
        }else{
            currentMatch[0] = i;
        }
        this.setState({bags: bags, match:  currentMatch});
        if(currentMatch[0]!=null && currentMatch[1]!=null){
            alert('those are 2');
        }
     }
  render() {
    return (
      <div className="game">
        {this.renderBag(0)}
        {this.renderBag(1)}
        {this.renderBag(2)}
        {this.renderBag(3)}
        {this.renderBag(4)}
        {this.renderBag(5)}
      </div>
    );
  }
}

export default Game;
