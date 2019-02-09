import React, { Component } from 'react';

import Score from './Score';
import Playfield from './Playfield';

class Game extends Component {
  constructor(){
    super()
    this.state = {
        score: 0,
        playHeight: 3,
        playWidth: 3,
        randOuter:  2,
        randInner:  1
    }
    
  }
    updateScore = () => {
       this.setState( prev => ({score: prev.score + 1}))  
    }

    generateRandom = () => {
      let {randInner, randOuter} = this.state
      let first = Math.floor(Math.random() * this.state.playHeight)
      let second = Math.floor(Math.random() * this.state.playWidth)
      
      if(randOuter !== first && randInner !== second)
        this.setState( () => ({randOuter: first, randInner: second}))
      else 
        this.generateRandom()
    }

    render(){
        const {score, playHeight, playWidth, randOuter, randInner} = this.state
        return (
            <main>
              <Score score={score}/>
              <Playfield
                random={this.generateRandom}
                h={playHeight} 
                w={playWidth} 
                outer={randOuter}
                inner={randInner}
                scored={this.updateScore} />
            </main>
        )
    }
}

export default Game;