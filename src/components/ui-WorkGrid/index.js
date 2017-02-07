import './_index.scss';

import React, {PropTypes, Component} from 'react';
import GridLines from '../ui-GridLines';

export default class WorkGrid extends Component {

  static get propTypes() {
    return {
      workgridItems: React.PropTypes.array,
      id: React.PropTypes.string
    };
  }

  renderProjects(items) {
    return items.map((item, index) => {

      let itemGridSize = '';
      switch (item.size) {
      case 'md':
        itemGridSize = 'grid__col-6'
        break;
      case 'sm':
      default:
        itemGridSize = 'grid__col-6 grid__col-sm-4'
      }

      return (
        <div
          key={item.type + '-' + index}
          className={ itemGridSize + ' workgrid__item' }
        >
          <a
            href={item.url}
            className="workgrid__item-link"
          >
            <img src={item.img} alt={item.title} className="workgrid__item-img" />
            <div className="workgrid__item-copy">
              <h3 className="type-title uppercase">{item.type}</h3>
              <div className="title-hldr">
                <h3
                  className="title uppercase"
                  dangerouslySetInnerHTML={ {__html: item.title} }
                />
              </div>
            </div>
          </a>
        </div>
      );
    });
  }

  render() {
    const {
      workgridItems,
      id
    } = this.props;

    return (
      <div className={ id + ' workgrid-hldr' }>
        <GridLines />
        <div className="wrapper">
          <div className="grid">
            { this.renderProjects(workgridItems) }
          </div>
        </div>
      </div>
    );
  }
}
