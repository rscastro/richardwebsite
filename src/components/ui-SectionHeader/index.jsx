import './index.scss';

import React, { Component } from 'react';


export default class SectionHeader extends Component {

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
      <div className="section-header">
        <h3>{copy}</h3>
      </div>
    );
  }
}
