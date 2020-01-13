import React from 'react';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring } from 'react-spring';

const Gesture = () => {
  // cool use of spring. // set is on evt
  const [ { xy }, set ] = useSpring(() => ({ xy: [ 0, 0 ] }));

  const bind = useGesture(({ down, delta }) => {
    // console.log('delta', delta);
    console.log('down', down);
    console.log('xy', xy);
    set({ xy: down ? delta : [ 0, 0 ] });
  });

  return (
    <animated.div
      style={{
        // implement animate object provided by useSpring
        transform: xy.interpolate((x, y) => {
          //
          return `translate3d( ${x}px, ${y}px, 0)`;
        })
      }}
      {...bind()}
      className="box"
    />
  );
};

// const Gesture = () => {
//   const [ { xy }, set ] = useSpring(() => ({ xy: [ 0, 0 ] }));

//   const bind = useGesture(({ down, delta }) => {
//     set({ xy: down ? delta : [ 0, 0 ] });
//   });

//   return (
//     <animated.div
//       style={{
//         transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`)
//       }}
//       {...bind()}
//       className="box"
//     />
//   );
// };

export default Gesture;
