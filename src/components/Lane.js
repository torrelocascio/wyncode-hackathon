import React, { Component } from 'react'
import Obstacle from './Obstacle'

class Lane extends Component {

  getStyle = () => {
    return {
      height: '100%',
      width: '33%',
      display: 'flex',
      flex: 'column',
      justifyContent: 'center'
    }
  }

  render()  {
    if (this.props.active > 0.5) {
      return (
        <div style={this.getStyle()} >
          <Obstacle />
        </div>
      )  
    } else {
      return (
        <div style={this.getStyle()} ></div>
      )
    }
  }
}

export default Lane