import React, { Component } from 'react';
import Routine from './image/Routine.jpg';
class Mainimage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <img height="500" width="1870" src= {Routine} />
      </div>
    );
  }
}

export default Mainimage;
