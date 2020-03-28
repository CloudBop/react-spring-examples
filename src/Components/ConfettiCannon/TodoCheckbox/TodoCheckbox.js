import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ConfettiCannon from '../Cannon/Cannon';

const StyledToDo = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 4px;
`;

const ToDo = ({ colors, text }) => {
  const confettiAnchorRef = useRef();
  const [ done, setDone ] = useState(false);
  return (
    <StyledToDo>
      <input ref={confettiAnchorRef} type="checkbox" onChange={() => setDone(!done)} />
      <span>
        {text} {done ? ':ok_hand:' : ''}
      </span>
      {done && <ConfettiCannon anchorRef={confettiAnchorRef} colors={colors} dotCount={50} />}
    </StyledToDo>
  );
};

export default ToDo;
