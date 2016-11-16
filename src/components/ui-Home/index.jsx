import './index.scss';

const homeData = require('../../assets/data/home.json');

import React, { Component } from 'react';
import HomeHero from '../ui-pc-HomeHero';
import Tagline from '../ui-pc-Tagline';


export default class Home extends Component {
  render() {
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
