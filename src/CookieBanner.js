import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './CookieBanner.css';

class CookieBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCookieBanner: (Cookies.get('GDRP') === undefined) ? 'is-visible' : ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Cookies.set('GDRP', 'accepted');

    this.setState(state => ({
      showCookieBanner: false
    }));
  }

  activeClasses(){
    const classes = ['CookieBanner'];

    if (this.state.showCookieBanner) {
      classes.push('is-visible')
    }

    return classes.join(' ');
  }

  render() {
    return (
      <div className={this.activeClasses()}>
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
