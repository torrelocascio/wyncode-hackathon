import React from "react";
import { animated, useSpring } from "react-spring";

export default function Line1(props) {
  const anim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });

  return (
    <animated.div style={anim}>
      <div className={"line"}>
        <h2>WHO IS THE CEO OF RBI, INC?</h2>
      </div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.q1}>DANIEL SCHWARTZ</h4>
        </div>
      </animated.div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.lose}>STEVE EASTERBROOK</h4>
        </div>
      </animated.div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.lose}>NIGEL TRAVIS</h4>
        </div>
      </animated.div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.lose}>NONE OF THE ABOVE</h4>
        </div>
      </animated.div>
    </animated.div>
  );
}
