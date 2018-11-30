import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import CookieBanner from './CookieBanner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <CookieBanner />
      </div>
    );
  }
}

export default App;
