import './_index.scss';

const homeData = require('../../assets/data/home.json');

import React, { Component } from 'react';
import HomeHero from '../ui-HomeHero';
import Tagline from '../ui-Tagline';


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="wrapper">
          <h3 className="title">Home Page</h3>
          <HomeHero
            src={ homeData.homeHero.src }
            title={ homeData.homeHero.title }
          />
          <Tagline
            title={ homeData.tagline.title }
          />
        </div>
      </div>
    );
  }
}
