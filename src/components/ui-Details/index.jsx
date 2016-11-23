import './index.scss';

import React, { Component } from 'react';

export default class Details extends Component {

  static get propTypes() {
    return {
      siteurl: React.PropTypes.string,
      whatWeDid: React.PropTypes.array,
      credits: React.PropTypes.array,
      projectColor: React.PropTypes.string
    };
  }

  render() {
    const {
      siteurl,
      whatWeDid,
      credits,
      projectColor
    } = this.props;

    console.log('whatWeDid:', whatWeDid);
    console.log('credits:', credits);

    const projectLinkColorStyle = {
      color: '#' + projectColor,
      borderTopColor: '#' + projectColor
    }

    return (
      <div className="details">
        <div className="grid grid--justify-center">
          <div className="grid__col-md-2 project-link">
            <h5 className="overline" style={projectLinkColorStyle}>
              <a href={siteurl} target="_blank">Visit the Site</a>
            </h5>
          </div>
          <div className="grid__col-md-2 what-we-did">
            <h5 className="overline">What We Did:</h5>
          </div>
          <div className="grid__col-md-2 credits">
            <h5 className="overline">Twitter Credits:</h5>
          </div>
        </div>
      </div>
    );
  }
}
