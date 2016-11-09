import './index.scss';

import React, { Component } from 'react';
import clientLogo from '../../assets/images/metagram-logo.png';


export default class ProjectIntro extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        title,
        // logo,
        projectIntro
      }
    } = this.props;

    // Need to figure out how to load images base off the json data
    // const cLogo = '../../assets/images/' + logo;

    return (
      <div className="project-intro">
        <div className="grid grid--justify-center">
          <div className="grid__col-2 image text-center">
            { <img src={clientLogo} alt={title} className="img" /> }
          </div>
          <div className="grid__col-6 copy copy-lg">
            <div dangerouslySetInnerHTML={ {__html: projectIntro} } />
          </div>
        </div>
      </div>
    );
  }
}
