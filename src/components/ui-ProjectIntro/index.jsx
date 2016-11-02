import './index.scss';

import React, { Component } from 'react';


export default class ProjectIntro extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        title,
        logo,
        projectIntro
      }
    } = this.props;

    return (
      <div className="project-intro">
        <div className="grid grid--justify-center">
          <div className="grid__col-3 copy">{ <img src={logo} alt={title} /> }</div>
          <div className="grid__col-5 copy">{ projectIntro }</div>
        </div>
      </div>
    );
  }
}
