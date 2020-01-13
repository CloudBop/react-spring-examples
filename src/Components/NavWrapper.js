import React, { useState } from 'react';
import SimpleNav from './SimpleNav';
import { useSpring } from 'react-spring';
function NavWrapper() {
  const [ isNavOpen, toggleNavigation ] = useState(false);
  const [ xDim, setDimX ] = useState(-100);
  const [ yDim, setDimY ] = useState(-100);
  const [ size, setSize ] = useState(0.25);
  // const navInterpolate = useSpring({
  //   x: isNavOpen ? 0 : xDim,
  //   y: isNavOpen ? 0 : yDim,
  //   scale: isNavOpen ? 1 : size
  // });

  const navAnimation = useSpring({
    transform: isNavOpen ? 'translate3d(0,0,0) scale(1)' : `translate3d(${xDim}%,${yDim}%,0) scale(${size})`
    // transform: isNavOpen ? 'translate3d(0,0,0) scale(1)' : 'translate3d(-100%,0,0) scale(0.25)'
    // transform: isNavOpen ? 'translate3d(0,0,0) scale(1)' : 'translate3d(0,0,0) scale(0.25)'
  });

  return (
    <div>
      <button onClick={() => toggleNavigation(!isNavOpen)} className="menu-button">
        Menu
      </button>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          x:
          <input
            type="Number"
            value={xDim}
            onChange={evt => {
              console.log('evt.currentTarget.value', evt.currentTarget.value);
              setDimX(typeof Number(evt.currentTarget.value) === 'number' ? Number(evt.currentTarget.value) : 0);
            }}
          />
        </label>
        <label>
          y:
          <input
            type="Number"
            value={yDim}
            onChange={evt =>
              setDimY(typeof Number(evt.currentTarget.value) === 'number' ? Number(evt.currentTarget.value) : 0)}
          />
        </label>
        <label>
          size:
          <input
            type="Number"
            value={size}
            onChange={evt =>
              setSize(typeof Number(evt.currentTarget.value) === 'number' ? Number(evt.currentTarget.value) : 0)}
          />
        </label>
      </div>

      <div>
        <SimpleNav animat8={navAnimation} toggle={toggleNavigation} />
      </div>
    </div>
  );
}

export default NavWrapper;
