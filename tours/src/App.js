import React, { Component } from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HoverCount from './components/HoverCount';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour';
import HookUseEffectOne from  './components/HookUseEffectOne'
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalCounter from './components/IntervalCounter';
class App extends Component {
  render(){
    return (
      <div className="App">
        <IntervalCounter/>
        {/* <MouseContainer/> */}
        {/* <HookCounter/> */}
        {/* <HoverCount/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounterFour/> */}
        {/* <HookUseEffectOne/> */}
        {/* <HookMouse/> */}
      </div>
    );
  }
}
export default App;
