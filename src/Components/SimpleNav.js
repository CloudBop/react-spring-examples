import React from 'react';
import { animated } from 'react-spring';

const SimpleNav = ({ animat8, toggle }) => {
  return (
    <animated.div className="nav-wrapper" style={animat8}>
      <nav>
        <a href="www.google.com" _blank>
          Home
        </a>
        <a href="www.google.com" _blank>
          About
        </a>
        <a href="www.google.com" _blank>
          Store
        </a>
        <a href="www.google.com" _blank>
          Tutorials
        </a>
        <a href="www.google.com" onClick={() => toggle()}>
          Close
        </a>
      </nav>
    </animated.div>
  );
};

export default SimpleNav;
