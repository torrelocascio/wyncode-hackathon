import React, { Component } from 'react'
import knife from './knife.jpg'

class Obstacle extends Component {

  getStyle = () => {
    return {
      height: '120px',
      width: '80%'
    }
  }

  render()  {
    return (
      <img
        src={knife}
        alt=''
        style={this.getStyle()}
        className='SlideDown'
      />
    )
  }
}

export default Obstacle