import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, config, useSpring, interpolate } from 'react-spring';

const StyledToDo = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 4px;
`;

export const ToDo = ({ text }) => {
  const [ done, setDone ] = useState(false);
  return (
    <StyledToDo>
      <input type="checkbox" onChange={() => setDone(!done)} />
      <span>
        {text} {done ? ':ok_hand:' : ''}
      </span>
      {done && <ConfettiDot />}
    </StyledToDo>
  );
};

const StyledConfettiDot = styled.svg`
  height: 10px;
  pointer-events: none;
  position: absolute;
  width: 10px;
  will-change: transform;
`;

const AnimatedConfettiDot = animated(StyledConfettiDot);
const alignWithAnchor = anchorRef => {
  //
  if (anchorRef.current == null) {
    return {
      initialX: 0,
      initialY: 0
    };
  }
  const { height, width } = anchorRef.current.getBoundingClientRect();
  return {
    initialX: width / 2,
    initialY: height / 2
  };
};

export const ConfettiDot = ({ anchorRef }) => {
  //
  const { horizontal, upwards } = useSpring({
    config: config.default,
    from: {
      horizontal: 200,
      upwards: 300
    },
    to: {
      horizontal: 0,
      upwards: 0
    }
  });
  //
  //
  // const initialX = 0;
  // const initialY = 0;
  const { initialX, initialY } = alignWithAnchor(anchorRef);
  let totalUpwards = 0;
  let totalHorizontal = 0;
  const startTime = new Date().getTime() / 1000;
  let lastTime = startTime;
  const gravityPerSecond = 30;
  return (
    <AnimatedConfettiDot
      style={{
        transform: interpolate([ upwards, horizontal ], (v, h) => {
          const currentTime = new Date().getTime() / 1000;
          const duration = currentTime - lastTime;
          const totalDuration = currentTime - startTime;
          const verticalTraveled = v * duration;
          const horizontalTraveled = h * duration;
          totalUpwards += verticalTraveled;
          totalHorizontal += horizontalTraveled;
          lastTime = currentTime;
          const totalGravity = gravityPerSecond * totalDuration;
          const finalX = initialX + totalHorizontal;
          const finalY = initialY - totalUpwards + totalGravity;
          return `translate3d(${finalX}px, ${finalY}px, 0)`;
        })
      }}
    >
      <circle cx="5" cy="5" r="5" fill="blue" />
    </AnimatedConfettiDot>
  );
};
