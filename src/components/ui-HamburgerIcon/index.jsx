import './_index.scss';

import React, { Component } from 'react';

// Alias includes in the webpack.config files
import TweenLite from 'TweenLite';
import TimelineLite from 'TimelineLite';

export default class HamburgerIcon extends Component {

  static get propTypes() {
    return {
      navOpen: React.PropTypes.bool,
      onToggleNav: React.PropTypes.func
    };
  }

  constructor() {
    super();
    this.hamburgerTl = {};
  }

  setupHamburgerAnimation() {
    const duration = .2;
    this.hamburgerTl = new TimelineLite({paused:true});
    this.hamburgerTl
      .to('#l1', duration, {rotation:45, scaleX:.38, x:9, y:0, transformOrigin:'0% 50%'}, 0)
      .to('#l2', duration, {rotation:-45, transformOrigin:'50% 50%'}, 0)
      .to('#l3', duration, {rotation:45, scaleX:.38, x:-9, y:0, transformOrigin:'100% 50%'}, 0)
  }

  componentDidMount() {
    this.setupHamburgerAnimation();
  }

  onClickHandler(evt) {
    evt.preventDefault();

    // Animate the Hamburger
    if (this.props.navOpen) {
      this.hamburgerTl.reverse();
    } else {
      this.hamburgerTl.play();
    }

    this.props.onToggleNav();
  }

  onMouseEnterHandler() {
    if (this.props.navOpen) {
      TweenLite.to('#l2', .2, {scaleX:1.2, transformOrigin:'50% 50%'});
    } else {
      TweenLite.to('#l2', .2, {scaleX:.7, transformOrigin:'50% 50%'});
    }
  }

  onMouseLeaveHandler() {
    TweenLite.to('#l2', .2, {scaleX:1, transformOrigin:'50% 50%'});
  }

  render() {
    return (
      <div className="hamburger-icon">
        <a
          href="#"
          onClick={this.onClickHandler.bind(this)}
          onMouseEnter={this.onMouseEnterHandler.bind(this)}
          onMouseLeave={this.onMouseLeaveHandler.bind(this)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 30" className="hamburger-svg">
            <rect id="l1" y="0" width="48" height="1" fill="#fff" />
            <rect id="l2" y="15" width="48" height="1" fill="#fff" />
            <rect id="l3" y="29" width="48" height="1" fill="#fff" />
          </svg>
        </a>
      </div>
    );
  }
}
