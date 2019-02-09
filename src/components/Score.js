import React, { Component } from 'react'
// import PropTypes from 'prop-types';

class Score extends Component {

  getStyle = () => {
    return {
      color: 'white',
      padding: '10px',
      float: 'right'
    }
  }

  render()  {
    return (
      <div style={this.getStyle()} >
        Score: { this.props.score }
      </div>
    )
  }
}

export default Score