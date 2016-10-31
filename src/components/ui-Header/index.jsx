import './index.scss';

import React, {Component} from 'react';
import HamburgerIcon from '../ui-HamburgerIcon';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h3>Header</h3>
        <HamburgerIcon />
      </div>
    );
  }
}
