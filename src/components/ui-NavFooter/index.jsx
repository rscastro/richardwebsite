import './index.scss';
const navData = require('../../assets/data/nav.json');
import React, {Component} from 'react';

import NavColumn from '../ui-NavColumn'
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
import SocialMediaIcons from '../ui-SocialMediaIcons';

export default class Nav extends Component {

  renderColumns(columns) {
    return columns.map((column, index) => {
      return (
        <NavColumn
          key={ `nav-column-${index}` }
          title={column.title}
          className={column.className}
          listlinks={column.listlinks}
        />
      );
    });
  }

  render() {
    return (
      <div className="nav-footer-hldr">
        <div className="wrapper">

          <div className="nav-footer-bar">
            <div className="grid">
              <div className="grid__col-12 text-center logo-mark-hldr">
                <img src={LogoType} alt={navData.title} className="logo-footer-type" />
                <img src={LogoMark} alt={navData.title} className="logo-footer-mark" />
              </div>
            </div>
          </div>

          <div className="grid nav-footer-links">
            <div className="nav-column nav-column-about grid__col-12 grid__col-sm-4">
              <h3 className="title underline">{navData.aboutInfo.title}</h3>
              <p>
                {navData.aboutInfo.weAre}<br/>
                <span className="contact">{navData.aboutInfo.phone}</span><br/>
                <span className="contact"><a href={'mailto:' + navData.aboutInfo.email}>{navData.aboutInfo.email}</a></span><br/>
                <span className="addr">{navData.aboutInfo.address1}</span><br/>
                <span className="addr">{navData.aboutInfo.address2}</span><br/>
              </p>
              <SocialMediaIcons />
            </div>
            { this.renderColumns(navData.navColumns) }
          </div>

        </div>
      </div>
    );
  }
}
