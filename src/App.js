import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Fade from './Components/Fade';
import ScaleMe from './Components/ScaleMe';
import MoveMe from './Components/MoveMe';
import TranslateInterpolation from './Components/TranslateInterpolation';
import NavWrapper from './Components/NavWrapper';
import DrawerWrapper from './Components/DrawerWrapper';
import KeyframeMoveMe from './Components/KeyframeMoveMe';
import TransitionExample from './Components/TransitionExample';
import TransitionComponent2Component from './Components/TransitionComponent2Component';
import TransitionArrayOfComponents from './Components/TransitionArrayOfComponents';
import Modal from './Components/Modal';

import Routes from './Routes';
import Accordion from './Components/Accordion';
import Waypoints from './Components/Waypoints';
import Boxes from './Components/Boxes';
import Gesture from './Components/Gesture';
import Gesture2 from './Components/Gesture2';
import Trail from './Components/Trail';
import ChainBoxes from './Components/ChainBoxes';
import TransitionBoxes from './Components/TransitionBoxes';
import TransitionChainBoxes from './Components/TransitionTrailChainBoxes';
import ToDoConfetti from './Components/ConfettiCannon/TodoCheckbox/TodoCheckbox';
//
const toDos = [ 'Write draft', 'Implement prototype', 'Send to LogRocket' ];
//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Spring Playground</h1>
      </header>

      <div className="example-container light">
        <h2>test confetti</h2>
        <h3>My To Do List</h3>
        {toDos.map(t => <ToDoConfetti colors={[ 'blue', 'red', 'yellow', 'purple' ]} key={t} text={t} />)}
      </div>
      <div className="example-container light">
        <Fade />
      </div>
      <div className="example-container dark">
        <ScaleMe />
      </div>
      <div className="example-container light">
        <MoveMe />
      </div>
      <div className="example-container dark">
        <TranslateInterpolation />
      </div>
      <div className="example-container light">
        <NavWrapper />
      </div>
      <div className="example-container dark">
        <DrawerWrapper />
      </div>
      <div className="example-container light">
        <KeyframeMoveMe />
      </div>
      <div className="example-container dark">
        <TransitionExample />
      </div>
      <div className="example-container light">
        <TransitionComponent2Component />
      </div>
      <div className="example-container dark">
        <TransitionArrayOfComponents />
      </div>
      <div className="example-container dark">
        <Routes />
      </div>
      <div className="example-container light">
        <Modal />
      </div>
      <div className="example-container dark">
        <Accordion />
      </div>
      <div className="example-container dark">
        <Waypoints />
      </div>
      <div className="example-container dark">
        <h2>Drag the square off left or right</h2>
        <Gesture />
        <br />
        <h2>Drag the square below anywhere</h2>
        <Gesture2 />
      </div>
      <div className="example-container light">
        <Boxes />
      </div>
      <div className="example-container dark">
        <Trail />
      </div>
      <div className="example-container dark">
        <ChainBoxes />
      </div>
      <div className="example-container dark">
        <TransitionBoxes />
      </div>
      <div className="example-container dark">
        <TransitionChainBoxes />
      </div>
    </div>
  );
}

export default App;
