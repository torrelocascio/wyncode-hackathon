import React from "react";
import { animated, useSpring } from "react-spring";

export default function Line3(props) {
  const anim1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });
  const anim2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });
  const anim3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });
  const anim4 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });
  const anim5 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });
  return (
    <animated.div style={anim1}>
      <div style={c1Style}>
        <h2>WHICH OF THESE BRANDS WAS ACQUIRED BY RBI, INC IN 2017?</h2>
      </div>
      <animated.div style={anim2}>
        <div style={c1Style}>
          <h4 onClick={props.lose}>BURGER KING</h4>
        </div>
      </animated.div>
      <animated.div style={anim3}>
        <div style={c1Style}>
          <h4 onClick={props.lose}>POPEYE'S</h4>
        </div>
      </animated.div>
      <animated.div style={anim4}>
        <div style={c1Style}>
          <h4 onClick={props.lose}>TIM HORTON'S</h4>
        </div>
      </animated.div>
      <animated.div style={anim5}>
        <div style={c1Style}>
          <h4 onClick={props.q3}>YUM! BRANDS</h4>
        </div>
      </animated.div>
    </animated.div>
  );
}

const c1Style = {
  // background: "steelblue",
  // color: "red",
  color: "gold",
  padding: "1.5rem",
  textAlign: "center"
};
