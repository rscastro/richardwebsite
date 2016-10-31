import './index.scss';

import React, { Component } from 'react';
import TweenLite from 'gsap/src/uncompressed/TweenLite.js'
import hamburgerSvg from '../../assets/images/hamburger.svg';

export default class HamburgerIcon extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { menuOpen: false };
  // }

  onClick() {
    // console.log(this.state.menuOpen);
    TweenLite.to('.humburger-svg', 1, {rotation:360});
  }

  render() {
    console.log('TweenLite', TweenLite);
    return (
      <div className="hamburger-icon" onClick={this.onClick}>
        <a href="#">
          <img src={hamburgerSvg} alt="Hamburger" className="hamburger-svg" />
        </a>
      </div>
    );
  }
}
