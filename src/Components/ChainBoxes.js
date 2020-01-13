import React, { useState, useRef } from 'react';
import { animated, useTrail, useSpring, useChain } from 'react-spring';

const items = [ 0.5, 0.3, 0.2, 0.7, 1 ];

const Chain = () => {
  const [ on, toggle ] = useState(false);
  // store refs in component
  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    to: { size: on ? '100%' : '20%' },
    from: { size: on ? '100%' : '20%' }
  });
  //
  //
  const transitionRef = useRef();
  const trail = useTrail(items.length, {
    ref: transitionRef,
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: on ? 1 : 0, transform: on ? 'scale(1)' : 'scale(0)' }
  });

  //
  useChain(on ? [ springRef, transitionRef ] : [ transitionRef, springRef ]);
  //

  return (
    <div className={'full-height'}>
      <animated.div style={{ width: size, height: size }} onClick={() => toggle(!on)} className="boxes-grid-two">
        {trail.map((animation, idx) => <animated.div key={idx} className="box-two" style={animation} />)}
      </animated.div>
    </div>
  );
};

export default Chain;
