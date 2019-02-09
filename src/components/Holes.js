import React from "react";
import styles from "./Components.module.css";
import Tims from "../images/timsbit.jpg";
import Box from "../images/timbox.jpg";

const Holes = props => {
  const timholes = props.holes.map(num => {
    console.log(props.selected);
    const tim = num == props.selected ? styles.timsup : styles.tims;
    return (
      <div key={num} className={styles.hole}>
        <img onClick={props.onClick} src={Tims} alt="" />
        <div className={tim}>
          <img src={Box} alt="" />
        </div>
      </div>
    );
  });
  return <di className={styles.timsholder}>{timholes}</di>;
};

export default Holes;
