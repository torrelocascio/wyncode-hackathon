import React, {Component} from 'react';

const panelStyle =  {
  position:'relative',
  bottom: 0,
  width: '100vw',
  background: 'darkgrey',
  height: '10vh',
  color: 'white',
};


export default class ControlPanel extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div style={panelStyle}>Some buttons</div>
    )
  }
}
