import React, { Component } from 'react';

import tim from '../assets/timbit.png';
import bite from '../assets/timbitten.png';
import './timbit.css';

class Timbit extends Component {

    state = {
        notBitten: true
    }

  biteOrNot = () => {
      this.setState( () => ({notBitten: false}))
      this.props.scored()
      this.props.rand()
  }  

  render(){
    let {notBitten} = this.state
    return notBitten ? <img onClick={this.biteOrNot} alt="timbit" className='pure' src={tim} /> : <img alt="timbit-bitten" className='pure bitten' src={bite} />
  }
}

export default Timbit;