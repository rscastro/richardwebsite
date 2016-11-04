import './index.scss';

import React, {Component} from 'react';
import NavColumn from './navColumn.jsx'

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
        navColumns
      }
    } = this.props;

    return (
      <div className="nav grid">
        <div className="grid__col-12">
          <h3>{title}</h3>
        </div>
        { this.renderColumns(navColumns) }
      </div>
    );
  }
}
