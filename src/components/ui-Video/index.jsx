import './_index.scss';

import React, { Component } from 'react';
// import ImageUrl from '../../assets/images/temp-image.jpg';


export default class Video extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  // Make it so image url gets build from passed in url.!!!!

  render() {
    // const {
    //   data: {
    //     url,
    //     title
    //   }
    // } = this.props;

    return (
      <div className="video-hldr">
      <video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" controls>
        Your browser does not support the <code>video</code> element.
      </video>
      </div>
    );
  }
}
