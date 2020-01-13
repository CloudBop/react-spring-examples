import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function MoveMe() {
  const [ moveMe, toggleMoveMe ] = useState(false);

  const move = useSpring({
    transform: moveMe ? 'translate(0,0)' : 'translate(0,150px)'
  });

  return (
    <div>
      <button onClick={() => toggleMoveMe(!moveMe)}>Toggle</button>
      <animated.h6 style={move}> Going up... </animated.h6>
    </div>
  );
}

export default MoveMe;
