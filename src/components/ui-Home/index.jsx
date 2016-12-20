import './_index.scss';

const homeData = require('../../assets/data/home.json');

import React, { Component } from 'react';
import PageContent from '../ui-PageContent';
import NavFooter from '../ui-NavFooter';
import HomeHero from '../ui-HomeHero';

export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <HomeHero />
        <div className="page-content-hldr">
          <PageContent currentProject={ homeData } />
          <NavFooter />
        </div>
      </div>
    );
  }
}
