import './_index.scss';

import React, { Component } from 'react';
import GridLines from '../ui-GridLines';

export default class Tagline extends Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string
    };
  }

  render() {
    const {
      title
    } = this.props;

    return (
      <div className="tagline">
        <GridLines lineColor={'white'}/>
        <div className="wrapper">
          <h3 className="title">{title}</h3>
        </div>
      </div>
    );
  }
}
