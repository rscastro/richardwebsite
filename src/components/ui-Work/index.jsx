import './index.scss';

const workData = require('../../assets/data/work-data.json');

import React, { Component } from 'react';
import ProjectHero from '../ui-ProjectHero';
import ProjectIntro from '../ui-ProjectIntro';
import SectionHeader from '../ui-SectionHeader';
import TextColumns from '../ui-TextColumns';
import Image from '../ui-Image';
import Video from '../ui-Video';
import Carousel from '../ui-Carousel';
import WorkGrid from '../ui-WorkGrid';


console.log('pageContent:', workData.work.projects[0].pageContent);

export default class Work extends Component {

  // let currentProject = 1;

  renderPageComponents(pageContent) {
    return pageContent.map((component, index) => {
      if (component.type === 'projectHero') {
        return (
          <ProjectHero key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'projectIntro') {
        return (
          <ProjectIntro key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'sectionHeader') {
        return (
          <SectionHeader key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'textColumns') {
        return (
          <TextColumns key={component.type + '-' + index} data={component} />
        );
      }
    });
  }

  render() {
    return (
      <div className="work">
        <div className="wrapper">
          
          { this.renderPageComponents(workData.work.projects[0].pageContent) }

          {/* <ProjectHero data={workData.projectHero} />
          <SectionHeader data={workData.sectionHeader1} />
          <ProjectIntro data={workData.work.projects[1]} />
          <SectionHeader data={workData.sectionHeader2} />
          <TextColumns data={workData.textColumns} /> */}
          <Image data={workData.img} />

          <Video data={workData.video} />
          <Carousel data={workData.carousel} />
          <WorkGrid work={workData.work} />
        </div>
      </div>
    );
  }
}
