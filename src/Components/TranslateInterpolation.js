import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
//
function TranslateInterpolation() {
  const [ moveMe, toggleMoveMe ] = useState(false);

  const { color, y } = useSpring({
    y: moveMe ? 150 : 0,
    color: moveMe ? '#000' : '#FFF'
  });

  return (
    <div>
      <button onClick={() => toggleMoveMe(!moveMe)}>Toggle</button>
      <animated.h6
        style={{
          color,
          transform: y.interpolate(y => `translate(0,${y}px)`)
        }}
      >
        {' '}
        Going Down...{' '}
      </animated.h6>
    </div>
  );
}

export default TranslateInterpolation;
