import './_index.scss';

const labsData = require('../../assets/data/labs.json');

import React, { Component } from 'react';
import PageContent from '../ui-PageContent';
import NavFooter from '../ui-NavFooter';
import Hero from '../ui-Hero';

export default class Lab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentLab: {}
    }
  }

  componentWillMount() {
    const { labId } = this.props.params;

    this.setState({
      currentLab: this.getCurrentPageId(labId)
    })
  }

  getCurrentPageId(labId) {
    return labsData.labs.labSingles.find( lab =>
      lab.labID === labId
    );
  }

  render() {
    const {
      currentLab,
      currentLab: {
        pageHero
      }
    } = this.state;

    return (
      <div className="lab">
        <Hero
          src={ pageHero.src }
          copy={ pageHero.copy }
          projectColor={ currentLab.projectColor }
          headerOverlayOpacity={ pageHero.headerOverlayOpacity || 0.5 }
        />
        <PageContent currentProject={ currentLab } />
        <NavFooter />
      </div>
    );
  }
}
