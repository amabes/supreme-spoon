import React, { Component } from 'react';
// import './One.css';
// import Two from './Two';

class One extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="One">
        {this.props.text} <span onClick={this.props.nextText}>...</span>
      </div>
    );
  }
}

export default One;
