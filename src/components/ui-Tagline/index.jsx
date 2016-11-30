import './_index.scss';

import React, { Component } from 'react';


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
      <div className="tagline bg-lines-white">
        <div className="wrapper">
          <h3 className="title">{title}</h3>
        </div>
      </div>
    );
  }
}
