import './index.scss';

import React, {Component} from 'react';

export default class Footer extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

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
    const {
      data: {
        copyright,
        footerNav
      }
    } = this.props;

    return (
      <div className="footer">
          <h3>Footer</h3>
          <ul className="footer-nav">
            { this.renderFooterNav(footerNav) }
          </ul>
          <p>{copyright}</p>
      </div>
    );
  }
}
