import './index.scss';

import React, { Component } from 'react';
import ImageUrl from '../../assets/images/temp-image.jpg';


export default class Image extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  // Make it so image url gets build from passed in url.!!!!

  // Size options are full, lg, md, sm

  render() {
    const {
      data: {
         size,
        // url,
        title
      }
    } = this.props;

    return (
      <div className="img-hldr">

        {/* Fullwidth */}
        { (size === 'full') ?
          <img src={ImageUrl} alt={title} className="img" />
        : null }

        {/* Large */}
        { (size === 'lg') ?
          <div className="wrapper">
            <div className="grid">
              <div className="grid__col-12">
                <img src={ImageUrl} alt={title} className="img" />
              </div>
            </div>
          </div>
        : null }

        {/* Medium */}
        { (size === 'md') ?
          <div className="wrapper">
            <div className="grid grid--justify-center">
              <div className="grid__col-8">
                <img src={ImageUrl} alt={title} className="img" />
              </div>
            </div>
          </div>
        : null }

        {/* Medium */}
        { (size === 'sm') ?
          <div className="wrapper">
            <div className="grid grid--justify-center">
              <div className="grid__col-4">
                <img src={ImageUrl} alt={title} className="img" />
              </div>
            </div>
          </div>
        : null }

      </div>
    );
  }
}
