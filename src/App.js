// Standard React Imports
import React, { Component } from 'react';
import './App.css';

// Components
import MapSelection from './components/MapSelection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapSelection />
      </div>
    );
  }
}

export default App;
