import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function KeyframeMoveMe() {
  const [ moveMe, toggleMoveMe ] = useState(false);

  const { y } = useSpring({
    y: moveMe ? 0 : 1
  });

  return (
    <div style={{ minHeight: '90vh', flex: 'auto' }}>
      <button
        onClick={() => {
          console.log('moveMe', moveMe);
          return toggleMoveMe(!moveMe);
        }}
      >
        Toggle
      </button>
      <animated.h6
        style={{
          backgroundColor: 'lightpink',
          minHeight: '75vh',
          transform: y
            .interpolate({
              range: [ 0, 0.25, 0.5, 0.75, 1 ],
              output: [ 0, 50, 100, 50, 0 ]
            })
            .interpolate(y => `translate3d(0,${y}%,0)`)
        }}
      >
        Going down and back up!
      </animated.h6>
    </div>
  );
}

export default KeyframeMoveMe;
