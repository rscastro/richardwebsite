import './index.scss';

import React, { Component } from 'react';


export default class TextColumns extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        copyLeft,
        copyRight
      }
    } = this.props;

    return (
      <div className="text-columns grid grid--justify-center">
        <div className="grid__col-4 copy">{copyLeft}</div>
        <div className="grid__col-4 copy">{copyRight}</div>
      </div>
    );
  }
}
