import './index.scss';

import React, {Component} from 'react';
import NavColumn from './navColumn.jsx'
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
import HamburgerIcon from '../ui-HamburgerIcon';

export default class Nav extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  renderColumns(columns) {
    return columns.map((column, index) => {
      return (
        <NavColumn key={'nav-column-' + index} data={column} />
      );
    });
  }

  render() {
    const {
      data: {
        title,
        aboutInfo,
        navColumns
      }
    } = this.props;

    return (
      <div className="nav-hldr">
        <div className="wrapper">
          <div className="grid">
            <div className="grid__col-4">
            <h2><img src={LogoType} alt={title} className="logo-type" /></h2>
            </div>
            <div className="grid__col-4 text-center">
            <h2><img src={LogoMark} alt={title} className="logo-mark" /></h2>
            </div>
            <div className="grid__col-4 text-right">
            <HamburgerIcon />
            </div>
          </div>
          <div className="grid nav">
            { this.renderColumns(navColumns) }
            <div className="nav-column nav-column-about grid__col-12 grid__col-sm-4">
              <h3 className="title">{aboutInfo.title}</h3>
              <p>{aboutInfo.weAre}</p>
              <p>{aboutInfo.address1}<br/>{aboutInfo.address2}<br/>{aboutInfo.phone}</p>
              <p>!! Social Media icons !!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
