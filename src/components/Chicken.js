import React from "react";

import chicken from "../images/chicken1.png";

import { animated, useSpring } from "react-spring";
// import { Trail } from "react-spring/renderprops";

export default function Chicken() {
  const anim = useSpring({
    from: { opacity: 0, marginLeft: 0 },
    to: { opacity: 1, marginLeft: 680 },
    config: { delay: 1500, mass: 100, tension: 150, friction: 12 }
    // to: async (next, cancel) => {
    //   await next({ opacity: 1 });
    //   await next({ opacity: 0 });
    // },
    // from: { opacity: 0 }
  });
  const items = [donut, chicken, burger];
  return (
    <div>
      <animated.div style={anim}>
        <img src={chicken} alt="" width="50" height="50" className="chicken" />
      </animated.div>
    </div>
  );
}
