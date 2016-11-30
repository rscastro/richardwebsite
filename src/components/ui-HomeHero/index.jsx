import './_index.scss';

import React, { Component } from 'react';


export default class HomeHero extends Component {

  static get propTypes() {
    return {
      src: React.PropTypes.string,
      title: React.PropTypes.string
    };
  }

  render() {
    const {
      src,
      title
    } = this.props;

    return (
      <div className="home-hero">
        <h3>Home Hero</h3>
        <img src={src} alt={title} />
      </div>
    );
  }
}
