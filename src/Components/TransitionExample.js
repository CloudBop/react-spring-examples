import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
/** Transition vs Spring
 * 
 * Transition mounts and unmounts components...
 */
function TransitionExample() {
  const [ toggle, toggleMoveMe ] = useState(false);
  // useTransition(bool, items, object)
  const transition = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  //
  return (
    <div>
      {//
      transition.map(
        // props is misleading here, they actual represent useTransition Object
        ({ item, key, props }) =>
          // mount or unmount ?
          item && (
            //
            <animated.h2 key={key} style={props}>
              Transition
            </animated.h2>
          )
      )
      //
      }
      <button onClick={() => toggleMoveMe(!toggle)}> Toggle </button>
    </div>
  );
}

export default TransitionExample;
