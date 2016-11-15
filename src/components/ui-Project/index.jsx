import './index.scss';

const projectsData = require('../../assets/data/projects.json');

import React, { Component } from 'react';

import ProjectHero from '../ui-ProjectHero';
import ProjectIntro from '../ui-ProjectIntro';
import ProjectSectionHeader from '../ui-ProjectSectionHeader';
import ProjectTextColumns from '../ui-ProjectTextColumns';
import Image from '../ui-Image';
// import Video from '../ui-Video';
// import Carousel from '../ui-Carousel';
// import ProjectsGrid from '../ui-ProjectsGrid';

export default class Project extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentProject: {}
    }
  }

  componentWillMount() {
    const { projectId } = this.props.params;

    this.setState({
      currentProject: this.getCurrentProject(projectId)
    })
  }

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

  getCurrentProject(projectId) {
    return projectsData.projects.projectSingles.find( project =>
      project.projectID === projectId
    );
  }

  render() {
    const { currentProject: { pageContent} } = this.state;

    return (
      <div className="project">
        <div className="wrapper">
          {
            this.renderProjectComponents( pageContent )
          }
          {/* <Video data={projectsData.video} />
          <Carousel data={projectsData.carousel} />
          <ProjectsGrid projects={projectsData.projects} /> */}
        </div>
      </div>
    );
  }
}
