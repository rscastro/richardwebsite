import React, { Component } from 'react';

export default class LogoSvg extends Component {

  static get propTypes() {
    return {
      logoSvgVisible: React.PropTypes.bool
    };
  }

  render() {
    const { logoSvgVisible } = this.props;

    return (
      <div className="logo">
        { logoSvgVisible ?
          <svg className="logo-svg" ref="logoSvg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-24.4 -35.1 109 109" enableBackground="new -24.4 -35.1 109 109">
            <path id="circ" fill="#111111" d="M84.6,19.4c0,30.1-24.4,54.5-54.5,54.5s-54.5-24.4-54.5-54.5c0-30.1,24.4-54.5,54.5-54.5S84.6-10.7,84.6,19.4"/>
            <g transform="translate(0,-4)">
              <path id="c-a2" className="mask" d="M20.9,6.5L3.5,38.9H0L20.9,0V6.5z"/>
              <path id="c-a1" className="reveal" d="M3.5,38.9L3.5,38.9H0l0,0H3.5z"/>
              <path id="c-b2" className="mask" d="M20.9,0l9.2,16.8L28.4,20L20.9,6.5V0z"/>
              <path id="c-b1" className="reveal" d="M20.9,0L20.9,0v6.5l0,0V0z"/>
              <path id="c-c2" className="mask" d="M39.1,6.5L21.7,38.9h-3.5L39.1,0V6.5z"/>
              <path id="c-c1" className="reveal" d="M21.7,38.9L21.7,38.9h-3.5l0,0H21.7z"/>
              <path id="c-d2" className="mask" d="M39.1,0l21.4,38.9h-3.3L39.1,6.5V0z"/>
              <path id="c-d1" className="reveal" d="M39.1,0L39.1,0v6.5l0,0V0z"/>
              <path id="c-e2" className="mask" d="M57.2,38.9H39.8l1.7-3l14.4,0L57.2,38.9z"/>
              <path id="c-e1" className="reveal" d="M57.2,38.9L57.2,38.9l-1.6-3l0,0L57.2,38.9z"/>
            </g>
          </svg>
        : null }
        { (logoSvgVisible === false) ?
          <img ref="logoImg" src="images/logo-icon.svg"/>
        : null }
      </div>
    );
  }
}
