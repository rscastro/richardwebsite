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
        intro
      }
    } = this.props;

    return (
      <div className="project-intro">
        <div className="grid grid--justify-center">
          <div className="grid__col-2 image text-center">
            { <img src={logo} alt={title} className="img" /> }
          </div>
          <div className="grid__col-6 copy copy-lg">
            <div dangerouslySetInnerHTML={ {__html: intro} } />
          </div>
        </div>
      </div>
    );
  }
}
