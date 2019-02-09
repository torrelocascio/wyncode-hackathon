import React, {Component} from 'react';
import Router from './Router';
import prizeFactory from '../utils/prizeFactory';
import prizes from '../utils/prizes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prizeList: [],
      spins: 3
    }
    this.prizes = prizes
    this.addPrize = this.addPrize.bind(this);
    this.spinTheWheel = this.spinTheWheel.bind(this);
    this.removePrize = this.removePrize.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  spinTheWheel() {
    let randomIndex = Math.floor(Math.random() * prizes.length);
    //Spin the wheel
    this.addPrize(this.prizes[randomIndex]);
    this.setState({spins: this.state.spins-1})
  }

  removePrize(uuid) {
    let index = this.state.prizeList.findIndex(el => el.uuid === uuid);
    this.state.prizeList.splice(index, 1);
    this.setState({prizeList: this.state.prizeList, spins: this.state.spins + 1});
  }

  addPrize({name, description}) {
    this.state.prizeList.push(prizeFactory(name, description));
    let arr = this.state.prizeList;
    this.setState({prizeList: arr});
  }

  playAgain() {
    this.setState({spins: 3, prizeList: []});
  }

  render() {
    return <Router data={this.state}  addPrize={this.addPrize} playAgain={this.playAgain} removePrize={this.removePrize} spinTheWheel={this.spinTheWheel}/>
  }
}