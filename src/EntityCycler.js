import React, { Component } from 'react';
import './EntityCycler.css';

class EntityCycler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      text: this.shuffleText(props.text)
    }
  }
  
  componentDidMount() {
    // Wait a sec
    setTimeout(() => {
      // setInterval that increases index every second
      this.timerID = setInterval(() => {
        this.increaseIndex();
        
        if (this.state.text.length - 1 === this.state.index) {
          clearInterval(this.timerID);
        }
      }, 1000);
    }, 1500)
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  increaseIndex() {
    this.setState({
      index: this.state.index + 1
    });
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
    // restore original order
    stack.reverse();
    ///////////////////////////////////////////////////////////////
    return stack;
  }
  
  currentText(specificIndex) {
    return this.state.text[this.state.index];
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
