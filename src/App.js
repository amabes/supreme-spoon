import React, { Component, Fragment } from 'react';
import EntityCycler from './EntityCycler';
import One from './One';
import './App.css';

class App extends Component {
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
  
  nextPage() {
    this.setState(state => ({
      index: this.state.index + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <One text={this.state.text[this.state.index]} nextText={this.nextPage} />
      </div>
    );
  }
}

export default App;
