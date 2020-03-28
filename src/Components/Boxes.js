import React, { useState } from 'react';
import { animated, useSprings, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const items = [ 1, 0.1, 0.5, 1, 0.5 ];

const Boxes = () => {
  const [ toggle, toggleAnimate ] = useState(false);

  // spings:array
  const springs = useSprings(
    items.length,
    // all animations
    items.map(item => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: item
      },
      config: config.molasses
    }))
  );

  return (
    <div className="boxes-grid">
      <Waypoint
        onEnter={() => toggleAnimate(true)} // topOffset="-30%" //
        bottomOffset="50%"
      />
      {toggle ? springs.map((animation, idx) => <animated.div key={idx} className="box" style={animation} />) : null}
    </div>
  );
};

export default Boxes;
