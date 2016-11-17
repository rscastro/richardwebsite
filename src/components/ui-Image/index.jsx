import './index.scss';

import React, { Component } from 'react';

export default class Image extends Component {

  static get propTypes() {
    return {
      size: React.PropTypes.string, // Size options are full, lg, md, sm
      src: React.PropTypes.string, // src to image
      title: React.PropTypes.string
    };
  }

  render() {
    const {
      size,
      src,
      title
    } = this.props;

    return (
      <div className="img-hldr">

        {/* Fullwidth */}
        { (size === 'full') ?
          <img src={src} alt={title} className="img" />
        : null }

        {/* Large */}
        { (size === 'lg') ?
          <div className="wrapper">
            <div className="grid">
              <div className="grid__col-12">
                <img src={src} alt={title} className="img" />
              </div>
            </div>
          </div>
        : null }

        {/* Medium */}
        { (size === 'md') ?
          <div className="wrapper">
            <div className="grid grid--justify-center">
              <div className="grid__col-8">
                <img src={src} alt={title} className="img" />
              </div>
            </div>
          </div>
        : null }

        {/* Small */}
        { (size === 'sm') ?
          <div className="wrapper">
            <div className="grid grid--justify-center">
              <div className="grid__col-4">
                <img src={src} alt={title} className="img" />
              </div>
            </div>
          </div>
        : null }

      </div>
    );
  }
}
