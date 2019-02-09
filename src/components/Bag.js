import React, { Component } from 'react';
import bag from '../bag.png';
import burger from '../burger.png';


class Bag extends Component {
  render() {
    return (
       <div class='bk-bag'>
        <img src={burger} className='burger' onclick='bonk(this)' />
        <img src={bag} className='bag' />
       </div>
    );
  }
}

export default Bag;
