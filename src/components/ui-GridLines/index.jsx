import './_index.scss';

import React, { Component } from 'react';

export default class GridLines extends Component {

  render() {
    return (
      <div className="grid-lines-hldr">
        <div className="wrapper">

          <div className="grid-lines-sm grid">
            <div className="grid__col-6 line-hldr"></div>
            <div className="grid__col-6 line-hldr"></div>
          </div>

          <div className="grid-lines-lg grid">
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
