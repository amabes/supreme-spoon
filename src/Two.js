import React, { Component } from 'react';
// import './One.css';

class One extends Component {
  nextPage() {
    document.querySelector('#hello').innerHTML = '';
  }

  render() {
    return (
      <div className="One">
        <div id="hello">
          and care about user experience. 
          For the past year I was the lead frontend engineer building 
          <a href="http://google.com">Tinka</a>, an AI powered chatbot for T-Mobile Austria. Before that <a onClick={this.nextPage}>...</a>
        </div>
      </div>
    );
  }
}

export default One;
