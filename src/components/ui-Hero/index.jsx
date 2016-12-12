import './_index.scss';

import React, { Component } from 'react';

export default class Hero extends Component {

  static get propTypes() {
    return {
      src: React.PropTypes.string, // src to image
      copy: React.PropTypes.string,
      projectColor: React.PropTypes.string,
      headerOverlayOpacity: React.PropTypes.string
    };
  }

  render() {
    const {
      src,
      copy,
      projectColor,
      headerOverlayOpacity // TODO: Remove headerOverlayOpacity this here and on json, no longer used.
    } = this.props;

    const bgImgStyle = {
      backgroundImage: 'url(' + src + ')',
      backgroundBlendMode: 'multiply',
      opacity: headerOverlayOpacity
    }

    const fillColor =  {
      backgroundColor: '#' + projectColor
    }

    return (
      <div className="hero">
        <div className="hero__color-overlay" style={ fillColor }></div>
        <div className="hero__img" style={ bgImgStyle }></div>
        <div className="wrapper">
          <div className="copy-hldr">
            <div className="grid grid--justify-center">
              <div className="grid__col-12 grid__col-sm-10 grid__col-md-8">
                <h2>{copy}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
