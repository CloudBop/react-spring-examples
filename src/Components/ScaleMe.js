import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
//
//
function ScaleMe() {
  const [ isBig, toggleIsBig ] = useState(true);

  const size = useSpring({
    fontSize: isBig ? '5em' : '1em',
    margin: 0
  });

  return (
    <div style={{ height: '155px' }}>
      <button onClick={() => toggleIsBig(prev => !prev)}> Size Me</button>
      <animated.h6 style={size}> Surpise! </animated.h6>
    </div>
  );
}
//
export default ScaleMe;
