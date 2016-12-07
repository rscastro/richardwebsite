import './_index.scss';
const navData = require('../../assets/data/nav.json');
import React, {Component} from 'react';

import NavLinks from '../ui-NavLinks'
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
import GridLines from '../ui-GridLines';

export default class Nav extends Component {

  render() {
    return (
      <div className="nav-footer-hldr">
        <GridLines />
        <div className="wrapper">
          <div className="nav-footer-bar">
            <div className="grid">
              <div className="grid__col-12 text-center nav-footer-bar-inner">
                <a href="/">
                  <img src={LogoType} alt={navData.title} className="logo-footer-type" />
                </a>
                <a href="/">
                  <img src={LogoMark} alt={navData.title} className="logo-footer-mark" />
                </a>
              </div>
            </div>
          </div>
          <NavLinks navData={ navData } isFooter={ true } />
        </div>
      </div>
    );
  }
}
