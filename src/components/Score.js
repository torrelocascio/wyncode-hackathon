import React, { Component } from 'react';

class Score extends Component {
    render(){
        return(
            <div clasName="score">
              <h1>{this.props.score}</h1>
              <button onClick={this.props.onClick}>Start Over</button>
            </div>
        )
    }
}
export default Score;
