import './_index.scss';

import React, {Component} from 'react';
import LinkedList from '../ui-LinkedList';

export default class NavColumn extends Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      className: React.PropTypes.string,
      listlinks: React.PropTypes.array
    };
  }

  render() {
    const {
      title,
      className,
      listlinks
    } = this.props;

    return (
      <div className="nav-column grid__col-12 grid__col-sm-4 grid--order-2-sm">
        <h3 className="title underline">{title}</h3>
        <LinkedList
          items={listlinks}
          className={className}
        />
      </div>
    );
  }
}
