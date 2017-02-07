import './_index.scss';
import React, {Component} from 'react';

import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
const Menu = require('react-burger-menu').elastic;


export default class Nav extends Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div id="nav-hldr" className="nav-hldr">
        <div id="hamburger-icon"  className="hamburger-icon">
        <Menu>
          <a id="home" className="menu-item" href="/">yay</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      </div>
      </div>
    );
  }
}
