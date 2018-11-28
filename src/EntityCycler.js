import React, { Component, Fragment } from 'react';
import './EntityCycler.css';

class EntityCycler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      text: [
        'Apps',
        'Websites',
        'Tools',
        'Landing Pages'
      ]
    }
  }
  
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  
  currentText() {
    const index = this.state.index || this.getRandomInt(this.state.text.length); 

    return (
      <Fragment>
        {this.state.text[index]}
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
