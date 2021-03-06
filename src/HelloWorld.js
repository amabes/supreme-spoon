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
        1: "I've been pushing pixels perfectly since 2007 for startups, celebrities & digital agencies"
      }
    };
    this.nextPage = this.nextPage.bind(this);
  }
  
  zero() {
    const text = [
      'Web Apps',
      'Websites',
      'Internal Tools',
      'Landing Pages',
      'Microsites',
      'Portfolio Sites',
      'Chatbots'
    ];

    return (
      <Fragment>
        I ♥︎ building
        <EntityCycler text={text} />
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
