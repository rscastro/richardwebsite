import './_index.scss';

import React, { Component } from 'react';
import GridLines from '../ui-GridLines';

export default class ProjectIntro extends Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      logo: React.PropTypes.string,
      intro: React.PropTypes.string
    };
  }

  render() {
    const {
      title,
      logo,
      intro
    } = this.props;

    return (
      <div className="project-intro">
        <GridLines />
        <div className="grid grid--justify-center">
          <div className="grid__col-12 grid__col-sm-3 grid__col-md-2 image-hldr text-center">
            { <img src={logo} alt={title} className="img" /> }
          </div>
          <div className="grid__col-12 grid__col-sm-7 grid__col-md-6 copy copy-lg">
            <div dangerouslySetInnerHTML={ {__html: intro} } />
          </div>
        </div>
      </div>
    );
  }
}
