import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import Mainimage from './Mainimage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Mainimage />
      </div>
    );
  }
}

export default App;
