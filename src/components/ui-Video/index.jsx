import './_index.scss';

import React, { Component } from 'react';
import GridLines from '../ui-GridLines';


export default class Video extends Component {

  static get propTypes() {
    return {
      vidUrl: React.PropTypes.string,
      poster: React.PropTypes.string
    };
  }

  // Make it so image url gets build from passed in url.!!!!

  render() {

    const {
      vidUrl,
      poster
    } = this.props;

    return (
      <div className="video-hldr">
        <GridLines />
        <div className="grid">
          <div className="grid__col-12 video">
            <video
              className="video-player"
              controls
              poster={ poster }
            >
              <source src={ vidUrl } type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }
}
