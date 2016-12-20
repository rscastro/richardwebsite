import React, { Component } from 'react';

import Intro from '../ui-Intro';
import SectionHeader from '../ui-SectionHeader';
import TextColumns from '../ui-TextColumns';
import Image from '../ui-Image';
import Details from '../ui-Details';
import Tagline from '../ui-Tagline';
import WorkGrid from '../ui-WorkGrid';
import TextContact from '../ui-TextContact';
// import Video from '../ui-Video';
// import Carousel from '../ui-Carousel';


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
      if (component.type === 'intro') {
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
      } else if (component.type === 'textContact') {
        return (
          <TextContact
            key={ `${component.type}-${index}` }
            copy={ component.copy }
            contacts={ component.contacts }
          />
        );
      } else if (component.type === 'image') {
        return (
          <Image
            key={ `${component.type}-${index}` }
            size={ component.size }
            images={ component.images }
          />
        );
      } else if (component.type === 'details') {
        return (
          <Details
            key={ `${component.type}-${index}` }
            siteurlLinkTitle={ component.siteurlLinkTitle }
            siteurl={ component.siteurl }
            list1Title={ component.list1Title }
            list1={ component.list1 }
            list2Title={ component.list2Title }
            list2={ component.list2 }
            projectColor={ projectColor }
          />
        );
      } else if (component.type === 'tagline') {
        return (
          <Tagline
            key={ `${component.type}-${index}` }
            title={ component.title }
            className={ component.className }
          />
        );
      } else if (component.type === 'workgrid') {
        return (
          <WorkGrid
            key={ `${component.type}-${index}` }
            id={ currentProject.projectID }
            workgridItems={ component.workgridItems }
          />
        );
      }

      {/*
        <Video data={labsData.video} />
        <Carousel data={labsData.carousel} />
        <WorkGrid labs={labsData.labs} />
      */}
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
