import './index.scss';

import React, { Component } from 'react';


export default class HomeHero extends Component {

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
      <div className="home-hero">
        <h3>HomeHero</h3>
        <img src={url} alt={title} />
      </div>
    );
  }
}
