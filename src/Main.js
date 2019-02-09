import React, { Component } from "react";
import styles from "./Main.module.css";
import { Button } from "reactstrap";
import { MyContext } from "./containers/MyContext";
import ScorekKeeper from "./components/ScorekKeeper";
import Holes from "./components/Holes";
export default class Main extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className={styles.Main}>
        <ScorekKeeper
          score={this.context.currentScore}
          highScore={this.context.highScore}
        />
        <Holes
          holes={this.context.holes}
          onClick={this.context.onClickHandlerHit}
          selected={this.context.selected}
        />
        <div>
          <Button
            onClick={this.context.onClickHandlerStart}
            color="primary"
            block
            size="lg">
            Start Game
          </Button>
        </div>
      </div>
    );
  }
}
