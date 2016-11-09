import './index.scss';

import React, { Component } from 'react';


export default class SectionHeader extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        title,
        number
      }
    } = this.props;

    return (
      <div className="section-header">
        <div className="wrapper">
          <div className="grid">
            <div className="grid__col-xs-12 grid__col-sm-2 number">
              <h4 className="title-title underline">{number}</h4>
            </div>
            <div className="grid__col-xs-12 grid__col-sm-4 title-hldr">
              <h4 className="title underline">{title}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
