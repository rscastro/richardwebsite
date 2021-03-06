import './_index.scss';

import React, { Component } from 'react';
import GridLines from '../ui-GridLines';

export default class ProjectTextColumns extends Component {

  static get propTypes() {
    return {
      copyLeft: React.PropTypes.string,
      copyRight: React.PropTypes.string
    };
  }

  render() {
    const {
      copyLeft,
      copyRight
    } = this.props;

    return (
      <div className="text-columns">
        <GridLines />
        <div className="grid grid--justify-center">
          <div className="grid__col-12 grid__col-sm-5 grid__col-md-4 copy">
            <div dangerouslySetInnerHTML={ {__html: copyLeft} } />
          </div>
          <div className="grid__col-12 grid__col-sm-5 grid__col-md-4 copy">
            <div dangerouslySetInnerHTML={ {__html: copyRight} } />
          </div>
        </div>
      </div>
    );
  }
}
