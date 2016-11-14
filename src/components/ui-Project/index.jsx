import './index.scss';

const projectsData = require('../../assets/data/projects-data.json');

import React, { Component } from 'react';
import ProjectHero from '../ui-ProjectHero';
import ProjectIntro from '../ui-ProjectIntro';
import ProjectSectionHeader from '../ui-ProjectSectionHeader';
import ProjectTextColumns from '../ui-ProjectTextColumns';
import Image from '../ui-Image';
import Video from '../ui-Video';
import Carousel from '../ui-Carousel';
import ProjectsGrid from '../ui-ProjectsGrid';

export default class Project extends Component {

  renderProjectComponents(pageContent) {
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
          <ProjectSectionHeader key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'textColumns') {
        return (
          <ProjectTextColumns key={component.type + '-' + index} data={component} />
        );
      } else if (component.type === 'image') {
        return (
          <Image key={component.type + '-' + index} data={component} />
        );
      }
    });
  }

  render() {
    return (
      <div className="project">
        <div className="wrapper">
          { this.renderProjectComponents(projectsData.projects.projectSingles[0].pageContent) }
          <Video data={projectsData.video} />
          <Carousel data={projectsData.carousel} />
          <ProjectsGrid projects={projectsData.projects} />
        </div>
      </div>
    );
  }
}
