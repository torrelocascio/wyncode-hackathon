import React from "react";

import donut from "../images/donut4.png";
import chicken from "../images/chicken1.png";
import burger from "../images/burger5.png";
import { animated, useSpring } from "react-spring";

export default function Food() {
  const anim = useSpring({
    from: { opacity: 0, marginLeft: 0 },
    to: { opacity: 1, marginLeft: 680 },
    config: { delay: 1500, mass: 500, tension: 150, friction: 12 }
  });

  return (
    <div>
      <animated.div style={anim}>
        <img src={donut} alt="" width="50" height="50" className="donut" />
      </animated.div>
      <animated.div style={anim}>
        <img src={chicken} alt="" width="50" height="50" className="chicken" />
      </animated.div>
      <animated.div style={anim}>
        <img src={burger} alt="" width="50" height="50" className="burger" />
      </animated.div>
    </div>
  );
}
