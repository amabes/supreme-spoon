import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import One from './One';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      text: {
        0: this.zero(),
        1: 'and care about user experience'
      }
    };
    this.nextPage = this.nextPage.bind(this);
  }
  
  zero() {
    return (
      <Fragment>
        I love building things <a href="https://google.com">test</a>
      </Fragment>
    );
  }
  
  nextPage() {
    this.setState(state => ({
      index: this.state.index += 1
    }));
    
    console.log(this.state.index);
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
