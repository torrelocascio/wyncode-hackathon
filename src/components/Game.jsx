import React, { Component } from 'react';

import Score from './Score';
import Playfield from './Playfield';
import generateRandom from './utils/Utils.js';

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

    generateRandomPlacement = () => {
      let {playHeight, playWidth, randInner, randOuter} = this.state
      let height = generateRandom(playHeight)
      let width = generateRandom(playWidth)

      if(randOuter !== height && randInner !== width)
        this.setState( () => ({randOuter: height, randInner: width}))
      else 
        this.generateRandomPlacement()
    }

    render(){
        const {score, playHeight, playWidth, randOuter, randInner} = this.state
        return (
            <main>
              <Score score={score}/>
              <Playfield
                random={this.generateRandomPlacement}
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