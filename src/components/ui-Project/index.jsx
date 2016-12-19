import './_index.scss';

const projectsData = require('../../assets/data/projects.json');

import React, { Component } from 'react';
import PageContent from '../ui-PageContent';
import NavFooter from '../ui-NavFooter';
import Hero from '../ui-Hero';

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

  getCurrentPageId(projectId) {
    return projectsData.projects.projectSingles.find( project =>
      project.projectID === projectId
    );
  }

  render() {
    const {
      currentProject,
      currentProject: {
        pageHero
      }
    } = this.state;

    return (
      <div className="project">
        <Hero
          src={ pageHero.src }
          copy={ pageHero.copy }
          projectColor={ currentProject.projectColor }
          headerOverlayOpacity={ pageHero.headerOverlayOpacity || 0.5 }
        />
        <div className="page-content-hldr">
          <PageContent currentProject={ currentProject } />
          <NavFooter />
        </div>
      </div>
    );
  }
}
