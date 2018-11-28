import React, { Component, Fragment } from 'react';
import EntityCycler from './EntityCycler';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      text: {
        0: this.zero(),
        1: 'tbd'
      }
    };
    this.nextPage = this.nextPage.bind(this);
  }
  
  zero() {
    return (
      <Fragment>
        I ♥︎ building
        <EntityCycler />
        and care about
        <br />
        user experience
      </Fragment>
    );
  }
  
  currentText() {
    return this.state.text[this.state.index];
  }
  
  nextPage() {
    this.setState(state => ({
      index: this.state.index + 1
    }));
  }

  render() {
    return (
      <div className="HelloWorld">
        {this.currentText()} <button className="next-page" onClick={this.nextPage}>...</button>
      </div>
    );
  }
}

export default HelloWorld;
