import './index.scss';

import React, { Component } from 'react';


export default class ProjectTextColumns extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        copyLeft,
        copyRight
      }
    } = this.props;

    return (
      <div className="text-columns">
        <div className="grid grid--justify-center">
          <div className="grid__col-12 grid__col-sm-4 copy">
            <div dangerouslySetInnerHTML={ {__html: copyLeft} } />
          </div>
          <div className="grid__col-12 grid__col-sm-4 copy">
            <div dangerouslySetInnerHTML={ {__html: copyRight} } />
          </div>
        </div>
      </div>
    );
  }
}
