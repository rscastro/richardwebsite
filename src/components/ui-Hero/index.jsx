import './index.scss';

import React, { Component } from 'react';


export default class Hero extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        url,
        title
      }
    } = this.props;

    return (
      <div className="hero">
        <h3>Hero</h3>
        <img src={url} alt={title} />
      </div>
    );
  }
}
