import './_index.scss';

import React, { Component } from 'react';
import GridLines from '../ui-GridLines';

export default class Image extends Component {

  static get propTypes() {
    return {
      size: React.PropTypes.string, // Size options are full, lg, md, sm
      images: React.PropTypes.array
    };
  }

  renderColumns(imgs) {
    return imgs.map((img, index) => {
      return (
        <div
          className="img-hldr-inner"
          key={ `nav-column-${index}` }
        >
          <img src={img.src} alt={img.title} className="img" />
        </div>
      );
    });
  }

  render() {
    const {
      size,
      images
    } = this.props;

    return (
      <div className="img-hldr">
        <GridLines />

        {/* Fullwidth */}
        { (size === 'full') ?
          this.renderColumns(images)
        : null }

        {/* Large */}
        { (size === 'lg') ?
          <div className="wrapper">
            <div className="grid">
              <div className="grid__col-12">
                { this.renderColumns(images) }
              </div>
            </div>
          </div>
        : null }

        {/* Medium */}
        { (size === 'md') ?
          <div className="wrapper">
            <div className="grid grid--justify-center">
              <div className="grid__col-8">
                { this.renderColumns(images) }
              </div>
            </div>
          </div>
        : null }

        {/* Small */}
        { (size === 'sm') ?
          <div className="wrapper">
            <div className="grid grid--justify-center">
              <div className="grid__col-4">
                { this.renderColumns(images) }
              </div>
            </div>
          </div>
        : null }

      </div>
    );
  }
}
