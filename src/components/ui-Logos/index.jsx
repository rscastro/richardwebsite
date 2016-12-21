import './_index.scss';

import React, { Component } from 'react';
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';

export default class logos extends Component {

  render() {
    return (
      <div className="logos">
        <div className="wrapper">
          <div className="nav-bar-inner text-center">
            <a className="logo-type-a" href="/">
              <img ref="logoType" src={LogoType} alt="Martian logo type" className="logo-type" />
            </a>
            <a className="logo-mark-a" href="/">
              <img ref="logoMark" src={LogoMark} alt="Martian logo mark" className="logo-mark" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
