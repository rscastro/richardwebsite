import './_index.scss';

const homeData = require('../../assets/data/home.json');

import React, { Component } from 'react';
// import HomeHero from '../ui-HomeHero';
// import Tagline from '../ui-Tagline';
import PageContent from '../ui-PageContent';
import NavFooter from '../ui-NavFooter';
// import WorkGrid from '../ui-WorkGrid';


export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <PageContent currentProject={ homeData } />
        <NavFooter />
      </div>
    );
  }
}
