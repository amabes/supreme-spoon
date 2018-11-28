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
