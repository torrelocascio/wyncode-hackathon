import React, { Component } from 'react'
import Lane from './Lane';

class Runway extends Component {

  getStyle = () => {
    return {
      height: '500px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row'
    }
  }

  render()  {
    return (
      <div style={this.getStyle()} >
        <Lane  active={ Math.random() } />
        <Lane  active={ Math.random() } />
        <Lane  active={ Math.random() } />
      </div>
    )
  }
}

export default Runway