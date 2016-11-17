import './index.scss';

const labsData = require('../../assets/data/labs.json');

import React, { Component } from 'react';

import Hero from '../ui-Hero';
import Intro from '../ui-Intro';
import SectionHeader from '../ui-SectionHeader';
import TextColumns from '../ui-TextColumns';
import Image from '../ui-Image';
// import Video from '../ui-Video';
// import Carousel from '../ui-Carousel';
// import WorkGrid from '../ui-WorkGrid';

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

  renderPageComponents(pageContent) {
    return pageContent.map((component, index) => {
      if (component.type === 'hero') {
        return (
          <Hero key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'intro') {
        return (
          <Intro key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'sectionHeader') {
        return (
          <SectionHeader key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'textColumns') {
        return (
          <TextColumns key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'image') {
        return (
          <Image key={component.type + '-' + index} data={component} />
        );
      }
    });
  }

  getCurrentPageId(labId) {
    return labsData.labs.labSingles.find( lab =>
      lab.labID === labId
    );
  }

  render() {
    const { currentLab: { pageContent} } = this.state;

    return (
      <div className="lab">
        <div className="wrapper">
          {
            this.renderPageComponents( pageContent )
          }
          {/* <Video data={labsData.video} />
          <Carousel data={labsData.carousel} />
          <WorkGrid labs={labsData.labs} /> */}
        </div>
      </div>
    );
  }
}
