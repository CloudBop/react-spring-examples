import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';

const Modal = ({ closeModal, animation, pointerEvents }) => {
  return (
    <div className="modal" style={{ pointerEvents }}>
      <animated.div className="modal-card" style={animation}>
        <button onClick={closeModal}>Close</button>
        <h1>Modal</h1>
      </animated.div>
    </div>
  );
};

const ModalWrapper = () => {
  const [ on, toggle ] = useState(false);
  const transition = useTransition(on, null, {
    from: { opacity: 0, transform: 'translate3d(0, -90px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -90px, 0)' }
  });
  //
  const pointerEvents = on ? 'all' : 'none';
  //
  return (
    <div>
      {transition.map(
        // args in order as called in transition (on, null, obj)
        ({ item, key, props: animation }) =>
          item && (
            <Modal key={key} pointerEvents={pointerEvents} animation={animation} closeModal={() => toggle(false)} />
          )
      )}
      <button onClick={() => toggle(!on)}>Open</button>
    </div>
  );
};

export default ModalWrapper;
