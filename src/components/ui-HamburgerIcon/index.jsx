import './_index.scss';

import React, { Component } from 'react';

// Alias includes in the webpack.config files
import TweenLite from 'TweenLite';

export default class HamburgerIcon extends Component {

  static get propTypes() {
    return {
      navOpen: React.PropTypes.bool,
      onToggleNav: React.PropTypes.func
    };
  }

  onClickHandler(evt) {
    evt.preventDefault();

    // Animate the Hamburger
    if (this.props.navOpen) {
      TweenLite.to('#l1', .2, {rotation:0, scaleX:1, x:0, y:0, transformOrigin:'0% 50%'});
      TweenLite.to('#l2', .2, {rotation:0, scaleX:1, transformOrigin:'50% 50%'});
      TweenLite.to('#l3', .2, {rotation:0, scaleX:1, x:0, y:0, transformOrigin:'100% 50%'});
    } else {
      TweenLite.to('#l1', .2, {rotation:45, scaleX:.45, x:2, y:1, transformOrigin:'0% 50%'});
      TweenLite.to('#l2', .2, {rotation:-45, scaleX:1.4, transformOrigin:'50% 50%'});
      TweenLite.to('#l3', .2, {rotation:45, scaleX:.45, x:-2, y:-1, transformOrigin:'100% 50%'});
    }

    this.props.onToggleNav();
  }

  onMouseEnterHandler() {
    TweenLite.to('#l2', .2, {scaleX:.7, transformOrigin:'50% 50%'});
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
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="hamburger-svg">
            <rect id="l1" y="0" width="32" height="2" fill="#fff" />
            <rect id="l2" y="15" width="32" height="2" fill="#fff" />
            <rect id="l3" y="30" width="32" height="2" fill="#fff" />
          </svg>
        </a>
      </div>
    );
  }
}
