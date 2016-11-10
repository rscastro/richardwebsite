import './index.scss';

import React, { Component } from 'react';
import headerImg from '../../assets/images/temp-project-hero.jpg';

const fillStyle = {
  backgroundImage: 'url(' + headerImg + ')'
}

const fillColor =  {
  backgroundColor: '#00aeef',
  opacity: '.5'
}

export default class ProjectHero extends Component {

  static get propTypes() {
    return {data: React.PropTypes.object};
  }

  render() {
    const {
      data: {
        // url,
        copy
      }
    } = this.props;

    return (
      <div className="project-hero" style={ fillStyle }>
        <div className="color-overlay" style={ fillColor }></div>
        <div className="wrapper">
          <div className="grid grid--justify-center copy-hldr">
            <div className="grid__col-8">
              <h2>{copy}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
