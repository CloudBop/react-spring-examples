import React, { useState } from 'react';
import Checkout from './Checkout';

function DrawerWrapper() {
  const [ isOpen, toggleOpen ] = useState(false);
  console.log('isOpen', isOpen);
  const toggle = () => {
    console.log('click', isOpen);
    toggleOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Checkout isOpen={isOpen} cb={toggle} />
    </div>
  );
}

export default DrawerWrapper;
