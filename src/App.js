import React, { Component } from "react";
import { MyProvider } from "./containers/MyContext";
import Main from "./Main";
import { Container } from "reactstrap";
import "./App.css";
import styles from "./Main.module.css";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className={styles.holder}>
          <Main />
        </div>
      </MyProvider>
    );
  }
}

export default App;
