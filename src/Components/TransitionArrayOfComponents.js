import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

function TransitionArrayOfComponents() {
  //
  const [ items, setItems ] = useState([
    // think of each as these as a react component
    {
      letter: 'C',
      key: '1'
    },
    {
      letter: 'O',
      key: '2'
    },
    {
      letter: 'L',
      key: '3'
    },
    {
      letter: 'I',
      key: '4'
    },
    {
      letter: 'N',
      key: '5'
    }
  ]);
  // useTransition(bool||array, items, object)
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  //
  return (
    <div style={{ position: 'relative' }}>
      {//
      transition.map(
        // props is misleading here, they actual represent useTransition Object
        ({ item, key, props }) => (
          //
          <animated.h2 style={props} key={key} style={props}>
            {item.letter}
          </animated.h2>
        )
      )
      //
      }
      <button
        onClick={() =>
          setItems(prevState => {
            //
            console.log('newState', prevState);
            //
            return [
              // think of each as these as a react component
              {
                letter: 'C',
                key: '1'
              }
            ];
          })}
      >
        Toggle
      </button>
    </div>
  );
}

export default TransitionArrayOfComponents;
