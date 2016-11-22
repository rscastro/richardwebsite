import './index.scss';

const projectsData = require('../../assets/data/projects.json');

import React, { Component } from 'react';
import PageContent from '../ui-PageContent';

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
    const { currentProject } = this.state;

    return (
      <div className="project">
        <PageContent currentProject={ currentProject } />
      </div>
    );
  }
}
