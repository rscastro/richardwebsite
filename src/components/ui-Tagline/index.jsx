import './index.scss';

import React, { Component } from 'react';


export default class Tagline extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        copy
      }
    } = this.props;

    return (
      <div className="tagline">
        <h3 className="title">{copy}</h3>
      </div>
    );
  }
}
