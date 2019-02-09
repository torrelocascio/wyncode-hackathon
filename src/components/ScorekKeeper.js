import React from "react";
import styles from "./Components.module.css";
const ScorekKeeper = ({ score, time, highScore }) => {
  return (
    <div className={styles.scorekeeper}>
      <div className={styles.highscore}>HIGH SCORE:{highScore}</div>
      <div className={styles.score}>SCORE:{score}</div>
    </div>
  );
};

export default ScorekKeeper;
