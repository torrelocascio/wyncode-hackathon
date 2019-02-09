import React, { Component } from 'react';
import World from './features/world';
import './index.css'


class App extends Component {
  render() {
    return (
      <div>
      <div className='gameTitle'>
        Grab the Burger!
      </div>
       <World />
      </div>
    );
  }
}

export default App;
