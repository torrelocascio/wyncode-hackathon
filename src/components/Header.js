import React, { Component } from 'react'
import Score from './Score';

class Header extends Component {

  getStyle = () => {
    return {
      height: '100px',
      lineHeight: '100px',
      backgroundColor: '#282c34',
      color: 'white'
    }
  }

  render()  {
    return (
      <div style={this.getStyle()} >
        <Score  score={this.props.score} />
      </div>
    )
  }
}

export default Header