import './index.scss';

import React, { Component } from 'react';


export default class ProjectIntro extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        logo,
        projectIntro
      }
    } = this.props;

    return (
      <div className="project-intro grid grid--justify-center">
        <div className="grid__col-4 copy">{logo}</div>
        <div className="grid__col-4 copy">{projectIntro}</div>
      </div>
    );
  }
}
