import React from "react";
import { animated, useSpring } from "react-spring";

export default function Line3(props) {
  const anim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });

  return (
    <animated.div style={anim}>
      <div className={"line"}>
        <h2>WHICH OF THESE BRANDS WAS ACQUIRED BY RBI, INC IN 2017?</h2>
      </div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.lose}>BURGER KING</h4>
        </div>
      </animated.div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.q3}>POPEYE'S</h4>
        </div>
      </animated.div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.lose}>TIM HORTON'S</h4>
        </div>
      </animated.div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.lose}>YUM! BRANDS</h4>
        </div>
      </animated.div>
    </animated.div>
  );
}
