import './index.scss';

import React, { Component } from 'react';
import Slider from 'react-slick';


export default class Carousel extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  // Make it so image url gets build from passed in url.!!!!

  render () {
    // const {
      //   data: {
      //     url,
      //     title
      //   }
      // } = this.props;

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
}


// var Slider = require('react-slick');
//
// var SimpleSlider = React.createClass({
//
// });
