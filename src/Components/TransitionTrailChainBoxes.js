import React, { useState, useRef } from 'react';
import { animated, useTrail, useSpring, useChain, useTransition } from 'react-spring';
// mimic array of component, using item[idx] as key
const items = [ 0.5, 0.3, 0.2, 0.7, 1, 9, 89, 56, 90, 543 ];

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
  const transition = useTransition(on ? items : [], item => item, {
    trail: 1000 / items.length,
    ref: transitionRef,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });

  //
  useChain(on ? [ springRef, transitionRef ] : [ transitionRef, springRef ]);
  //

  return (
    <div className={'full-height'}>
      <animated.div style={{ width: size, height: size }} onClick={() => toggle(!on)} className="boxes-grid-two">
        {transition.map(({ item, key, props: aniProps }) => (
          <animated.div key={key} className="box-two" style={aniProps} />
        ))}
      </animated.div>
    </div>
  );
};

export default Chain;