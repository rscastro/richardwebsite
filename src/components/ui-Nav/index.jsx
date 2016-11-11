import './index.scss';
const navData = require('../../assets/data/nav-data.json');

import React, {Component} from 'react';
import NavColumn from './navColumn.jsx'
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
import HamburgerIcon from '../ui-HamburgerIcon';

export default class Nav extends Component {

  // static get propTypes() {
  //   return {navData: React.PropTypes.object};
  // }

  renderColumns(columns) {
    return columns.map((column, index) => {
      return (
        <NavColumn key={'nav-column-' + index} data={column} />
      );
    });
  }

  render() {
    // const {
    //   navData: {
    //     title,
    //     aboutInfo,
    //     navColumns
    //   }
    // } = this.props;

    console.log('title', navData.title);

    return (
      <div className="nav-hldr">
        <div className="wrapper">
          <div className="grid">
            <div className="grid__col-4">
            <h2><img src={LogoType} alt={navData.title} className="logo-type" /></h2>
            </div>
            <div className="grid__col-4 text-center">
            <h2><img src={LogoMark} alt={navData.title} className="logo-mark" /></h2>
            </div>
            <div className="grid__col-4 text-right">
            <HamburgerIcon />
            </div>
          </div>
          <div className="grid nav">
            { this.renderColumns(navData.navColumns) }
            <div className="nav-column nav-column-about grid__col-12 grid__col-sm-4">
              <h3 className="title underline">{navData.aboutInfo.title}</h3>
              <p>{navData.aboutInfo.weAre}</p>
              <p>{navData.aboutInfo.address1}<br/>{navData.aboutInfo.address2}<br/>{navData.aboutInfo.phone}</p>
              <p>!! Social Media icons !!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
