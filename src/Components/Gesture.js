import React from 'react';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring } from 'react-spring';

const Gesture = () => {
  // cool use of spring
  const [ { x }, set ] = useSpring(() => ({ x: 0 }));

  const bind = useGesture(({ down, delta }) => {
    // console.log('obj', obj);

    if (down) {
      set({ x: delta[0] });
    } else {
      // onkeyup...
      //
      if (delta[0] > 400) {
        // remove
        set({ x: 500 });
      } else if (delta[0] < -400) {
        // remove
        set({ x: -500 });
      } else {
        // spring back
        set({ x: 0 });
      }
    }
  });

  return (
    <animated.div
      style={{
        opacity: x.interpolate({
          // bind negative out to +
          map: Math.abs,
          // further from 0
          range: [ 0, 400 ],
          // more the fade
          output: [ 1, 0 ]
        }),
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
      }}
      {...bind()}
      className="box"
    />
  );
};

export default Gesture;
