import React, { Component } from 'react';

import Timbit from './Timbit';
import Coffee from './Coffee';

class Playfield extends Component {

  placeTimbit = (x,y, randOuter, randInner) => {
    let rando = (x === randOuter && y === randInner) ? <Timbit 
                                                        rand={this.props.random} 
                                                        scored={this.props.scored} /> : null

    return <section key={`${y}item`}>
              {rando}
              <Coffee />
            </section>
  }

  render(){
    const style = {
      "height": "10rem",
      "width": "100%",
      "display": "flex",
      "justifyContent": "space-around",
      "padding": "2rem 0",
    }

    const {h, w, inner, outer} = this.props    
    const arr = [...Array(h)].fill([...Array(w)])

      return (
        arr.map( (elem, i) => {
          return (
            <div key={`${i}section`} style={style}>
              { elem.map( (_,y) => {
                return this.placeTimbit(i,y,outer,inner)
            })
          }
            </div>
          )
      })
    )
  }
}

export default Playfield;