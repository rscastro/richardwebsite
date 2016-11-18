import React, {PropTypes, Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as peopleActions from '../redux-actions/project-actions';
// import PeopleList from './PeopleList';
// import PersonInput from './PersonInput';

export default class WorkGrid extends Component {

  static get propTypes() {
    return {
      projects: React.PropTypes.object
    };
  }

  renderProjectImages(imgs) {
    return imgs.map((img, index) => {
      return (
        <li key={img.title + '-' + index} >
          <img className="client-img" src={img.src} alt={img.title}/>
        </li>
      );
    });
  }

  renderWork(projects) {
    return projects.map((project, index) => {
      return (
        <div key={project.title + '-' + index} className="grid__col-4">
          <p>Title: {project.title}</p>
          <p>Url: {project.url}</p>
          <p>Description: {project.description}</p>
          <p>Client: {project.client}</p>
          <p>Client: {project.launch}</p>
          <ul className="client-imgs">
            { this.renderProjectImages(project.images) }
          </ul>
          <hr />
        </div>
      );
    });
  }

  render() {


    const {
      // people,
      projects: {
        projectSingles
      }
    } = this.props;

    return (
      <div>
        <div className="grid">
          { this.renderProjects(projectSingles) }
        </div>
      </div>
    );
  }
}
