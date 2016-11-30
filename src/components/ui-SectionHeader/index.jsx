import './_index.scss';

import React, { Component } from 'react';


export default class ProjectSectionHeader extends Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      number: React.PropTypes.string,
      projectColor: React.PropTypes.string
    };
  }

  render() {
    const {
      title,
      number,
      projectColor
    } = this.props;

    const titleColorStyle = {
      color: '#' + projectColor,
      borderBottomColor: '#' + projectColor
    }

    return (
      <div className="section-header">
        <div className="wrapper">
          <div className={ number ? 'grid' : 'grid grid--justify-center' }>
            { number ?
              <div className="grid__col-6 grid__col-sm-2 number-hldr">
                <h4 className="nunber-title underline">{number}</h4>
              </div>
            : null }
            <div className="grid__col-xs-12 grid__col-sm-4 title-hldr">
              <h4 className="title underline" style={ titleColorStyle }>{title}</h4>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
