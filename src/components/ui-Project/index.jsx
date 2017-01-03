import './_index.scss';

const projectsData = require('../../assets/data/projects.json');

import React, { Component } from 'react';
import PageContent from '../ui-PageContent';
import NavFooter from '../ui-NavFooter';
import Hero from '../ui-Hero';
import HeroVideo from '../ui-HeroVideo';
import WorkGrid from '../ui-WorkGrid';

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

  getPageSuggestions(currentProject, typeOfProject) {
    const projectsJson = projectsData.projects.projectSingles;
    const numOfProjects = Object.keys(projectsJson).length
    const pageSuggestions = [];
    const numOfSuggestions = 3;
    const currentProjectIndex = projectsJson.indexOf(currentProject);
    let counter = currentProjectIndex;

    for (let i = 0; i < numOfSuggestions; i++) {
      ++counter
      if (counter >= numOfProjects) { counter = 0; }

      pageSuggestions.push({});
      pageSuggestions[i].type = typeOfProject;
      pageSuggestions[i].title = projectsJson[counter].title;
      pageSuggestions[i].url = '/' + typeOfProject + '/' + projectsJson[counter].projectID;
      pageSuggestions[i].img = projectsJson[counter].gridImg;
      pageSuggestions[i].size = 'sm';
    }
    return pageSuggestions;
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

        { (pageHero.type === 'video') ?
          <HeroVideo
            src={ pageHero.src }
            copy={ pageHero.copy }
            projectColor={ currentProject.projectColor }
            headerOverlayOpacity={ pageHero.headerOverlayOpacity || 0.5 }
          />
        : null }

        { (pageHero.type === 'img') ?
          <Hero
            src={ pageHero.src }
            copy={ pageHero.copy }
            projectColor={ currentProject.projectColor }
            headerOverlayOpacity={ pageHero.headerOverlayOpacity || 0.5 }
          />
        : null }

        <div className="page-content-hldr">
          <PageContent currentProject={ currentProject } />
          <WorkGrid
            id={ currentProject.projectID }
            workgridItems={ this.getPageSuggestions(currentProject, 'work') }
          />
          <NavFooter />
        </div>
      </div>
    );
  }
}
