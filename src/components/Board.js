import React from 'react'
import Square from './Square'
import jQuery from 'jquery';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={i}
        // onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderDonut(i){
    const randomDonut = Math.floor(Math.random() * 9);
    jQuery('.item').hide().eq(randomDonut).show();

  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board
