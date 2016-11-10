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

// "aboutInfo": {
//   "weAre": "Martian is a creative development studio in San Francisco",
//   "address1": "Sutter Street",
//   "address2": "San Francisco, California 94109",
//   "phone": "415.263.7383",
//   "email": "info@martiansf.com"
// }
