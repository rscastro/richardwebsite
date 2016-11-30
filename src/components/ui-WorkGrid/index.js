import React, {PropTypes, Component} from 'react';

export default class WorkGrid extends Component {

  static get propTypes() {
    return {
      projects: React.PropTypes.array
    };
  }

  renderProjects(projects) {
    return projects.map((project, index) => {

      let itemGridSize = '';
      switch (project.size) {
      case 'md':
        itemGridSize = 'grid__col-6'
        break;
      case 'sm':
      default:
        itemGridSize = 'grid__col-4'
      }

      return (
        <div
          key={project.type + '-' + index}
          className={ itemGridSize + ' workgrid__item' }
        >
          <a href={project.url}>
            <img src={project.img} alt={project.title} className="workgrid__item-img" />
            <div className="workgrid__item-copy">
              <p>Type: {project.type}</p>
              <p>Title: {project.title}</p>
              <p>Project Url: {project.url}</p>
            </div>
          </a>
        </div>
      );
    });
  }

  render() {
    const {
      projects
    } = this.props;

    return (
      <div className="workgrid-hldr">
        <div className="wrapper">
          <div className="grid">
            { this.renderProjects(projects) }
          </div>
        </div>
      </div>
    );
  }
}
