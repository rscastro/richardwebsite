import './index.scss';

import React, { Component } from 'react';
import TweenLite from 'gsap'

export default class HamburgerIcon extends Component {

  onClick() {
    TweenLite.to('#l1', .2, {rotation:-45, transformOrigin:'100% 50%'});
    TweenLite.to('#l2', .2, {rotation:45, transformOrigin:'50% 50%'});
    TweenLite.to('#l3', .2, {rotation:-45, transformOrigin:'0% 50%'});
  }

  render() {
    return (
      <div className="hamburger-icon" onClick={this.onClick}>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="hamburger-svg">
            <rect id="l1" y="0" width="32" height="2"/>
            <rect id="l2" y="15" width="32" height="2"/>
            <rect id="l3" y="30" width="32" height="2"/>
          </svg>
        </a>
      </div>
    );
  }
}
