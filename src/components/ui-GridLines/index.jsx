import './_index.scss';

import React, { Component } from 'react';

export default class GridLines extends Component {

  static get propTypes() {
    return {
      lineColor: React.PropTypes.string
    };
  }

  render() {
    const { lineColor } = this.props;
    return (
      <div className="grid-lines-hldr">
        <div className="wrapper">
          <div className={ `grid-lines-sm grid ${lineColor}` }>
            <div className="grid__col-6 line-hldr"></div>
            <div className="grid__col-6 line-hldr"></div>
          </div>
          <div className={ `grid-lines-lg grid ${lineColor}` }>
            <div className="grid__col-2 line-hldr"></div>
            <div className="grid__col-2 line-hldr"></div>
            <div className="grid__col-2 line-hldr"></div>
            <div className="grid__col-2 line-hldr"></div>
            <div className="grid__col-2 line-hldr"></div>
            <div className="grid__col-2 line-hldr"></div>
          </div>
        </div>
      </div>
    );
  }
}
