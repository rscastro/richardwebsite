import './_index.scss';

import React, { Component } from 'react';

export default class Hero extends Component {

  static get propTypes() {
    return {
      src: React.PropTypes.string, // src to image
      copy: React.PropTypes.string,
      projectColor: React.PropTypes.string
    };
  }

  render() {
    const {
      src,
      copy,
      projectColor
    } = this.props;

    const fillStyle = {
      backgroundImage: 'url(' + src + ')'
    }

    const fillColor =  {
      backgroundColor: '#' + projectColor,
      opacity: '.5'
    }

    return (
      <div className="hero" style={ fillStyle }>
        <div className="color-overlay" style={ fillColor }></div>
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
