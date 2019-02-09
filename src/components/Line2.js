import React from "react";
import { animated, useSpring } from "react-spring";

export default function Line2(props) {
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
        <h2>WHERE IS RBI, INC HEADQUARTED?</h2>
      </div>
      <animated.div style={anim2}>
        <div style={c1Style}>
          <h4 onClick={props.lose}>OTTAWA, ONTARIO</h4>
        </div>
      </animated.div>
      <animated.div style={anim3}>
        <div style={c1Style}>
          <h4 onClick={props.q2}>TORONTO, ONTARIO</h4>
        </div>
      </animated.div>
      <animated.div style={anim4}>
        <div style={c1Style}>
          <h4 onClick={props.lose}>MIAMI, FLORIDA</h4>
        </div>
      </animated.div>
      <animated.div style={anim5}>
        <div style={c1Style}>
          <h4 onClick={props.lose}>NONE OF THE ABOVE</h4>
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
