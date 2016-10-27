import './index.scss';

import React, {Component} from 'react';

export default class Nav extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        links
      }} = this.props;

    return (
      <div className="nav">
        <ul>
          { this.renderNav(links) }
        </ul>
      </div>
      );
  }

  renderNav(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
            <a href={link.url}>{link.title}</a>
        </li>
      );
    });
  }
}
