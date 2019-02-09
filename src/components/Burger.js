import React, { Component } from 'react'
import posed from "react-pose";
import logo from './bigKing.png'

class Burger extends Component {
  state = {
    score: 0
  }

  getStyle = () => {
    return {
      height: '100px',
      width: '200px'
    }
  }

  render()  {
    return (
      <Circle
        src={ logo }
        style={this.getStyle()}
        onClick={ this.props.addPoints.bind(this, 5) }
      />
    )
  }
}

const Circle = posed.img({
  draggable: 'x'
});

export default Burger