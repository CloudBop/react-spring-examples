import React from 'react';
import ConfettiDot from '../ConfettiDot/ConfettiDot.js';

const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const randomIntInRange = (min, max) => Math.floor(randomInRange(min, max));

const ConfettiCannon = ({ anchorRef, colors, dotCount }) => (
  <React.Fragment>
    {new Array(dotCount)
      .fill()
      .map((_, index) => (
        <ConfettiDot
          key={index}
          anchorRef={anchorRef}
          color={colors[randomIntInRange(0, colors.length)]}
          initialHorizontal={randomInRange(-250, 250)}
          initialUpwards={randomInRange(200, 700)}
          rotate={randomInRange(0, 360)}
          size={randomInRange(8, 12)}
        />
      ))}
  </React.Fragment>
);

export default ConfettiCannon;
