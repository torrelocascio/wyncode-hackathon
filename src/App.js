import React, { Component } from 'react';
import Scene from './components/Scene.js';
import ControlPanel from './components/ControlPanel';
class App extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div className="App">
      <Scene />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
