import './index.scss';

const projectsData = require('../../assets/data/projects.json');

import React, { Component } from 'react';

import Hero from '../ui-Hero';
import Intro from '../ui-Intro';
import SectionHeader from '../ui-SectionHeader';
import TextColumns from '../ui-TextColumns';
import Image from '../ui-Image';
// import Video from '../ui-Video';
// import Carousel from '../ui-Carousel';
// import WorkGrid from '../ui-WorkGrid';

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
          <Hero
            key={component.type + '-' + index}
            data={component}
          />
        );
      } else if (component.type === 'intro') {
        return (
          <Intro
            key={component.type + '-' + index}
            data={component}
          />
        );
      } else if (component.type === 'sectionHeader') {
        return (
          <SectionHeader
            key={component.type + '-' + index}
            data={component}
          />
        );
      } else if (component.type === 'textColumns') {
        return (
          <TextColumns
            key={component.type + '-' + index}
            data={component}
          />
        );
      } else if (component.type === 'image') {
        return (
          <Image
            key={ `${component.type}-${index}` }
            size={ component.size }
            src={ component.src }
            title={ component.title }
          />
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
    const { currentProject: { pageContent } } = this.state;

    return (
      <div className="project">
        <div className="wrapper">
          {
            this.renderPageComponents( pageContent )
          }
          {/* <Video data={projectsData.video} />
          <Carousel data={projectsData.carousel} />
          <WorkGrid projects={projectsData.projects} /> */}
        </div>
      </div>
    );
  }
}
