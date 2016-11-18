import './index.scss';

import React, { Component } from 'react';

export default class Hero extends Component {

  static get propTypes() {
    return {
      src: React.PropTypes.string, // src to image
      copy: React.PropTypes.string
    };
  }

  render() {
    const {
      src,
      copy
    } = this.props;

    const fillStyle = {
      backgroundImage: 'url(' + src + ')'
    }

    const fillColor =  {
      backgroundColor: '#00aeef',
      opacity: '.5'
    }

    return (
      <div className="hero" style={ fillStyle }>
        <div className="color-overlay" style={ fillColor }></div>
        <div className="wrapper">
          <div className="grid grid--justify-center copy-hldr">
            <div className="grid__col-8">
              <h2>{copy}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
