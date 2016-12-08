import './_index.scss';

const homeData = require('../../assets/data/home.json');

import React, { Component } from 'react';
import PageContent from '../ui-PageContent';
import NavFooter from '../ui-NavFooter';

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
