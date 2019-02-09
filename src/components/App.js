import React, { Component } from 'react';
import '../style/app.css';
import Header from './Header';
import Spin from './Spin'

class App extends Component {
  render() {
    return (
      <div>  <Header/>
      <div id="wrapper">
        <div id="wheel">
            <div id="inner-wheel">
                <div className="sec"><span className="fa fa-child"></span></div>
                <div className="sec"><span className="fa fa-coffee"></span></div>
                <div className="sec"><span className="fa fa-cutlery"></span></div>
                <div className="sec"><span className="fa fa-fire"></span></div>
                <div className="sec"><span className="fa fa-smile-o"></span></div>
                <div className="sec"><span className="fa fa-money"></span></div>
            </div>
            <div id="spin">
                <div id="inner-spin"></div>
            </div>
            <div id="shine"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
