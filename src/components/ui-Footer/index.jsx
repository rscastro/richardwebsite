import './index.scss';

import React, {Component} from 'react';
const footerData = require('../../assets/data/footer-data.json');

export default class Footer extends Component {

  // static get propTypes() {
  //   return {footerData: React.PropTypes.object};
  // }

  renderFooterNav(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href={link.url}>{link.title}</a>
        </li>
      );
    });
  }

  render() {
    // const {
    //   footerData: {
    //     copyright,
    //     footerNav
    //   }
    // } = this.props;

    // console.log('footerData', footerData);

    return (
      <div className="footer">
        <div className="wrapper">
          <div className="grid">
            <div className="grid__col-12">
              <h3>Footer</h3>
              <ul className="footer-nav">
                { this.renderFooterNav(footerData.footerNav) }
              </ul>
              <p>{footerData.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
