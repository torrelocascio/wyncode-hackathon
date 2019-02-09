import React from "react";

import donut from "../images/donut4.png";
import chicken from "../images/chicken1.png";
import burger from "../images/burger5.png";
import { animated, useSpring } from "react-spring";
// import { Trail } from "react-spring/renderprops";

export default function Component1() {
  const anim = useSpring({
    from: { opacity: 0, marginLeft: 0 },
    to: { opacity: 1, marginLeft: 680 },
    config: { delay: 1500, mass: 500, tension: 150, friction: 12 }
    // to: async (next, cancel) => {
    //   await next({ opacity: 1 });
    //   await next({ opacity: 0 });
    // },
    // from: { opacity: 0 }
  });
  const items = [donut, chicken, burger];
  return (
    <div>
      {/* <Trail
        items={items}
        from={{ opacity: 0, marginTop: 0 }}
        to={{ opacity: 1, marginTop: 50 }}
      >
        {item => props => (
          <img src={item} alt="" width="50" height="50" className="chicken" />
        )}
      </Trail> */}
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
