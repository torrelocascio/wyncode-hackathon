import React from "react";
import { animated, useSpring } from "react-spring";

export default function Win(props) {
  const anim1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 800, duration: 2000 }
  });

  return (
    <animated.div style={anim1}>
      <div className={"line"}>
        <h2>
          YOU WIN. CONGRATULATIONS. GO TO YOUR NEAREST BURGER KING LOCATION AND
          TELL THEM YOU EARNED A FREE WHOPPER. I HAVE NO VOUCHERS TO PROVIDE,
          BUT I PROMISE THEY WON'T THROW YOU OUT.
        </h2>
        <h4 onClick={props.tryAgain}>Play Again?</h4>
      </div>
    </animated.div>
  );
}
