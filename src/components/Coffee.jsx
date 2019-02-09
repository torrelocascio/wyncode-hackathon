import React, { Component } from 'react';

import cup from '../assets/coffee-horton.png';
import './coffee.css'


class Coffee extends Component {
  render() {
    return <img className="drip" alt="coffee-cup" src={cup} />
  }
}

export default Coffee;