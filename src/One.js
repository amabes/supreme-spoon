import React, { Component } from 'react';
// import './One.css';

class One extends Component {
  render() {
    return (
      <div className="One">
        {this.props.text} <button className="next-page" onClick={this.props.nextText}>...</button>
      </div>
    );
  }
}

export default One;
