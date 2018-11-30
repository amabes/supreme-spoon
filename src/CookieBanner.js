import React, { Component } from 'react';
import './CookieBanner.css';

class CookieBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCookieBanner: (props.showCookieBanner) ? 'is-visible' : ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this);
  }

  render() {
    return (
      <div className={"CookieBanner " + this.state.showCookieBanner}>
        <div className="constrain">
          <div className="sosumi-main">
            <div className="sosumi-content">
              By continuing to use this site you agree to the <a href="terms-of-use">Terms of Use</a> and <span className="u-nowrap"> <a href="privacy-policy">Privacy Policy</a></span>
            </div>
            <button onClick={this.handleClick} className="button">
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CookieBanner;
