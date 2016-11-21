import './index.scss';

const labsData = require('../../assets/data/labs.json');

import React, { Component } from 'react';
import PageContent from '../ui-PageContent';

export default class Lab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentLab: {}
    }
  }

  componentWillMount() {
    const { labId } = this.props.params;

    this.setState({
      currentLab: this.getCurrentPageId(labId)
    })
  }

  getCurrentPageId(labId) {
    return labsData.labs.labSingles.find( lab =>
      lab.labID === labId
    );
  }

  render() {
    const { currentProject } = this.state;

    return (
      <div className="lab">
        <div className="wrapper">
          <PageContent pageContent={ currentProject } />
        </div>
      </div>
    );
  }
}
