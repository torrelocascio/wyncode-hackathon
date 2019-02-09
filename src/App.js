import React, { Component } from 'react';
import './App.css';
import Game from './components/Game'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
       <Game />
       <Footer />
      </div>
    );
  }
}

export default App;
