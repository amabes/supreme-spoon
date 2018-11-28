import React, { Component } from 'react';
import './EntityCycler.css';

class EntityCycler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      text: this.shuffleText([
        'Apps',
        'Websites',
        'Tools',
        'Landing Pages'
      ])
    }
  }
  
  componentDidMount() {
    console.log(this.state.text);
  }
  
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  shuffleText(text) {
    const start = this.getRandomInt(text.length);
    //////////////////////////////////////////
    // Illusion of random of circular order //
    //////////////////////////////////////////
    // make a copy of state.text
    let copy = [...text];
    // create new array from start index until end of copy
    let stack = copy.splice(start);
    // push all items before starting index onto end of stack array
    stack.push(...copy);
    stack.reverse();
    ///////////////////////////////////////////////////////////////
    return stack;
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
