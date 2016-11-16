import './index.scss';

const projectsData = require('../../assets/data/projects.json');

import React, { Component } from 'react';

import Hero from '../ui-pc-Hero';
import Intro from '../ui-pc-Intro';
import SectionHeader from '../ui-pc-SectionHeader';
import TextColumns from '../ui-pc-TextColumns';
import Image from '../ui-pc-Image';
// import Video from '../ui-pc-Video';
// import Carousel from '../ui-pc-Carousel';
// import ProjectsGrid from '../ui-pc-WorkGrid';

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
      currentProject: this.getCurrentPageId(projectId)
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

  getCurrentPageId(projectId) {
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
            this.renderPageComponents( pageContent )
          }
          {/* <Video data={projectsData.video} />
          <Carousel data={projectsData.carousel} />
          <ProjectsGrid projects={projectsData.projects} /> */}
        </div>
      </div>
    );
  }
}
