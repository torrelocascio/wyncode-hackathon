import React from "react";
import { animated, useSpring } from "react-spring";

export default function Lose(props) {
  const anim1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });

  return (
    <animated.div style={anim1}>
      <div className={"line"}>
        <h2>YOU LOSE. SHAME ON YOU AND YOUR FAMILY.</h2>
        <h4 onClick={props.tryAgain}>Play Again?</h4>
      </div>
    </animated.div>
  );
}
