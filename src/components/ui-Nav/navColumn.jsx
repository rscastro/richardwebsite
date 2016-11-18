import './navColumn.scss';

import React, {Component} from 'react';
import List from '../ui-List';

export default class NavColumn extends Component {

  static get propTypes() {
    return {
      data: React.PropTypes.object
    };
  }

  render() {
    const {
      data: {
        title,
        className,
        links
      }
    } = this.props;

    return (
      <div className="nav-column grid__col-12 grid__col-sm-4">
        <h3 className="title underline">{title}</h3>
        <List items={links} className={className} />
      </div>
    );
  }
}
