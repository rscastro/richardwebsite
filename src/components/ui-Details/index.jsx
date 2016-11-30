import './_index.scss';

import React, { Component } from 'react';
import List from '../ui-List';

export default class Details extends Component {

  static get propTypes() {
    return {
      siteurlLinkTitle: React.PropTypes.string,
      siteurl: React.PropTypes.string,
      list1Title: React.PropTypes.string,
      list1: React.PropTypes.array,
      list2Title: React.PropTypes.string,
      list2: React.PropTypes.array,
      projectColor: React.PropTypes.string
    };
  }

  render() {
    const {
      siteurlLinkTitle,
      siteurl,
      list1Title,
      list1,
      list2Title,
      list2,
      projectColor
    } = this.props;

    const projectLinkColorStyle = {
      color: '#' + projectColor,
      borderTopColor: '#' + projectColor
    }

    return (
      <div className="details">
        <div className="grid grid--justify-center">
          <div className="grid__col-sm-3 grid__col-md-2 project-link">
            <h5 className="title overline" style={projectLinkColorStyle}>
              <a href={siteurl} target="_blank">{ siteurlLinkTitle }</a>
            </h5>
          </div>
          <div className="grid__col-sm-3 grid__col-md-2 list1-hldr">
            <h5 className="title overline">{ list1Title }</h5>
            <List items={list1} className={ 'details-list list1-ul' } />
          </div>
          <div className="grid__col-sm-3 grid__col-md-2 list2-hldr">
            <h5 className="title overline">{ list2Title }</h5>
            <List items={list2} className={ 'details-list gray list2-ul' } />
          </div>
        </div>
      </div>
    );
  }
}
