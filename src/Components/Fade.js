import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Anime = ({ fade }) => (
  <animated.p style={fade}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus ullam reiciendis illo eligendi,
    laboriosam quaerat quisquam quasi fuga natus expedita velit mollitia. Accusamus obcaecati accusantium fugiat culpa,
    in consequuntur.
  </animated.p>
);

function Fade() {
  //
  const [ isFaded, toggleIsFade ] = useState(true);
  const [ mountIsFaded, toggleMountIsFade ] = useState(true);

  console.log('fader', isFaded);
  const fade = useSpring({
    opacity: isFaded ? 0 : 1
  });
  const mountFade = useSpring({
    from: {
      opacity: mountIsFaded ? 1 : 0
    },
    to: {
      opacity: mountIsFaded ? 0 : 1
    }
    // SHORTHAND
    // from: {
    //   opacity: 0
    // },
    // opacity: 1
  });
  // notice not logged 1000s of times !
  //console.log(fade);

  return (
    <div>
      <div className="btn" onClick={() => toggleIsFade(prev => !prev)}>
        <h2>Fade</h2>
      </div>

      <animated.p style={fade}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus ullam reiciendis illo eligendi,
        laboriosam quaerat quisquam quasi fuga natus expedita velit mollitia. Accusamus obcaecati accusantium fugiat
        culpa, in consequuntur.
      </animated.p>

      <div className="btn" onClick={() => toggleMountIsFade(prev => !prev)}>
        <h2>Mount/unMont fade</h2>
      </div>

      {mountIsFaded ? <Anime fade={mountFade} /> : <Anime fade={mountFade} />}
    </div>
  );
}

export default Fade;
