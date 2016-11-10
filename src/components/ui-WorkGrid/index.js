import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions-projects/project-actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

class WorkGrid extends Component {

  static get propTypes() {
    return {
      people: PropTypes.array.isRequired,
      actions: PropTypes.object.isRequired,
      work: React.PropTypes.object
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      people: []
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

  renderProjects(work) {
    return work.map((project, index) => {
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
      people,
      work: {
        projects
      }
    } = this.props;

    return (
      <div>
        <div className="grid">
          { this.renderProjects(projects) }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkGrid);
