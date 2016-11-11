import './index.scss';

const homeData = require('../../assets/data/home-data.json');

import React, { Component } from 'react';
import HomeHero from '../ui-HomeHero';
import Tagline from '../ui-Tagline';


export default class Home extends Component {

  // static get propTypes() {
  //   return {homeData: React.PropTypes.object};
  // }

  render() {

    // const {
    //   homeData: {
    //     homeHero,
    //     tagline
    //   }
    // } = this.props;

    return (
      <div className="home">
        <div className="wrapper">
          <h3 className="title">Home Page</h3>
          <HomeHero data={ homeData.homeHero } />
          <Tagline data={ homeData.tagline } />
        </div>
      </div>
    );
  }
}
