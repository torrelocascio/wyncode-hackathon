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
    this.state = {
      totalCars: null
    };
  }
  // componentDidMount(){
  //   if (this.props.road){
  //   this.setState({totalCars: this.props.road.collidableMeshList.length})
  //   }
  // }
  // componentDidUpdate(){

  //   this.setState({totalCars: this.props.road.collidableMeshList.length})
  // }
  render(){
    return(
      <div style={panelStyle}>
        Welcome to Whopper Frogger
      </div>
    )
  }
}
