import React, { Component } from 'react';
import {Scene, ROAD} from './components/Scene.js';
import ControlPanel from './components/ControlPanel';
class App extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div className="App">
      <Scene />
        <ControlPanel road={ROAD} />
      </div>
    );
  }
}

export default App;
