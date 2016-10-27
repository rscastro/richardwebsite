import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions-projects/project-actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

class ProjectsContainer extends Component {

  static get propTypes() {
    return {
      people: PropTypes.array.isRequired,
      actions: PropTypes.object.isRequired,
      projects: React.PropTypes.object
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
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

  render() {
    const {
      people,
      projects: {
        projectDetails
      }
    } = this.props;

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
}


function mapStateToProps(state) {
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
