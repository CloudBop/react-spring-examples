import React from 'react';
import { useSpring, animated, config } from 'react-spring';
//
function Checkout({ isOpen, cb }) {
  const { x } = useSpring({
    // reuses x value without needing two seperate from
    x: isOpen ? 0 : 100,
    config: config.wobbly
    // transform: isNavOpen ? 'translate3d(0,0,0) scale(1)' : 'translate3d(-100%,0,0) scale(0.25)'
    // transform: isNavOpen ? 'translate3d(0,0,0) scale(1)' : 'translate3d(0,0,0) scale(0.25)'
  });

  return (
    <div
      className="checkout"
      style={{
        // hack for controlling overlay... if open use overlay else none.
        pointerEvents: isOpen ? 'all' : 'none'
      }}
      onClick={cb}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
        }}
        className="checkout-left"
      />
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
        }}
        className="checkout-right"
      />
    </div>
  );
}

export default Checkout;
