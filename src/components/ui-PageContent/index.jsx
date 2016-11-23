import './index.scss';

import React, { Component } from 'react';

import Hero from '../ui-Hero';
import Intro from '../ui-Intro';
import SectionHeader from '../ui-SectionHeader';
import TextColumns from '../ui-TextColumns';
import Image from '../ui-Image';
import Details from '../ui-Details';
// import Video from '../ui-Video';
// import Carousel from '../ui-Carousel';
// import WorkGrid from '../ui-WorkGrid';


export default class PageContent extends Component {

  static get propTypes() {
    return {
      currentProject: React.PropTypes.object
    };
  }

  renderPageComponents(currentProject) {

    let pageContent = currentProject.pageContent;
    let projectColor = currentProject.projectColor;

    return pageContent.map((component, index) => {
      if (component.type === 'hero') {
        return (
          <Hero
            key={ `${component.type}-${index}` }
            src={ component.src }
            copy={ component.copy }
            projectColor={ projectColor }
          />
        );
      } else if (component.type === 'intro') {
        return (
          <Intro
            key={ `${component.type}-${index}` }
            title={ component.title }
            logo={ component.logo }
            intro={ component.intro }
          />
        );
      } else if (component.type === 'sectionHeader') {
        return (
          <SectionHeader
            key={ `${component.type}-${index}` }
            title={ component.title }
            number={ component.number }
            projectColor={ projectColor }
          />
        );
      } else if (component.type === 'textColumns') {
        return (
          <TextColumns
            key={ `${component.type}-${index}` }
            copyLeft={ component.copyLeft }
            copyRight={ component.copyRight }
          />
        );
      } else if (component.type === 'image') {
        return (
          <Image
            key={ `${component.type}-${index}` }
            size={ component.size }
            src={ component.src }
            title={ component.title }
          />
        );
      } else if (component.type === 'details') {
        return (
          <Details
            key={ `${component.type}-${index}` }
            siteurl={ component.siteurl }
            whatWeDid={ component.whatWeDid }
            credits={ component.credits }
            projectColor={ projectColor }
          />
        );
      }
      {/* <Video data={labsData.video} />
      <Carousel data={labsData.carousel} />
      <WorkGrid labs={labsData.labs} /> */}
    });
  }

  render() {
    const {
      currentProject
    } = this.props;

    return (
      <div className="page-content">
        { this.renderPageComponents( currentProject ) }
      </div>
    );
  }
}