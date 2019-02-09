import React, { Component } from 'react';
import bag from '../bag.png';
import burger from '../burger.png';


class Bag extends Component {

//     handleClick(i) {
//      alert(i)
//     this.querySelector("burger").classList.add('up');
//   }
  render() {
    return (
       <div className='bk-bag'>
        <img src={burger} className={this.props.move} />
        <img src={bag} className='bag' onClick={this.props.onClick} />
       </div>
    );
  }
}

export default Bag;
