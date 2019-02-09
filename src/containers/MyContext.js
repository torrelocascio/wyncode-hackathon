import React, { Component } from "react";

import _ from "lodash";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    highScore: 0,
    currentScore: 0,
    lasthole: 0,
    timeUp: false,
    holes: [1, 2, 3],
    selected: 0,
    onClickHandlerStart: () => this.onClickHandlerStart(),
    onClickHandlerHit: () => this.onClickHandlerHit(),
  };

  randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  randomHole = holes => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === this.state.lastHole) {
      return this.randomHole(holes);
    }
    this.setState({ lasthole: hole });
    return hole;
  };
  peep = () => {
    const time = this.randomTime(300, 1000);
    const hole = this.randomHole(this.state.holes);
    console.log(hole);
    this.setState({ selected: hole });
    setTimeout(() => {
      if (!this.state.timeUp) this.peep();
    }, time);
  };
  onClickHandlerStart = () => {
    this.startGame();
  };

  onClickHandlerHit = () => {
    const score = this.state.currentScore;

    this.setState(() => {
      return { currentScore: score + 1 };
    });
    console.log("clicked");
  };
  startGame = () => {
    this.setState({ timeUp: false, currentScore: 0 });

    this.peep();
    setTimeout(() => this.setState({ timeUp: true }), 60000);
  };

  componentDidMount() {}

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
        }}>
        {" "}
        {this.props.children}{" "}
      </MyContext.Provider>
    );
  }
}
const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
