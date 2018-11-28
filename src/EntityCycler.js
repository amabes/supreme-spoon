import React, { Component, Fragment } from 'react';
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
  
  currentText() {
    return (
      <Fragment>
        {this.state.text[this.state.index]}
      </Fragment>
    )
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
