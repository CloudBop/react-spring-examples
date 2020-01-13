import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

function TransitionComponent2Component() {
  //
  const [ toggle, toggleMoveMe ] = useState(false);
  // useTransition(bool, items, object)
  const transition = useTransition(toggle, null, {
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  //
  return (
    <div style={{ position: 'relative' }}>
      {//
      transition.map(
        // props is misleading here, they actual represent useTransition Object
        ({ item, key, props }) =>
          //
          item ? (
            //
            <animated.h2 key={key} style={props}>
              Hello
            </animated.h2>
          ) : (
            //
            <animated.h2 key={key} style={props}>
              World
            </animated.h2>
          )
      )
      //
      }
      <button onClick={() => toggleMoveMe(!toggle)}> Toggle </button>
    </div>
  );
}

export default TransitionComponent2Component;
