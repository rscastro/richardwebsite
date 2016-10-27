import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions-projects/project-actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

class ProjectsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  render() {
    const {
      people,
      projects: {
        projectDetails
      }
    } = this.props;

    console.log('projects', projectDetails);

    return (
      <div>
        <ul>
          { this.renderProjects(projectDetails) }
        </ul>
        <PersonInput addPerson={this.props.actions.addPerson} />
        <PeopleList people={people} />
      </div>
    );
  }

  renderProjects(projects) {
    return projects.map((project, index) => {
      return (
        <div key={index}>
          <h3>Client: {project.client}</h3>
          <p>Description: {project.description}</p>
          <p>Title: {project.title}</p>
        </div>
      );
    });
  }
}

ProjectsContainer.propTypes = {
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  projects: React.PropTypes.object
};

function mapStateToProps(state, props) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
