import './index.scss';

import React, { Component } from 'react';
import TweenLite from 'gsap'
import hamburgerSvg from '../../assets/images/hamburger.svg';

export default class HamburgerIcon extends Component {

  onClick() {
    TweenLite.to('.hamburger-svg', 1, {opacity: .2});
  }

  render() {
    return (
      <div className="hamburger-icon" onClick={this.onClick}>
        <a href="#">
          <img src={hamburgerSvg} alt="Hamburger" className="hamburger-svg" />
        </a>
      </div>
    );
  }
}
