import './_index.scss';

import React, { Component } from 'react';
import GridLines from '../ui-GridLines';

export default class Tagline extends Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      className: React.PropTypes.string
    };
  }

  render() {
    const {
      title,
      className
    } = this.props;

    return (
      <div className={ `tagline-hldr${ (typeof className !== 'undefined') ? ' ' + className : '' }` }>
        <GridLines />
        <div className="tagline">
          <GridLines lineColor={'white'}/>
          <div className="wrapper">
            <h3
              className="title"
              dangerouslySetInnerHTML={ {__html: title} }
            />
          </div>
        </div>
      </div>
    );
  }
}
