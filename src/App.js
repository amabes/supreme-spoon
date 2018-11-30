import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import CookieBanner from './CookieBanner';
import Cookies from 'js-cookie';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCookieBanner: (Cookies.get('GDRP') === undefined) ? true : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(that) {
    Cookies.set('GDRP', 'accepted');

    this.setState(state => ({
      showCookieBanner: false
    }));
  }

  render() {
    return (
      <div className="App">
        <HelloWorld />
        <CookieBanner showCookieBanner={this.state.showCookieBanner} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
