import React from "react";
import { animated, useSpring } from "react-spring";

export default function Line2(props) {
  const anim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });
  return (
    <animated.div style={anim}>
      <div className={"line"}>
        <h2>WHERE IS RBI, INC HEADQUARTED?</h2>
      </div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.lose}>OTTAWA, ONTARIO</h4>
        </div>
      </animated.div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.q2}>TORONTO, ONTARIO</h4>
        </div>
      </animated.div>
      <animated.div style={anim}>
        <div className={"line"}>
          <h4 onClick={props.lose}>MIAMI, FLORIDA</h4>
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
