import React, { Component } from 'react';
import './EntityCycler.css';

class EntityCycler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        'Apps',
        'Websites',
        'Tools',
        'Landing Pages'
      ]
    }

    this.state.index = this.getRandomInt(this.state.text.length);
  }
  
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  cycleThruText() {
    const start = this.state.index;
    //////////////////////////////////////////
    // Illusion of random of circular order //
    //////////////////////////////////////////
    // make a copy of state.text
    let copy = [...this.state.text];
    // create new array from start index until end of copy
    let stack = copy.splice(start);
    // push all items before starting index onto end of stack array
    stack.push(...copy);
    stack.reverse();
    ///////////////////////////////////////////////////////////////

    while(stack.length) {
      
    }
    
  }
  
  currentText(specificIndex) {
    const index = specificIndex || this.state.index;

    return this.state.text[index];
  }

  render() {
    return (
      <div className="EntityCycler">
        {this.currentText()}
      </div>
    );
  }
}

export default EntityCycler;
