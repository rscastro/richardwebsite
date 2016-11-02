import './index.scss';

import React, { Component } from 'react';


export default class Image extends Component {

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
      <div className="img-hldr">
        <img src={url} alt={title} className="img" />
      </div>
    );
  }
}
