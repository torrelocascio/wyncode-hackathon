import React, { Component } from 'react';

import tim from '../assets/timbit.png';
import bite from '../assets/timbitten.png';
import './timbit.css';

class Timbit extends Component {

    state = {
        notBitten: true
    }

  biteOrNot = () => {
    let bitten = this.state.notBitten
    if(bitten){
      this.setState( () => ({notBitten: false}))
      this.props.scored()
      this.props.rand()
    }
  }  

  render(){
    let {notBitten} = this.state
    let newClass = !notBitten ? "pure bitten" : 'pure'
    let newImage = notBitten ? tim : bite
    return <img onClick={this.biteOrNot} alt="timbit" className={newClass} src={newImage} />
  }
}

export default Timbit;