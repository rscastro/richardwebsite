import './index.scss';

import React, { Component } from 'react';


export default class ProjectHero extends Component {

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
      <div className="project-hero">
        <h3>Project Hero</h3>
        <img src={url} alt={title} />
      </div>
    );
  }
}
