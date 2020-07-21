import React, { Component } from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
class App extends Component {
  render(){
    return (
      <div className="App">
        <HookCounter/>
      </div>
    );
  }
}
export default App;
