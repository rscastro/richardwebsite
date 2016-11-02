import './index.scss';

import React, { Component } from 'react';
import ImageUrl from '../../assets/images/temp-image.jpg';


export default class Image extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  // Make it so image url gets build from passed in url.!!!!

  render() {
    const {
      data: {
        // url,
        title
      }
    } = this.props;

    return (
      <div className="img-hldr">
        <img src={ImageUrl} alt={title} className="img" />
      </div>
    );
  }
}
